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
    const newlist = map(x => list(x), xs);
    //display(newlist);
    function helper(xs, ys) {
        if (is_null(xs) || is_null(tail(xs))) {
            return ys;
        } else {
            set_tail(head(xs), helper(head(tail(xs)), ys));
            display(xs);
        }
        
    }
    
    return helper(newlist, ys);
}

const A = list(1,2,3);
const B = list(4,5,6);
mutable_append(A, B);
A;

function d_append(xs, ys) {
if (is_null(xs)) {
return ys;
} else {
set_tail(xs, d_append(tail(xs), ys));
return xs;
}
}


//set_tail(null, list(1,2,3));
 



