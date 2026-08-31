# Simple scala head on implementation

**Author:** taintech
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word/solutions/5116668/](https://leetcode.com/problems/valid-word/solutions/5116668/)

---

# Intuition
Implement all checks, AND all checks, don't forget about uppercase vowels.

# Approach
1. Init lowercase vowels.
2. Build lowercase and uppercase vowels.
3. Check for length limit.
4. Check for alphanumeric using exists.
5. Check for at least one vowel using exists.
6. Check for at least one non vowel using exists, remove digits first.
7. Join all boolean with AND and return.

# Complexity
- Time complexity:
O(n)

- Space complexity:
o(1)

# Code
```
object Solution {
    private val LowercaseVowels = List('a', 'e', 'i', 'o', 'u')
    def isValid(word: String): Boolean = {
        val vowels = LowercaseVowels ::: LowercaseVowels.map(_.toUpper)
        
        val lengthLimit = word.length >= 3
        val alphanumeric = word.forall(_.isLetterOrDigit)
        val oneVowel = word.exists(c => vowels.contains(c))
        val oneNonVowel = word.filterNot(_.isDigit).exists(c => !vowels.contains(c))
        
        lengthLimit && alphanumeric && oneVowel && oneNonVowel
    }
}
```