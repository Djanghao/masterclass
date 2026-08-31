# Python 3 || 8 lines, iterations  || T/S: 94%  /  88%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5207401/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5207401/)

---

here's the plan:

- First iteration (`nums`): Store the indices for each `x` of `nums` in `arr`.
- Second iteration (`queries`): Append the `q - 1` index for each `q` of `queries` to `ans`.

```
class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        
        arr, ans = [], []

        for i, num in enumerate(nums):
            if num == x: 
                arr.append(i)
 
        for q in queries:
            if len(arr) < q: ans.append(-1)
            else: ans.append(arr[q-1])

        return ans     
```
[https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/submissions/1267722777/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/submissions/1267722777/)



I could be wrong, but I think that time complexity is *O*(*N* + *M*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and *M* ~ `len(queries)`.