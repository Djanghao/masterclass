# It is the easiest to aproach in typescript

**Author:** raeezrazz
**Votes:** 9
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991490/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991490/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function makeFancyString(s: string): string {
    let stack: string[] = [];
    for (let i: number = 0; i < s.length; i++) {
// Here it checks whether the stack is length greater than 2 ,that means it have minimum 2 strings available in the stack
// also it checks whether the last two strings are same to the third one that means there is adjusent same letters . if so we remove it
        if (stack.length >= 2 && stack[stack.length - 2] === s[i] && stack[stack.length - 1] === s[i]) {
            continue; 
        }
        stack.push(s[i]);
    }
    return stack.join('');
}
```