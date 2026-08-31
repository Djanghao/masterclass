# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/3055753/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/3055753/)

---

```
# @param {String} word
# @return {Integer}
def min_time_to_type(word)
    time = 0
    last = 97
    word.each_byte do |c|
        cw = (last-c).abs
        ccw = ((122 - [c, last].max) + ([c, last].min - 97)) + 1
        time += [cw, ccw].min + 1
        last = c
    end
    
    time
end
```