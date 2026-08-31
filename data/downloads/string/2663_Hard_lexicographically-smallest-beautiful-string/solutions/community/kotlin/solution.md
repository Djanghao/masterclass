# Kotlin Solution.

**Author:** khanaliaamir
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/6038178/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/6038178/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun smallestBeautifulString(s: String, k: Int): String {
        
        val sLength = s.length
        val sInChar = s.toCharArray()

        fun isValidBeautifulCondition(position: Int): Boolean {
            if(position > 0 && sInChar[position] == sInChar[position - 1]) return false
            if(position > 1 && sInChar[position] == sInChar[position - 2]) return false 
            return true
        }

        for(i in sLength - 1 downTo 0){
            var nextChar = sInChar[i] + 1
            while(nextChar < 'a' + k){
                sInChar[i] = nextChar

                if(isValidBeautifulCondition(i)){
                    for (j in i + 1 until sLength){
                        sInChar[j] = 'a'
                        while(!isValidBeautifulCondition(j)) sInChar[j]++
                    }
                    return String(sInChar)
                }
                nextChar++
            }
        }
        return ""
    }
}
```