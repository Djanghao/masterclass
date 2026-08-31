# [Python3] quasi brute-force

**Author:** ye15
**Votes:** 11
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646615/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/1646615/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/8bba95f803d58a5e571fa13de6635c96f5d1c1ee) for solutions of biweekly 68. 

```
class Solution:
    def abbreviateProduct(self, left: int, right: int) -> str:
        ans = prefix = suffix = 1
        trailing = 0 
        flag = False 
        for x in range(left, right+1): 
            if not flag: 
                ans *= x
                while ans % 10 == 0: ans //= 10 
                if ans >= 1e10: flag = True 
            prefix *= x
            suffix *= x
            while prefix >= 1e12: prefix //= 10 
            while suffix % 10 == 0: 
                trailing += 1
                suffix //= 10 
            if suffix >= 1e10: suffix %= 10_000_000_000
        while prefix >= 100000: prefix //= 10 
        suffix %= 100000
        if flag: return f"{prefix}...{suffix:>05}e{trailing}"
        return f"{ans}e{trailing}"
```