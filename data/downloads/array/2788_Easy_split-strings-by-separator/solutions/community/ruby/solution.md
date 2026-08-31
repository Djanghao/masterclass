# No helper methods used, simple

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/4776150/](https://leetcode.com/problems/split-strings-by-separator/solutions/4776150/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {String[]} words
# @param {Character} separator
# @return {String[]}
def split_words_by_separator(words, separator)
    answer = []
    words.each do |word|
        new_word = ""
        word.chars.each do |char|
            if char != separator
                new_word += char
            else
                if new_word.size > 0
                    answer << new_word 
                    new_word = ""
                end
            end
        end
         
        if new_word.size > 0
            answer << new_word
        end
    end
    
    answer
end
```