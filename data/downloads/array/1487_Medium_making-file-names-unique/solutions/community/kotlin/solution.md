# Kotlin Map Solution (100% & 100%)

**Author:** tcrawford94
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/4219159/](https://leetcode.com/problems/making-file-names-unique/solutions/4219159/)

---

# Code
```
class Solution {
    fun getFolderNames(names: Array<String>): Array<String> {
        var res = mutableListOf<String>()
        // Keep track of names used, and the number of times we've encountered them so far
        var assignedNames = mutableMapOf<String, Int>()

        names.forEach {
            var numEncountered = assignedNames[it]
            if (numEncountered == null) { // we haven't used this name yet, we can add it directly to the result...
                assignedNames[it] = 1
                res.add(it)
            } else {
                while (true) {
                    val possibleName = "$it($numEncountered)"
                    if (!assignedNames.contains(possibleName)) {
                        assignedNames[possibleName] = 1
                        assignedNames[it] = numEncountered
                        res.add(possibleName)
                        break
                    }
                    numEncountered++
                }
            }
        }
        return res.toTypedArray()
    }
}
```