# Kotlin | Set-Map-Map solution

**Author:** mrn0thing
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/1943178/](https://leetcode.com/problems/vowel-spellchecker/solutions/1943178/)

---

Please, let me know if you have any questions.

```
/**
 * We use putIfAbsent for lowercase and devoweled dictionaries because we are only interested in the first occurrence of
 * transformed word. 
 * Let's say we have wordlist = (WoRd, WOrd, WoRD) and queries = (wOrd)
 * originalDict will be     (WoRd, WOrd, WoRD)
 * lowerCaseDict will be    (word -> WoRd)
 * devoweledDict will be    (w*rd -> WoRd)
 * That's because WOrd and WoRD will have the same lowerCAse and devoweled forms
 */
class Solution {
    fun spellchecker(wordlist: Array<String>, queries: Array<String>): Array<String> {
        val result = Array(queries.size) { "" }

        val originalDict = mutableSetOf<String>() // just words from the original dictionary
        val lowerCasedDict = mutableMapOf<String, String>() // lowercase words from the original dictionary (WoRd -> word)
        val devoweledDict = mutableMapOf<String, String>() // lowercase words from the original dictionary with vowels replaced (WooOooORd -> w******rd)
        
        // Initialize dictionaries
        for (word in wordlist) {
            originalDict.add(word)
            val lowerCaseWord = word.lowercase()
            lowerCasedDict.putIfAbsent(lowerCaseWord, word)  
            devoweledDict.putIfAbsent(devowel(lowerCaseWord), word)
        }

        // Try to find in dictionaries in accordance with precedence 
        for ((index, query) in queries.withIndex()) {
            if (originalDict.contains(query)) {
                result[index] = query
            } else {
                val lowerCaseQuery = query.lowercase()
                result[index] = lowerCasedDict[lowerCaseQuery] ?: devoweledDict[devowel(lowerCaseQuery)] ?: ""
            }
        }
        return result
    }

    private fun devowel(word: String): String {
        return word.replace("[aeiou]".toRegex(), "*")
    }
}
```