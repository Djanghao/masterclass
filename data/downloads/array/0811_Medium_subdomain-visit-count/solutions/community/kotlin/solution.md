# Kotlin Map

**Author:** gky
**Votes:** 0
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/5572500/](https://leetcode.com/problems/subdomain-visit-count/solutions/5572500/)

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
    fun subdomainVisits(cpdomains: Array<String>): List<String> {
        val countMap = HashMap<String, Int>()
        for (domain in cpdomains) {
            val str = domain.split(" ")
            val count = str[0]
            val subdomains = str[1].split(".")
            for (n in 0 until subdomains.size) {
                val subdomain = subdomains.drop(n).joinToString(".")
                countMap[subdomain] = countMap.getOrDefault(subdomain, 0) + count.toInt()
            }
        }
        return countMap.map { (key, value) -> "$value $key" }
    }
}
```