# Runtime 97% | Python easy hashmap solution

**Author:** vanigupta20024
**Votes:** 22
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1103188/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1103188/)

---

```
class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        hashmap = {}
        for i in nums:
            if i in hashmap.keys():
                hashmap[i] += 1
            else:
                hashmap[i] = 1
        sum = 0
        for k, v in hashmap.items():
            if v == 1: sum += k
        return sum
```
For more solutions: https://github.com/vanigupta20024/Programming-Challenges