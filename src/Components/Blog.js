import React from 'react'

const Blog = (props) => {
  return (
    <div className="blog container mt-5">

                {props.condition?<> </> : 
                <>
                <h1 className="text-center">Latest Blog</h1>
                <p className="text-center">We make it easier to order Vegetables & Fruits Convenience</p>
                </>
               
                }
               
                {/* <div className="row mt-3">
                    <div className="col-lg-4 mt-3">
                        <div className="image" style={{ width:"100%",height: "300px" }}>
                            <img src="https://www.picsum.photos/236" alt="" className="w-100 h-100"/>
                        </div>
                        <div className="content p-3 bg-dark-subtle">
                        <h5>How to cultivate organic fruits and vegetables in own firm</h5>
                        <hr/>
                        <i className="fa fa-user" aria-hidden="true"> Admin</i>&nbsp;&nbsp;
                        <i className="fa fa-calendar" aria-hidden="true"> 01 Jan | 2021</i>
                    </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="image" style={{ width:"100%",height: "300px" }}>
                            <img src="https://www.picsum.photos/236" alt="" className="w-100 h-100"/>
                        </div>
                        <div className="content p-3 bg-dark-subtle">
                        <h5>How to cultivate organic fruits and vegetables in own firm</h5>
                        <hr/>
                        <i className="fa fa-user" aria-hidden="true"> Admin</i>&nbsp;&nbsp;
                        <i className="fa fa-calendar" aria-hidden="true"> 01 Jan | 2021</i>
                    </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="image" style={{ width:"100%",height: "300px" }}>
                            <img src="https://www.picsum.photos/236" alt="" className="w-100 h-100"/>
                        </div>
                        <div className="content p-3 bg-dark-subtle">
                        <h5>How to cultivate organic fruits and vegetables in own firm</h5>
                        <hr/>
                        <i className="fa fa-user" aria-hidden="true"> Admin</i>&nbsp;&nbsp;
                        <i className="fa fa-calendar" aria-hidden="true"> 01 Jan | 2021</i>
                    </div>
                    </div>
                </div> */}
            </div>
  )
}

export default Blog