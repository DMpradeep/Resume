import { Navigation } from "./Navigation";
import { About } from "./Sections/About";
import { Certifications } from "./Sections/Awards";
import { Education } from "./Sections/Education";
import { Experience } from "./Sections/Experience";
import { Interests } from "./Sections/Interests";
import { Skills } from "./Sections/Skills";


export const Home = (): JSX.Element => {
    return (
        <>
            {/* <!-- Navigation--> */}
            <Navigation />
            {/* <!-- Page Content--> */}
            < div className="container-fluid p-0" >
                <About />
                <Experience />
                <Skills />
                <Certifications />
                <Education />
                <Interests />
            </div >
        </>
    );
}