// Initialize Firebase
var config = {
  apiKey: "AIzaSyCbDmmFRk1lqeMvDKz9mxsxIVDk7qtSBrQ",
  authDomain: "angel-house.firebaseapp.com",
  databaseURL: "https://angel-house.firebaseio.com/",
  projectId: "angel-house",
  storageBucket: "angel-house.appspot.com",
};
firebase.initializeApp(config);

var ref = firebase.database().ref('1RpcoiBhymgKE6fGYQNL4KxQnFSLiTa1LVZF7k5Fr8D8/Sheet1');
var keyValue = 0;

ref.limitToLast(1).on("child_added", function(snapshot) {
  console.log(snapshot.key);
  keyValue = parseInt(snapshot.key)+1;
  document.getElementById("idValue").value = keyValue;
});
/*
function pushData(){
  var nameValue = document.getElementById("nameValue").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var emailAddress = document.getElementById("emailAddress").value;
  var groupMembers = document.getElementById("groupMembers").value;
  var calendar = document.getElementById("calendar").value;
  console.log(calendar);
  var dataRef = database.ref('1RpcoiBhymgKE6fGYQNL4KxQnFSLiTa1LVZF7k5Fr8D8/Sheet1/').push();
  dataRef.set({
    name: nameValue,
    phone: phoneNumber,
    email: emailAddress,
    members: groupMembers,
    calendar: calendar,
  });
}
*/
