//////////////////////Question 1:

//A.1

function last_member(x, xs) { 
 
    function find_last_member(ys, current_last) { 
        let next = member(x, ys); //new list created
        return is_null(current_last)
            ? null
            : find_last_member(remove(x, next), next);
        
    } 
 
    return find_last_member(xs, null); 
} 

//A.2
//Ans: Thetat(n^2) if the list consist of n occurences of the last member

//A.3
//Ans: Theta(n) (Not too sure here)
//I know that the subexpressions remove(x, next) is evaluated before the recursive function is called, so at any one time, max space consumption is n

//B.
function is_subset(S, T) { 
 
    if (is_null(S)) { 
 
        return true;
 
 
 
    } else if (is_null(T)) { 
 
 
        return true;
 
 
    } else if (head(S) < head(T)) { 
 
        return false;
 
    } else if (head(S) === head(T)) { 
 
 
        return is_subset(tail(S), tail(T));
 
 
    } else { //head(s) >= head(T)
 
 
        return is_subset(S, tail(T));
 
 
    } 
 
}



//C.1
//head(p) is pair(1, null) AFTER CORRECTION: list(1,3,5,7)
//tail(p) is null AFTER CORRECTION: list(2,4,6,8)

//C.2
//value is:  list("A", "T", "Q", "U", "R", "P")


//D.

function mutable_append(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else {
        set_tail(xs, mutable_append(tail(xs), ys));
        return xs;
    }
}

//E.

function transform_tree(t) {
    if (is_null(t)) {
        return null;
    } else {
        return map(x => funky(x), reverse(t));
    }
}

function funky(x) {
    if (is_null(x)) {
        return null;
    } else if (is_number(x)) {
        return x;
    } else if (is_list(x)) {
        return map(x=> funky(x), reverse(x));
    }
}

//F.

function shorten_stream(s, k) {
    
    if (k <= 0) {
        return null;
    } else if (is_null(s)) {
        return null;
    } else {
        return pair(head(s), () => shorten_stream(stream_tail(s), k -1));
    }

}

//Qn 2.

//B
function is_linked(x, y) {//check if head(x) is found in y 
    return is_null(tail(y))
        ? false
        : head(x) === head(head(tail(y))) || is_linked(x, tail(y));
}

//Think of alternative later

//C
//returns true if nodex is proper and false otherwise
//not exactly sure what this qn is saying
function is_proper(x) {
    //find if there is another head(x) in the x-list
    //if there is, then it is proper
    const headx = head(x);
    const xlist = tail(x);
    function help(x) {
        if (is_null(xlist)) {
            return false;
        } else {
            return headx === head(head(x)) || help(tail(x));
        }
    }
    return help(xlist);
}

//Pretty sure there's a more efficient way around as well

//D
//Function seems exactly the same as is_linked (almost)

function is_connected(x, y) {//check if head(x) is found in y 
    return head(x) === head(y)
        ? true
        : is_linked(x, y);
}



//3
//A

//Given function
function plus_cps(x, y, ret) { 
    return ret(x + y); 
} 

//Ans function
function sum_cps(x, y, z, ret) {
    return plus_cps(x,y, ret1 => ret(ret1 + z)) ;
}


//3
//B

//Given function 
// function factorial(n) { 
//     if (n <= 0) { 
//         return 1; 
//     } else { 
//         return n * factorial(n – 1); 
//     } 
// } 


//Ans function in CPS
function factorial(n, ret) {
    if (n <= 0) {
        return ret(1);
    } else {
        return factorial(n - 1, result => ret(n * result));
    }
}


//C(i)

//Given function

// function fact_iter(n, acc) { 
//     if (n <= 0) { 
//         return acc; 
//     } else { 
//         return fact_iter(n – 1, n * acc); 
//     } 
// } 

// function factorial_iter(n) { 
//     return fact_iter(n, 1); 
// } 
// factorial_iter(5);  // returns 120 

//Ans function 
function fact_iter_cps(n, acc, ret) { 
    if (n <= 0) { 
        return ret(acc); //The only change here. Because as long as acc is displayed at the end, it is considered cps
    } else { 
        return fact_iter_cps(n - 1, n * acc, ret); 
    } 
} 
 
function factorial_iter_cps(n, ret) { 
    return fact_iter_cps(n, 1, ret); 
} 
 
factorial_iter_cps(5, display);  // displays 120 

//C(ii)
//Can I characterise iterative functions wrt CPS?
//When we turn iterative functions into CPS, the continuation function is only applied at the base case, and not applied in the recursive call.
//This is unlike the original continuation function. Thus we cannot characterise iterative functions wrt CPS


//4
