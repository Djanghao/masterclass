# Ruby - Priority Queue

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1060922/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1060922/)

---

```ruby
# DSL
class Array
  alias start_day first
  alias end_day last
end

# Insert event into array pq. Array pq should be sorted by event.end_day.
def enqueue(pq, evt)
  idx = pq.bsearch_index { |e| e.end_day >= evt.end_day } || pq.size
  pq.insert(idx, evt)
end

def max_events(events)
  # sort events by start day and then by end day
  events.sort!
  day = 0
  res = 0
  # priority queue -- started events prioritized (sorted) by end day 
  pq = []
  while pq.any? || events.any?
    # dequeue events which ended (couldn't attend).
    while pq.any? && day > pq[0].end_day
      pq.shift
    end
    # enqueue events that started
    while events.any? && day >= events[0].start_day
      enqueue(pq, events.shift)
    end
    # attend event from priority queue (if any) or future event
    if pq.any?
      pq.shift
      day += 1
      res += 1
    elsif events.any? # we know that day < events[0].start_day
      day = events.shift.start_day + 1
      res += 1
    end
  end
  res
end
```

Time complexity: `O(N * log N)`

<details>
<summary><b>Shorter version</b> (click to expand)</summary>

```ruby
def enqueue(pq, end_day)
  pq.insert(pq.bsearch_index { |ed| ed >= end_day } || pq.size, end_day)
end

def max_events(events)
  events.sort!
  day = 0
  res = events.size # assume can attend all events
  pq = [] # keep only end dates
  while pq.any? || events.any?
    (pq.shift; res -= 1) while pq.any? && day > pq.first # dequeue events which ended (couldn't attend)
    enqueue(pq, events.shift[1]) while events.any? && day >= events[0][0] # enqueue events that started
    day = events.shift[0] if !pq.shift && events.any? # move today to future event's start day if queue is empty
    day += 1
  end
  res
end
```
</details>

<details>
<summary><b>Iterate by day</b> (click to expand)</summary>

```ruby
def enqueue(pq, end_day)
  pq.insert(pq.bsearch_index { |ed| ed >= end_day } || pq.size, end_day)
end

def max_events(events)
  events.sort!
  res = 0
  pq = []
  for d in 1..100000
    pq.shift while pq.any? && d > pq[0]
    enqueue(pq, events.shift[1]) while events.any? && d >= events[0][0]
    res += 1 if pq.shift
  end
  res
end
```
</details>

