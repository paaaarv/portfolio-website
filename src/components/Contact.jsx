import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'; 


export default function Contact() {
    const [visitorName, setVisitorName] = useState(''); 
    const [visitorEmail, setVisitorEmail] = useState(''); 
    const [visitorMessage, setVisitorMessage] = useState(''); 

    const submitContactForm = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return(
        <div className="text-left m-10">
            <h2>Contact</h2>
            <div id="contact-div" class="mockup-code w-1/2 my-10 mx-auto bg-[var(--mustard)]">
                <pre data-prefix="$"><code>// want to collaborate?</code></pre>
                <pre data-prefix="$"><code>// connect with me!</code></pre>
                <form onSubmit={(e) => submitContactForm(e)}>
                    <pre data-prefix=">" className="text-[var(--brown)]"><code>const name = </code>
                     <input value={visitorName} onChange={(e) => setVisitorName(e.target.value)} type="text" autofocus ></input></pre>
                     <pre data-prefix=">" className="text-[var(--brown)]"><code>const email = </code>
                    <input type="email" value={visitorEmail} onChange={(e) => setVisitorEmail(e.target.value)}></input></pre>
                    <pre data-prefix=">" className="text-[var(--brown)]"><code>const message = </code>
                    <input type="text"value={visitorMessage} onChange={(e) => setVisitorMessage(e.target.value)}></input></pre>
                    <pre className="flex justify-between my-5"><code><button id="contact-button" type="submit">sendMessage()</button></code></pre>
                 </form>
            </div>
        </div>
    )
}