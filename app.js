function check(){
    var score = 0
    //q 1
    var right_answer_1 = document.getElementById('q1-a1');
    var q1_answer_2 = document.getElementById("q1-a2");
    var q1_answer_3 = document.getElementById("q1-a3");
    var q1_answer_4 = document.getElementById("q1-a4");
    if (right_answer_1.checked == true) {
        score++
        alert("CORRECT")
    }
    else if(right_answer_1.checked != false){
        alert("INCORRECT")
    }
    else{
        alert("NOT DONE!")
    }

    //Q 2
    var right_answer_2 = document.getElementById('q2-a1');
    var q2_answer_2 = document.getElementById("q2-a2");
    var q2_answer_3 = document.getElementById("q2-a3");
    var q2_answer_4 = document.getElementById("q2-a4");
    if (right_answer_2.checked == true) {
        score++
        alert("CORRECT")
    }
    else if(right_answer_2.checked != false){
        alert("INCORRECT")
    }
    else{
        alert("NOT DONE!")
    }


    //Q 3
    var right_answer_3 = document.getElementById('q3-a4');
    var q3_answer_2 = document.getElementById("q3-a2");
    var q3_answer_3 = document.getElementById("q3-a3");
    var q3_answer_4 = document.getElementById("q3-a4");
    if (right_answer_3.checked == true) {
        score++
        alert("CORRECT!")
    }
    else if(right_answer_3.checked != false){
        alert("INCORRECT")
    }
    else{
        alert("NOT DONE")
    }

    //Q 4
    var right_answer_4 = document.getElementById('q4-a2');
    var q4_answer_2 = document.getElementById("q4-a2");
    var q4_answer_3 = document.getElementById("q4-a3");
    var q4_answer_4 = document.getElementById("q4-a4");
    if (right_answer_4.checked == true) {
        score++
        alert("CORRECT!")
    }
    else if(right_answer_4.checked != false){
        alert("INCORRECT")
    }
    else{
        alert("NOT DONE")
    }


    //Q 5
    var right_answer_5 = document.getElementById('q5-a3');
    var q5_answer_2 = document.getElementById("q5-a2");
    var q5_answer_3 = document.getElementById("q5-a3");
    var q5_answer_4 = document.getElementById("q5-a4");
    if (right_answer_5.checked == true) {
        score++
        alert("CORRECT!")
    }
    else if(right_answer_5.checked != false){
        alert("INCORRECT")
    }
    else{
        alert("NOT DONE")
    }




    //Q 6
    var right_answer_6 = document.getElementById('q6-a4');
    var q6_answer_2 = document.getElementById("q6-a2");
    var q6_answer_3 = document.getElementById("q6-a3");
    var q6_answer_4 = document.getElementById("q6-a4");
    if (right_answer_6.checked == true) {
        score++
        alert("CORRECT!")
    }
    else if(right_answer_6.checked != false){
        alert("INCORRECT")
    }
    else{
        alert("NOT DONE")
    }
}