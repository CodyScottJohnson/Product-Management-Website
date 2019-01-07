
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
  private colorScale = ["#EA212D", "#39A5CC", "#E8A248", "#E8A248", "#E7247B", "#E7247B"];
  private companies = [
    {
      company: "Adobe",
      logo: "Adobe.png",
      color: "#EA212D",
      importance: 10
    },
    {
      company: "Disney",
      logo: "Disney.png",
      color: "#39A5CC",
      importance: 7
    },
    {
      company: "Amazon",
      logo: "Amazon.png",
      color: "#E8A248",
      importance: 6
    },
    {
      company: "Lucid",
      logo: "Lucid.png",
      color: "#FC8183",
      importance: 4
    },
    {
      company: "Pluralsight",
      logo: "Pluralsight.png",
      //no_padding: true,
      color: "#E7237E",
      importance: 5
    },
    {
      company: "Microsoft",
      logo: "Lucid.png",
      color: "#575352",
      importance: 4
    },
    {
      company: "Tesla",
      logo: "Lucid.png",
      color: "#FFFFFF",
      importance: 4
    },
    {
      company: "LandsEnd",
      logo: "Lucid.png",
      color: "#FFFFFF",
      importance: 3
    }
  ]
  private xCenter = [300];
  private yCenter = [250];
  private numNodes = 6;
  private nodes: any = d3.range(this.numNodes).map((d, i) => {
    return {
      radius: Math.random() * 50,
      color: this.colorScale[i]
    };
  });
  private root: any = this.nodes[0];
  private simulation: any;

  constructor() { }

  ngOnInit() {
    var that = this;
    that.root.fixed = true;
    this.simulation = d3
      .forceSimulation(this.companies)
      //.force("gravity", .2)
      .force("charge", d3.forceManyBody().strength(500))
      .force("gravity", d3.forceManyBody(300))
      .force(
        "x",
        d3.forceX().x(function (d: any) {
          return that.xCenter[0];
        })
      )
      .force(
        "y",
        d3.forceY().y(function (d: any) {
          return that.yCenter[0];
        })
      )
      .force(
        "collision",
        d3.forceCollide().radius(function (d: any) {
          if (!d.radius) {
            d.radius = d.importance * 12;
          }
          return d.radius;
        })
      )
      .on("tick", that.ticked);


  }
  public ticked = () => {
    var that = this;
    var node: any = d3.select("svg g").selectAll("g")
      .data(this.companies)
      .enter().append("g").call(d3.drag()
        .on("start", that.dragstarted)
        .on("drag", that.dragged)
        .on("end", that.dragended));
    var u: any = d3
      .select("svg g")
      .selectAll("circle")
      .data(this.companies);
    node.on('click', function (d: any) {
      var duration = 500;
      var newRadius: number;
      d3.selectAll('circle')
      .filter(function (d, i) {
        return d.state == "selected";
      })
      .transition().duration(duration)
      .tween('radius', function (d) {
        var selected = d3.select(this);
        var i = d3.interpolate(d.radius, d.importance * 12);
        return function (t) {
          d.radius = i(t);
          selected.attr('r', function (d) { return d.importance * 12; });
          that.simulation.nodes(that.companies)
        }
      });
      d3.selectAll('image')
        .filter(function (d, i) {
          if(d.state == "selected"){
            d.state = "unselected"
            return true;
          }
          return false;
          
        })
        .transition().duration(0)
        .attr('width', function (d: any) {
          return d.importance * 12 * 1.5;
        })
        .attr('height', function (d: any) {

          return d.importance * 12 * 1.5;
        })
        .attr('x', function (d: any) {

          return d.x - (d.importance * 12 * 1.5) / 2;
        })
        .attr('y', function (d: any) {
          return d.y - (d.importance * 12 * 1.5) / 2;
        });
      if (d.state == "selected") {
        d.state = "deselected";
        newRadius = d.importance * 12;
      } else {
        newRadius = 150;
        d.state = "selected"
      }
      var circle = d3.select(this).select("circle")
      var image = d3.select(this).select("image")
     
        
      circle
        .transition().duration(duration)
        .tween('radius', function (d) {
          var selected = d3.select(this);
          var i = d3.interpolate(d.radius, newRadius);
          return function (t: any) {
            d.radius = i(t);
            selected.attr('r', function (d) { return d.radius; });
            that.simulation.nodes(that.companies)
          }
        });

      //circle.attr("r", d.radius);
      image
        .transition().duration(duration)
        .attr('width', function (d: any) {
          return newRadius * 1.5;
        })
        .attr('height', function (d: any) {

          return newRadius * 1.5;
        })
        .attr('x', function (d: any) {

          return d.x - (newRadius * 1.5) / 2;
        })
        .attr('y', function (d: any) {
          return d.y - (newRadius * 1.5) / 2;
        })
        that.simulation.alpha(1).restart();
    })
    node.on("mouseover", function (d) {
      //d.radius = 200
      d.radius = d.radius + 5;
      var circle = d3.select(this).select("circle")
      var image = d3.select(this).select("image")
      circle.attr("r", d.radius).style("opacity", "1");
      image.attr('width', function (d: any) {
        return d.radius * 1.5;
      })
      .attr('height', function (d: any) {

        return d.radius * 1.5;
      })
      .attr('x', function (d: any) {

        return d.x - (d.radius * 1.5) / 2;
      })
        .attr('y', function (d: any) {
          return d.y - (d.radius * 1.5) / 2;
        })
      // var forceCollide = that.simulation.force("collide"); 
      //forceCollide = d.radius+30;
      //that.simulation.alpha(.1).restart();
      that.switchRadius(d.radius + 30);
    })
      .on("mouseout", function (d) {
        d.radius = d.radius - 5;
        var circle = d3.select(this).select("circle")
        var image = d3.select(this).select("image")
        circle.attr("r", d.radius).style("opacity", ".8");
        image.attr('width', function (d: any) {
          return d.radius * 1.5;
        })
        .attr('height', function (d: any) {

          return d.radius * 1.5;
        })
        .attr('x', function (d: any) {

          return d.x - (d.radius * 1.5) / 2;
        })
          .attr('y', function (d: any) {
            return d.y - (d.radius * 1.5) / 2;
          })
      });
    node
      .append("circle")
      .attr("r", function (d: any) {
        d.radius = d.importance * 12;
        return d.radius;
      })
      .style("fill", function (d: any) {
        return d.color;
      })
      .style("opacity", .7)
      .style("stroke-width", "1px")
      .merge(u)
      .attr("cx", function (d) {

        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
    var v: any = d3
      .select("svg g")
      .selectAll("image")
      .data(this.companies);
    node.append("svg:image")

      .attr('class', "image")
      .attr('width', function (d: any) {
        if (d.no_padding) {
          return d.radius * 2;
        }
        return d.radius * 1.5;
      })
      .attr('height', function (d: any) {

        return d.radius * 1.5;
      })
      .attr("xlink:href", function (d: any) {
        return "/assets/img/companies/" + d.logo
      })
      .attr("href", function (d: any) {
        return "/assets/img/companies/" + d.logo
      })
      .merge(v)
      .attr('x', function (d: any) {

        return d.x - (d.radius * 1.5) / 2;
      })
      .attr('y', function (d: any) {
        return d.y - (d.radius * 1.5) / 2;
      })
      ;
    v.exit().remove();
    u.exit().remove();
  };
  public dragstarted = (d: any) => {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  public dragged = (d: any) => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  public dragended = (d: any) => {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  public switchRadius = (newRadius) => {
    var that = this;
    return function () {
      d3.selectAll('.node')
        .filter(function (d, i) { return i === 5; })
        .transition().duration(1000)
        .tween('radius', function (d) {
          var selected = d3.select(this);
          var i = d3.interpolate(d.radius, newRadius);
          return function (t) {
            d.radius = i(t);
            selected.attr('r', function (d) { return d.radius; });
            that.simulation.nodes(that.companies)
          }
        });
      that.simulation.alpha(1).restart();
    }
  }
}
