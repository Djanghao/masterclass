# Stack. Readable solution

**Author:** olegt
**Votes:** 2
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402432/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using stack to store chars visited non * chars. Iterating over input string if current char is "*" then removing top char from the stack.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
# @param {String} s
# @return {String}
def remove_stars(s)
    stack = []
    s.each_char { |ch|
        if ch == "*" 
            stack.pop
        else 
            stack << ch
        end
    } 
    return stack.join("")
end
```