import {Component} from 'react';
const Consul = require('consul');
const Bluebird = require('bluebird');

class BackgroundConsulRegister extends Component {
    constructor(props) {
      super(props);
        this.serviceName = 'painter';
        this.fromCallback = this.fromCallback.bind(this);
        this.consul = new Consul({ promisify: this.fromCallback });
    }

    componentDidMount() {
      this.consul.agent.service.register({
        name: this.serviceName,
        port: 3000
      }, function(err) {
        if (err) throw err;
      });
      
      // this.consul.agent.check.register({
      //   name: "http",
      //   serviceid: this.serviceName,
      //   http: "http://localhost:3000"
      // }, function(err) {
      //   if (err) throw err;
      // });
    }

    componentWillUnmount() {
      this.consul.agent.service.deregister(this.serviceName, function(err) {
        if (err) throw err;
      });
    }

    fromCallback(fn) {
      return new Bluebird(function(resolve, reject) {
        try {
          return fn(function(err, data, res) {
            if (err) {
              err.res = res;
              return reject(err);
            }
            return resolve([data, res]);
          });
        } catch (err) {
          return reject(err);
        }
      });
    }

    async getEngineUri(key) {
        let uri = "";
        const services = await this.consul.catalog.service.list(function(err, result) {
            if (err) throw err;
        });
        services.forEach(service => {
            console.log(service);
            if (service.id === "engine") {
                uri = service.uri;
            }
        });
        return uri;
    }

    render() {
      return(<div/>);
    }
}
export default BackgroundConsulRegister;