# Ruby Regular Expressions Solution

**Author:** user0589f
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/2433905/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/2433905/)

---

```
# @param {String} sentence
# @return {Integer}
def count_valid_words(sentence)
    sentence.split(" ").delete_if{|x| x =~ /[0-9]|^-|-$|.*(!|,|\\.).+|-.*-|(!|,|\\.)-|-(!|,|\\.)/ }.length
end