# O(n):O(1) solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4879401/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4879401/)

---


# Code
```
# @param {String[]} words
# @param {String} s
# @return {Boolean}
def is_acronym(words, s)
    if s.size != words.size
        return false
    end
    
    i = 0
    while i < words.size
        if s[i] != words[i][0]
            return false
        end

        i += 1
    end

    true
end
```