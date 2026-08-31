# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/5179380/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/5179380/)

---


# Code
```
# @param {String[]} patterns
# @param {String} word
# @return {Integer}
def num_of_strings(patterns, word)
    answer = 0
    patterns.each do |patt|
        if word.include? patt
            answer += 1
        end
    end
    
    answer
end
```