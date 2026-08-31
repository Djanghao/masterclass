# (0ms)Simple search

**Author:** sav20011962
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6102782/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6102782/)

---

# Approach
Simple search
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun isPrefixOfWord(sentence: String, searchWord: String): Int {
        val len_w = searchWord.length
        var pos = 0
        var numb = 1
        var ind = true
        for (ch in sentence)
            if (ch == ' ') {
                numb++
                ind = true
                pos = 0
            }
            else {
                if (ind) {
                    if (ch==searchWord[pos])
                        if (pos==len_w-1) return numb
                        else if (pos<len_w-1) pos++
                        else ind = false
                    else ind = false
                }
            }
        return -1
    }
}
```