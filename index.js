import express from "express"
import projects from "./store/projects.js"

const app = express()
const port = 8080

app.use(express.static("public"))

app.get("/", (_, res) =>
  res.render("index.ejs", {
    technologies: [
      "React",
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Jest",
      "Node.js",
      "Python",
      "Git",
      "SolidJS",
    ],
  })
)

app.get("/bio", (_, res) => res.render("bio.ejs"))

app.get("/projects", (_, res) => res.render("projects.ejs", { projects }))

app.get("/contact", (_, res) =>
  res.render("contact.ejs", {
    contacts: [
      {
        link: "https://github.com/Excelsior2021",
        img: "./assets/contact_icons/github.svg",
        alt: "github",
        ariaLabel: "jonathan kila github profile",
      },
      {
        link: "https://www.linkedin.com/in/jonathan-kila",
        img: "./assets/contact_icons/linkedin.svg",
        alt: "linkedin",
        ariaLabel: "jonathan kila linkedin profile",
      },
      {
        link: "mailto: jonathan.kila10@gmail.com",
        img: "./assets/contact_icons/mail.svg",
        alt: "email",
        ariaLabel: "email jonathan kila",
      },
    ],
  })
)

app.listen(port, () => console.log(`listening on port: ${port}`))
