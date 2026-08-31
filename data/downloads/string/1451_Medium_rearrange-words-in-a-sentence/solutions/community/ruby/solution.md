# Ruby Easy 1 Line

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4926390/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4926390/)

---

# Code
```
# @param {String} text
# @return {String}
def arrange_words(text)
    text.split.sort_by{|word| word.length}.join(" ").capitalize
end
```