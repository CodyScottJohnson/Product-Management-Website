
import { Component, OnInit } from "@angular/core";
import * as d3 from "d3";


@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  private width = 1000;
  private height = 1000;
  private colorScale = ["#EA212D", "#39A5CC", "#E8A248","#E8A248", "#E7247B", "#E7247B"];
  private companies = [
    {
      company:"Adobe",
      logo: "Adobe.png",
      color:"#EA212D",
      importance:10
    },
    {
      company:"Disney",
      logo: "Disney.png",
      color:"#39A5CC",
      importance:7
    },
    {
      company:"Amazon",
      logo: "Amazon.png",
      color:"#E8A248",
      importance:6
    },
    {
      company:"Lucid",
      logo: "Lucid.png",
      color:"#FC8183",
      importance:4
    },
    {
      company:"Pluralsight",
      logo: "Pluralsight.png",
      no_padding:true,
      color:"#E7237E",
      importance:5
    },
    {
      company:"Microsoft",
      logo: "",
      color:"#575352",
      importance:4
    },
    {
      company:"Tesla",
      logo: "",
      color:"#FFFFFF",
      importance:4
    },
    {
      company:"LandsEnd",
      logo: "",
      color:"#FFFFFF",
      importance:3
    }
  ]
  private xCenter = [300];
  private yCenter = [250];
  private numNodes = 6;
  private nodes: any = d3.range(this.numNodes).map((d, i) =>{
    return {
      radius: Math.random() * 50,
      color: this.colorScale[i]
    };
  });
  private root:any=this.nodes[0];
  private simulation: any;

  constructor() {}

  ngOnInit() {
    var that = this;
    that.root.fixed = true;
    this.simulation = d3
      .forceSimulation(this.companies)
      .force("charge", d3.forceManyBody().strength(5))
      .force(
        "x",
        d3.forceX().x(function(d: any) {
          return that.xCenter[0];
        })
      )
      .force(
        "y",
        d3.forceY().y(function(d: any) {
          return that.yCenter[0];
        })
      )
      .force(
        "collision",
        d3.forceCollide().radius(function(d: any) {
          if(!d.radius){
            d.radius = d.importance*12;
          }
          return d.radius;
        })
      )
      .on("tick", that.ticked);
      d3.select('svg').on("mousemove", function() {
        that.root.px = d3.event.pageX;
        that.root.py = d3.event.pageY;
        that.simulation.restart();
    });
     
  }
  public ticked = () => {
    var that = this;
    var u: any = d3
      .select("svg g")
      .selectAll("circle")
      .data(this.companies);
      u.on("mouseover", function(d) {
        //d.radius = 200
        d3.select(this).attr("r", d.radius).style("opacity", "1");
      
       
      })                  
      .on("mouseout", function(d) {
        d.radius = d.importance * 12;
        d3.select(this).attr("r", d.radius).style("opacity", ".8");
       
      });
    u.enter()
      .append("circle")
      .attr("r", function(d: any) {
        d.radius = d.importance * 12;
        return d.radius;
      })
      .style("fill", function(d: any) {
        return d.color;
      })
      .style("opacity", .7)
      .style("stroke-width", "1px")
      .merge(u)
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });

    var v: any = d3
      .select("svg g")
      .selectAll(".image")
      .data(this.companies);
    v.enter().append("svg:image")
      .attr('x', function(d: any){
        
        return d.x
      })
      .attr('y',function(d: any){
        return d.y + d.importance*12;
      })
      .attr('class',"image")
      .attr('width',  function(d: any){
        if(d.no_padding){
          return d.radius*2;
        }
        return d.radius*1.5;
      })
      .attr("xlink:href", function(d: any){
        return "/assets/img/companies/"+d.logo
      })
      .merge(v)
      .attr("x", function(d) {
        if(d.no_padding){
          return d.x - (d.radius*2)/2;
        }
        return d.x - (d.radius*1.5)/2;
      })
      .attr("y", function(d) {
        if(d.no_padding){
          return d.y - (d.radius*2)/2;
        }
        return d.y-  (d.radius*1.5)/2;
      }); 
    v.exit().remove();
    u.exit().remove();
  };
  public collide(node) {
    var r = node.radius + 16,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
    return function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== node)) {
        var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = node.radius + quad.point.radius;
        if (l < r) {
          l = (l - r) / l * .5;
          node.x -= x *= l;
          node.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    };
  }
}
