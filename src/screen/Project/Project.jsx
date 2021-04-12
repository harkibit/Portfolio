import React from 'react'
import "./Project.css"

export default function Project(props) {
    const {name, description, images, bg, tags, technologies, demo, githubRepo} = props;
    const project = {
        backgroundImage: "url(" + image + ")",
    }
    return (
        <div style = {project}>
            
        </div>
    )
}
