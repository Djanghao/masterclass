# Masterpiece of formatting

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4159382/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4159382/)

---

```ruby
def max_score(a) =
    a.each_with_index
     .with_object(Hash.new 0) do
        _2[_1.reduce(&:-)] += _1.first
    end
     .each_value
     .max
```