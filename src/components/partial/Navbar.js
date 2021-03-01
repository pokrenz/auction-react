import React , {Component} from 'react';


class Navbar extends Component {
	render(){
		return (
			
			<nav className="navbar">
				<div className="flex flex-wrap justify-between">
					<div>
					<h1 className="logo">{this.props.title}</h1>
					</div>
					<div>
						<form className="dropdown-item">
							<input type="email" className="shadow-inner shadow-md rounded-md p-1 border focus:border-none focus:ring focus:ring-white focus:ring-offset-1 focus:ring-offset-green-300 mx-2" placeholder="Email" />
							<input type="password" className="rounded-md p-1 border focus:border-none focus:ring focus:ring-white focus:ring-offset-1 focus:ring-offset-green-300 mx-2" placeholder="password" />
							<input type="button" className="rounded-sm p-1 text-white bg-primary-dark hover:bg-blue-600 w-24 focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-green-300" value="Masuk" />
						</form>
					</div>
				</div>
			</nav>
			
		);
	}
}

export default Navbar;