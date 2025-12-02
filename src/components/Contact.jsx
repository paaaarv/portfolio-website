import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {

    return(
        <div className="pl-20 bg-[var(--brown)] p-3">
            <div className="chat chat-start">
                <div className="chat-bubble  chat-bubble-primary"> Connect with me!</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble">
                   <a href="mailto:parvathi.n.kumar@gmail.com" > <FontAwesomeIcon icon="fa-regular fa-envelope"/> </a>
                    <a aria-label="Parvathi's LinkedIn Profile" href="https://www.linkedin.com/in/parvathi-kumar" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /> </a>
            <a aria-label="Parvathi's Github Profile" href="https://www.github.com/paaaarv" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a> 
                 </div>
            </div>
        </div>
    )
}