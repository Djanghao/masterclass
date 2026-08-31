# Very easy Kotlin solution

**Author:** swstegall
**Votes:** 0
**Link:** [https://leetcode.com/problems/html-entity-parser/solutions/4532437/](https://leetcode.com/problems/html-entity-parser/solutions/4532437/)

---

# Intuition
I knew Kotlin strings had a simple replace method. I figured this would make a fun problem to apply a one-liner to.

One test case to control for was the last test case in the submission, where `&amp;gt;` should be parsed exactly one time. Therefore this should parse to `&gt;` when all replaces are applied, rather than parsing to `<`, which is what will occur if you replace `&amp;` before all other operators.

# Approach
I thought to chain the replace method for all the different types of symbols that need to be parsed.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun entityParser(text: String): String {
        return text
            .replace("&quot;", "\"")
            .replace("&apos;", "\\'")
            .replace("&gt;", ">")
            .replace("&lt;", "<")
            .replace("&frasl;", "/")
            .replace("&amp;", "&")
    }
}
```