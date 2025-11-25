import chat from '/chat-bubble.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {

    return(
        <div className="ml-24">
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Parvathi"
                        src={chat}
                    />
                    </div>
                </div>
                <div className="chat-bubble"> Connect with me!</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Parvathi"
                        src={chat}
                    />
                    </div>
                </div>
                <div className="chat-bubble">
                   <a href="mailto:parvathi.n.kumar@gmail.com" > <FontAwesomeIcon icon="fa-regular fa-envelope"/> </a>
                    <a aria-label="Parvathi's LinkedIn Profile" href="https://www.linkedin.com/in/parvathi-kumar" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /> </a>
            <a aria-label="Parvathi's Github Profile" href="https://www.github.com/paaaarv" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a> 
                 </div>
            </div>
        </div>
    )
}