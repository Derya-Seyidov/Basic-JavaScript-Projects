// ---------- TERNARY OPERATOR FUNCTION ----------
function Ride_Function() {
    var Height, Can_ride;

    // Get input value from HTML
    Height = document.getElementById("Height").value;

    // Ternary operator checks height
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

    // Display result
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// ---------- CONSTRUCTOR FUNCTION ----------
function Person(Name, Age, City) {
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_City = City;
}


// ---------- NESTED FUNCTION + DISPLAY ----------
function Display_Person() {

    // Create a new object using constructor
    var Student = new Person("Derya", 29, "Toronto");

    // Nested function
    function Show_Details() {
        return Student.Person_Name + " is " +
               Student.Person_Age + " years old and lives in " +
               Student.Person_City + ".";
    }

    // Display result in HTML
    document.getElementById("Person_Info").innerHTML = Show_Details();
}
