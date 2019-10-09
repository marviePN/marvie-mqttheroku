
var date = new Date();



btnConnect.addEventListener('click',function(e){
  e.preventDefault();
  console.log("Connecting ..");
  var connBroker = document.getElementById("status");
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
  client.on("connect", function(){
      connBroker.value = "Successfully Connected!"
  })

  client.on("message", function (topic,payload) {
    console.log("Recieved topic ( " + topic + ") ; payload ( " + payload +")")
    var table = "<tr><td>"+topic+"</td>"+
               "<td>"+payload+"</td>"+
               "<td>"+date+"</td></tr>"

      $('tbody').append(table);
  })


})




btnDisconnect.addEventListener('click',function(e){
  e.preventDefault();
  console.log("Disconnecting ..");
  var disConnBroker = document.getElementById("status");
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
  client.on("connect", function(){
      disConnBroker.value = "Successfully Disconnected!"
  })



})


btnPublish.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Published')
  var topicPublish = document.getElementById("topics");
  var payload = document.getElementById("payload").value; 
  client.publish(topicPublish.value,payload);
})


btnSubscribe.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Subscribe')
  var topicSubscribe = document.getElementById("topic_s");
  client.subscribe(topicSubscribe.value);
  console.log( " Subscribe topic (" + topicSubscribe.value + ")")
})





