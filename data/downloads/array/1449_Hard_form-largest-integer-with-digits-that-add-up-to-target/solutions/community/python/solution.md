# Beats 100% 150ms O(n) DP Python

**Author:** sarthakBhandari
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/3255906/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/3255906/)

---

![image.png](./images/0.png)


**Time: O(Target*9)
Space: O(Target)**
```
def largestNumber(self, cost: List[int], target: int) -> str:
    val_key = dict()
    for k,v in enumerate(cost):
        val_key[v] = k+1
    cost = sorted(set(cost), reverse=True)

    @lru_cache(None)
    def f(target):
        if target == 0:
            return 0
        res = -inf
        for v in cost:
            if v <= target:
                num = f(target - v)
                res = max(res, num*10 + val_key[v])
        return res
    
    res = f(target)
    return "0" if res==-inf else str(res)
```