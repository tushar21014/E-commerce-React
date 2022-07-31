import React,{useState} from 'react'
const array = [{
    "Source" : "name : Tush"
}]
export default function Cards(props) {
    const [dark,setDark] = useState("light");
    return (
        <div>
            {/* <form action = 'form.php' method='post'>
                Name
                <input type = 'text' name='name'/>
                <input type = 'submit' name='submit'/>
            </form> */}

            <div className='container my-4'>
                <div className='row my-5'>
                    <div className='col-md-4'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="Product Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text">{dark}</p>
                                <a href="#" className="btn btn-primary" id='buy'>Buy now</a>
                                <a href="#" className="btn btn-primary mx-2" id='add'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' >
                        <div className="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="Product Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text">Description</p>
                                <a href="#" className="btn btn-primary" id='buy'>Buy now</a>
                                <a href="#" className="btn btn-primary mx-2" id='add'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' >
                        <div className="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="Product Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text">Description</p>
                                <a href="#" className="btn btn-primary" id='buy'>Buy now</a>
                                <a href="#" className="btn btn-primary mx-2" id='add'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-md-4'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="Product Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text">Description</p>
                                <a href="#" className="btn btn-primary" id='buy'>Buy now</a>
                                <a href="#" className="btn btn-primary mx-2" id='add'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' >
                        <div className="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="Product Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text">Description</p>
                                <a href="#" className="btn btn-primary" id='buy'>Buy now</a>
                                <a href="#" className="btn btn-primary mx-2" id='add'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4' >
                        <div className="card" style={{ width: "18rem" }}>
                            <img class="card-img-top" src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80' alt="Product Photo" />
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text">Description</p>
                                <a href="#" className="btn btn-primary" id='buy'>Buy now</a>
                                <a href="#" className="btn btn-primary mx-2" id='add'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
