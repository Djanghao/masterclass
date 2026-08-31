# [Python 3] Rolling hash (5780ms)

**Author:** chestnut890123
**Votes:** 3
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/1341886/](https://leetcode.com/problems/distinct-echo-substrings/solutions/1341886/)

---

```
class Solution:
    def distinctEchoSubstrings(self, text: str) -> int:
        n = len(text)
		
        def helper(size):
            base = 1 << 5
            M = 10 ** 9 + 7
            a = pow(base, size, M)
            t = 0
            vis = defaultdict(set)
            vis_pattern = set()
            ans = 0
            for i in range(n):
                t = (base * t + ord(text[i]) - ord('a')) % M
                if i >= size:
                    t -= a * (ord(text[i - size]) - ord('a'))
                    t %= M
                    if t not in vis_pattern and (i - size * 2 + 1) in vis[t]:
                        ans += 1
                        vis_pattern.add(t)
                if i >= size - 1:
                    vis[t].add(i - size + 1)
            return ans

        return sum(helper(size) for size in range(1, n//2+1))