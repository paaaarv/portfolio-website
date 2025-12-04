import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'; 

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


export default function Contact() {
    const [visitorName, setVisitorName] = useState(''); 
    const [visitorEmail, setVisitorEmail] = useState(''); 
    const [visitorMessage, setVisitorMessage] = useState(''); 
    const [submitMessage, setSubmitMessage] = useState(false); 

    // const submitContactForm = (e) => {
    //      e.preventDefault();
    //     fetch("/", {
    //         method: "POST", 
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
    //         body: encode({ "form-name": "contact-form", "Name": visitorName, "Email": visitorEmail, "Message": visitorMessage})
    //     })
    //         .then(() => setSubmitMessage(true))
    //         .catch(error => alert(error)); 
    //         setVisitorEmail(''); 
    //         setVisitorName(''); 
    //         setVisitorMessage(''); 
    // }
    return(
        <div className="text-left m-10">
            <h2>Contact</h2>
            <div id="contact-div" class="mockup-code w-1/2 my-10 mx-auto bg-[var(--olive)]">
                <pre data-prefix="$" className="text-[var(--cream)]"><code>// want to collaborate?</code></pre>
                <pre data-prefix="$" className="text-[var(--cream)]"><code>// connect with me!</code></pre>
                <br/>
                <form name="contact-form" method="POST" netlify>
                    <pre data-prefix=">" className="text-[var(--cream)]"><code>your name:  </code>
                     <input name="name" value={visitorName} onChange={(e) => setVisitorName(e.target.value)} type="text" autofocus ></input></pre>
                     <pre data-prefix=">" className="text-[var(--cream)]"><code>your email:  </code>
                    <input name="email" type="email" value={visitorEmail} onChange={(e) => setVisitorEmail(e.target.value)}></input></pre>
                    <pre data-prefix=">" className="text-[var(--cream)]"><code>message:  </code>
                    <input name="message" type="text"value={visitorMessage} onChange={(e) => setVisitorMessage(e.target.value)}></input></pre>
                    <pre className="flex justify-between my-5"><code><button id="contact-button" type="submit">sendMessage()</button></code></pre>
                {submitMessage && 
                    <pre data-prefix="$" className="bg-success"><code>SUCCESS: message received </code></pre>
                }
            </form>
            </div>
        </div>
    )
}