# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4282573/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4282573/)

---

# Complexity

- Time complexity: $$O(n \\log(n))$$
- Space complexity: $$O(n)$$

# Code

```
class Solution {
    fun sortVowels(s: String) = buildString {
        append(s)

        val vowelIndices = s.asSequence()
            .withIndex()
            .filter { it.value in "aeiouAEIOU" }
            .map { it.index }
            .toList()

        vowelIndices.asSequence()
            .sortedBy { s[it].code }
            .forEachIndexed { newIndex, oldIndex ->
                this[vowelIndices[newIndex]] = s[oldIndex]
            }
    }
}
```