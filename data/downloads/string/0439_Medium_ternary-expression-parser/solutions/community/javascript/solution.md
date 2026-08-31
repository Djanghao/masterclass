# Stack-based JS solution with a functional programming twist

**Author:** dnox
**Votes:** 0
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3811721/](https://leetcode.com/problems/ternary-expression-parser/solutions/3811721/)

---

# Intuition
When faced with the problem of evaluating nested ternary expressions, a common initial thought would be to follow the natural way of how interpreters work: using a stack. The main reason is that a stack can easily handle the nested structure of the expressions and help to maintain the order of operations.

# Approach
Instead of a simple character-based stack operation, we employ a function-based approach. We push onto the stack not just the raw characters, but the actual functions that represent the ternary operation, along with their operands.

Our approach works as follows:

We iterate over the given expression from left to right. For each character, we consider it along with the next character as a token.

If the token is an opening of a ternary expression (i.e., ends with '?'), we push a function onto the stack. This function takes two operands and returns one of them based on the condition specified in the token.

If the token is an operand (i.e., ends with ':'), or if it's a single character (the last operand), we simply push it onto the stack.

After processing each token, we check if the top elements of the stack can form a complete ternary expression (i.e., a function followed by two operands). If so, we pop them from the stack, evaluate the expression, and push the result back onto the stack.

At the end, the stack should contain only one element, which is the result of the whole expression.

# Complexity
- Time complexity: `O(n)`, where `n` is the length of the expression. This is because we iterate over the expression once, and each operation (pushing to the stack, popping from the stack, evaluating a function) takes constant time.

- Space complexity: `O(n)`. In the worst case, when the expression is deeply nested, we might need to store roughly half of the expression (the functions and the first operands) on the stack before we can start evaluating anything. For example, in the expression `T?T?T?T?T?T?T?T?T?0:1:2:3:4:5:6:7:8:9`, we need to store 10 functions and 9 operands on the stack at the same time.

# Code
```
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function(expression) {
    
    let stack = []
    for (let i = 0; i < expression.length; i += 2) {
        let tok = expression.slice(i, i+2)
        if (tok.charAt(1) == '?') { // opening expr
            stack.push((op1, op2) => {
                if (tok.charAt(0) == 'T') return op1
                else return op2
            })
        } else if (tok.charAt(1) == ':') { // operand
            stack.push(tok.charAt(0))
        } else if (tok.length == 1) { // last operand
            stack.push(tok)
        }
        while (stack.length > 2 && typeof stack[stack.length-1] !== 'function' 
                                && typeof stack[stack.length-2] !== 'function') {
            let op2 = stack.pop()
            let op1 = stack.pop()
            let f = stack.pop()
            stack.push(f(op1, op2))
        }
    }

    return stack[0]
};
```