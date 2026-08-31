# Ruby, Heap

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/5766455/](https://leetcode.com/problems/meeting-scheduler/solutions/5766455/)

---

# Code
```ruby []
def min_available_duration(slots1, slots2, duration)
  time_slots_matching_duration = (slots1 + slots2).select { _2 - _1 >= duration }
  heap = MinHeap.new(time_slots_matching_duration)

  while heap.length > 1
    _, finish2 = heap.pop
    start1, = heap.next

    return [start1, start1 + duration] if finish2 >= start1 + duration
  end
  []
end
```