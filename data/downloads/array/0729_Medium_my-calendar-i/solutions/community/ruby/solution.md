# Ruby Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/625815/](https://leetcode.com/problems/my-calendar-i/solutions/625815/)

---

```
class MyCalendar
    def initialize()
        @events = []
    end

    def book(start_time, end_time)
        new_event = [start_time, end_time]
        
        @events.each do |event|
            return false if intersection?(event, new_event)
        end
    
        @events << new_event
        
        true
    end

    private
    
    def intersection?(event1, event2)
        event1[0] < event2[1] && event1[1] > event2[0]
    end
end
```