# Simple Ruby Solution with Hash

**Author:** woahlag
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/597478/](https://leetcode.com/problems/design-hit-counter/solutions/597478/)

---

Runtime: 28 ms, faster than 100.00% of Ruby online submissions for Design Hit Counter.

```
class HitCounter
    def initialize()
        @hash = {}
    end

    def hit(timestamp)
       @hash[timestamp] ||= 0
       @hash[timestamp] += 1
    end

    def get_hits(timestamp)
        count = 0
        (timestamp-299..timestamp).each do |time|
             count += @hash[time] if @hash[time]
        end
        count
    end
end
```