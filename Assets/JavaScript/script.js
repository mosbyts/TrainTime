  // Web app's Firebase configuration
  /*var firebaseConfig = {
    apiKey: "AIzaSyCAScvXSzoSNgX3spM5WkrWwfHwfeHjYgE",
    authDomain: "week-7-firebase-practice.firebaseapp.com",
    databaseURL: "https://week-7-firebase-practice.firebaseio.com",
    projectId: "week-7-firebase-practice",
    storageBucket: "week-7-firebase-practice.appspot.com",
    messagingSenderId: "426251757636",
    appId: "1:426251757636:web:cf654b26ddd64b27207411"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();*/
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCtRAqppqCcGyEFMrlx3CzwDPCcYhSTSeY",
    authDomain: "traintime-43604.firebaseapp.com",
    databaseURL: "https://traintime-43604.firebaseio.com",
    projectId: "traintime-43604",
    storageBucket: "traintime-43604.appspot.com",
    messagingSenderId: "51100514373",
    appId: "1:51100514373:web:38f2981aeb8b5e153f8b2c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#addTrain").on("click", function(event){
      event.preventDefault();
      
      var trainName = $("#trainName").val();
      var trainDestination = $("#trainDestination").val();
      var trainTime = $("#trainTime").val();
      var trainFrequency = $("#trainFrequency").val();
      
      var trainInfo = {
        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
      };
      
      database.ref().push(trainInfo);
      
      console.log(trainInfo.name);
      console.log(trainInfo.destination);
      console.log(trainInfo.time);
      console.log(trainInfo.frequency);

      var trainName = $("#trainName").val("");
      var trainDestination = $("#trainDestination").val("");
      var trainTime = $("#trainTime").val("");
      var trainFrequency = $("#trainFrequency").val("");
});

database.ref().on("child_added", function(childSnapshot){
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var format = 'hh:mm a';

  var trainTime = childSnapshot.val().time;
  var trainTimeConversion = moment(trainTime, format);
  var trainTimeHTML = moment(trainTimeConversion).format('hh:mm a');

  var trainArrival = moment(trainTimeConversion).toNow('LT');
  var trainArrival2 = moment().diff(moment(trainTimeHTML, "hh:mm"), "LT");
  
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency + " mins"),
    $("<td>").text(trainTimeHTML),
    $("<td>").text(trainArrival2)
  );

  $(".table").append(newRow);
})