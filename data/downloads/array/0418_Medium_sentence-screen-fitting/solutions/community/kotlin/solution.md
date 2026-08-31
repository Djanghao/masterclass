# Simple Kotlin code with the comments

**Author:** PaulShan
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/3647665/](https://leetcode.com/problems/sentence-screen-fitting/solutions/3647665/)

---

```
class Solution {
    fun wordsTyping(sentence: Array<String>, rows: Int, cols: Int): Int {
        if (sentence.any { it.length > cols }) return 0
        var currentRow = 0
//currentCol can be cols(maximum columns), which means previous added item arrives at the last item
//In this case, The left will be zero and will go to next line for the next round.
//And there is zero char can be added to this line
        var currentCol = 0
        var result = 0
        while (true) {
            for (s in sentence) {
                val leftCol = cols - currentCol
                currentCol = when {
                    leftCol >= s.length -> currentCol + s.length + 1 //Can hold the word in this line
                    else -> {
                        //Cannot hold the word in this line
                        ++currentRow
                        if (currentRow >= rows) return result
                        s.length + 1
                    }
                }
                currentCol = minOf(currentCol, cols) //currentCol cannot be more than maximum cols
            }
            ++result
        }
    }
}
```