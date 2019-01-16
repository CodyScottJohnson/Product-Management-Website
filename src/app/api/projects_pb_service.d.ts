// package: v1
// file: projects.proto

import * as projects_pb from "./projects_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProjectServiceCreate = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof projects_pb.CreateRequest;
  readonly responseType: typeof projects_pb.CreateResponse;
};

type ProjectServiceRead = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof projects_pb.ReadRequest;
  readonly responseType: typeof projects_pb.ReadResponse;
};

type ProjectServiceReadAll = {
  readonly methodName: string;
  readonly service: typeof ProjectService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof projects_pb.ReadAllRequest;
  readonly responseType: typeof projects_pb.ReadAllResponse;
};

export class ProjectService {
  static readonly serviceName: string;
  static readonly Create: ProjectServiceCreate;
  static readonly Read: ProjectServiceRead;
  static readonly ReadAll: ProjectServiceReadAll;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ProjectServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  create(
    requestMessage: projects_pb.CreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: projects_pb.CreateResponse|null) => void
  ): UnaryResponse;
  create(
    requestMessage: projects_pb.CreateRequest,
    callback: (error: ServiceError|null, responseMessage: projects_pb.CreateResponse|null) => void
  ): UnaryResponse;
  read(
    requestMessage: projects_pb.ReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: projects_pb.ReadResponse|null) => void
  ): UnaryResponse;
  read(
    requestMessage: projects_pb.ReadRequest,
    callback: (error: ServiceError|null, responseMessage: projects_pb.ReadResponse|null) => void
  ): UnaryResponse;
  readAll(
    requestMessage: projects_pb.ReadAllRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: projects_pb.ReadAllResponse|null) => void
  ): UnaryResponse;
  readAll(
    requestMessage: projects_pb.ReadAllRequest,
    callback: (error: ServiceError|null, responseMessage: projects_pb.ReadAllResponse|null) => void
  ): UnaryResponse;
}

