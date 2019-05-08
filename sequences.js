// Dimensions of sunburst.

//screen size
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 75, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  "asia": "#5687d1",
  "africa": "#7b615c",
  "northamerica": "#de783b",
  "SouthAmerica": "#6ab975",
  "europe": "#a173d1",
  "Oceania": "#fbd004",
  "China":"#5687d1",
    "VietNam":"#5687d1",
  "SouthKorea":"#5687d1",
  "SaudiArabia":"#5687d1",
  "SouthAfrica": "#7b615c",

"India":"#5687d1",
"U.S.":"#de783b",
"Indonesia":"#5687d1",
"Brazil":"#6ab975",
"Pakistan":"#5687d1",
"Nigeria":"#7b615c",
"Bangladesh":"#5687d1",
"Russia":"#5687d1",
"Mexico":"#de783b",
"Japan":"#5687d1",
"Ethiopia":"#7b615c",
"Philippines":"#5687d1",
"Egypt":"#7b615c",
"Viet Nam":"#5687d1",
"DR Congo":"#7b615c",
"Turkey":"#5687d1",
"Iran":"#5687d1",
"Germany":"#a173d1",
"Thailand":"#5687d1",
"U.K.":"#a173d1",
"France":"#a173d1",
"Tanzania":"#7b615c",
"Italy":"#a173d1",
"South Africa":"#7b615c",
"Myanmar":"#5687d1",
"Kenya":"#7b615c",
"South Korea":"#5687d1",
"Colombia":"#6ab975",
"Spain":"#a173d1",
"Uganda":"#7b615c",
"Argentina":"#6ab975",
"Ukraine":"#a173d1",
"Algeria":"#7b615c",
"Sudan":"#7b615c",
"Iraq":"#5687d1",
"Poland":"#a173d1",
"Canada":"#de783b",
"Afghanistan":"#5687d1",
"Morocco":"#7b615c",
"Saudi Arabia":"#5687d1",
"Peru":"#6ab975",
"Uzbekistan":"#5687d1",
"Venezuela":"#6ab975",
"Malaysia":"#5687d1",
"Angola":"#7b615c",
"Mozambique":"#7b615c",
"Ghana":"#7b615c",
"Nepal":"#5687d1",
"Yemen":"#5687d1",
"Madagascar":"#7b615c",
"North Korea":"#5687d1",
"Côte d'Ivoire":"#7b615c",
"Cameroon":"#7b615c",
"Australia":"#bbbbbb",
"Taiwan":"#5687d1",
"Niger":"#7b615c",
"Sri Lanka":"#5687d1",
"Burkina Faso":"#7b615c",
"Malawi":"#7b615c",
"Mali":"#7b615c",
"Romania":"#a173d1",
"Kazakhstan":"#5687d1",
"Syria":"#5687d1",
"Chile":"#6ab975",
"Zambia":"#7b615c",
"Guatemala":"#de783b",
"Zimbabwe":"#7b615c",
"Netherlands":"#a173d1",
"Ecuador":"#6ab975",
"Senegal":"#7b615c",
"Cambodia":"#5687d1",
"Chad":"#7b615c",
"Somalia":"#7b615c",
"DRCongo":"#7b615c",

"Guinea":"#7b615c",
"South Sudan":"#7b615c",
"Rwanda":"#7b615c",
"Benin":"#7b615c",
"Tunisia":"#7b615c",
"Burundi":"#7b615c",
"Belgium":"#a173d1",
"Cuba":"#de783b",
"Bolivia":"#6ab975",
"Haiti":"#de783b",
"Greece":"#a173d1",
"Dominican Republic":"#de783b",
"Czech Republic":"#a173d1",
"Portugal":"#a173d1",
"Jordan":"#5687d1",
"Sweden":"#a173d1",
"Azerbaijan":"#a173d1",
"United Arab Emirates":"#5687d1",
"Hungary":"#a173d1",
"Honduras":"#de783b",
"Belarus":"#a173d1",
"Tajikistan":"#5687d1",
"Austria":"#a173d1",
"Serbia":"#a173d1",
"Switzerland":"#a173d1",
"Papua New Guinea":"#bbbbbb",
"Israel":"#5687d1",
"Togo":"#7b615c",
"Sierra Leone":"#7b615c",
"Hong Kong":"#5687d1",
"Laos":"#5687d1",
"Bulgaria":"#a173d1",
"Paraguay":"#6ab975",
"Libya":"#7b615c",
"El Salvador":"#de783b",
"Nicaragua":"#de783b",
"Kyrgyzstan":"#5687d1",
"Lebanon":"#5687d1",
"Turkmenistan":"#5687d1",
"Singapore":"#5687d1",
"Denmark":"#a173d1",
"Finland":"#a173d1",
"Congo":"#7b615c",
"Slovakia":"#a173d1",
"Norway":"#a173d1",
"Eritrea":"#7b615c",
"State of Palestine":"#5687d1",
"Oman":"#5687d1",
"Costa Rica":"#de783b",
"Liberia":"#7b615c",
"Ireland":"#a173d1",
"Central African Republic":"#7b615c",
"New Zealand":"#bbbbbb",
"Mauritania":"#7b615c",
"Kuwait":"#5687d1",
"Panama":"#de783b",
"Croatia":"#a173d1",
"Moldova":"#a173d1",
"Georgia":"#a173d1",
"Puerto Rico":"#de783b",
"Bosnia & Herzegovina":"#a173d1",
"Uruguay":"#6ab975",
"Mongolia":"#5687d1",
"Albania":"#a173d1",
"Armenia":"#a173d1",
"Jamaica":"#de783b",
"Lithuania":"#a173d1",
"Qatar":"#5687d1",
"Namibia":"#7b615c",
"Botswana":"#7b615c",
"Lesotho":"#7b615c",
"Gambia":"#7b615c",
"Gabon":"#7b615c",
"TFYR Macedonia":"#a173d1",
"Slovenia":"#a173d1",
"Guinea-Bissau":"#7b615c",
"Latvia":"#a173d1",
"Bahrain":"#5687d1",
"Swaziland":"#7b615c",
"Trinidad and Tobago":"#de783b",
"Equatorial Guinea":"#7b615c",
"Timor-Leste":"#5687d1",
"Estonia":"#a173d1",
"Mauritius":"#7b615c",
"Cyprus":"#a173d1",
"Djibouti":"#7b615c",
"Fiji":"#bbbbbb",
"Réunion":"#7b615c",
"Comoros":"#7b615c",
"Bhutan":"#5687d1",
"Guyana":"#6ab975",
"Macao":"#5687d1",
"Solomon Islands":"#bbbbbb",
"Montenegro":"#a173d1",
"Luxembourg":"#a173d1",
"Western Sahara":"#7b615c",
"Suriname":"#6ab975",
"Cabo Verde":"#7b615c",
"Maldives":"#5687d1",
"Guadeloupe":"#de783b",
"Brunei ":"#5687d1",
"Malta":"#a173d1",
"Bahamas":"#de783b",
"Belize":"#de783b",
"Martinique":"#de783b",
"Iceland":"#a173d1",
"French Guiana":"#6ab975",
"French Polynesia":"#bbbbbb",
"Vanuatu":"#bbbbbb",
"Barbados":"#de783b",
"New Caledonia":"#6ab975",
"Mayotte":"#7b615c",
"Sao Tome & Principe":"#7b615c",
"Samoa":"#bbbbbb",
"Saint Lucia":"#de783b",
"Guam":"#bbbbbb",
"Channel Islands":"#a173d1",

"Kiribati":"#bbbbbb",
"St. Vincent & Grenadines":"#de783b",
"Tonga":"#bbbbbb",
"Grenada":"#de783b",
"Micronesia":"#bbbbbb",
"Aruba":"#6ab975",
"U.S. Virgin Islands":"#de783b",
"Antigua and Barbuda":"#de783b",
"Seychelles":"#7b615c",
"Isle of Man":"#a173d1",
"Andorra":"#a173d1",
"Dominica":"#de783b",
"Greenland":"#de783b",
"Marshall Islands":"#bbbbbb",
"Monaco":"#a173d1",
"Liechtenstein":"#a173d1",

"San Marino":"#a173d1",
"Palau":"#bbbbbb",

"Tuvalu":"#bbbbbb",
"Nauru":"#bbbbbb"


};

// Total size of all segments; we set this later, after loading the data.


var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	
	//part of a circle =arc
var partition = d3.partition()
    .size([2 * Math.PI, radius * radius]);

var arc = d3.arc()
    .startAngle(function(d) { return d.x0; })
    .endAngle(function(d) { return d.x1; })
    .innerRadius(function(d) { return Math.sqrt(d.y0); })
    .outerRadius(function(d) { return Math.sqrt(d.y1); });

// Use d3.text and d3.csvParseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("2019Countries.csv", function(text) {
  var csv = d3.csvParseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // Turn the data into a d3 hierarchy and calculate the sums.
  var root = d3.hierarchy(json)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });
  
  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition(root).descendants()
      .filter(function(d) {
          return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.data.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.datum().value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = d.ancestors().reverse();
  sequenceArray.shift(); // remove root node from the array
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .on("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var trail = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.data.name + d.depth; });

  // Remove exiting nodes.
  trail.exit().remove();

  // Add breadcrumb and label for entering nodes.
  var entering = trail.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.data.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.data.name; });

  // Merge enter and update selections; set position for all nodes.
  entering.merge(trail).attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}













// Mapping of step names to colors.
var mylegend = {
  "Asia": "#5687d1",
  "Africa": "#7b615c",
  "North America": "#de783b",
  "South America": "#6ab975",
  "Europe": "#a173d1",
  "Oceania": "#fbd004"
 


}





















function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 100, h: 70, s: 3, r: 5
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(mylegend).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(mylegend))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. 


//The second column is a count of how often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};
