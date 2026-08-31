# Ruby 1-liner solution using tally

**Author:** kohbis
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1618313/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1618313/)

---

```ruby
# @param {String[]} words1
# @param {String[]} words2
# @return {Integer}
def count_words(words1, words2)
  (words1.tally.select {|_, v| v == 1 }.keys & words2.tally.select {|_, v| v == 1 }.keys).size
end
```