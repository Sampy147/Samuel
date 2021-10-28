function eval_array_expression(expr) {
    // your solution goes here
    if (is_null(array_elements(expr))) {
        return [];
    } else if (!is_null(expr)) {
    const k = array_elements(expr); //head(tail(expr))
    let arr = [];
    let j = 0;
    display(head(k));
    arr[j] = evaluate(head(k)); 
    j = j + 1;
    return eval_array_expression(k);
    }  
}
[ "array_expression",
[ [["literal", [1, null]], [["literal", [2, null]], [["literal", [3, null]], null]]],
null]]

//parsing a string into this function (e.g evaluate(parse(expr)) returns the 
//result you wnna get at the end of the day. In other words, this is the main function)
//e.g after parsing through a "1" is list("literal", 1)

//All the is_... functions refer to checking the head of the pair of the component, and whether 
//that corresponds to a particular tag (e.g is_literal checks whether the tag is )

//
function evaluate(expr) { 
    return is_literal(expr)
           ? literal_value(expr) //literally returns the literal string e.g "1", "+" etc. if expr is literal
           : is_operator_combination(expr) //check if head has tag - binary operator combination
           ? apply(operator_combination_operator_symbol(expr), //returns operator_symbol
               list_of_values( //maps evaluate to the list below
                 list(operator_combination_first_operand(expr), //return first operand e.g "2". Apply maps evaluate function to this first operand. This is required because operator combi first operand may not return a number, can return another complex expression. Thus need for recursion.
                      operator_combination_second_operand(expr))))  //return second operand e.g "5". Application of evaluate via the apply function is necessary to ensure that the expr is finally reduced to literals/conditionals
           : is_array_expression(expr)
           ? eval_array_expression(expr)// means when parse("[1,2+2,3]"), it'll return a syntax tree. 
           : error(expr, "Unknown expression: ");
}