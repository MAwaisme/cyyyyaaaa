import React from 'react'

const Landing = () => {
    return (
        <div>
            <div className="header-image">
                <div className="header-image-content row m-auto home-page-header">
                    <div className="col-12 header-image-heading-wrapper">
                        <h1 className="header-image-heading">You are browsing the best resource <br /> for <span>Online Education</span></h1>
                    </div>
                    <div className="col-12 home-page-search-wrapper">
                        <form className="Newsleter-form home-page-search">
                            <input className="form-control" type="search" placeholder="Search here" />
                            <div className="search-icon">
                                <i class="fas fa-search"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="home-page-content">
                <div className="home-page-content-container">
                    <h5>Latest <span>Courses</span></h5>
                    <div className="Courses-wrapper">
                        <div className="Courses-image">
                            <img src="/asstes/image/header-image.jpg"/>
                            <p>Kotlin</p>
                        </div>
                        <div className="Courses-image">
                            <img src="/asstes/image/header-image.jpg"/>
                            <p>Kotlin</p>
                        </div>
                        <div className="Courses-image">
                            <img src="/asstes/image/header-image.jpg"/>
                            <p>Kotlin</p>
                        </div>
                        <div className="Courses-image">
                            <img src="/asstes/image/header-image.jpg"/>
                            <p>Kotlin</p>
                        </div>
                        <div className="Courses-image">
                            <img src="/asstes/image/header-image.jpg"/>
                            <p>Kotlin</p>
                        </div>
                    </div>
                </div>
                <div className="populer-Courses">
                    <div className="home-page-content-container">
                        <h5>Most populer <span>Courses</span></h5>
                        <div className="Courses-wrapper">
                            <div className="Courses-image">
                                <img src="/asstes/image/header-image.jpg"/>
                                <p>Kotlin</p>
                            </div>
                            <div className="Courses-image">
                                <img src="/asstes/image/header-image.jpg"/>
                                <p>Kotlin</p>
                            </div>
                            <div className="Courses-image">
                                <img src="/asstes/image/header-image.jpg"/>
                                <p>Kotlin</p>
                            </div>
                            <div className="Courses-image">
                                <img src="/asstes/image/header-image.jpg"/>
                                <p>Kotlin</p>
                            </div>
                            <div className="Courses-image">
                                <img src="/asstes/image/header-image.jpg"/>
                                <p>Kotlin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
