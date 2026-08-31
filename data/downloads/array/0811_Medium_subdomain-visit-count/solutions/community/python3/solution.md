# Python3 100% faster, 100% less memory (32ms, 14.1mb)

**Author:** haasosaurus
**Votes:** 12
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/914736/](https://leetcode.com/problems/subdomain-visit-count/solutions/914736/)

---

```
class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        d = defaultdict(int)
        for s in cpdomains:
            cnt, s = s.split()
            cnt = int(cnt)
            d[s] += cnt
            pos = s.find('.') + 1
            while pos > 0:
                d[s[pos:]] += cnt
                pos = s.find('.', pos) + 1
        for x, i in d.items():
            yield f'{i} {x}'
```