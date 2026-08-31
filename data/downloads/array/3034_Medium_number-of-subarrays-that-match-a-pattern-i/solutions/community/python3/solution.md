# Python 3   ||   4 lines,  pairwise and map   ||   T/S: 98% / 96%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4709386/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4709386/)

---

Here's the plan:
- We map the relative changes, element to element, according to their changes, to the list`arr`. For example:
```
     nums = [1,4,4,1,3,5,5,3] --> [ 1, 0,-1,  1, 1,  1 ,0, -1]
```
- We count the subarrays equal to`pattern`.
 ___

```python3 []

class Solution:
    def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:

        n, p, ans = len(nums), len(pattern), 0
        
        f = lambda x: (x[1] > x[0]) - (x[1] < x[0])

        arr = list(map(f, pairwise(nums)))

        return sum(arr[i:i+p] == pattern for i in range(n - p + 1))
```
[https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/submissions/1370194892/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/submissions/1370194892/)


I could be wrong, but I think that time complexity is ~~*O*(*N*)~~  *O*(*NP*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and *P* ~ `len(pattern)`.