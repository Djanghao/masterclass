# Two Approaches

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4756266/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4756266/)

---

# Intuition
In the first option, I fill the HashMap with the frequency of characters and immediately find the maximum frequency in a loop.
Next in the loop I go from the end of the line and if the frequency of the character is equal to the maximum, I add it to the end of the resulting line and set the frequency to zero so that there are no repetitions. If the frequency is less than the maximum, I only set the frequency to zero. When everything in the HashMap has been traversed, I end the loop.

In the second option, an array of pairs is used, each element contains the frequency and the last index.
Then I sort the array in descending order of frequency and index. At the beginning of the array there are the elements I need with the maximum frequency, I simply add them sequentially to the final row.
# Approach
I don't think this solution is optimal, but there are no other ideas yet.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
**HashMap**
```
class Solution {
    fun lastNonEmptyString(s: String): String {
        val map = HashMap<Char, Int>()
        var rez =""
        var max = 0
        for (ch in s) {
            map[ch] = map.getOrDefault(ch, 0) + 1
            max = maxOf(map.getValue(ch),max)
        }
        var cou = map.size
        // println("map=$map,max=$max")
        for (i in s.length-1 downTo 0) {
            val ch = s[i]
            if (map.getValue(ch) == max) {
                rez = "" + ch + rez
                map[ch] = 0
                cou --
            } else if (map.getValue(ch) != 0) {
                map[ch] = 0
                cou --
            }
            if (cou == 0) break
        }
        return rez
    }
}
```
**Array + sort**
```kt
class Solution {
    fun lastNonEmptyString(s: String): String {
        val map = Array<Pair<Int,Int>>(26,{Pair(0,0)})
        var rez =""
        var max = 0
        for (i in 0 until s.length) {
            val ch = s[i]
            map[ch-'a'] = Pair(map[ch-'a'].first+1,i)
            max = maxOf(map[ch-'a'].first,max)
        }
        map.sortWith(Comparator 
            { a, b ->
                if (a.first == b.first) b.second-a.second else b.first - a.first
            }
        )
        for (M in map) {
            if (M.first==max) rez = "" + s[M.second] + rez
            else break
        }
        // println("map \	${map.joinToString("\	")}")
        return rez
    }
}
```