# Various terrible attempts revolving same approach

**Author:** ChengSeng
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3088962/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3088962/)

---

The idea is to try to find an intersection between 2 events, we knows an intersection occur if intersection start is smaller or equals to intersection end.
Regarding the implementation..
Attempt1:
remove ':' between the time and convert them to integer, find the intersection afterward..
```ruby
def have_conflict(event1, event2)
  event1.map! { |event| event[2] = ''; event.to_i }
  event2.map! { |event| event[2] = ''; event.to_i }
  intersect_start = [event1[0], event2[0]].max
  intersect_end = [event1[1], event2[1]].min

  intersect_start <= intersect_end
end
```

Attempt 2:
Crop out the portion of string and turn them into number afterwards..
```ruby
def have_conflict(event1, event2)
  start1 = event1[0][0..1].to_i * 100 + event1[0][3..4].to_i
  end1 = event1[1][0..1].to_i * 100 + event1[1][3..4].to_i
  start2 = event2[0][0..1].to_i * 100 + event2[0][3..4].to_i
  end2 = event2[1][0..1].to_i * 100 + event2[1][3..4].to_i
  intersect_start = [start1, start2].max
  intersect_end = [end1, end2].min

  intersect_start <= intersect_end
end
```

Attempt3:
Similar to first attempt, transfer ':' into '' instead.
```ruby
def have_conflict(event1, event2)
  start1 = event1[0].tr(':', '').to_i
  end1 = event1[1].tr(':', '').to_i
  start2 = event2[0].tr(':', '').to_i
  end2 = event2[1].tr(':', '').to_i
  intersect_start = [start1, start2].max
  intersect_end = [end1, end2].min

  intersect_start <= intersect_end
end
```

After discovering that it is fine to compare the string directly..
```ruby
def have_conflict(event1, event2)
  [event1[0], event2[0]].max <= [event1[1], event2[1]].min
end
```