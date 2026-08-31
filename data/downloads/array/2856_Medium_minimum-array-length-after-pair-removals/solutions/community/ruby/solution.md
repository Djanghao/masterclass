# Ruby solution using tally, explained (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052198/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052198/)

---

# Intuition
Because nums are sorted, any number can be paired with any different number and deleted.  Barring repeats, we can remove an even number or elements until there are 0 or 1 left.

# Approach
1. Tally the elements of nums.
2. Find the most frequent element.
3. If this element is more than half of the array, eliminate all other elements and an equal number of this element.  Return the remaining copies of this element.
4. Otherwise, eliminate pairs of elements until there are 0 or 1 left.

Note that we don't have to actually eliminate the elements, just return the number remaining.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def min_length_after_removals(nums)
    count = nums.tally
    max_freq = count.values.max
    if max_freq > nums.length - max_freq
        extra = nums.length - max_freq
        max_freq - extra
    else
        nums.length % 2
    end
end
```