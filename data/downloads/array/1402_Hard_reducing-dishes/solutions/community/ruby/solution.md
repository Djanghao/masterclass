# Ruby solution : simple using greedy

**Author:** ShaliniNair
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3353943/](https://leetcode.com/problems/reducing-dishes/solutions/3353943/)

---

# Intuition
If it walks like its greedy, quackslike its greedy, it must be greedy!

# Approach
1. Sort the input array in decreasing order (this seems counter-intuitive, but hang on!). 
2. Calculate result by adding non-negative prefix sums of the elements
3. Stop when the prefix sum becomes negative and return the result

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
# @param {Integer[]} satisfaction
# @return {Integer}
def max_satisfaction(satisfaction)
    satisfaction.sort!.reverse!
    result = 0
    prefix_sum = 0
    satisfaction.each_with_index do |dish, idx|
      prefix_sum += satisfaction[idx]
      break if prefix_sum < 0
      result += prefix_sum
    end
    result
end




```