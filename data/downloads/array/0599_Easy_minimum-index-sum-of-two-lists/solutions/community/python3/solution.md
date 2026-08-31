# 599: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/3306264/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/3306264/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Find the common elements between both lists using the set intersection operator & and store the result in a variable called common.

Initialize a dictionary called index_sum to store the index sum of common elements in list1.

Iterate through each element r in list1 and for each element:

If r is in common, store the index sum of r in index_sum.
Iterate through each element r in list2 and for each element:

If r is in common, add the index sum of r to its corresponding value in index_sum.
Find the minimum value in index_sum and store it in a variable called min_sum.

Return a list of elements in index_sum whose value is equal to min_sum.

End of the algorithm.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        common = set(list1) & set(list2)  # Find common elements between both lists
        index_sum = {}
        for i, r in enumerate(list1):
            if r in common:
                index_sum[r] = i  # Store index sum of common elements in list1
        for i, r in enumerate(list2):
            if r in common:
                index_sum[r] += i  # Add index sum of common elements in list2
        min_sum = min(index_sum.values())  # Find minimum index sum
        return [r for r, s in index_sum.items() if s == min_sum]  # Return elements with minimum index sum

```