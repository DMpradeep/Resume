export const Skills = (): JSX.Element => {
    return (
        <>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h3 className="mb-4">Programming Languages & Technologies</h3>
                    <ul className="fa-ul mb-0">
                        <li className="mb-4">
                            <div className="subheading">Backend</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            C#, .NET Core / .NET 5 / .NET 6, ADO.NET (Dapper), Entity Framework, MSTest, Moq.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">API Design</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            REST and WCF Apis. Architecture - Microservices, Three-tier and DDD. FluentValidator and HATEOS.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">Frontend</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            React js (Typescript), Redux, Redux-Saga, GraphQL, Styled components (CSS in JS), Jest, React testing library.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">DB</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            MS-SQL, PostgreSQL, MongoDB.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">DevOps - Azure DevOps</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            CI and CD. NuGet, Npm packages as artifacts in private feed. TFS and GIT.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">Cloud - Azure (PaaS, SaaS, IaaS, IaC)</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Docker, Azure Kubernetes Service, Azure Container Apps, Azure App service, Azure Functions, Azure cache for Redis, APIM, Azure Service Bus, App-insights. Helm, Bicep.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">Basics</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            WPF, Xamarin, Angular JS, ASP.NET MVC, ORACLE.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">Tools</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Visual Studio / Code, IIS, Fiddler, Postman, MS SQL Server, PgAdmin, MongoDB Compass.
                        </li>
                        <li className="mb-4">
                            <div className="subheading">SDLC Practices</div>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile methodologies - Scrum (SAFe agile) and Kanban.
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}