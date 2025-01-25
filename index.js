function showDiv() {
    document.getElementById("hiddenDiv").style.visibility = "visible";
  }

// vide play

document.querySelectorAll('.reel-video').forEach(video => {
  video.addEventListener('mouseover', () => {
      video.play();
  });
  video.addEventListener('mouseout', () => {
      video.pause();
  });
});


// video play visibilty hidden
// document.getElementById("myVideo").addEventListener("click", function() {
//     if (this.paused) {
//       this.play();
//     } else {
//       this.pause();
//     }
//   });

//   function videoPlayFun() {
//     var video = document.getElementById("myVideo");
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }

  // function videoPlayFun(video) {
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  // }