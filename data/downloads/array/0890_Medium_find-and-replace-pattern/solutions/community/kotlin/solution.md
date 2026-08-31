# Kotlin | Short solution with streams

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/5489939/](https://leetcode.com/problems/find-and-replace-pattern/solutions/5489939/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find if a permutation is possible, it is only important to compare how the characters are placed. For example "abb" has one character placed at index 0 and one character placed at indexes 1, 2. This means for a string to be able to be permuated to "abb" it also needs the same structure.

# Approach
<!-- Describe your approach to solving the problem. -->
Get the structure of the pattern. Sort the resulting structure for the first index, to compare it. Then stream all words and filter them under the criteria, that the structure is the same.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(m)$$

# Code
```
class Solution {
    fun getStructure(word: String): List<ArrayList<Int>> {
        val dp:Array<ArrayList<Int>> = Array(26){ArrayList()}

        for(i:Int in 0 until word.length)
            dp[(word[i]-'a').toInt()].add(i)

        return dp.filter{ it.size > 0 }.sortedWith(compareBy{ it[0] })
    }

    fun findAndReplacePattern(words: Array<String>, pattern: String): List<String> {
        val st:List<ArrayList<Int>> = getStructure(pattern)

        return words.filter{getStructure(it) == st}
    }
}
```