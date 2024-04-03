var count=0;
var jsondataarray = [];
var dataArray = [];
var adddataArray = [];

document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blogList");

  // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

  // Define the URL of your JSON file
    const url = "/blogs.json";

  // Configure the request
    xhr.open("GET", url, true);

  // Define a callback function to handle the response
    function display() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
        const blogs = JSON.parse(xhr.responseText);
        jsondataarray = JSON.parse(xhr.responseText);
      //console.log(blogs);
      // Iterate through the blogs and display them
        jsondataarray.forEach((blog) => {
        const blogcontainer = document.createElement("div");
        blogcontainer.classList.add("card");
        const blogid = document.createElement("div");
        count++;
        blogid.classList.add(`blog${count}`);
        const title = document.createElement("div");
        title.textContent = `${blog.title}`;
        const content = document.createElement("div");
        const content_desc = document.createElement("div");
        content_desc.textContent = `${blog.content}`;
        const expand = document.createElement("button");
        expand.textContent = "Show More";
        const author = document.createElement("div");
        author.textContent = `Created By : ${blog.author}`;
        const date = document.createElement("div");
        date.textContent = `Date : ${blog.date}`;
        const update = document.createElement("button");
        update.textContent = "Update";
        expand.addEventListener("click", () => {
            if (content_desc.style.maxHeight == "100px") {
                content_desc.style.transition = "max-height 10s ease";
            content_desc.style.maxHeight = "750px";
            expand.textContent = "Show Less";
            expand.style.backgroundColor = "rgba(241, 44, 41, 0.5)";
            } else {
                content_desc.style.transition = "max-height 3s ease";
            content_desc.style.maxHeight = "100px";
            expand.textContent = "Show More";
            expand.style.backgroundColor = "rgba(103, 218, 122, .5)";
            }
          // content_desc.style.maxHeight = content_desc.style.maxHeight == "50px" ? "250px" : "50px";
        });
        blogcontainer.classList.add("card");
        title.classList.add("title");
        content.classList.add("content");
        content_desc.classList.add("content_desc");
        author.classList.add("author");
        date.classList.add("date");
        expand.classList.add("expand");
        update.classList.add("update");
        update.setAttribute("id", "update");
        update.setAttribute("onclick","add()");
        blogid.appendChild(title);
        content.appendChild(content_desc);
        content.appendChild(expand);
        blogid.appendChild(content);
        blogid.appendChild(author);
        blogid.appendChild(date);
        blogid.appendChild(update);
        blogcontainer.appendChild(blogid);
        blogList.appendChild(blogcontainer);

        content_desc.style.maxHeight = "100px";

        
            });
    }
}

    xhr.onreadystatechange = display;

  // Send the request
    xhr.send();
});

const addButton = document.getElementById("addnewbtn");
        const popup = document.getElementById("popup");

        addButton.addEventListener("click", () => {
            // Show the pop-up when the update button is clicked
            popup.style.display = "block";
        });

        // Hide the pop-up when the submit button is clicked
        const submitButton = document.getElementById("btnfield1");
        submitButton.addEventListener("click", () => {
            const field1Value = document.getElementById("field1").value;
            const field2Value = document.getElementById("field2").value;
            const field3Value = document.getElementById("field3").value;
            var field4Value = document.getElementById("field4").value;

            if(field4Value == null || field4Value == '')
            {
                var currentdate = new Date(); 
                var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                field4Value = datetime;
            }
            // Store the values in the dataArray

            if(field1Value == null || field2Value == null ||  field3Value == null  || field1Value == '' || field2Value == '' || field3Value == '')
            {
                alert("add data");
            }
            else
            {
                dataArray.push({ title: field1Value, content: field2Value, author: field3Value, date: field4Value });
            
            // Clear the input fields
                document.getElementById("field1").value = "";
                document.getElementById("field2").value = "";
                document.getElementById("field3").value = "";
                document.getElementById("field4").value = "";

            // Close the pop-up
            popup.style.display = "none";
            see();
            jsondataarray = jsondataarray.concat(dataArray);
            dataArray = [];
            //console.log(jsondataarray);
            console.log(jsondataarray);
            }
            
        });

        const closebutton = document.getElementById("btnfield2");
        closebutton.addEventListener("click", () => {
            popup.style.display = "none";
        });

        function see(){
        //jsondataarray = JSON.parse(xhr.responseText);
                //console.log(blogs);
            // Iterate through the blogs and display them
            dataArray.forEach((blog) => {
                const blogcontainer = document.createElement("div");
                blogcontainer.classList.add("card");
                const blogid = document.createElement("div");
                count++;
                blogid.classList.add(`blog${count}` );
                const title = document.createElement("div");
                title.textContent = `${blog.title}`;
                const content = document.createElement("div");
                const content_desc = document.createElement("div");
                content_desc.textContent = `${blog.content}`;
                const expand = document.createElement("button");
                expand.textContent = "Show More";
                const author = document.createElement("div");
                author.textContent = `Created By : ${blog.author}`;
                const date = document.createElement("div");
                date.textContent = `Date : ${blog.date}`;
                const update = document.createElement("button");
                update.textContent = "Update";
                expand.addEventListener("click", () => {
                    if (content_desc.style.maxHeight == "100px")
                    {
                        content_desc.style.transition = "max-height 10s ease"; 
                        content_desc.style.maxHeight = "750px"
                        expand.textContent = "Show Less";
                        expand.style.backgroundColor = "rgba(241, 44, 41, 0.5)";
                    }
                    else
                    {
                        content_desc.style.transition = "max-height 3s ease";
                        content_desc.style.maxHeight = "100px";
                        expand.textContent = "Show More";
                        expand.style.backgroundColor = "rgba(103, 218, 122, .5)";
                    }
                    // content_desc.style.maxHeight = content_desc.style.maxHeight == "50px" ? "250px" : "50px";
                });
                blogcontainer.classList.add("card");
                title.classList.add('title');
                content.classList.add('content');
                content_desc.classList.add('content_desc');
                author.classList.add('author');
                date.classList.add('date');
                expand.classList.add('expand');
                update.classList.add('update');
                update.setAttribute("id", "update");
                update.setAttribute("onclick","add()");
                blogid.appendChild(title);
                content.appendChild(content_desc);
                content.appendChild(expand);
                blogid.appendChild(content);
                blogid.appendChild(author);
                blogid.appendChild(date);
                blogid.appendChild(update);
                blogcontainer.appendChild(blogid);
                blogList.appendChild(blogcontainer);
                
                content_desc.style.maxHeight = "100px";
            });
        }

        function add()
        {
                var currentElement = event.target.parentElement;
                var firstChild = currentElement.firstChild; // First child
                var secondChild1 = firstChild.nextSibling; // Second child
                var secondChild = secondChild1.firstChild;
                var thirdChild = secondChild1.nextSibling;
                var forthchild = secondChild1.nextSibling.nextSibling;
            const popup = document.getElementById("popupupdate");
            if (popup) {
            // Show the popup when the "update" button is clicked
                popup.style.display = "block";
            }
        
            const submituButton = document.getElementById("updatebtnfield1");
            submituButton.addEventListener("click", () => {
            var contenttoupdate = document.getElementById("updatefield2").value;
                var authortoupdate = document.getElementById("updatefield3").value;
                var currentdate = new Date(); 
                var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                var datetoupdate = datetime;
                console.log(contenttoupdate);
                if (contenttoupdate == null || authortoupdate == null || contenttoupdate == '' || authortoupdate == '')
                {
                    alert("add data");
                    
                }
                else
                {
                    secondChild.innerHTML = contenttoupdate;
                thirdChild.innerHTML = `Created By : ${authortoupdate}`;
                forthchild.innerHTML = datetoupdate;
                popup.style.display = "none";
                }
                
            });

            document.getElementById("updatefield2").value = "";
            document.getElementById("updatefield3").value = "";

            const closeubutton = document.getElementById("updatebtnfield2");
        closeubutton.addEventListener("click", () => {
        popup.style.display = "none";
        });




        }