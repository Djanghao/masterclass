# binary search solution using ruby

**Author:** alex123456
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/490516/](https://leetcode.com/problems/number-of-recent-calls/solutions/490516/)

---

```
class RecentCounter
    def initialize()
        @pings = []
    end

    def ping(t)
        @pings << t
        @pings.slice!(0 ... @pings.bsearch_index {|x| x >= t-3000})
        @pings.size
    end
end
```