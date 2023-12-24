import express from "express"
import projects from "./store/projects.js"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/", (req, res) =>
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
        ariaLabel: "jonathan kila github profile",
      },
      {
        link: "https://www.linkedin.com/in/jonathan-kila",
        img: "./assets/contact_icons/linkedin.svg",
        ariaLabel: "jonathan kila linkedin profile",
      },
      {
        link: "mailto: jonathan.kila10@gmail.com",
        img: "./assets/contact_icons/mail.svg",
        ariaLabel: "email jonathan kila",
      },
    ],
  })
)

app.listen(port, () => console.log(`listening on port: ${port}`))
