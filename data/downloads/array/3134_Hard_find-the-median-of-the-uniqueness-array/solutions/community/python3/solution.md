# Python 3 || 13 lines,  bisect_left || T/S: 79% / 89%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5092699/](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5092699/)

---

```
class Solution:
    def medianOfUniquenessArray(self, nums: List[int]) -> int:
        
        def not_less_than_median(x: int, cnt = 0, left = -1)-> bool:

            d = defaultdict(int)
            
            for rght in range(n):
                d[nums[rght]]+= 1

                while len(d) > x:
                    left+= 1
                    d[nums[left]] -= 1
                    if d[nums[left]] == 0: del d[nums[left]]

                cnt+= rght - left
                if cnt >= median: return True

            return False
        

        n = len(nums)
        median = (comb(n+1,2) + 1) // 2
        return bisect_left(range(n), 
                            True, key = not_less_than_median)
```
[https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/submissions/1245910682/](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/submissions/1245910682)



I could be wrong, but I think that time complexity is *O*(*N*log*N*), and space complexity is *O*(*N*)  in which *N* ~ `len(nums)`.