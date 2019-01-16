import { Injectable } from '@angular/core';
import { ProjectService } from "./api/projects_pb_service";
import { CreateRequest, ReadRequest, ReadAllRequest } from "./api/projects_pb";
import { grpc } from "@improbable-eng/grpc-web"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public ProjectService: ProjectService = new ProjectService()
  public Projects:any
  constructor() {
    console.log("starting service")
    this.GetCompanies()
  }

  GetCompanies() {
    var request = new ReadAllRequest();// ReadRequest.deserializeBinary({Api:'v1',Id:1})
    request.setApi("v1")
    
    grpc.unary(ProjectService.ReadAll, {

      request: request,
      host: "https://localhost:9001",
      onEnd: res => {
        console.log(res)
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
          this.Projects = message.toObject();
        }
      }
    });
    /*
    request.setApi('v1')
    request.setId(1)
    this.ProjectService.read(request, {}, (err, response) => {
      console.log("here")
      console.log(response,err);
    });*/
  }
}
