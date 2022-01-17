const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return (this.width * this.length * 6);
  }
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea());
