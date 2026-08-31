# 303 ms

**Author:** 0x81
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3313374/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3313374/)

---

```ruby
def find_score nums
    score, bitmask = 0, (1 << 20) - 1
    marked = Array.new nums.size + 1
    nums.map!
        .with_index { (_1 << 20) | _2 }
        .sort!
        .each do
        next if marked[i = _1 & bitmask]
        score += _1 >> 20
        marked[i] = 1
        marked[i - 1] = 1
        marked[i + 1] = 1
    end
    score
end
```