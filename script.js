/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

// variables 
//All the JS code to append markup for the search and pagination links is in this file.
//Create pagination links depending on the number of students. We want 10 max per page.
//The first 10 students are shown when the page loads, and each pagination link displays the correct students.
//Clicking on “1” in the pagination links should should show students 1 to 10, etc...
//The correct HTML markup gets appended in the correct place (see filter-example.html) when the page loads.
//Searching is not case sensitive, you can type "Delano" or "delano"
//When the search button is pressed, the results should show up.
//Pagination links should update depending on the number of search results. 


const allStudents = document.querySelectorAll(".student-item");
const allStudentsArray = Array.prototype.slice.call(allStudents);
var page = 1; // list of ten students
const totalLength = allStudents.length;
  
  




const showPage = (allStudents,page) => {

  let decidingPage = (page * 10); //start at index button clicked
  console.log(decidingPage);
  
  var endOfTen = (decidingPage +10); //end at index button clicked
  console.log(endOfTen);
  
 //picks the students that are to be shown
  if(decidingPage<=10){
    console.log(decidingPage);
   var newArray =allStudentsArray.slice(0,10);
    
  }else if(decidingPage<=20){
    var newArray =allStudentsArray.slice(10,20);
  }else{
    var newArray = allStudentsArray.slice(decidingPage,endOfTen);
  console.log(newArray);
  }
  
  // hides all the students except ten
    for(let i = 0; i < allStudentsArray.length; i++){ 
       if(allStudentsArray[i]<=10) {
      allStudentsArray[i].style.display = 'block';
    } else{
        allStudentsArray[i].style.display ='none';
    }
  }

    //shows the students that are picked from newArray
    for(let i = 0; i <= newArray.length; i++){ 
    if(newArray[i]){
      newArray[i].style.display = 'block';
    }
  }

}
showPage(allStudents,page);


const appendPageLinks = (allStudentsArray) => {
  students = allStudentsArray.length;
  console.log(students);
  let howManyPages = Math.ceil(students / 10);
  console.log(howManyPages);
//creates an li 
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', "pagination");
  var endOfPage = document.querySelector('.page')//so button are on page bottom
  endOfPage.appendChild(newDiv);
  var newUl = document.createElement('ul');
  newDiv.appendChild(newUl);
  var newLi = document.createElement('li');
  newLi.setAttribute('a', '');
  newLi.setAttribute('class', 'active');
  
  //loops over the li to see how many pages need to be created
  for(let i = 1; i<howManyPages; i++){
    var newLi = document.createElement('li');
    var setTheTag = document.createElement('a');
    setTheTag.setAttribute('href', '#');
    newLi.appendChild(setTheTag);
    newUl.appendChild(newLi);
    setTheTag.innerHTML = [i];
    console.log(newLi);
      
  }
  //puts the active on whatever element is clicked to display the correct students.
   document.querySelector('.pagination').addEventListener('click', (e) => {
        var anchor = e.target.innerHTML;
        console.log(anchor);
      if(anchor){
         setTheTag.setAttribute('class', 'active');
         setTheTag.setAttribute('class', '');
        showPage(students,anchor);
      }

    });
  
  }

  
  


appendPageLinks(allStudentsArray);


