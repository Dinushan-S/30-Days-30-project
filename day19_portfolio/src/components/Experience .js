import React from 'react'

export const Experience = () => {
    return (
        <div>
            <section className='resume-section' id='experience'>
                <div className='resume-section-content'>
                    <h2 className='mb-5'>Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Web Developer</h3>
                            <div className="subheading mb-3">Crowdfire</div>
                            <p>
                                Building features in products of Crowdfire for social media
                                clients in order increase annual revenue. Making sure that the
                                product is stable, has lesser bugs and itegrating new
                                technologies which are production ready while keeping in sync
                                with product owners for daily business requirements.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">August 2018 - Present</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Burrp Pvt Limited</div>
                            <p>
                                Migrated old food ordering website to newer version using React
                                framework. Helped in building hybrid mobile applications using
                                React Native. Coordinated with design team and product owners
                                for inclusion of various features in order to improve brand
                                reach across various platforms.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">January 2018 - August 2018</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Fullstack developer</h3>
                            <div className="subheading mb-3">Reliance Jio</div>
                            <p>
                                Collaboratively worked with various media platforms to build
                                websites and mobile applications in Jio media applications
                                suite. Worked in server side development, devops and client side
                                platform development primarily using MERN stack, ReactNative and
                                Apple TV JS Framework.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">June 2015 - June 2017</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}
