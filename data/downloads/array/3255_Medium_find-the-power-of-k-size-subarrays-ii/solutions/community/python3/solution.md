# Python 3 || 3 lines, list comprehension  ||

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5651504/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5651504/)

---

Here's the plan:

Suppose 
```
            nums = [7, 8, 9, 10, 1, 2, 3] and k = 3
```
1. We determine a boolean list on whether each element of `nums` is the consecutive successor of the previous element:
```
       is_consec = [True, True, True, False, True, True]
```
2. We use a lambda function to count consecutive values of `True` in `is_consec`:
```
                 acc = [1, 2,     3, 4, 1, 2, 3]
```
3. Starting with the third element of `acc`, we replace each element by the corresponding element of `nums` or by -1, as directed by the problem description and return it as the solution.

```
                    return      [9, 10, -1, -1, 3]
```
_____
Here's the code:
```
class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:

        is_consec = [a - b == 1 for a, b in zip(nums[1:], nums)]    # <-- 1)

        acc = list(accumulate(is_consec, 
                  lambda x,y: x+y if y == 1 else 1, initial = 1))   # <-- 2)

        return [num if cnt >= k else -1                             # <-- 3)
                   for num, cnt in zip(nums[k-1:], acc[k-1:])]
    
```
[https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/submissions/1359324264/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/submissions/1359324264/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.