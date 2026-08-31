# Ruby one-liner, explained (27%/91%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/4197377/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/4197377/)

---

# Approach
1. If all the numbers are 1s, then we just return the length of the sequence.
2. Otherwise, we want to find sequences of ones.  Look at each pair of consecutive sequences of 1s and add their length.  We do this by making everything a string, joining it together, splitting on '0', and changing substring to its length (then looking at each consecutive pair, adding them, and taking the max).
3. We might not have two distinct sequences of 1s.  In that case, find the length of the longest one, or 0 if there are no ones.
4. Either way, add 1 to your answer from before, since we transform a zero into a 1.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def find_max_consecutive_ones(nums)
    nums.all? { |num| num == 1 } ? nums.length : (nums.map(&:to_s).join('').split('0').map(&:length).each_cons(2).map(&:sum).max || nums.map(&:to_s).join('').split('0').map(&:length).max || 0) + 1
end


```