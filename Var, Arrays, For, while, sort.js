//Variables, Arrays, For, While loops, different sorts



//Seems like under scoping rules, const x and var x are in different scopes, thus they may look like they are declared twice here but they are not
// const x = 1;
// for (let x = 0; x <= 5; x = x + 2) {
//     display(x);
// }
// display(x);
//Programme evaluates to 2 4 1 1 

// Similar to below: c can be declared "twice" but that is because they exist in diff scopes
// const c = 1;
// function call(x) {
//     const c = 27;
//     return c;
// }
// call(20);



//Notice the difference between the 2 examples below
// let x = 1;
// for (let x = 0; x <= 5; x = x + 2) { // contains a let here
//     display(x);
// }
// display(x);
// Returns 0 2 4 1
// By scoping rules, the var x localised in the for loop is different form the global x (point to diff memory loc)
//Display x at the bottom thus points to global x, while x in the for loop is localised in the loop

// let x = 1;
// for (x = 0; x <= 5; x = x + 2) { // no let here
//     display(x);
// }
// display(x);
// Returns 0 2 4 6 
// One declaration of let. Since it is a variable, changes within the for loop changes the value of the var x



//Complements the above example
// for (let x = 1; x <= 4; x = x + 1) {
//     // do nothing
// }
// x;
// Evaluates to: Error because x is not declared
// Reason: var x in this case is localised in the for loop. In the outer scope, there is no mention of a var x existing



//++++++++++++++Some useful functions used for lists but applied to arrays here
// function map_array(f, A) {
//     const len = array_length(A);
//     let M = [];
//     for (let c = 0; c < len; c = c + 1) {
//         M[c] = f(A[c]);
//     }
//     return M;
// }


// function accumulate_array(f, init, A) {
//     const len = array_length(A);
//     let M = init;
//     for (let c = 0; c < len; c = c + 1) {
//         M = f(M, A[c]);
//     }
//     return M;
// }

// function filter_array(pred, A) {
//     const len = array_length(A);
//     const M = []; //What is the difference between putting a constant/ let here?
//     let count = 0;
//     for (let i = 0; i < len; i = i + 1) {
//       if (pred(A[i])) {
//           M[count] = A[i];
//             count = count + 1;
//       }
//     }
//     return M;
// }

//+++++++++++++++Matices Applications
// Taking a matrix, and converting its rows into columns and columns into rows
// function transpose(M) {
//     const len1 = array_length(M);
//     const len2 = array_length(M[0]);
//     const MA = [];
//     for (let i = 0; i < len2; i = i + 1) {
//         MA[i] = [];
//         for (let c = 0; c < len1 ; c = c + 1) {
//             MA[i][c] = M[c][i];
//         }
        
//     }
//     return MA;
// }



//++++++++++Variable related examples

//y evaluates to 2 rather than 3 (what i thought)
//Reason: I thought update(y) replaces all occurences of y in the function, including the name (LHS). However, it doesn't replace the name (y, LHS), only the assigned values part
// Therefore, x is 3 in this case, y remains unchangedz
/*
function update(x) {
     x = x+ 1;
}
let y = 2;
update(y);
y;
*/





//Questions:

// Difficult example
// function change1(x, val) {
//     x = val;
// }

// function change2(A, i, val) {
//     A[i] = val;
// }

// let C = [1, 2, 3, 4, 5];
// let B = C;
// change1(C[1], 7);
// change2(B, 2, 8);
// C;




//Swap function: Lecture example
//Qn: Why is the changes in the array localised in the first swap function, but changes in the array in the second swap function affects the array in the programme scope? Don't really understand the lecture explanation
// function swap(x, y, Ar) {
//     let temp = x; //temp = 1
//     x = y; // 1 = 2
//     y = temp; // 2 = 1
//     return pair(x,y);
// }
// const C = [1,2,3];
// swap(C[0], C[1], C);


//vs

// function swap1(A, x, y) {
//     let temp = A[x]; //const works here too
//     A[x] = A[y];
//     A[y] = temp;
// }


// function zero_matrix(rows, cols) {
//     const M = [];
//     let r = 0;
//     while (r < rows) {
//         M[r] = [];
//         let c = 0; 
//         while (c < cols) {
//             M[r][c] = 0;
//             c = c+ 1;
//         }
//         r = r+ 1;
//         }
//         return M;
//     }
// const m = zero_matrix(3,4);




//Misconceptions about SWAP function
// function swap(ar, x, y) {
//     let y = x; //Cannot redeclare y here and x in the line below - 'y' has already been declared in the function itself as a parameter. The environment model does not show this
//     let x= y;
//     return pair(x, y);
// }
// swap(1,2,4);

// function swap1(ar, x, y) {
//     let temp = x;
//     x = y;
//     y = temp;//A variable can be ascribed to another variable
//     return pair(x, y);
// }
//swap1(1,2,4);

//Lecture examples
// function insertion_sort(A) {
//     const len = array_length(A);
//     for (let i = 0; i < len; i = i + 1) {
//         let j = i;
//         while (j >= 1 && A[j - 1] > A[j]) {
//             swap1(A, j-1, j);
//             j = j -1;
//         }
//     }
//     return A;
// }
// insertion_sort([4,3,2,1]);

// //How to conduct selection sort
// //For each element in the array, assign a certain min position to it that dictates its position in the array, then swap the element with the element in its current position



































