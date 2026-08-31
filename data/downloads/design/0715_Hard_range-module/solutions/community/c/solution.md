# C++ fast set + equal_range solution with explanation

**Author:** dragondreamer
**Votes:** 14
**Link:** [https://leetcode.com/problems/range-module/solutions/1225934/](https://leetcode.com/problems/range-module/solutions/1225934/)

---

We have intervals `[from, to]`, where `from < to` is always true.

Now let's consider two intervals `[from1, to1]` and `[from2, to2]`. We can sort them based on the condition `interval1.to < interval2.from`.

1. If `to1 < from2`, then the first interval goes before the second one.
2. If `to2 < from1`, then the second interval goes before the first.
3. If neither `to1 < from2` nor `to2 < from1`, then these intervals overlap somewhere, and we consider them equal. For example, `[1, 10]` and `[8, 15]` overlap. `[1, 10]` and `[2, 3]` overlap as well.

Now we basically can use the `set` container to store intervals sorted by this condition (see custom comparator below). This `set` will contain only non-overlapping intervals. Using the `set::equal_range` method, we can now easily check, which intervals from our `set` are overlapped by the new `[left, right]` interval.

```cpp
class RangeModule {
public:
    void addRange(int left, int right) {
        auto [begin, end] = intervals_.equal_range({ left, right });
        if (begin != end) {
            left = min(left, begin->first);
            right = max(right, prev(end)->second);
            intervals_.erase(begin, end);
        }
        intervals_.emplace(left, right);
    }
    
    bool queryRange(int left, int right) const {
        auto [begin, end] = intervals_.equal_range({ left, right });
        return begin != end && left >= begin->first && right <= begin->second;
    }
    
    void removeRange(int left, int right) {
        auto [begin, end] = intervals_.equal_range({ left, right });
        if (begin != end) {
            auto beginFirst = begin->first;
            auto endSecond = prev(end)->second;
            intervals_.erase(begin, end);
            if (beginFirst < left) {
                intervals_.emplace(beginFirst, left);
            }
            if (endSecond > right) {
                intervals_.emplace(right, endSecond);
            }
        }
    }
    
private:
    using Interval = pair<int, int>;
    struct IntervalCompare {
        bool operator()(const Interval& l, const Interval& r) const {
            return l.second < r.first;
        }
    };
    set<Interval, IntervalCompare> intervals_;
};
```