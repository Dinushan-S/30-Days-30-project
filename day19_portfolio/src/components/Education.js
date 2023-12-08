import React from 'react'

export const Education = () => {
    return (
        <div>
            <section className='resume-section' id='education'>
                <div className='resume-section-content'>
                    <h2 className='mb-5'>Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University of Mumbai</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>
                                In Computer Science with One year Internship in Cloud Computing
                            </div>
                            <p>Percentage: Above 70% in all semesters</p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">June 2011 - June 2015</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">
                                Changu Kana Thakur High School and College
                            </h3>
                            <div className="subheading mb-3">
                                Computer Science Vocational + PCM group
                            </div>
                            <p>Percentage: 93.33(First rank in college in HSC/12th Std)</p>
                        </div>
                        <div className="flex-shrink-0">
                            <span className="text-primary">June 2009 - June 2011</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}
