export default function Main() {
    return (
        <main
            className="m-6 shadow-md shadow-black"
            style={{ aspectRatio: "8.5 / 11" }}
        >
            <div className="prose prose-h4:inline prose-ul:mt-0 mx-auto py-1">
                {/* <div className="prose prose-h4:inline prose-li:my-1 prose-ul:pl-0 prose-ul:mt-0 mx-auto py-1"> */}
                <section id="header">
                    <header>
                        <h2>Christopher Spencer</h2>
                        <h4>
                            cspencernd@gmail.com | linkedin.com/in/cspencernd |
                            github.com/cspencernd
                        </h4>
                    </header>
                    <p className="font-medium">
                        Meticulously organized, self-taught web developer, with an
                        obsession for sleek ui and a penchant for proper ux and
                        accessiblity.
                    </p>
                    <p>
                        Linux, Mac, Windows | HTML, CSS | JavaScript, TypeScript,
                        React | Python, C, Git
                    </p>
                </section>
                <section id="workHistory">
                    <h2>Work History</h2>

                    <div>
                        <h4>Web Developer &amp; Software Engineer</h4>
                        <aside>2020 - present</aside>
                    </div>
                    <div>
                        <h4>Gryffyn Labs </h4>
                        <aside>New York, NY (remote)</aside>
                    </div>

                    <ul>
                        <li>
                            Successfully built and deployed fully functional
                            ecommerce website.
                        </li>
                        <li>Created desktop weather applet.</li>
                        <li>
                            Contributed to open-source projects with
                            troubleshooting and bug fixes.
                        </li>
                    </ul>

                    <div>
                        <h4>Assistant Manager &amp; Technical Support</h4>
                        <aside>2017 – 2020</aside>
                    </div>

                    <div>
                        <h4>Beyond Vape</h4>
                        <aside>New York, NY</aside>
                    </div>

                    <ul>
                        <li>
                            Keyholder, inventory manager. Consistently exceeded
                            sales goals.
                        </li>
                        <li>
                            Provided high quality customer service and technical
                            support.
                        </li>
                        <li>Curated products; oversaw merchandising.</li>
                    </ul>

                    <div>
                        <h4>Stock Manager</h4>
                        <aside>2015 - 2017</aside>
                    </div>

                    <div>
                        <h4>Journeys</h4>
                        <aside>Brooklyn, NY</aside>
                    </div>

                    <ul>
                        <li>
                            Responsible for managing inventory; sent and received
                            inter-store transfers.
                        </li>

                        <li>
                            Directed stockroom organization, improving efficiency
                            of operations.
                        </li>
                    </ul>
                </section>
                <section id="education">
                    <h2>Education</h2>
                    <div>
                        <h4>Zero To Mastery Academy</h4>
                        <p>Web Development &amp; Computer Science</p>
                    </div>
                    <div>
                        <h4>National Personal Training Institute</h4>
                        <p>Human Anatomy, Kinesiology, Exercise Science</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
