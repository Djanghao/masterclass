# ABC game yarn!

**Author:** ReiiDev2k
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5881629/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5881629/)

---

# Code
```kotlin []
class Solution {
    fun kthCharacter(k: Int): Char {
        var word = "a"
        var t = arrayListOf(1)
        do{
            val size = t.size
            for(i in t.indices){
                if(i < size){
                    t.add(t[i]+1)
                }
            }
        }while(t.size < k)

        for(i in t){
            word += ('a' + i-1).toString()
        }
        val test = word.trim()
        return test[k]
    }
}
```