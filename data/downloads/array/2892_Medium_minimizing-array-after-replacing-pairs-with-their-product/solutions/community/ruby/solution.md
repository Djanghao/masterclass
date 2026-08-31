# Greedy Ruby solution, explained (33%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4203313/](https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4203313/)

---

# Intuition
Starting from the left, combine as many adjacent elements as possible, then move to the next element.  Continue until the end of the array.

# Approach
1. Edge case: if there's a zero, we can turn everything into zero.  Otherwise, start with a count of 1 since we won't increment for the last element.
2. Iterate through pairs of elements in the array.  If the pair can be combined, combine them.  Otherwise, remove the first and increment count.
3. Return count.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ (or negative, since I'm actually freeing *up* space)

# Code
```
def min_array_length(nums, k)
    count = 1
    return count if nums.include?(0)

    while nums.length > 1
        val = nums.shift
        if nums[0] * val <= k
            nums[0] *= val
        else
            count += 1
        end
    end

    count
end
```