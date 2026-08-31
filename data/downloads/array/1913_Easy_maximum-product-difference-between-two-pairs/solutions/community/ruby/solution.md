# 💎Efficient 2-line solution (with explanation) 💎

**Author:** parispanda
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4420724/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4420724/)

---

# Intuition
Initially, the problem seems to be about identifying two pairs of numbers: the pair with the maximum product and the pair with the minimum product. The straightforward approach is to sort the array, making it easy to find these pairs: the two smallest numbers and the two largest numbers.

---
\u26A1\uFE0F Please **upvote** if this helped \u26A1\uFE0F

---


# Approach
The solution involves sorting the array first. Once sorted, the two smallest numbers will be at the beginning, and the two largest numbers will be at the end of the array. The product of the two largest numbers is calculated and then subtracted from the product of the two smallest numbers to find the maximum product difference.

1. Sort the array.
2. Find the product of the two smallest numbers (`nums[0] * nums[1]`).
3. Find the product of the two largest numbers (`nums[-1] * nums[-2]`).
4. Subtract the product of the smallest numbers from the product of the largest numbers.

# Complexity
- Time complexity:
The time complexity is $$O(n log n)$$ due to the sorting step. The rest of the operations (accessing and multiplying elements) are $$O(1)$$.

- Space complexity:
The space complexity is $$O(1)$$ if we consider the sort to be in-place (not counting the space used for input storage). If not in-place, it would be $$O(n)$$ to store the sorted array.

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def max_product_difference(nums)
    nums.sort!
    nums[-1] * nums[-2] - nums[0] * nums[1]
end
```