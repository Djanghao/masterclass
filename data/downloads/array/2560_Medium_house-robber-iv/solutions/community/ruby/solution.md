# Ruby solution using binary search with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3586077/](https://leetcode.com/problems/house-robber-iv/solutions/3586077/)

---

# Intuition
It's easy to check if a given capability is possible.  Use binary search to find the minimum capability.

# Approach
1. Perform a binary search from the minimum num in the array to the maximum to find the smallest possible capability.
2. To check if a capability is possible:
    - Iterate through the array.  If the number if <= the max allowed, skip two spaces and decrement k by one.
    - Check if k is <= 0 (i.e., you were able to rob at leaat k houses)

# Complexity
- Time complexity:
$$O(n * log(k))$$, where *k* is the difference between nums.max and nums.min.

- Space complexity:
$$O(1)$$

# Code
```
def min_capability(nums, k)
    @nums = nums

    (nums.min..nums.max).bsearch { |max| possible?(max,k) }
end

def possible?(max,k)
    i = 0

    while i < @nums.length
        if @nums[i] > max # can't count this one
            i += 1
        else
            k -= 1
            i += 2 # skip the next house
        end
    end

    k <= 0 # we were able to rob at least k houses
end
```