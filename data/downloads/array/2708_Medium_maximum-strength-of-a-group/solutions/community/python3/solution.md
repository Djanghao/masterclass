# Python Elegant & Short | Remove maximum from negative | Commented | O(n)

**Author:** Kyrylo-Ktl
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568541/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3568541/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$


# Code
```
class Solution:
    def maxStrength(self, nums: List[int]) -> int:
        contains_zero = False
        positive = []
        negative = []

        for num in nums:
            if num > 0:
                positive.append(num)
            elif num < 0:
                negative.append(num)
            else:
                contains_zero = True

        # If the product of negative numbers is negative
        if len(negative) & 1:
            # If there is more than one negative number,
            # then their product can be positive.
            if len(negative) > 1:
                negative.remove(max(negative))
            # If not, then the product of positive numbers is sufficient
            elif positive:
                return prod(positive)
            # If not again, then zero is greater than negative numbers.
            elif contains_zero:
                return 0
            # If again not, then return the maximum among the negative
            else:
                return max(negative)

        # Consists of zeros only
        if not (negative or positive):
            return 0

        return prod(negative) * prod(positive)
```

# Important
If you like this solution remember to **upvote it** to let me know.
