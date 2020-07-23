import React, {useState} from 'react'
import siteSnippets from '../snippets'

function Snippets(props) {
    // let [content, displayFunction] = useState({
    //     img: "hi",
    //     name: "the name"
    // });

    let [mouseIsOver, display] = useState(false);

    function displaySnippets(tech) {
        return tech
        siteSnippets.forEach(snippet => {
            // if (mouseIsOver && tech === snippet.technology) {
                return snippet.tech;
            // }
        });
    }
    
    function MouseOver() {
        display(true);
        const techName = props.tech;
        displaySnippets(techName);
    }

    function MouseOut() {
        display(false);
    }

    return (
            <div>
                <p>{displaySnippets}</p>
                <p onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={displaySnippets}>{props.tech}</p>
            </div>
        );
    }

// class Snippets extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: siteSnippets.id,
//             tech: siteSnippets.technology,
//             snippet1: siteSnippets.snippet1
//         }
//         this.handleHover = this.handleHover.bind(this);
//     }

//     handleHover() {
//         this.setState(prevState => {
//             return {
//                 imgChange: prevState.snippet1
//             }
//         });
//     }

//     render(props) {
//         return (
//             <div>
//                 <p></p>
//                 <p onMouseOver={handleHover}>{props.tech}</p>
//             </div>
//         )
//     }
// }

export default Snippets;