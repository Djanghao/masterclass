# [Python3] 4-line

**Author:** ye15
**Votes:** 24
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1766909/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1766909/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/2506277d2af78559a0e58d2130fdbe87beab42b5) for solutions of weekly 280. 

Updated implementation using `most_common()`
```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        pad = lambda x: x + [(None, 0)]*(2-len(x))
        even = pad(Counter(nums[::2]).most_common(2))
        odd = pad(Counter(nums[1::2]).most_common(2))
        return len(nums) - (max(even[0][1] + odd[1][1], even[1][1] + odd[0][1]) if even[0][0] == odd[0][0] else even[0][1] + odd[0][1])
```

```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        odd, even = Counter(), Counter()
        for i, x in enumerate(nums): 
            if i&1: odd[x] += 1
            else: even[x] += 1
        
        def fn(freq): 
            key = None
            m0 = m1 = 0
            for k, v in freq.items(): 
                if v > m0: key, m0, m1 = k, v, m0
                elif v > m1: m1 = v
            return key, m0, m1
        
        k0, m00, m01 = fn(even)
        k1, m10, m11 = fn(odd)
        return len(nums) - max(m00 + m11, m01 + m10) if k0 == k1 else len(nums) - m00 - m10
```