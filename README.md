[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/MqXF68Ca)

# Microblogging Application

This microblogging application allows users to view existing blogs, expand content, create new blogs, and update existing blogs. It is built using JavaScript and XMLHttpRequest to fetch and manipulate data.

## User Requirements

### View Existing Blogs
- As a user, you can view all existing blogs fetched from a JSON file using XMLHttpRequest.

### Expand Blog Content
- As a user, you can click on a blog to expand its content. CSS transitions are used for a smooth user experience.

### Add New Blog
- As a user, you can add a new blog by clicking the "Create" button.
- This action opens an editable card with the blog details.
- No data persistence is required for these new blogs (they are not saved on the server).

### Create a Blog
- As a user, you can add a blog by entering the title, content, and author.
- The "created" field is automatically added with the current date and time.

### Update a Blog
- As a user, you can mark a blog as complete by clicking an update icon.
- Only the blog content and author fields are editable.

## Implementation

### Technologies Used
- JavaScript for application logic.
- HTML and CSS for the user interface.
- XMLHttpRequest for fetching and manipulating JSON data.
- CSS transitions for smooth content expansion.

### Files
- `index.html` for the HTML structure and user interface.
- `style.css` for styling the application.
- `main.js` for JavaScript logic and handling user actions.
- `data.json` for storing blog data.
- `/scss` for grouping all the SCSS Files.

## How to Run

1. Clone the repository to your local machine.
2. Open the `index.html` file in VS Code.
3. Execute this command in VS Code `npm run sass-dev`
4. Open the `index.html` in Web Browser.


