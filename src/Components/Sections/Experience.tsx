export const Experience = (): JSX.Element => {

    const hmExpierence: string[] = [
        "Implemented Event based approach for replacing an existing long polling scenario using Azure storage Queue, Function App and SignalR.",
        "Integrated Mind / Whitesource with CI pipeline to scan packages and docker images for security vulnerabilities.",
        "Contributed to increasing Azure Secure Score by applying security recommendations on Azure resources.",
        "Developed Azure Service Bus, Azure Storage Queue, HTTP and Time Triggered Azure Functions. Migrated Function app from legacy v1 on .Net Framework to latest v4 on .Net 7.",
        "Integrated “Azure App Configuration” with services to centrally manage application settings and feature flags.",
        "Contributed to migrating services hosted in AKS to “Azure Container Apps”.",
        "Learnt basics of Angular 8 and contributed to developing frontend features for ASQ product."
    ]

    const siemensExpierence: string[] = [
        "Implemented theming (using Styled Components), tour-guide for the react webapp.",
        "Gained knowledge on Microservices API architecture, PostgreSQL and MongoDB.",
        "Integrated static code analysis (Sonarcloud) for webapp and api. Integrated application insights for api.",
        "Hands on experience on APIM and Service Bus.",
        "Explored basics of Xamarin and contributed to developing HearingAsAService (HAAS) feature for the hearing aid app.",
        "Gained knowledge on Docker, Kubernetes and Helm chart deployment strategy to deploy applications into Kubernetes cluster.",
        "Explored Bicep scripts to deploy APIM (Azure API Management) and Service Bus to azure.",
    ]

    const velaExpierence: string[] = [
        "Web App development using React js, Redux, Redux-Saga, Material UI.",
        "REST API design and development using Domain Driven Development approach.",
        "WCF API design and development using Three-tier architecture.", 
        "Implemented SignalR Core which enables real-time web functionality. Allows server to push content to client instantly.",
        "Migrated server components from .NET framework to .NET Core / .NET Standard / .NET 5.",
        "Basics of WPF (Desktop client), Xamarin (Mobile App) and ASP.NET MVC.",
        "Designed component-based build system. Migrated code base from TFS to GIT.",
        "Designed on-prem DevOps - Setting up Build agent, Build pipelines and release configuration.",
        "Migrated entire DevOps system from on-premise to Azure DevOps. Converted build pipelines / releases to yaml to have a control over versioning. Handling shared dependencies as NuGet packages in private feed.",
        "Handled changes required to deploy server components of product to Azure App service.",
        "Part of team responsible for migrating on-premise servers to MS Azure.",
        "Part of a team providing 24x7 CloudOps support for our cloud offerings.",
        "Involved in Code reviews, Sprint Planning and Retrospective.",
        "Requirement gathering from PMs and changing functional specifications into technical development.",
        "Mentored junior developers, related to product and practiced development techniques."
    ]


    return (
        <>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-3">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Software Engineer</h3>
                            <div className="subheading mb-3">H&M Group</div>
                            <ul>
                                {hmExpierence.map((value) => <li>{value}</li>)}
                            </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2022 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Software Engineer</h3>
                            <div className="subheading mb-3">Siemens</div>
                            <ul>
                                {siemensExpierence.map((value) => <li>{value}</li>)}
                            </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2021 - July 2022</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Software Engineer</h3>
                            <div className="subheading mb-3">Vela Technologies</div>
                            <ul>
                                {velaExpierence.map((value) => <li>{value}</li>)}
                            </ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2017 - April 2021</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
}