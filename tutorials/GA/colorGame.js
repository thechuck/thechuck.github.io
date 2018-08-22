var timer;
var max_time= 10;
var population_size = 20;
var generation = 0;
var interval = 1000; // ms
var expected = Date.now() + interval;
var buglist =[];
var deadbuglist =[];

function newCreature(R, G, B){
  var obj = {};
  obj.R = R;
  obj.G = G;
  obj.B = B;
  timeAlive = 0;
  return obj;
}

init();

function init (){
  for(let i=0; i<population_size; i++){
    var bug = newCreature();
    R = Math.floor(Math.random()*256);
    G= Math.floor(Math.random()*256);
    B = Math.floor(Math.random()*256);
    var bug = newCreature(R, G, B);
    makebug(bug, i);
  }
  timer=0;
  generation++;
  document.getElementById('generation').innerHTML = generation.toString();
  setTimeout(step, interval);
}


function step() {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
    if (dt > interval) {
        // something really bad happened. Maybe the browser (tab) was inactive?
        // possibly special handling to avoid futile "catch up" run
    }
    timer++;
    document.getElementById('timer').innerHTML = timer.toString(); // do what is to be done
    expected += interval;
    if(timer < max_time){
    setTimeout(step, Math.max(0, interval - dt)); // take into account drift
  }
  else{
    for( let i = 0; i < population_size; i++){
    bug = document.getElementById('bug' + i);
    bug.remove();
    deadbuglist.sort((a,b)=>{
      return a.timeAlive - b.timeAlive
    });
  };
    init();
  }

}

function makebug(bug, i){
  buglist.push(bug);
  var newBug = document.createElement("DIV");
  newBug.className = 'bug';
  newBug.id = 'bug' + i;
  newBug.style.background = 'rgb( ' +bug.R+','+ bug.G+','+bug.B+')';
  newBug.addEventListener('click', KillBug);
document.getElementById("game-area").appendChild(newBug);
}

function KillBug(e){
  var bug = (e.target) ? e.target : e.scrElement;
  bug.timeAlive = timer;
  deadbuglist.push(bug);
  bug.className += 'dead';
}

function breed(){

}
