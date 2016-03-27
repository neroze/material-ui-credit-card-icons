'use strict';

var React = require('react')
var SvgIcon = require('material-ui/lib/svg-icon')

module.exports = function(props)
{
  return(
    React.createElement(SvgIcon, React.__spread({viewBox: "0 0 60 40"},  props), 
      React.createElement("g", null, 
      	React.createElement("path", {fill: "#F3F4F4", d: "M60,35c0,2.75-2.25,5-5,5H5c-2.75,0-5-2.25-5-5V5c0-2.75,2.25-5,5-5h50c2.75,0,5,2.25,5,5V35z"}), 
      	React.createElement("g", null, 
      		React.createElement("g", null, 
      			React.createElement("circle", {fill: "#089EDA", cx: "26.834", cy: "20", r: "10"}), 
      			React.createElement("path", {fill: "#089EDA", d: "M26,10c5,0,9.999,4.478,9.999,10c0,5.521-4.999,10-9.999,10V10z"}), 
      			React.createElement("path", {fill: "#089EDA", d: "M26,30V10h7.167c5,0,9.999,4.478,9.999,10c0,5.521-4.999,10-9.999,10H26z"}), 
      			React.createElement("circle", {fill: "#F3F4F4", cx: "26.834", cy: "20", r: "9.438"}), 
      			React.createElement("g", null, 
      				React.createElement("path", {fill: "#089EDA", d: "M31.438,20c0-2.727-2.438-5.008-4.438-5.609v11.218C29,25.008,31.438,22.729,31.438,20z"})
      			), 
      			React.createElement("g", null, 
      				React.createElement("path", {fill: "#089EDA", d: "M19.562,20c0,2.727,2.438,5.008,4.438,5.609V14.39C22,14.992,19.562,17.272,19.562,20z"})
      			)
      		), 
      		React.createElement("path", {opacity: "0.08", fill: "#FFFFFF", "enable-background": "new    ", d: "M58.531,1.469C59.438,2.375,60,3.625,60,5v15v15" + ' ' +
      			"c0,1.375-0.562,2.625-1.469,3.531C57.624,39.438,56.375,40,55,40H30H5c-1.375,0-2.625-0.562-3.531-1.469L58.531,1.469z"}), 
      		React.createElement("g", null, 
      			React.createElement("path", {fill: "#F7F8F9", d: "M55,1c2.206,0,4,1.794,4,4v30c0,2.206-1.794,4-4,4H5c-2.206,0-4-1.794-4-4V5c0-2.206,1.794-4,4-4H55" + ' ' +
      				 "M55,0H5C2.25,0,0,2.25,0,5v30c0,2.75,2.25,5,5,5h50c2.75,0,5-2.25,5-5V5C60,2.25,57.75,0,55,0L55,0z"})
      		)
      	)
      )
    )
  )
}