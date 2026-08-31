# Easy O(N * log N), 100% fast

**Author:** el777
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289622/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289622/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Ajacent values can vary only by $$1$$ by modulo. To makes things easier we can sort values ascending. So next value is the same or grater by $$1$$ as the previous one.
Next we should fix start of the array \u2013 set `0th` value to 1. 
Then we should ensure the first rule is obeyed. Loop through the values and check that next is not larger by 1. If not - set it to previous+1.

# Approach
<!-- Describe your approach to solving the problem. -->
sort
array[0] = 1
loop `array[i] = min(array[i-1] + 1, array[i])`

# Complexity
- Time complexity:
Sorting takes $$O(N * log N)$$, pass and fix array $$O(N)$$. 
Overrall \u2014 $$O(N * log N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} arr
# @return {Integer}
def maximum_element_after_decrementing_and_rearranging(arr)
    arr = arr.sort
    arr[0] = 1
    arr.reduce { |min, n| [min+1, n].min }
end
```