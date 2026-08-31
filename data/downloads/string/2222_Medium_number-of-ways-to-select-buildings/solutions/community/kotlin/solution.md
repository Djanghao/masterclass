# kotlin solution

**Author:** addenisov00en
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/2767924/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/2767924/)

---

```
class Solution {
    fun numberOfWays(s: String): Long {
       val map = mutableMapOf<String, Long>()
        map["0"] = 0
        map["10"] = 0
        map["010"] = 0
        map["1"] = 0
        map["01"] = 0
        map["101"] = 0
        
        s.forEach {
            when (it) {
                '0' -> {
                    map["0"] = map["0"]!! + 1
                    map["10"] = map["10"]!! + map["1"]!!
                    map["010"] = map["010"]!! + map["01"]!!
                }
                '1' -> {
                    map["1"] = map["1"]!! + 1
                    map["01"] = map["01"]!! + map["0"]!!
                    map["101"] = map["101"]!! + map["10"]!!
                }
            }
        }
        return map["101"]!! + map["010"]!!
        
    }
}
```
