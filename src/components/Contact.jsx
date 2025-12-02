import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {

    return(
        <div className="text-left my-20">
            <div class="mockup-code w-1/2 mx-auto min-h-[300px] bg-[var(--olive)]">
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
        </div>
    )
}