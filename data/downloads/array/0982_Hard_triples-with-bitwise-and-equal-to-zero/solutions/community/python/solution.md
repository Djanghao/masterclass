# Easy python approach, Hashmap

**Author:** ANiSh684
**Votes:** 1
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/5081643/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/5081643/)

---

```
class Solution:
    def countTriplets(self, nums: List[int]) -> int:
        d = {}
        for i in nums:
            for j in nums:
                d[i&j] = d.setdefault(i&j, 0) + 1
        A = 0
        for ans, count in d.items():
            for num in nums:
                if ans&num == 0:
                    A += count
        return A
```