name_of_the_guesy_array = [];

function submit()
{
var display_guest_array = [];
for (var j = 1; j <= 4; j++)
{
var name_of_the_guest = document.getElementById("name_of_the_guest +j).value;
var name_of_the_guest = document.getElementById("name_of_the_guest"+j).value;
console.log(name_of_the_guest);
name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_guest_array);

var length_of_the_name_of_guests_array = name_of_guests_array.length;
console.log(length_of_the_name_of_guests_array);
for ( var k = 0; k < length_of_the_name_of_guests_array; k++)
{
    display_guest_array.push("<h4>NAME - " + name_of_guests_array [k] + "</h4>");
    console.log(display_guest_array);
}

console.log(display_guest_array);
document.getElementById("display_name_with_commas").innerHTML = display_guest_array;

var remove_commas = display_guest_array;
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";

function sorting()
{
name_of_the_guest_array.sort = ();
console.log(name_of_the_guest_array);
var_display_guest_array_sorting = [];
var length_of_the_name_of_guests_array = name_of_guests_array.length;
console.log(length_of_the_name_of_guests_array);

for ( var k = 0; k < length_of_the_name_of_guests_array; k++)
{
    display_guest_array_sorting.push("<h4>NAME - " + name_of_guests_array [k] + "</h4>");
    console.log(display_guest_array)_sorting;
}

var remove_commas = display_guest_array_sorting.join (" ");
console.log(remove.commas);

document.getElementById("display_name_without_commas").innerHTML = remove_commas;






)

 var name_1 = document.getElementById("name_of_the_guest_1").value;   
 var name_2 = document.getElementById("name_of_the_guest_2").value;   
 var name_3 = document.getElementById("name_of_the_guest_3").value;   
 var name_4 = document.getElementById("name_of_the_guest_4").value;   

 name_of_the_guest_array.push(name_1);
 name_of_the_guest_array.push(name_2);
 name_of_the_guest_array.push(name_3);
 name_of_the_guest_array.push(name_4);
 console.log(name_of_the_guest_array);
 document.getElementById("display_name").innerHTML =name_of_the_guest_array;
 document.getElementById("submit_button").style.display ="none";
 document.getElementById("sort_button").style.display ="inline-block";
}
function sorting()
{
name_of_the_guest_array.sort();
console.log(name_of_the_guest_array);
document.getElementById("display_name").innerHTML= name_of_the_guest_array;