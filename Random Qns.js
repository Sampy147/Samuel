// function d(x) {
//     if (x > 3) {
//         return 5;
//     } else {
//         return x=> x;
//     }
// }

// d(4);

// const f = (g, x) => () => ((x) => g(x * 2))(x);
// f(x=>x+1,3)();

// function f(g, x) {
//     function d()   {
//          function c(x) {
//             return g(x * 2);
//          }
//         return c(x);
//     }
//   return d;
// }

// f(x=>x+1, 3)();



// function f(g,x){
//     return g(x*2);
// }



// function d_split_list(xs) {

//     // *** Your answer here. ***
//     const len = length(xs);
//     let second_half = xs;
//     let x = 0;
//     while (x < math_ceil(len/2) -1){
//         second_half = tail(second_half);
//         x = x + 1;
//     } 
//     let second_half1 = tail(second_half);
//     set_tail(second_half, null);
//     return pair(xs, second_half1);
// }


// // // TEST:
// const my_list1 = list(1, 2, 3, 4, 5);
// // const my_list2 = list(5, 4, 3, 2, 1);
//  d_split_list(my_list1);
// // // d_split_list(my_list2);



