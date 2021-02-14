const defaultConfig = {
  color: '#fbff3b', // #000
  bgColor: '#FF0000',
  bgPattern: '', // CSS icon pattern
  animation: true,
  duration: 4000,
};

class Couplets {
  constructor(props) {
    const _props = { ...defaultConfig, ...props };
    this.rightText = _props.right;
    this.leftText = _props.left;
    this.bannerText = _props.banner;
    this.color = _props.color;
    this.bgColor = _props.bgColor;
    this.textIcon = _props.textIcon;
    this.enableAnimation = _props.animation;
    this.animationDuration = _props.duration;
    this.init();
    this.render();
  }

  init() {
    this.bannerEle = document.querySelector('#banner');
    this.rightEle = document.querySelector('#couplets-right');
    this.leftEle = document.querySelector('#couplets-left');
    this.bannerEle.style.color = this.color;
    this.rightEle.style.color = this.color;
    this.leftEle.style.color = this.color;
    // setTimeout(() => {
    //   this.clearMask();
    // }, this.animationDuration + 200);
  }

  clearMask() {
    // clear mask-image when animation done
    this.rightEle.className = '';
    this.leftEle.className = '';
    this.bannerEle.className = '';
  }

  render() {
    this.bannerEle.innerHTML = this.bannerText;
    this.rightEle.innerHTML = this.rightText;
    this.leftEle.innerHTML = this.leftText;
    if (!this.enableAnimation) {
      // clear animation under #ele
    }
  }
}
