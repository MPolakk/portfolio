import { useState } from "react";

const Section = () => {

    const [text, setText] = useState([])

    return ( 
        <div className="mt-16 relative h-96">
            <div className="bg-stone-900 brightness-110 p-2 py-4 text-white">
                <h2 className="text-5xl">I often work with:</h2>
                <ul>
                    <li className="h-14"><img src="assets/up-left.png" alt='arrow' width={'50px'}/>Startups</li>
                    <li className="h-14">Marketing teams</li>
                    <li className="h-14">Agencies</li>
                    <li className="h-14">B2B SaaS</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Section;