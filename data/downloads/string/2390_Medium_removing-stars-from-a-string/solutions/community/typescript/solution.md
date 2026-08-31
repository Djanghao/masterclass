# Stack Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 4
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/4219618/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/4219618/)

---

# Intuition
we will use stack to solve this problem
# Approach
we declare stack and do two steps while iterating over s string, first we check that current char is star ("*") if true we pop element from stack, else we push element to stack, at the end we join stack into string and return it.
# Complexity
- Time complexity:
O(n) -> we iterate n times over input string
- Space complexity:
O(n) -> we use stack to push and pop elements, worst case scenario is n
# Code
```
function removeStars(s: string): string {
    // declare empty stack
    const stack: string[] = [];
    // iterate over input string:
    for(let char of s) {
        // if current char equals "*" we pop element from stack
        if(char === "*") stack.pop()
        // else we push element into stack
        else stack.push(char)
    }
    // join array and return result string
    return stack.join('');
};
```