# Simple solution with Stack in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4282405/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4282405/)

---

# Intuition
Here we have:
- a string `s`
- our goal is to **remove** minimum count of parentheses to make string **valid**

According to the description a string is **valid**, if it meets conditions such that for **each open par** exists **closed par**.

To be short: for each par we need to store an index into `stack`, each time **open par** meets **closed par**, we can **pop** from `stack` and this pair considered as a **valid** one.

# Approach
1. declare `stack` and `ans`
2. iterate over `s`
3. check for **open par** and **push** it onto `stack`
4. otherwise check, if the last par in stack **exists**, **pop** it, otherwise this par is **invalid** one
5. iterate over all **invalid pars** of `stack` an replace them by empty string
6. return `ans`

# Complexity
- Time complexity: **O(N)**, twice iterating over `s` and `stack` in worst-case scenario

- Space complexity: **O(N)**, the same.

# Code in Python3
```
class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        ans = list(s)
        stack = []

        for i, token in enumerate(s):
            if token == '(':
                stack.append(i)
            elif token == ')':  
                if stack and s[stack[-1]] == '(':
                    stack.pop()
                else:
                    stack.append(i)
     
        for i in stack:
            ans[i] = ''

        return ''.join(ans)
```
# Code in TypeScript
```
function minRemoveToMakeValid(s: string): string {
    const stack = [];
    const ans = s.split('');

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length && s[stack[stack.length - 1]] === '(') {
                stack.pop();
            } else stack.push(i);
        }
    }

    for (let i = 0; i < stack.length; i++) ans[stack[i]] = '';

    return ans.join('');
}
```