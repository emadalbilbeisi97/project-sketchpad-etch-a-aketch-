
//call up Element div id container
var container = document.getElementById("container"),
	boxswide = 16,   //wide divs 
 	boxslength = 24;  // length the box


//create function all boxs
function boxsdom() {
	
	// loops  256 boxs mean : 16 * 16  
  for (var i = 1; i<= boxswide * boxswide; i++) {
	//create the element div "DOM"
    var boxthegrid = document.createElement('div');
	  
	 // div inside to container
    container.appendChild(boxthegrid);
	  
	// all size the mean : "16 *25 = 400px wide container"
    container.style.width = (boxswide*boxslength + "px");
	  
	  //width size box mean in box the length 24px
    boxthegrid.style.width = ( boxslength + "px" );
	  
	 	// height size box mean in box the length 24px
    boxthegrid.style.height = ( boxslength + "px" );
	  
	  //style display mean  box inline block 
    boxthegrid.style.display = "inline-block";
	 
	 

	 //event addeventlister type mouseenter work hover on box At moveing mouse
    boxthegrid.addEventListener("mouseenter",function(){
      this.style.backgroundColor = colors ();
    })    
  }; 
};




//function working on the running colors with attribute interior move all color
function colors () {
	
    var myattribute = "#" + Math.random().toString(16).substr(-6);
    return myattribute;
}


// function  working on adump container
function dumps() {
  container.innerHTML = '';
  boxsdom();
};


//call up element button
var click = document.getElementById("mybutton");

//Building  and running event to turn on DOM
document.addEventListener("DOMContentLoaded", function() {
	
  boxsdom(); // call up function divs
	
	
	//Building event on the button click to show massage working on the inside  size box 
  click.addEventListener("click", function() {
   
    boxswide = prompt("Enter the size of the opproprite squares you want to draw ?");
	  
	  // if boxswide more 64 on to turn  box size
    if(boxswide > 64){
		boxswide = 64
	}
    boxslength = 384/boxswide; // vairable boxslength mean 384/16 = 24
    dumps();
  });
});







