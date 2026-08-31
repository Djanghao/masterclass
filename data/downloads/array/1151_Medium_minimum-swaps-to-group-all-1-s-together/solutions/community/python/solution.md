# [Python] concise & readable

**Author:** cenkay
**Votes:** 22
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/355445/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/355445/)

---

* We should collect all 1's together in l length array.
* Slide window of size l and
* Find that window that has least number of zeros to swap
```
class Solution:
    def minSwaps(self, data: List[int]) -> int:
        l = data.count(1)
        mn = cur = data[:l].count(0)
        for i in range(l, len(data)):
            cur += not data[i] 
            cur -= not data[i - l]
            mn = min(mn, cur)
        return mn
        
```