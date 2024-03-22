// const scrollDistance = 200;
// const scrollDuration = 10;
// const throttleDelay = 100; // Throttle delay 설정
// const bezierTimingFunction = [0.000, 0.125, 0.000, 1.010]; // custom cubic-bezier
// let scrollDirection = null;
// let startTime = null;
// let startScroll;
// let lastEventTime = 0;

// function scrollStep(timestamp) {
//     if (!startTime) startTime = timestamp;
//     let progress = timestamp - startTime;

//     let easeValue = easeInOutCubic(progress, bezierTimingFunction);
//     let currentPosition = startScroll + easeValue * scrollDistance * scrollDirection;

//     window.scrollTo(0, currentPosition);

//     if (progress < scrollDuration) {
//         window.requestAnimationFrame(scrollStep);
//     } else {
//         startTime = null;
//         scrollDirection = null;
//     }
// }

// function easeInOutCubic(t, p) {
//     t /= scrollDuration / 2;
//     let x1 = p[0],
//         y1 = p[1],
//         x2 = p[2],
//         y2 = p[3];

//     if (t < 1) return 0.5 * (3 * x1 * (1 - t) * (1 - t) * t + 3 * x2 * (1 - t) * t * t + t * t * t);
//     t -= 2;
//     return 0.5 * (3 * x1 * (1 - t) * (1 - t) * t + 3 * x2 * (1 - t) * t * t + (t * t * t + 2));
// }

// document.addEventListener("wheel", function (e) {
//     const currentTime = Date.now();
//     if (!scrollDirection && currentTime - lastEventTime > throttleDelay) {
//         lastEventTime = currentTime;
//         scrollDirection = e.deltaY > 0 ? 1 : -1;
//         startScroll = window.scrollY;
//         window.requestAnimationFrame(scrollStep);
//     }
//     e.preventDefault();
// }, { passive: false });