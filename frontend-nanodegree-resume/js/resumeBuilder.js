var bio = {
	"name" : "Catherine Bongard",
	"role" : "web designer",
	"contacts" : {
		"mobile" : "605-877-6258",
		"email" : "catherinegbongard@gmail.com",
		"github" : "CatherineBongard",
		"twitter" : "@CB_webdesign",
		"location" : "Rhode Island",	
	},
	"welcomeMessage" : "I am a web developer based in Rhode Island.",
		"skills" : [ "HTML", "Javascript", "jQuery", "CSS", "Wordpress", "Responsive web design", "Object-Oriented Javascript", "AJAX", "HTML5 Canvas", "Photoshop", "Git and github"],
	"bioPic": "images/photo 1.jpg"
}


bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
//Contact info
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts,#footerContacts").append(formattedEmail);
$("#topContacts,#footerContacts").append(formattedGitHub);
$("#topContacts,#footerContacts").append(formattedTwitter);
$("#topContacts,#footerContacts").append(formattedMobile);
$("#topContacts,#footerContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcomeMsg);

	



if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
  var formattedSkill = "";
        for (var i = 0; i < bio.skills.length; i++){
          formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
          $("#skills").append(formattedSkill);
      };
 	 };

 };

bio.display();


//work experience		

var work = {
		"jobs": [
		{
		
			"employer": "Platform Twenty",
			"title": "Web developer and designer",
			"dates": "2014-2015",
			"location": "Cambridge, UK",
			"description": "Designing and coding responsive websites for cilents using wordpress as a platform."
		},
		{
			"employer": "Mayfield school",
			"title": "Head of Science",
			"dates": "2011-2014",
			"location": "Portsmouth, UK",
			"description": "Leading a team of Science teachers and technicians. Teaching Science at high school level. Recording data of all students and analysing."
		},
		{
			"employer": "Miltoncross school",
			"title": "Teacher of Science",
			"dates": "2010-2011",
			"location": "Portsmouth, UK",
			"description": "Teaching Biology, Chemistry and Physics from ages 11-18 years old."
		}
	]
};


work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();


//Projects

var projects = {
  "projects": [
    {
      "title": "HTML Mockup",
      "dates": "November 2014",
      "description": "Using a given mockup for design guidelines, this project focused on creating a website from scratch using HTML and CSS.",
      "images": ["./images/p1.png"]
    },
    {
      "title": "CPET ",
      "dates": "October 2014",
      "description": "website for a school in the UK. The website was designed in photoshop and then used wordpress as a platform to code the website. The website is also responsive.",
      "images": ["./images/CPET.png"]
    }
  ]
}




projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$("project-entry:last").append(formattedProjectTitle);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedImage);

	}
};

projects.display();

//education

var education = {
	"schools": [
		{
			"name": "University of Leicester",
			"url":"http://www.le.ac.uk/",
			"location": "Leicestershire, UK",
			"degree": "BSc",
			"majors": "Biological Science",
			"dates": "2003-2005"
			
		},
		{
			"name": "University of Warwick",
			"url": "http://www2.warwick.ac.uk/",
			"location": "Warwickshire, UK",
			"degree": "PGCE",
			"majors": "Science teaching, secondary school",
			"dates": "2005-2006"
		}		
	],
	"onlineCourses": [
		{
			"title": "Front End Developer Nanodegree",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/nd001"

		}
	]
}






education.display = function() {
 for (school in education.schools) {
 	$("#education").append(HTMLschoolStart);
 	var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
 	$(".education-entry:last").append(formattedschoolName);
 	var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 	$(".education-entry:last").append(formattedschoolDegree);
 	var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 	$(".education-entry:last").append(formattedschoolDates);
 	var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 	$(".education-entry:last").append(formattedschoolLocation);
 	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
 	$(".education-entry:last").append(formattedschoolMajor);

 	

};

	$("#education").append(HTMLonlineClasses);  
	   		for (course in education.onlineCourses) {
		        $("#education").append(HTMLschoolStart);  

				var formattedOnlineName = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
				 $(".education-entry:last").append(formattedOnlineName);

				 var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
				 $(".education-entry:last").append(formattedOnlineTitle);	

				 var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
				 $(".education-entry:last").append(formattedOnlineDate);	

				 var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url).replace("#",education.onlineCourses[course].url);
				 $(".education-entry:last").append(formattedOnlineURL);

			}; // end forloop online courses

};// end educations.display


education.display();




function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
