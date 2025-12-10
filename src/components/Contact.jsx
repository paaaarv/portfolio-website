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

    return(
        <div id="contact" className="text-left m-10">
            <h2>Contact</h2>
            <div id="contact-div" className="mockup-code md:w-1/2 my-10 mx-auto bg-[var(--brown)]">
                <pre data-prefix="$" className="text-[var(--cream)]"><code>// want to collaborate?</code></pre>
                <pre data-prefix="$" className="text-[var(--cream)]"><code>// connect with me!</code></pre>
                <br/>
                <form name="contact-form" method="POST" action="/" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact-form" />
                    <pre data-prefix=">" className="text-[var(--cream)]"><label for="name"></label><code>your name:  </code>
                     <input name="name" value={visitorName} onChange={(e) => setVisitorName(e.target.value)} type="text"></input></pre>
                     <pre data-prefix=">" className="text-[var(--cream)]"><label for="name"></label><code>your email:  </code>
                    <input name="email" type="email" value={visitorEmail} onChange={(e) => setVisitorEmail(e.target.value)}></input></pre>
                    <pre data-prefix=">" className="text-[var(--cream)]"><label for="name"></label> <code>message:  </code>
                    <input name="message" type="text"value={visitorMessage} onChange={(e) => setVisitorMessage(e.target.value)}></input></pre>
                    <pre className="flex justify-between my-5"><code><button id="contact-button" type="submit"> sendMessage()</button></code></pre>
            </form>
            </div>
        </div>
    )
}