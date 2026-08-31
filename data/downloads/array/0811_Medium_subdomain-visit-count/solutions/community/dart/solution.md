# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/4980141/](https://leetcode.com/problems/subdomain-visit-count/solutions/4980141/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    List<String> subdomainVisits(List<String> cpdomains) {
        final List<String> res = [];
        Map<String, int> m = {};
        for (final c in cpdomains) {
            final data = c.split(' ');
            final number = int.parse(data.first);
            final domains = data.last.split('.');
            if (domains.length == 3) {
                m[domains[0] + '.' + domains[1] + '.' + domains[2]] = (m[domains[0] + '.' + domains[1] + '.' + domains[2]] ?? 0) + number;
                m[domains[1] + '.' + domains[2]] = (m[domains[1] + '.' + domains[2]] ?? 0) + number;
                m[domains[2]] = (m[domains[2]] ?? 0) + number;
            } else if (domains.length == 2) {
                m[domains[0] + '.' + domains[1]] = (m[domains[0] + '.' + domains[1]] ?? 0) + number;
                m[domains[1]] = (m[domains[1]] ?? 0) + number;
            } else if (domains.length == 1) {
                m[domains[0]] = (m[domains[0]] ?? 0) + number;
            }
        }
        
        for (final entry in m.entries) {
            final key = entry.key;
            final value = entry.value;
            res.add('$value $key');
        }

        return res;
    }
}
```