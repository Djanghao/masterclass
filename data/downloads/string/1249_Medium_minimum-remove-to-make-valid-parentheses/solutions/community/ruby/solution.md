# Beats 100% Super Simple Stack

**Author:** BoydT44
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4982253/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/4982253/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
You can ignore all the characters except the parentheses.

Run through the string and use the stack to store indexes of any encounted `(`, if we see a `)` then we remove it unless the stack isn't empty, if the stack isn't empty we pop it.

At the end we need to remove any remaining `(` on the stack as there were no `)` to close them off. We reverse the stack so that we delete the correct indexes otherwise if remove a lower index then the higher indexes will be incorrect.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {String}
def min_remove_to_make_valid(s)
    stack = []

    i = 0
    while i < s.length
        case s[i]
        when '('
            stack << i
            i += 1
        when ')'
            if !stack.empty?
                stack.pop
                i += 1
            else
                s.slice!(i)
            end
        else
            i += 1
        end
    end

    stack.reverse.each do |index|
        s.slice!(index)
    end

    s
end
```