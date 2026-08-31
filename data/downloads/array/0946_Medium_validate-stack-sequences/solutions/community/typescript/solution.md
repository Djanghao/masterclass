# Typescript simple solution

**Author:** JinZihang
**Votes:** 2
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/1853340/](https://leetcode.com/problems/validate-stack-sequences/solutions/1853340/)

---

Idea from [this post](http://leetcode.com/problems/validate-stack-sequences/discuss/197685/C%2B%2BJavaPython-Simulation-O(1)-Space).

```
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = [];
    let j = 0;
    
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        
        while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    
    return stack.length === 0;
};
```