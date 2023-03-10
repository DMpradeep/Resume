export const Education = (): JSX.Element => {
    return (
        <>
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Shri Jayachamarajendra College Of Engineering (SJCE), Mysuru</h3>
                            <div className="subheading mb-3">Bachelors in Engineering</div>
                            <div>Electronics and Communication Engineering</div>
                            <p>CGPA: 9.48 / 10</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2013 - May 2017</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Citizens PU College, Nanjangud</h3>
                            <div className="subheading mb-3">Science - PCMB</div>
                            <p>Percentage: 95%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2011 - March 2013</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Citizens English School, Nanjangud</h3>
                            <p>Percentage: 97%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">April 2011</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}