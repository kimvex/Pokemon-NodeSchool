import React, { Component } from 'react';

class Pokemon extends Component{

	enviarGrito(){
		this.props.hacerGritar.call(this, this.props.name);
	}

	render(){
		return(
			<div onClick={this.enviarGrito.bind(this)}>
				<img src={`http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`}/>
				<label>{ this.props.name }</label>
			</div>
		);
	}
}

export default Pokemon;