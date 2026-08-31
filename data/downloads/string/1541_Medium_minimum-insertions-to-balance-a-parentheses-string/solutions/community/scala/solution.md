# 100 % faster solution

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/5135178/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/5135178/)

---

```
object Solution {
    def minInsertions(s: String): Int = {
        var stack, ans = 0
        val newS = s.replaceAll("\\\\)\\\\)", "]")
        
        for(ch <- newS) {
            if(ch == '(') stack += 1
            else {
                if(ch == ')') ans += 1
                if(stack == 0) ans += 1
                else stack -= 1
            }
        }
        ans + stack*2
    }
}
```