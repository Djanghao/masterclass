# Kotlin Solution (with comments) - O(n)

**Author:** lnbecker
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/1817618/](https://leetcode.com/problems/find-and-replace-in-string/solutions/1817618/)

---

```
class Solution {
    fun findReplaceString(s: String, indices: IntArray, sources: Array<String>, targets: Array<String>): String {
        // Key: start index of letters to be replaced
        // Value: index of source/target strings for that replacement 
        var replacementMap = mutableMapOf<Int, Int>()
        
        //Find valid replacements
        for (i in 0 until indices.size) {
            if (s.startsWith(sources[i], indices[i])) {
                replacementMap.put(indices[i], i)
            }
        }
        
        // Perform valid replacements
        var sb = StringBuilder()
        var j = 0
        while (j < s.length) {
            if (replacementMap.contains(j)) {
                // This character (and possibly ones after) should be replaced
                var mIndex = replacementMap.get(j)!!
                sb.append(targets[mIndex])
                // Skip letters that are replaced
                j += sources[mIndex].length 
            }
            else {
                // Char not replaced, append single letter
                sb.append(s[j])
                j++
            }
        }
        return sb.toString()
    }
}
```