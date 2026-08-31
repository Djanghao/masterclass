# Ruby Solution

**Author:** jaoeding
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1655537/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1655537/)

---

Because the description guarantees `sentences[i]` does not have leading or trailing spaces and all the words in `sentences[i]` are separated by a single space, we can simply count the spaces and add 1 to find the number of words in each sentence.
```ruby
def most_words_found(sentences)
    sentences.map {|sen| sen.count(' ') + 1}.max
end
```

We can actually move the +1 outside the loop too.
```ruby
def most_words_found(sentences)
    sentences.map {|sen| sen.count(' ')}.max + 1
end
```
This dropped the runtime from about 113 ms to 40 ms.