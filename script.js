//toggle icon navbar

function changeText() {
    document.getElementById("text").innerHTML = "I am a Motivated and dedicated CSE student with a focus on Front-end development and Programming. With a strong foundation in Computer science and practical experience, I enjoy creating visually appealing and user-friendly Websites. I have expertise in web technologies like HTML, CSS, and JavaScript.By combining my technical skills with a creative mindset, I can bring design concepts to life and deliver intuitive user interfaces. I am always eager to learn and stay updated with the latest trends and best practices in the industry.Collaboration and effective communication are important to me, as I thrive in team environments and value working with designers and developers to achieve outstanding results. With my passion for innovation and a commitment to excellence, I am excited to contribute my skills as a front - end developer and programmer.I am confident in my ability to meet deadlines, manage projects efficiently, and create impactful digital experiences. I look forward to taking on new challenges and making a positive impact in the field of front - end development.I am enthusiastic about leveraging my skills and knowledge to create engaging web experiences for users worldwide.";
}


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Animation footer on scroll
let footer = document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


// Contact Page Local Storage

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = contactForm.elements.name.value;
    const email = contactForm.elements.email.value;
    const phone = contactForm.elements.phone.value;
    const subject = contactForm.elements.subject.value;
    const textarea = contactForm.elements.textarea.value;

    localStorage.setItem(email, JSON.stringify({
        Name: name,
        Phone: phone,
        Subject: subject,
        Info: textarea
    }));

    alert("Form Sucessfully Submitted!");
    contactForm.reset();
});