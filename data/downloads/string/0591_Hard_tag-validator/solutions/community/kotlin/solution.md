# Easy Solution

**Author:** Purandhar999
**Votes:** 4
**Link:** [https://leetcode.com/problems/tag-validator/solutions/4385762/](https://leetcode.com/problems/tag-validator/solutions/4385762/)

---


# Code
```
class Solution {

    val VALID_TAG_NAME_REGEX = Regex("^[A-Z]{1,9}$")

    fun isValid(code: String): Boolean {
        val tagStack: MutableList<String> = mutableListOf()
        var i = 0
        while (i < code.length) {
            when {
                matchPrefix(code, i, "</") -> {
                    getEndOfTag(code, i)?.let {
                        val tagName = code.slice(i + 2 until it)
                        if (tagStack.isEmpty() || tagStack.last() != tagName) return false
                        tagStack.removeAt(tagStack.size - 1)
                        if (tagStack.isEmpty() && it + 1 < code.length) return false
                        it + 1
                    }
                }
                matchPrefix(code, i, "<!") -> {
                    getEndOfCDATA(code, i)?.let {
                        if (tagStack.isEmpty() || !matchPrefix(code, i, "<![CDATA[")) return false
                        it + 3
                    }
                }
                code[i] == '<' -> {
                    getEndOfTag(code, i)?.let {
                        val tagName = code.slice(i + 1 until it)
                        if (!tagName.matches(VALID_TAG_NAME_REGEX)) return false
                        tagStack.add(tagName)
                        it + 1
                    }
                } 
                else -> {
                    if(tagStack.isEmpty()) return false
                    i + 1
                }
            }?.let { i = it } ?: return false
        }
        return tagStack.isEmpty()
    }

    fun matchPrefix(code: String, i: Int, pref: String): Boolean =
        code.slice(i..code.length.coerceAtMost(i + pref.length)-1).startsWith(pref)

    fun getEndOfTag(code: String, i: Int): Int? =
        when {
            i >= code.length -> null
            matchPrefix(code, i, "<!") -> getEndOfCDATA(code, i)?.let { getEndOfTag(code, it + 3) }
            code[i] == '>' -> i
            else -> getEndOfTag(code, i + 1)
        }

    fun getEndOfCDATA(code: String, s: Int): Int? = code.indexOf("]]>", s).takeIf { it >= 0 }
}
```