# RUBY Beats 100% Explained

**Author:** jolswlf
**Votes:** 2
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/3411739/](https://leetcode.com/problems/validate-stack-sequences/solutions/3411739/)

---

# Intuition
Two-pointer.

# Approach
Iterate through the `pushed` array and push `num` to our stack. Then pop as many elements as possible from `popped` by looking at `popped[i]` and seeing if it's equal to `stack.last`. If we pop we increase `i`. 

If at the end the stack is empty that means the sequence is valid. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def validate_stack_sequences(pushed, popped)
    stack = []
    i = 0

    pushed.each do |num|
      stack.push(num)

      while !stack.empty? && stack.last == popped[i]
        stack.pop
        i += 1
      end

    end

    stack.empty?
end
```