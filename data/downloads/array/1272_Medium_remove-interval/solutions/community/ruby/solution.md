# Simple Ruby solution

**Author:** aman199002
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-interval/solutions/936764/](https://leetcode.com/problems/remove-interval/solutions/936764/)

---

```
def remove_interval(intervals, to_be_removed)
    res = []    
    to_remove_start = to_be_removed[0]
    to_remove_end = to_be_removed[1]
    for i in 0..intervals.size-1 do
        set = intervals[i]
        if set[1] <= to_remove_start || set[0] >= to_remove_end
            res << [set[0],set[1]]
        elsif set[0] < to_remove_start && set[1] < to_remove_end
            res << [set[0],to_remove_start]
        elsif set[0] < to_remove_start && set[1] >= to_remove_end
            res << [set[0],to_remove_start]
            res << [to_remove_end,set[1]]
        elsif set[0] >= to_remove_start && set[1] > to_remove_end
            res << [to_remove_end,set[1]]
        end    
    end    
    return res
end
```