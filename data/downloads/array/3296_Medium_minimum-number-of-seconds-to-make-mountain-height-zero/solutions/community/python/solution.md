# Min Heap vs. Binary Search + Math

**Author:** votrubac
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5818294/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5818294/)

---


I tried the binary search, but got TLE. The min heap approach was much easier.

> Update: I beat TLE by using math, and the solution was AC with 8 ms runtime.

![image](./images/0.png)

## Binary Search
We binary search for the minimum number of seconds when workers can `reduce` the whole mountain.

To find out how many times `x` a worker with time `t` can decrease the mountain within `m` seconds, we can use math:
- t * (1 + 2 + 3 + ... + x) <= m
- x * (x + 1) / 2 <= m / t
- x * x + x <= m / t * 2
- x * x + x + 0.25 <= m / t * 2 + 0.25
- (x + 0.5) * (x + 0.5) <= m / T * 2 + 0.25
- x <= sqrt(m / t * 2 + 0.25) - 0.5 \u2584
 
**C++**
```cpp
long long minNumberOfSeconds(int mountainHeight, vector<int>& wt) {
    long long l = 1, r = 100000000000LL * mountainHeight / wt.size();
    while (l < r) {
        long long m = (l + r) / 2, h = transform_reduce(begin(wt), end(wt), 0LL, plus{}, [&](int t){
            return (long long)(sqrt(m / t * 2 + 0.25) - 0.5);
        });
        if (h < mountainHeight)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
```

## Min Heap

We use a min heap to pull the smallest seconds value.

In the heap, we track the current prefix sum, worker time, and x.

Each time we pick a worker, we track the maximum number of seconds so far.

We then push the new number of seconds back to the min heap.

**Python**
```python
class Solution:
    def minNumberOfSeconds(self, mountainHeight: int, workerTimes: List[int]) -> int:
        h = [(t, t, 1) for i, t in enumerate(workerTimes)]
        heapify(h)
        while mountainHeight > 1:
            ps, wt, x = heappop(h)
            heappush(h, (ps + wt * (x + 1), wt, x + 1))
            mountainHeight-= 1
        return heappop(h)[0] 
```

