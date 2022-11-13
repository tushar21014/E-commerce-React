
            <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{zIndex:'1'}}>
                    <Link className="navbar-brand" to="./Home">{this.props.heading}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="linknavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="./Home">{this.props.first} <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="./Aboutus">{this.props.second} <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="./Contactus">{this.props.third} <span className="sr-only"></span></Link>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                        {/* <SearchBar/> */}
                        <Link className="btn btn-primary btn active" role="button" to="Login" aria-pressed="true">Sign Up</Link>


                    </div>
                </nav>
            </div>
        </div>