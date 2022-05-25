

//Selecting elements from index.html
let page = document.querySelector(".page");
let pageHeader = document.querySelector(".page-header");
let studentList = document.querySelector(".student-list");
let eachStudent =Array.from( document.querySelectorAll(".contact-item.cf"));
let studentDetails = document.querySelector(".student-details");
let pagination=document.getElementById("pagination");
let ulList=document.getElementById("pageList");


//Set the pages variable
let currentPage = 1;
let studentsPerPage = 10;
let numPages = Math.floor(eachStudent.length/studentsPerPage);
let index;

//Creating the pagination filter
let paginationFilter = function pageFilter (pageNumber) {
	let liList = document.createElement('li');
	let pageLink = document.createElement('a');
	pageLink.setAttribute("href", "#");
	pageLink.innerText=(pageNumber);
	console.log("pagenumber"+pageNumber);
	pageLink.setAttribute("onclick","changePage("+pageNumber+")");
	ulList.appendChild(liList);
	liList.appendChild(pageLink);
   return pagination;	
};

//Finding the number of students
let numberOfStudents = function () {
	let numberOfStudents = eachStudent.length;
    console.log("students"+numberOfStudents);
	return (numberOfStudents);
}


//Hiding  the students
let hideAll = function () {
	for (let i = 0; i < numberOfStudents(); i++) {
		eachStudent[i].style.display = "none";
	}
};

//Function to display 10 students per page
function showStudents (number) {
	for (let i = 0; i < studentsPerPage; i++) {
		index = number * studentsPerPage - studentsPerPage + i;
		eachStudent[index].style.display = "block";
		console.log(index);
	} 
};


//Function to create pages
function createPages () {
	for (let i = 0; i <= numPages; i++) {
		page.appendChild(paginationFilter(i+1));
		let linkText = document.createTextNode(i);
		console.log("link"+linkText);
	}
};

function addElements() {
	
	createPages();
	changePage(1);
}

function changePage (number) {
	console.log("num"+number);
	document.addEventListener( "DOMContentLoaded", hideAll());
	document.addEventListener( "DOMContentLoaded", showStudents(number));
}


window.onload = addElements();



