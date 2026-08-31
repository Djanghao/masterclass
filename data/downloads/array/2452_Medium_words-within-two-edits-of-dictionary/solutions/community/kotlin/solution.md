# Kotlin | Brute Force

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/5422138/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/5422138/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check for every word if there exists a word in the dictionary, where the differences is 2 or smaller.

# Approach
<!-- Describe your approach to solving the problem. -->
Brute force and use a function to check if a word is able to be edited in 2 moves.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
    fun canEdit(word: String, dictionary: Array<String>): Boolean {
        for(p:String in dictionary){
            var a:Int = 0
            
            for(i:Int in 0..word.length-1){
                if(p[i] != word[i])
                    a++
            }

            if(a <= 2) return true
        }

        return false
    }

    fun twoEditWords(queries: Array<String>, dictionary: Array<String>): List<String> {
        val twoEditWordList:ArrayList<String> = ArrayList()

        for(word:String in queries){
            if(canEdit(word, dictionary)){
                twoEditWordList.add(word)
            }
        }

        return twoEditWordList
    }
}
```