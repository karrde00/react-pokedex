import Backbone from 'backbone';
import PokemonImage from './PokemonImage';

class Pokemon extends Backbone.Model {
	constructor(options) {
		super(options);
		this.urlRoot = "http://pokeapi.co/";
		this.fetch();
	}
	url(){
		return this.urlRoot + this.get('resource_uri');
	}
}

export default Pokemon;
