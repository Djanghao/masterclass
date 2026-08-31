# Javascript iterative - stack with comments

**Author:** eightseconds
**Votes:** 19
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/1625909/](https://leetcode.com/problems/basic-calculator/solutions/1625909/)

---

```
var calculate = function(s) {
    let sign = 1, sum = 0;
    
    const stack = []; 
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] >= '0' && s[i] <= '9') {
            let num = 0
			// num can be multiple digits, iterate to build full num.
            while (s[i] >= '0' && s[i] <= '9') {
                num = (num * 10) + (s[i] - '0');
                i += 1;
            }
			// add your completed sum.
            sum += (num * sign);
			// while loop from earlier causes our index to move forward once, bring it back
            i -= 1;
        } else if (s[i] === '+') {
            sign = 1;
        } else if (s[i] === '-') {
            sign = -1;
        } else if (s[i] === '(') {
			// open parens signifies that we should calculate the inside of the parens first and store the outer sum and sign in stack. 
			// we can later retrieve the values in our stack once we find a closing bracket.
            stack.push(sum);
            stack.push(sign);
            sum = 0
			// we used our sign, reset it to default.
            sign = 1;
        } else if (s[i] === ')') {
			// closing bracket assumes we've calculated the sum inside the parens. 
			// Earlier, we pushed the sum first into our stack. First pop will be the sign. Second pop will be the outer sum.
            sum = stack.pop() * sum;
            sum += stack.pop();
        }
    }
    
    return sum;
};
```