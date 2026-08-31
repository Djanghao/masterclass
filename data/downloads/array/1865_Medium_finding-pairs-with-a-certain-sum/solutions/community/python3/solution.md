# [Python3] mapping

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1211152/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1211152/)

---


```
class FindSumPairs:

    def __init__(self, nums1: List[int], nums2: List[int]):
        self.nums1 = nums1
        self.nums2 = nums2
        
        self.freq = defaultdict(int)
        for x in nums2: self.freq[x] += 1

    def add(self, index: int, val: int) -> None:
        self.freq[self.nums2[index]] -= 1
        self.nums2[index] += val
        self.freq[self.nums2[index]] += 1

    def count(self, tot: int) -> int:
        ans = 0 
        for x in self.nums1: 
            ans += self.freq[tot - x]
        return ans 
```