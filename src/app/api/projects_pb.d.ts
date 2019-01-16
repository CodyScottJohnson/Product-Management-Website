// package: v1
// file: projects.proto

import * as jspb from "google-protobuf";

export class Project extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCompany(): string;
  setCompany(value: string): void;

  getBackground(): string;
  setBackground(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Project.AsObject;
  static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Project;
  static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
}

export namespace Project {
  export type AsObject = {
    id: number,
    company: string,
    background: string,
    image: string,
    title: string,
    description: string,
  }
}

export class CreateRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    api: string,
    project?: Project.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    api: string,
    id: number,
  }
}

export class ReadRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    api: string,
    id: number,
  }
}

export class ReadResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  hasProject(): boolean;
  clearProject(): void;
  getProject(): Project | undefined;
  setProject(value?: Project): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    api: string,
    project?: Project.AsObject,
  }
}

export class ReadAllRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAllRequest): ReadAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAllRequest;
  static deserializeBinaryFromReader(message: ReadAllRequest, reader: jspb.BinaryReader): ReadAllRequest;
}

export namespace ReadAllRequest {
  export type AsObject = {
    api: string,
  }
}

export class ReadAllResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  clearProjectsList(): void;
  getProjectsList(): Array<Project>;
  setProjectsList(value: Array<Project>): void;
  addProjects(value?: Project, index?: number): Project;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAllResponse): ReadAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAllResponse;
  static deserializeBinaryFromReader(message: ReadAllResponse, reader: jspb.BinaryReader): ReadAllResponse;
}

export namespace ReadAllResponse {
  export type AsObject = {
    api: string,
    projectsList: Array<Project.AsObject>,
  }
}

