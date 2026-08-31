# ✅ 100% 👯‍♂️ 2 pointers || no extra space || no List/Map/Set

**Author:** sunnoca
**Votes:** 2
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/4265893/](https://leetcode.com/problems/guess-the-word/solutions/4265893/)

---

# Please Upvote \uD83D\uDD1D Appreciations!
![image.png](./images/0.png)
# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(1)**
# Code
```
class Solution {
    fun findSecretWord(words: Array<String>, master: Master) {
        var right: Int = words.lastIndex
        var i: Int

        while (true) {
            val word = words[0]
            val matches = master.guess(word)
            if (matches == 6) break

            i = 0
            while (i <= right) {
                if (words[i].calcMatches(word) == matches) i++
                else words[i] = words[right--]
            }
        }
    }

    private fun String.calcMatches(word: String): Int {
        var eq = 0

        for (i in this.indices)
            if (this[i] == word[i]) eq++

        return eq
    }
}
```