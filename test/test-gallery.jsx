const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Gallery = require('../gallery');

describe('Gallery component', function() {
	it('Renders the gallery and series of images', function() {
		var url = "http://www.example.com/image.png";
		var description = "Example Description";

		var Images = [
			{
				url: url,
				description: description
			}
		];

		var renderer = TestUtils.createRenderer();
		renderer.render(<Gallery images={Images} />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('gallery');
		result.props.children.length.should.equal(1);

		var img = result.props.children[0];
		TestUtils.isElement(img).should.be.true;
		img.props.url.should.equal(url);
		img.props.description.should.equal(description);
	});
});