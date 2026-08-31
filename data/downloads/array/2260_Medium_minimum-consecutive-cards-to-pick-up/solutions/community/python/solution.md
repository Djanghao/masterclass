# 🚀🚀🚀Three ways to solve(99 beating)

**Author:** somepatt
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4223273/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4223273/)

---



# Code
```
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        #enumerate; time O(n), space O(n)
        d = defaultdict(list)
        res = float('inf')
        for i, val in enumerate(cards):
            if val in d:
                res = min(res, i - d[val] + 1)
            d[val] = i

        return res if res != float('inf') else -1      

        #sliding window; time O(n), space O(m)
        l = 0
        res = float('inf')
        d = defaultdict(int)
        for r in range(len(cards)):
            d[cards[r]] += 1
            if d[cards[r]] == 2: 
                while cards[l] != cards[r]:
                    d[cards[l]] -= 1
                    l += 1
                res = min(res, r - l + 1)
                d[cards[l]] -= 1
                l += 1

        return res if res != float('inf') else -1

        #storing indices; time O(n + m * k), space O(n + m)
        d = defaultdict(list)
        res = float('inf')
        for i in range(len(cards)):
            d[cards[i]].append(i)

        for key in d:
            ans = d[key]
            for i in range(len(ans) - 1):
                res = min(res, ans[i + 1] - ans[i] + 1)

        return res if res != float('inf') else -1



```