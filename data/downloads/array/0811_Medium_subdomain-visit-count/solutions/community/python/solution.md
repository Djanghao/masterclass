# Python short & understandable solution [68 ms]

**Author:** cenkay
**Votes:** 27
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/121770/](https://leetcode.com/problems/subdomain-visit-count/solutions/121770/)

---

```
class Solution:
    def subdomainVisits(self, cpdomains):
        counter = collections.Counter()
        for cpdomain in cpdomains:
            count, *domains = cpdomain.replace(" ",".").split(".")
            for i in range(len(domains)):
                counter[".".join(domains[i:])] += int(count)
        return [" ".join((str(v), k)) for k, v in counter.items()]
```