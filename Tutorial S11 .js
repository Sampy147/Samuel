
//Tutorial S11

//Q2a

//1. 
const alt_ones0 = pair(1, () => pair(-1, () => alt_ones0));
//2. 
const alt_ones1 = pair(1, () => stream_map(x => -x, alt_ones1));
//3. 
function alt_ones2(count) {
    return count%2 === 0
        ? pair(-1, () => alt_ones2(count + 1))
        : pair(1, () => alt_ones2(count + 1)); 
}
alt_ones2(0);

//Q2b
//1. 
add_streams(alt_ones0, negate_series(alt_ones0));
//OR
subtract_series(alt_ones0, alt_ones0);

//2.
stream_map(x=> 0, alt_ones0);


//Q2c (MAIN QN)
//Define S1 = 1 + x + x2 + x3 + ⋯

function s1(value) {
    return pair(1, () => stream_map(x => x * value, s1(value)));
}

//Define S2 = 1 + 2x + 3x2 + 4x3 + ⋯
const integers = start => pair(start, () => integers(start + 1));

function mul_streams(a,b) {
        return pair(head(a) * head(b),
                        () => mul_streams(stream_tail(a), stream_tail(b)));
}
                        
function s2(value) {
    return mul_streams(s1(value), integers(1));
}


// 

// function scale_stream(c, stream) {
// return stream_map(x => c * x, stream);
// }

// const add_series = add_streams;

// const scale_series = scale_stream;

// function negate_series(s) {
// return scale_series(-1, s);
//}

// function subtract_series(s1, s2) {
// return add_series(s1, negate_series(s2));
// }


//In class assignment

stream_append( 
    stream_map( sn => pair(head(s), sn), stream_tail(s)), 
      stream_pairs(stream_tail(s)));
      
stream_append( 
    stream_map( sn => pair(head(s), sn), stream_tail(s)), 
    
      stream_append(stream_map( sn => pair(head(s), sn), stream_tail(s)))
      
        stream_pairs(stream_tail(s))));
        
(1,2), (1,3), (1,4), (1,5), ()





      



















































