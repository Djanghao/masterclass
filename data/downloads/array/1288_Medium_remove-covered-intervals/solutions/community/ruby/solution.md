# Ruby: sorting and then linear count without deletion of elements

**Author:** giner
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/1787132/](https://leetcode.com/problems/remove-covered-intervals/solutions/1787132/)

---

```
def remove_covered_intervals(intervals)
    intervals.sort!{ |a, b| [a[0], b[1]] <=> [b[0], a[1]] }
    removed = 0

    current_right = -1
    intervals.each do |_, right|
        removed += 1 and next if right <= current_right
        current_right = right
    end
    
    intervals.size - removed
end
```