# Simple ruby soln with stack

**Author:** eyefodder
**Votes:** 0
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/4508722/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/4508722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {String}
def robot_with_string(s)
   out_str = []
   stack = []
   # maintain a count of characters
   # when you have exhausted the lowest character in the string, 
   tally = s.bytes.tally
   s.chars.each do |char|
      stack << char
      # updtae the tally to reflect the tally of chars in the remaining string
      if tally[char.ord] == 1
        tally.delete(char.ord)
        
      else
        tally[char.ord] -= 1
      end
      # while there is anything in the stack or tally
      # and last element of the stack is smaller than whats left
      # pop values onto the answer string
      while stack.any? && tally.any? && tally.keys.min >= stack[-1].ord
        out_str << stack.pop
      end
      
   end
   # pop any remaining values
   while stack.any?
    out_str << stack.pop
   end
   out_str.join
end
```