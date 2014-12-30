
Dynweb:
	Tasks for "mid-term" project status (before christmas)

-- snip snap -- -- snip snap ---- snip snap ---- snip snap ---- snip snap --

	
Combined upload for example 4 to 7 (until christmas)
	
Provide a web application with following requirements:

	
MVC, 
use cookies for session-management
	
URL routing (use the ReSTful style for the urls /../path/resource/id.format?para=meters)
	
persist data (in the filesystem OR in a key/value store (Redis) OR a in a relational db (mysql) ... )
	
use layout and templates


-- snip snap -- -- snip snap ---- snip snap ---- snip snap ---- snip snap --





For example you could train and experiment by updating/improving this given MVC-Demo-App	
	

Change/Modify/Add code to 


// Node server and configuration:

1.) startup server with command-line param for setting the port
	
Hint: use process.argv


// Serving static files

2.) return (other static file formats, not only html/js)
	
e.g.: http://127.0.0.1:8888/public/style/main.css



// POST/GET Parameters

3.) create a login form with a password (POST param!)
	
e.g.: http://127.0.0.1:8888/user/login



// Routing / async AJAX - ReST Web Service with CRUD operations

4.) Improve the given AJAX-ReST List-of-Songs
	
to "autorefresh" the list on keyup (in the search-field)
	
e.g. GET http://127.0.0.1:8888/song/search.json


5.) Create/improve a user management
	
for adding data 
	
e.g. POST http://127.0.0.1:8888/user/add.json
		
(with post-data: username=admin&email=root@server.com)


6.) Improve the user management
	to really remove data from the database (not memory only)
	
and return a suiting return status 200, 404,...
	
e.g.: DELETE e.g.: http://127.0.0.1:8888/user/4.json
	

7.) Improve the given AJAX-ReST List-of-Songs
	
to allow modifying (with get and/or post data) a selected item
	
e.g.: PUT http://127.0.0.1:8888/song/4.json?title=Modified%20Title
		
		

// Nested layout/templates & routing

8.) Improve the web application with 
	
a navigation-menu in the layout
	
e.g.: http://127.0.0.1:8888/index.html

	
e.g.: http://127.0.0.1:8888/songs.html

	
e.g.: http://127.0.0.1:8888/public/about.html
	
e.g.: http://127.0.0.1:8888/public/agb.html

	
e.g.: http://127.0.0.1:8888/user/all.html
	
e.g.: http://127.0.0.1:8888/user/register.html
    
e.g.: http://127.0.0.1:8888/user/login_form.html
	

// Sessions / Cookie

9.) Improve the web application by allowing login
	
crate a session id on login and store an session id in a cookie
	
e.g.: only logged in users are allowed to view list of users
		
http://127.0.0.1:8888/user/all.html




10.) Optional: Make it more beautiful :)
	
e.g. use background image
	
e.g. pretty fonts, colors, whitespaces
	
e.g. nice (responsive) layout
	
e.g. replace buttons with images
	
e.g. ...