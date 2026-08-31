# Explained Prefix Sum - Easy understanding

**Author:** liuyunjiahang
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/3274098/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/3274098/)

---

# Intuition
For each element in the array, we track the sum of previous elements, then when there are duplicates, we substract those sums for the duplicates to get the result.

> [1, 2, 3, 1, 2]
prefix_sums = [1, 3, 6, 7, 9]
when we see the second `1`, result = [7 - 1] + 1 = 7
when we see the second `2`. result = [9 - 3] + 2 = 8

# Approach
The above assumption works well for positive elements. But what should we do for `negative` elements ?

1. we don't track sum for negative ones, because we could remove it from array to have bigger result
2. So when there are duplicate negative elements, the result should add the negativae value on more time
> [1, 2, 3, -1, 1, 2, -1]
prefix_sums = [1, 3, 6, 6, 7, 9, 9]
when we see the second `1`, result = [7 - 1] + 1 = 7
when we see the second `2`, result = [9 - 3] + 2 = 8
when we see the second `-1`, result = [9 - 6] + (-1)*2 = 1 
# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
class Solution(object):
    def maximumBeauty(self, flowers):
        """
        :type flowers: List[int]
        :rtype: int
        """

        prefix_sums = {}
        seen = {}
        prefix_sum = 0
        res = float("-inf")
        for idx, flower in enumerate(flowers):
            prefix_sum += max(flower, 0)
            prefix_sums[idx] = prefix_sum

            if flower not in seen:
                seen[flower] = idx
            else:
                if flower < 0:
                    sum_beauty = 2* flower + prefix_sum - prefix_sums[seen[flower]]
                else:
                    sum_beauty = flower + prefix_sum - prefix_sums[seen[flower]]
                res = max(res, sum_beauty)
        return res


            

```