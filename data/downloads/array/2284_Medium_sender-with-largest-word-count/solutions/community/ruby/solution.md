# Ruby, 1-liner

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/2085168/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/2085168/)

---

```ruby
def largest_word_count m, s
    s.zip(m).reduce(Hash.new 0) { _1[_2[0]] += _2[1].split.size; _1 }
            .to_a.map { _1.reverse } .sort.last.last
end
```