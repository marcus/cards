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
      let x = () => {return {__html: this.props.card.title}};
      this.title = (
        <div
          dangerouslySetInnerHTML={x()}
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

    if(card.title_back) {
      let x = () => {return {__html: this.props.card.title_back}};
      this.title_back = (
        <div
          dangerouslySetInnerHTML={x()}
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
    }

    if(card.text_back) {
      let x = () => {return {__html: this.props.card.text_back}};
      this.text_back = (
        <div
          dangerouslySetInnerHTML={x()}
          style={{
            zIndex: 3,
            width: 320,
            fontSize: 14,
            fontFamily: 'Lato',
            float: 'left',
          }}
          >
        </div>
      );
    }

    if(card.activity) {
      let x = () => {return {__html: this.props.card.activity}};
      this.activity = (
        <div
          dangerouslySetInnerHTML={x()}
          style={{
            zIndex: 3,
            //position: 'absolute',
            //top: 10,
            //left: 25,
            width: 320,
            fontSize: 14,
            fontFamily: 'Lato',
            float: 'left',
          }}
          >
        </div>
      );
    }


    if(card.references) {
      let x = () => {return {__html: this.props.card.references}};
      this.references = (
        <div
          dangerouslySetInnerHTML={x()}
          style={{
            zIndex: 3,
            //position: 'absolute',
            //top: 10,
            //left: 25,
            width: 750,
            fontSize: 14,
            fontFamily: 'Lato',
            float: 'left',
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
      <div>
        <div style={{position: 'relative'}} className='card-preview-container'>
          {this.title}
          {this.text_front}
          <canvas id='c'></canvas>
        </div>

        <div className="spacer" style={{height: 15}}></div>

        <div style={{position: 'relative'}} className='card-preview-container'>
          {this.title_back}
          <div className="back-content" style={{zIndex: 4, position: 'absolute', top: 60, left: 25}}>
            {this.text_back}
            {this.activity}
            {this.references}
          </div>
          <canvas id='c'></canvas>
        </div>
      </div>
    )
  }
});
