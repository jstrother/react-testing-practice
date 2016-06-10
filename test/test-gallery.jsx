const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Gallery = require('../gallery');

describe('Gallery component', function() {
	it('Renders the gallery and series of images', function() {
		var url = ["http://www.example.com/image.png"];
		var description = "Example description";

		var renderer = TestUtils.createRenderer();
		renderer.render(<Gallery url={url} description={description} />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('gallery');

		var img = result.props.children[0];
		img.type.should.equal('img');
		img.props.src.should.equal(url);
		img.props.alt.should.equal(description);

		var p = result.props.children[1];
		p.type.should.equal('p');
		p.props.children.should.equal(description);
	});
});