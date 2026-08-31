# Simple Solution, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5091785/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5091785/)

---

Hash will only contain a max of 52 entries
# Code
```
# @param {String} word
# @return {Integer}
def number_of_special_chars(word)
    answer = 0
    hash = {}
    i = 0
    while i < word.size
        if !hash[word[i]]
            hash[word[i]] = true
            if hash[word[i].downcase] and hash[word[i].upcase]
                answer += 1
            end
        end

        i += 1
    end
    
    answer
end
```