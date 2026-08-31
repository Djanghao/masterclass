# Ruby Short O(nlogn)

**Author:** GuptaPrachur10
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/2059931/](https://leetcode.com/problems/minimum-time-difference/solutions/2059931/)

---

```
def min_time(t1, t2)
    [(t1-t2).abs, 1440-(t1-t2).abs].min
end
def find_min_difference(time_points)
    arr = time_points.map{|tp| tp.split(":").first.to_i*60 + tp.split(":").last.to_i}.sort
    res = 1.0/0
    (0...(arr.size-1)).each{|i| res = [res, min_time(arr[i], arr[i+1])].min}
    [res, min_time(arr.first, arr.last)].min
end
```
