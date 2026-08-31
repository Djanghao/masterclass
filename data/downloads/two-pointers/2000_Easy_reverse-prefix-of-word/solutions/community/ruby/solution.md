# Ruby Solution | like plx

**Author:** bornfundeath
**Votes:** 9
**Link:** [https://leetcode.com/problems/reverse-prefix-of-word/solutions/4304824/](https://leetcode.com/problems/reverse-prefix-of-word/solutions/4304824/)

---


# Code
```
# @param {String} word
# @param {Character} ch
# @return {String}
def reverse_prefix(word, ch)
    dest_index = word.index(ch).to_i + ch.length
    reverse_word = word[0...dest_index].reverse
    new_word = word[dest_index...word.length]
    return reverse_word + new_word
end
```