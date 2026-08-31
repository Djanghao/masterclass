# Scala Solution

**Author:** freedomkwok
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/4642264/](https://leetcode.com/problems/valid-word-abbreviation/solutions/4642264/)

---

# Intuition
 Moving Two index from keft to right

# Approach
Two Pointer

# Complexity
- Time complexity:
$$O(m)$$ where m is the length of word

- Space complexity:
$$O(1)$$

# Code
```

object Solution {
    def validWordAbbreviation(word: String, abbr: String): Boolean = {
        var start = 0
        var abbvStart = 0
        while(start < word.length && abbvStart < abbr.length) {

        if(abbr(abbvStart).isLetter) {
            if(word(start) == abbr(abbvStart)) {
            start += 1
            abbvStart += 1
            } else
            return false
        }
        else if(abbr(abbvStart).isDigit) {
            val digitStart = abbvStart
            if(abbr(abbvStart) == '0')
                return false
            while(abbvStart < abbr.length && abbr(abbvStart).isDigit)
                abbvStart += 1
            val abvSkip = abbr.substring(digitStart, abbvStart).toInt
            start += abvSkip
        }
        else
            return false
    }

    start == word.length && abbvStart == abbr.length
  }
}
```