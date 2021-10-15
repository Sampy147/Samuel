//Streams and applications

//Function here will NOT lead to an infinite recursion when no arguments (e.g "()") is passed
//Not exactly an infinite stream or a finite stream too (ASK)*********************
function ones_stream() {
    return pair(1, ones_stream);
}
const M = ones_stream(); //M in this case is a stream, which made use of the function ones_stream to create the stream
//ones_stream - a nullary function that returns a stream (Perspective is from the tail of the return statement)

const s1 = null; //empty stream

function stream_ref1(s, n) {
    return n === 0
        ? head(s)
        : stream_ref1(stream_tail(s), n -1);
} 

function eval_stream1(s, n) {
    return n === 0
        ? null
        : pair(head(s), eval_stream1(stream_tail(s), n -1));
}

function enum_stream1(start, end) {
    return  start > end 
        ? null
        : pair(start, () => enum_stream1(start + 1, end));
}

//Creates a stream with params start as head, and each time stream_tail is called on it, it returns "start" times of start, before moving on to argument "start + 1" and cycle repeats till end is reached (inclusive)
//e.g more(1,4) returns a stream that contains 1,2,2,3,3,3,4,4,4,4
function more(start, end) {
    function counter(z, s, e) {
        if (s > e) {
            return null;
        } else if (z < s) {
            return pair(s, () => counter(z + 1, s, e));
        } else if (z === s) {
            return pair(s, () => counter(1, s + 1, e));
        }
    }  
    return counter(1, start, end);
}

function repeat(n, s) {
    if (is_null(s)) {
        return s;
    } else if (n > 0) {
        display(s);
        return repeat(n -1, stream_tail(s));
    }
}














