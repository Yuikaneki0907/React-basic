import React from "react";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// const Color = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       const colorRandom = getRandomColor();
//       return (
//         <div style={{ color: colorRandom }}>
//           {/* Truyền lại tất cả props cho WrappedComponent */}
//           <WrappedComponent {...this.props} />
//         </div>
//       );
//     }
//   };
// };

const Color = (WrappedComponent) => {
  const colorRandom = getRandomColor();
  return (props) => (
    <div style={{ backgroundColor: colorRandom }}>
      {/* Truyền lại tất cả props cho WrappedComponent */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
