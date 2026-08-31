# Example with Ruby Code

**Author:** nhantranfit
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/6119682/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/6119682/)

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
```ruby []
# @param {String} boxes
# @return {Integer[]}
def min_operations(boxes)
    n = boxes.length
    answer = Array.new(n, 0)
    operiations = 0
    count = 0

    #from left to right

    (0...n).each do |i|
        answer[i] += operiations
        count += 1 if boxes[i] == '1'
        operiations += count
    end

    operiations = 0
    count = 0

    #from right to left
    (n - 1).downto(0).each do |i|
        answer[i] += operiations
        count += 1 if boxes[i] == '1'
        operiations += count
    end
    answer
end
```