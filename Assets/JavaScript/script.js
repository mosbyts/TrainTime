  // Web app's Firebase configuration
  var firebaseConfig = {
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

  $("#addTrain").on("click", function(event){
      event.preventDefault();
  });

  var trainName = $("#trainName").val().trim();
  var trainDestination = $("#trainDestination").val().trim();
  var trainTime = $("#trainTime").val().trim();
  var trainFrequency = $("#trainFrequency").val().trim();

  var trainInfo = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
  };

  database.ref().push(trainInfo);