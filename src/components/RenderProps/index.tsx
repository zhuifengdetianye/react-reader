import * as React from 'react'
import imgUrl from '../../img/logo192.png';

type CatProps = { mouse: {x: number, y: number} }
type MouseProps = { render: any }
type MouseState = { x: number; y: number }

class Cat extends React.Component<CatProps> {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={imgUrl} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component<MouseProps, MouseState> {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 <Mouse> 渲染结果的静态表示
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class RenderProps extends React.Component {
  renderTheCat(mouse) {
    return <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={this.renderTheCat}/>
      </div>
    );
  }
}

export default RenderProps;
