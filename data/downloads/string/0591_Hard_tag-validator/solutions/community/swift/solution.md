# Solution for this problem.

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/tag-validator/solutions/5075588/](https://leetcode.com/problems/tag-validator/solutions/5075588/)

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
var isValid = function(code) {
    const tagStack = [];
    let i = 0;
    
    while (i < code.length) {
        if (i > 0 && tagStack.length === 0) return false;
        
        if (code.startsWith('</', i)) {
            const endIndex = code.indexOf('>', i + 2);
            if (endIndex === -1) return false;
            const tagName = code.substring(i + 2, endIndex);
            if (tagStack.length === 0 || tagStack.pop() !== tagName) return false;
            i = endIndex + 1;
        } else if (code.startsWith('<![CDATA[', i)) {
            const endIndex = code.indexOf(']]>', i + 9);
            if (endIndex === -1) return false;
            i = endIndex + 3;
        } else if (code.startsWith('<', i)) {
            const endIndex = code.indexOf('>', i + 1);
            if (endIndex === -1 || endIndex - i > 11) return false;
            const tagName = code.substring(i + 1, endIndex);
            if (!tagName.match(/^[A-Z]{1,9}$/)) return false;
            tagStack.push(tagName);
            i = endIndex + 1;
        } else {
            i++;
        }
    }
    
    return tagStack.length === 0;
};

```