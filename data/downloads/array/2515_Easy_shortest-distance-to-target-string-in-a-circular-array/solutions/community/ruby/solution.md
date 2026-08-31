# Rotate + each_with_index short solution

**Author:** AlexDashko1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/5207390/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/5207390/)

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
def closet_target(words, target, start_index)
  words.rotate!(start_index)
  words.each_with_index do |val, index|
    return index if val == target || words[-index] == target
  end
  
  -1
end
```