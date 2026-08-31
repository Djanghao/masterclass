# 🌟 Beats 100.00% || Stack Implementation 👏 || A Comprehensive Step-by-Step Breakdown

**Author:** UK07
**Votes:** 31
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5939362/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5939362/)

---

# Intuition
The problem is about evaluating a boolean expression given in a string format with nested logical operators. The key idea is to evaluate the expression in a structured way, handling the nested nature of the operators (`&`, `|`, `!`) and the boolean values (`t` for true, `f` for false).

Since the expression can have multiple levels of nested parentheses, a stack can be a good data structure to keep track of the ongoing operations and values until we reach a complete subexpression. Once a subexpression is complete (identified by the closing `)`), we can evaluate it and push the result back onto the stack.

# Approach
The approach revolves around using a stack to handle the nested structure of the boolean expression:
1. **Stack Push**: Traverse the expression character by character. If the character is not a closing parenthesis `)`, push it onto the stack.
2. **Subexpression Evaluation**: When encountering a closing parenthesis `)`, pop the stack to collect the boolean values for the current subexpression, evaluate it according to the preceding operator (`&`, `|`, `!`), and push the result back onto the stack.
3. **Repeat**: This process continues until the entire expression is processed, leaving the final result at the top of the stack.

Key details:
- The `&` operator evaluates to true only if all values are true.
- The `|` operator evaluates to true if at least one value is true.
- The `!` operator negates a value.

# Complexity
- Time complexity:  
  The time complexity is $$O(n)$$, where `n` is the length of the expression. Each character is processed once when pushed to the stack and once when popped, leading to linear time complexity.

- Space complexity:  
  The space complexity is $$O(n)$$, where `n` is the length of the expression. The stack can hold up to `n` characters, and we use additional space to store boolean values for subexpressions.

# Code Breakdown:
1. **Stack Initialization**: A stack is used to store characters of the expression as we process them.
2. **Iterating through the expression**: For each character in the expression:
   - If it's a valid character (not `)` or `,`), push it onto the stack.
   - When encountering `)`, this signals the end of a subexpression. The boolean values are popped off the stack and evaluated based on the operator before the corresponding `(`.
3. **Subexpression Evaluation**: After collecting the boolean values, the appropriate logical operation (`&`, `|`, `!`) is applied, and the result is pushed back onto the stack.
4. **Final Result**: After processing the entire expression, the result (either `t` or `f`) is at the top of the stack.

# Code
```cpp []
class Solution {
public:
    bool parseBoolExpr(string expression) {
        stack<char> stk;  // Stack to hold characters and operators
        
        // Iterate over each character in the expression
        for (char c: expression) {
            // Push valid characters (non ')' and non ',') to the stack
            if (c != ')' && c != ',') stk.push(c);
            else if (c == ')') {  // When ')' is encountered, evaluate subexpression
                vector<bool> exp;  // Vector to hold boolean values of the current subexpression
                
                // Pop characters until '(' is found, collect 't' or 'f' values
                while (!stk.empty() && stk.top() != '(') {
                    char t = stk.top(); 
                    stk.pop();
                    if (t == 't') exp.push_back(true);
                    else exp.push_back(false);
                }
                
                stk.pop();  // Pop the '(' from the stack
                
                if (!stk.empty()) {
                    char t = stk.top();  // Get the operator before '('
                    stk.pop();
                    bool v = exp[0];  // Initialize result with the first value
                    
                    // Perform the corresponding logical operation
                    if (t == '&') {  // AND operation: all values must be true
                        for (bool b: exp) v &= b;
                    } else if (t == '|') {  // OR operation: at least one value is true
                        for (bool b: exp) v |= b;
                    } else {  // NOT operation: negate the first value
                        v = !v;
                    }
                    
                    // Push the result back to the stack as 't' or 'f'
                    if (v) stk.push('t');
                    else stk.push('f');
                }
            }
        }
        
        // Return the final result from the stack
        return stk.top() == 't' ? true : false;
    }
};
```
```java []
class Solution {
    public boolean parseBoolExpr(String expression) {
        Stack<Character> stk = new Stack<>();  // Stack to hold characters and operators

        // Iterate over each character in the expression
        for (char c : expression.toCharArray()) {
            // Push valid characters (non ')' and non ',') to the stack
            if (c != ')' && c != ',') stk.push(c);
            else if (c == ')') {  // When ')' is encountered, evaluate subexpression
                ArrayList<Boolean> exp = new ArrayList<>();  // List to hold boolean values
                
                // Pop characters until '(' is found, collect 't' or 'f' values
                while (!stk.isEmpty() && stk.peek() != '(') {
                    char t = stk.pop();
                    if (t == 't') exp.add(true);
                    else exp.add(false);
                }
                
                stk.pop();  // Pop the '(' from the stack
                
                if (!stk.isEmpty()) {
                    char t = stk.pop();  // Get the operator before '('
                    boolean v = exp.get(0);  // Initialize result with the first value
                    
                    // Perform the corresponding logical operation
                    if (t == '&') {  // AND operation
                        for (boolean b : exp) v &= b;
                    } else if (t == '|') {  // OR operation
                        for (boolean b : exp) v |= b;
                    } else {  // NOT operation
                        v = !v;
                    }
                    
                    // Push the result back to the stack as 't' or 'f'
                    if (v) stk.push('t');
                    else stk.push('f');
                }
            }
        }

        // Return the final result from the stack
        return stk.peek() == 't';
    }
}
```
```python []
class Solution:
    def parseBoolExpr(self, expression: str) -> bool:
        stk = []  # Stack to hold characters and operators
        
        # Iterate over each character in the expression
        for c in expression:
            if c != ')' and c != ',': 
                stk.append(c)  # Push valid characters to the stack
            elif c == ')':  # When ')' is encountered, evaluate subexpression
                exp = []  # List to hold boolean values of the current subexpression
                
                # Pop characters until '(' is found, collect 't' or 'f' values
                while stk and stk[-1] != '(':
                    t = stk.pop()
                    exp.append(True if t == 't' else False)
                
                stk.pop()  # Pop the '(' from the stack
                
                if stk:
                    t = stk.pop()  # Get the operator before '('
                    v = exp[0]  # Initialize result with the first value
                    
                    # Perform the corresponding logical operation
                    if t == '&':  # AND operation
                        for b in exp:
                            v &= b
                    elif t == '|':  # OR operation
                        for b in exp:
                            v |= b
                    else:  # NOT operation
                        v = not v
                    
                    # Push the result back to the stack as 't' or 'f'
                    stk.append('t' if v else 'f')
        
        # Return the final result from the stack
        return stk[-1] == 't'
```
```javascript []
var parseBoolExpr = function(expression) {
    let stk = [];  // Stack to hold characters and operators

    // Iterate over each character in the expression
    for (let c of expression) {
        if (c !== ')' && c !== ',') {
            stk.push(c);  // Push valid characters to the stack
        } else if (c === ')') {  // When ')' is encountered, evaluate subexpression
            let exp = [];  // Array to hold boolean values of the current subexpression
            
            // Pop characters until '(' is found, collect 't' or 'f' values
            while (stk.length > 0 && stk[stk.length - 1] !== '(') {
                let t = stk.pop();
                exp.push(t === 't');
            }
            
            stk.pop();  // Pop the '(' from the stack
            
            if (stk.length > 0) {
                let t = stk.pop();  // Get the operator before '('
                let v = exp[0];  // Initialize result with the first value
                
                // Perform the corresponding logical operation
                if (t === '&') {  // AND operation
                    for (let b of exp) v = v && b;
                } else if (t === '|') {  // OR operation
                    for (let b of exp) v = v || b;
                } else {  // NOT operation
                    v = !v;
                }
                
                // Push the result back to the stack as 't' or 'f'
                stk.push(v ? 't' : 'f');
            }
        }
    }

    // Return the final result from the stack
    return stk[stk.length - 1] === 't';
};
```
```golang []
func parseBoolExpr(expression string) bool {
    stk := []rune{}  // Stack to hold characters and operators

    // Iterate over each character in the expression
    for _, c := range expression {
        if c != ')' && c != ',' {
            stk = append(stk, c)  // Push valid characters to the stack
        } else if c == ')' {  // When ')' is encountered, evaluate subexpression
            exp := []bool{}  // Slice to hold boolean values of the current subexpression
            
            // Pop characters until '(' is found, collect 't' or 'f' values
            for len(stk) > 0 && stk[len(stk)-1] != '(' {
                t := stk[len(stk)-1]
                stk = stk[:len(stk)-1]
                exp = append(exp, t == 't')
            }
            
            stk = stk[:len(stk)-1]  // Pop the '(' from the stack
            
            if len(stk) > 0 {
                t := stk[len(stk)-1]  // Get the operator before '('
                stk = stk[:len(stk)-1]
                v := exp[0]  // Initialize result with the first value
                
                // Perform the corresponding logical operation
                if t == '&' {  // AND operation
                    for _, b := range exp {
                        v = v && b
                    }
                } else if t == '|' {  // OR operation
                    for _, b := range exp {
                        v = v || b
                    }
                } else {  // NOT operation
                    v = !v
                }
                
                // Push the result back to the stack as 't' or 'f'
                if v {
                    stk = append(stk, 't')
                } else {
                    stk = append(stk, 'f')
                }
            }
        }
    }

    // Return the final result from the stack
    return stk[len(stk)-1] == 't'
}
```
```rust []
impl Solution {
    pub fn parse_bool_expr(expression: String) -> bool {
        let mut stk = VecDeque::new();  // Stack to hold characters and operators

        // Iterate over each character in the expression
        for c in expression.chars() {
            if c != ')' && c != ',' {
                stk.push_back(c);  // Push valid characters to the stack
            } else if c == ')' {  // When ')' is encountered, evaluate subexpression
                let mut exp = Vec::new();  // Vector to hold boolean values
                
                // Pop characters until '(' is found, collect 't' or 'f' values
                while let Some(&top) = stk.back() {
                    if top == '(' {
                        break;
                    }
                    stk.pop_back();
                    exp.push(top == 't');
                }
                
                stk.pop_back();  // Pop the '(' from the stack
                
                if let Some(&op) = stk.back() {
                    stk.pop_back();
                    let mut v = exp[0];  // Initialize result with the first value
                    
                    // Perform the corresponding logical operation
                    if op == '&' {  // AND operation
                        for &b in &exp {
                            v &= b;
                        }
                    } else if op == '|' {  // OR operation
                        for &b in &exp {
                            v |= b;
                        }
                    } else {  // NOT operation
                        v = !v;
                    }
                    
                    // Push the result back to the stack as 't' or 'f'
                    if v {
                        stk.push_back('t');
                    } else {
                        stk.push_back('f');
                    }
                }
            }
        }

        // Return the final result from the stack
        stk.back() == Some(&'t')
    }
}
```
![image.png](./images/0.png)
