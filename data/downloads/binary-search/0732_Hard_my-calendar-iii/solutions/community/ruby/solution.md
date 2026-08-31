# Ruby | Sweep-line

**Author:** codingstar1
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2674341/](https://leetcode.com/problems/my-calendar-iii/solutions/2674341/)

---

```ruby
class MyCalendarThree
    def initialize()
        @hash = Hash.new {|h,k| h[k] = 0 }
    end

    def book(start, end_)
        @hash[start] += 1
        @hash[end_] -= 1
        cur = 0
        max = 0
        @hash.keys.sort.each do |key|
            cur += @hash[key]
            max = [max, cur].max
        end
        max        
    end
end
```
