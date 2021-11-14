//function split: takes n rocks as argument. Find out the max anyone can earn by splitting n rocks
//when n rocks are split to n -k and k rocks, amt earned is (n-k)(k)

//Binary tree split
//basically takes n divide by 2, then n/2 * n/2 as amt
function split(n,k) {
    function helper(n,k) {
        if (n <= 1) {
            //amount = amount + n;
            return 0;
        } else {
            let new_n = n - k;
            let new_n2 = k;
            //amount = amount + new_n*new_n;
            return new_n * new_n2 + helper(n-k) + helper(k);
        }
    }
    return helper(n);
}

function split_efficient(n){
    //returns the highest amt earned - combination of k applied recursively to achieve the highest amt
        return 0;
}
split(16);

function split_add(tree){
    
    else if (is_number(head(tree)) && is_number(head(tail(tree))) {
        if (head(tree) > head(tail(tree))) {
            sum = head(tree) + sum;
        } else {
            sum = head(tail(tree)) + sum;
        }
    } else {
        if (split_help(head(tree)) > split_help(head(tail(tree)))){
            sum = sum + head(tree);
        } else {
            sum = sum + head(tail(tree));
        }
    }

}

//8*8 + 4*4*2 + 4*2*2 + 8;
