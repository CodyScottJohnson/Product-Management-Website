// package: v1
// file: projects.proto

var projects_pb = require("./projects_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProjectService = (function () {
  function ProjectService() {}
  ProjectService.serviceName = "v1.ProjectService";
  return ProjectService;
}());

ProjectService.Create = {
  methodName: "Create",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: projects_pb.CreateRequest,
  responseType: projects_pb.CreateResponse
};

ProjectService.Read = {
  methodName: "Read",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: projects_pb.ReadRequest,
  responseType: projects_pb.ReadResponse
};

ProjectService.ReadAll = {
  methodName: "ReadAll",
  service: ProjectService,
  requestStream: false,
  responseStream: false,
  requestType: projects_pb.ReadAllRequest,
  responseType: projects_pb.ReadAllResponse
};

exports.ProjectService = ProjectService;

function ProjectServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProjectServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProjectServiceClient.prototype.read = function read(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.Read, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProjectServiceClient.prototype.readAll = function readAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProjectService.ReadAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProjectServiceClient = ProjectServiceClient;

