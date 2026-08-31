# simple Scala solution

**Author:** l355c0d3
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/652310/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/652310/)

---

```
 def removeVowels(S: String): String = {
        val vowels = List('a', 'e', 'i', 'o', 'u')
        S.filterNot(vowels.contains(_))
    }
```