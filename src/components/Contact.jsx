import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {

    return(
        <div className="text-left pl-20 bg-[var(--brown)] p-3">
            <div class="mockup-code w-1/2 mx-auto bg-[var(--olive)]">
                <pre data-prefix="$"><code>// want to collaborate?</code></pre>
                <pre data-prefix="$"><code>// connect with me!</code></pre>
                <form>
                    <pre data-prefix=">" class="text-warning"><code>const name = </code>
                     <input placeholder="|" type="text" autofocus ></input></pre>
                     <pre data-prefix=">" class="text-success"><code>const email = </code>
                    <input type="email"></input></pre>
                    <pre data-prefix=">" class="text-success"><code>const message = </code>
                    <input type="text"></input></pre>
                    <pre data-prefix=">" class="text-success"><code>await sendMessage()</code></pre>
                 </form>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble  chat-bubble-primary"> Connect with me!</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble">
                    <a aria-label="Parvathi's LinkedIn Profile" href="https://www.linkedin.com/in/parvathi-kumar" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /> </a>
            <a aria-label="Parvathi's Github Profile" href="https://www.github.com/paaaarv" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a> 
                 </div>
            </div>
        </div>
    )
}