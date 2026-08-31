# Understandable stack ruby solution

**Author:** user5329u
**Votes:** 4
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2919636/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2919636/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
# @param {String[]} tokens
# @return {Integer}

OPERATIONS = %w[+ - / *].to_set

def eval_rpn(tokens)
  stack = []
  tokens.each do |item|
    next stack << item.to_i if !OPERATIONS.include?(item)

    val2, val1 = stack.pop, stack.pop
    stack << val1.to_f.send(item, val2).to_i # because 6/-132 = -1
  end

  stack[0]
end
```