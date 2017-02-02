var N3 = require('./N3.js/N3.js');
var triples = [];
var store = [];
var string = '<http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl> <http://purl.org/dc/terms/title> "Food Growing Methods" ; <http://www.w3.org/2000/01/rdf-schema#comment> "For independence and resource optimization, some or all of the astronauts diet must be grown in-situ. Various forms have been proposed, from greenhouses to hydroponics, but there must also be optimization in the types of food grown to maximize caloric and nutrient output compared to water and energy input." ; <http://data.thespaceplan.com/ontologies/lsi#averageEstInvestmentCost> "0.0(investment cost pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#averageEstTimetoMaturity> "0.0 (time to maturity pulled from children pages)" ; <http://data.thespaceplan.com/ontologies/lsi#commercialStatus> "Research" ; <http://data.thespaceplan.com/ontologies/lsi#relatedIndustriesFields> "Health and Medicine" ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/biological-support> ; <http://data.thespaceplan.com/ontologies/lsi#label> <http://investors.ddns.net:8080/marmotta/ldp/waypaver-lsi/habitation-infrastructure> .';

//function writedata(triples, err) {};

parsedata(string);

function parsedata(string) {
var parser = N3.Parser();
parser.parse(string,

             function (error, triple, prefixes) {
               if (triple) {
               //  console.log(triple.subject, triple.predicate, triple.object, '.');
                   let subject = triple.subject;
                   let predicate = triple.predicate; 
                   let object = triple.object;
                  triples.push([subject, predicate, object]);
                //  console.log(triples);
               } else {
//                 console.log("# That's all, folks!", prefixes)
//                 console.log(triples);
//               writedata(triples, function(err) {
//                  return triples;
               });
             //     return triples;                    
               }
             //     return triples;
             });
}

console.log(store);

function foo(address, fn){
  geocoder.geocode( { 'address': address}, function(results, status) {
     fn(results[0].geometry.location); 
  });
}

foo("address", function(location){
  alert(location); // this is where you get the return value
});


/*
function testingCallbacks(number, callback) {
  console.log('you have passed the number ' + number);
  callback(number);
  console.log('callback has finished running!');
};

testingCallbacks(5, function (num) {
   console.log('in callback');
   console.log('the number you picked was ' + num);
   console.log('leaving callback');
});
*/
