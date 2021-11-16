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

