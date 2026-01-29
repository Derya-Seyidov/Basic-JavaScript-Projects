// ---------- GLOBAL VARIABLE ----------
var Global_Number = 10;


// ---------- FUNCTION WITH LOCAL VARIABLE + IF STATEMENT ----------
function Check_Number() {

    // Local variable
    var Local_Number = 5;

    // if statement using local & global variable
    if (Local_Number < Global_Number) {
        document.getElementById("If_Output").innerHTML =
            "Local number is smaller than global number.";
    }
}


// ---------- TIME FUNCTION (FROM SLIDES) ----------
function Time_function() {

    var Time = new Date().getHours();
    var Reply;

    // if statement based on time
    if (Time < 12) {
        Reply = "Good morning!";
    }
    else {
        Reply = "Good afternoon or evening!";
    }

    document.getElementById("Time_Output").innerHTML = Reply;
}


// ---------- INTENTIONAL ERROR + DEBUG ----------
function Error_Function() {

    console.log("This function contains an intentional error:");
    console.log(Undefined_Variable); // ❌ intentional error
}

// Call error function so it appears in console
Error_Function();
