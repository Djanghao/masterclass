# Divide and conquer with memo

**Author:** gnayoaix
**Votes:** 2
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/3364789/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/3364789/)

---

# Intuition
\u8FD9\u9898\u80FD\u770B\u51FA\u6765\u662F\u9012\u5F52\u6C42\u89E3\uFF0C\u4F46\u662F\u4E0D\u662F\u5E38\u89C4\u7684\u7C7B\u4F3C\u4E8E\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u5355\u65B9\u5411\u9012\u5F52\u3002\u8FD9\u9898\u7684\u5173\u952E\u70B9\u5728\u4E8E\u56F4\u7ED5operator\u53BB\u5206\u6CBB\uFF0C\u5BF9operator\u5DE6\u53F3\u4E24\u8FB9\u7684substring\u8FDB\u884C\u9012\u5F52\u6C42\u89E3\u3002\u8FD9\u91CCbase case\u4E5F\u8981\u6CE8\u610F\uFF0C\u4E0D\u53EF\u4EE5\u76F4\u63A5\u6839\u636Elength==1\u6765\u5224\u5B9A\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u6570\u5B57\u7684\u8303\u56F4\u5E76\u4E0D\u662F\u53EA\u662F0-9\u3002\u8FD9\u91CC\u53EF\u4EE5\u5224\u65AD\u5F53\u524Dlist\u662F\u5426\u4E3A\u7A7A\uFF0C\u5047\u5982\u4E3A\u7A7A\u5219\u8BC1\u660E\u5176\u4E2D\u6CA1\u6709operator\uFF0C\u76F4\u63A5toInt\uFF08\uFF09\u5C31\u597D\u3002\u8FD9\u91CC\u8FD8\u53EF\u4EE5\u7528memo\u8FDB\u884C\u4F18\u5316\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\u3002

# Code
```
class Solution {
    val memo = mutableMapOf<String, List<Int>>()
    fun diffWaysToCompute(expression: String): List<Int> {
        if (expression in memo) return memo.get(expression)!!

        val list = mutableListOf<Int>()
        for (i in 0 until expression.length) {
            if (expression[i].isDigit()) continue

            val left = diffWaysToCompute(expression.substring(0, i))
            val right = diffWaysToCompute(expression.substring(i+1))

            for (l in left) {
                for (r in right) {
                    when (expression[i]) {
                        '+' -> list.add(l + r)
                        '-' -> list.add(l - r)
                        '*' -> list.add(l * r)
                    }
                }
            }
        }

        if (list.isEmpty()) {
            list.add(expression.toInt())
        }

        memo.put(expression, list)

        return list
    }
}
```