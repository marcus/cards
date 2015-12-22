let ratio = window.devicePixelRatio || 1;
let width = 800 * ratio;
let height = 500 * ratio;

CardPreview = React.createClass({
  getCanvas() {
    let canvas = new fabric.Canvas('c', {width: 800, height: 500});
    let c = canvas.getElement(), w = c.width, h = c.height;
    c.setAttribute('width', w * ratio);
    c.setAttribute('height', h * ratio);
    c.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
    return canvas;
  },

  draw() {
    let card = this.props.card;
    let canvas = this.getCanvas();

    if(card.title) {
      //let title = new fabric.Text(card.title, {
        //fontFamily: 'Helvetica',
        //fontSize: 18,
        //top: 20,
        //left: 20,
      //});
      //canvas.add(title);
      let x = () => {return {__html: this.props.card.title}};
      this.title = (
        <div
          dangerouslySetInnerHTML={x()}
          className='text_front'
          id="text_front"
          style={{
            zIndex: 3,
            position: 'absolute',
            top: 10,
            left: 25,
            width: 750,
            fontSize: 26,
            fontFamily: 'Lato',
          }}
          >
        </div>
      );
    };

    if(card.text_front) {
      let x = () => {return {__html: this.props.card.text_front}};
      this.text_front = (
        <div
          dangerouslySetInnerHTML={x()}
          className='text_front'
          id="text_front"
          style={{
            zIndex: 2,
            position: 'absolute',
            top: 60,
            left: 25,
            width: 750,
            fontSize: 16,
            fontFamily: 'Lato',
          }}
          >
        </div>
      );
    }
  },

  shouldComponentUpdate(nextProps) {
    return true;
    //console.log('Should I update?');
    //if(!_.isEqual(this.props.card, nextProps.card)) {
      ////console.log("Updating");
      //return true;
    //} else {
      //return false;
    //}
  },

  render() {
    this.draw();
    return (
      <div style={{position: 'relative'}} className='card-preview-container'>
        {this.title}
        {this.text_front}
        <canvas id='c'></canvas>
      </div>
    )
  }
});
