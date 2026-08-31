# Clean short O(N logk) solution: merge interval + merge sorted lists (with explanation)

**Author:** zzg_zzm
**Votes:** 19
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/113128/](https://leetcode.com/problems/employee-free-time/solutions/113128/)

---

This problem actually combines two previous problems, [56 Merge Intervals](https://leetcode.com/problems/merge-intervals) and [23 Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists).

**NOTE:** The optimized solution to [23 Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists) takes the advantage that each given list is already sorted (which is the same case here), so the time complexity is `O(N logk)` instead of `O(N logN)`, where `k` is number of lists, `N` is total length of all lists. It is because the priority queue will only hold max `k` elements.

1. Define the typical order for `Interval`, i.e., earlier start time with top priority. To put intervals in priority queue, we also need to track the end of each interval list.
```cpp
    typedef pair<vector<Interval>::iterator, vector<Interval>::iterator> Node;
    struct Comp { // earlier start time has top priority
        bool operator()(Node& a, Node& b) {
            return a.first->start > b.first->start;
        }
    };
```
2. Create a priority queue `q` based on the ordered defined above.
3. Keep tracking the last busy interval `lastBusy`, and compare to the next earliest time interval `cur` from `q`,
   * if `cur` does not overlap with `lastBusy`, we found a free time interval;
   * otherwise, extend the end of `lastBusy`.
4. Scan `q` until exhaust all intervals. 
 
```cpp    
    vector<Interval> employeeFreeTime(vector<vector<Interval>>& schedule) 
    {        
        priority_queue<Node, vector<Node>, Comp> q;
        for (auto& inters : schedule) // add earliest interval from each employee
            if (!inters.empty()) q.emplace(inters.begin(), inters.end());
        
        vector<Interval> freeTime;                
        for (auto lastBusy(*q.top().first); !q.empty(); q.pop()) 
        {
            auto cur = q.top();
            if (lastBusy.end < cur.first->start) { // found free time
                freeTime.emplace_back(lastBusy.end, cur.first->start); 
                lastBusy = *cur.first;
            }
            else lastBusy.end = max(lastBusy.end, cur.first->end); // extend busy time
            if (++cur.first < cur.second) q.emplace(cur.first, cur.second);
        }
        return freeTime;        
    }
```