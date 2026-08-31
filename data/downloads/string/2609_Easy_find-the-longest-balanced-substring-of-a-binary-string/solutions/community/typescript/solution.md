# O(n) Time complexity Stack based solution

**Author:** noobie_x
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4808873/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/4808873/)

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
```
// Time complexity = O(n)
// Space Complexity = O(n)
function findTheLongestBalancedSubstring(s: string): number {
  // case 1: if val is 0, push into stack. Make count = 0;
  // case 2: if val is 1. pop stack if exists and add 2 to count. check max
  // case 3: if val is 1 and if stack is empty. make count = 0;
    let [count,max] = [0,0];
    let stack = [];
    let prev = '';
    for(let i = 0; i < s.length; i++) {
        if(i > 0) {
            prev = s[i-1];
        }
        if(s[i] === '0') {
            if(prev === '1') {
                stack = [];
            }
            stack.push('val');
            count = 0;
        } else if (s[i] === '1' && stack.length) {
            count += 2;
            max = Math.max(count, max);
            stack.pop();
        } else {
            count = 0;
        }
    } 
    return max;
};

```