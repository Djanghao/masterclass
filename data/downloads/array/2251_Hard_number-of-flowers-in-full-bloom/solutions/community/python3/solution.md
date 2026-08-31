# [C++/Python] Binary Search and Sweep Line

**Author:** lee215
**Votes:** 196
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/1977099/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/1977099/)

---

# **Solution 1: Binary Seach**
## **Intuition**
Blooming flowers = started flowers - ended flowers

## **Explanation**
Collect `start` bloom time point array, then sort it.
Collect `end` bloom time point array, then sort it.

For each time point `t` in `persons`:
1. Binary search the upper bound of `t` in `start`, then we find the started flowers.
2. Binary search the lower bound of `t` in `end`, then we find the started flowers.
3. Blooming flowers = started flowers - ended flowers
<br>

## **Complexity**
Time `O(nlogn + mlogn)`
Space `O(n)`
<br>

**C++**
```cpp
    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& persons) {
        vector<int> start, end;
        for (auto& t : flowers)
            start.push_back(t[0]), end.push_back(t[1]);
        sort(start.begin(), start.end());
        sort(end.begin(), end.end());
        vector<int> res;
        for (int t : persons) {
            int started = upper_bound(start.begin(), start.end(), t) - start.begin();
            int ended = lower_bound(end.begin(), end.end(), t) - end.begin();
            res.push_back(started - ended);
        }
        return res;
    }
```

**Python**
```py
    def fullBloomFlowers(self, A: List[List[int]], persons: List[int]) -> List[int]:
        start, end = sorted(a for a,b in A), sorted(b for a,b in A)
        return [bisect_right(start, t) - bisect_left(end, t) for t in persons]
```

<br><br>

# **Solution 2: Meeting Rooms**
## **Intuition**
Similar to problems of Meeting Rooms.

## **Explanation**
Record the bloom flowers changes for every time point in a tree map `diff`
For `flowers[i] = [starti, endi]`,
On the time point `starti`, we can see flower `i`, so `diff[starti]++`,
On the time point `endi`, we can no more see flower `i`, so `diff[endi]--`.

Then we accumulate the diff values along thte time points,
we can get the number of flowers that are in full bloom for each time point.

Then we handle the query of `persons`,
for each time point `t` in `persons`,
we binary search the last time point that smaller or equal to `t`,
that the number of flowers this person can see.
<br>

## **Complexity**
Time `O(nlogn + mlogn)`
Space `O(n)`
<br>

**Python**
```py
    def fullBloomFlowers(self, flowers: List[List[int]], persons: List[int]) -> List[int]:
        diff = sortedcontainers.SortedDict({0: 0})
        for i,j in flowers:
            diff[i] = diff.get(i, 0) + 1
            diff[j + 1] = diff.get(j + 1, 0) - 1
        
        count = list(accumulate(diff.values()))
        return [count[diff.bisect(t) - 1] for t in persons]
```
