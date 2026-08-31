# Line Sweep

**Author:** votrubac
**Votes:** 77
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/1359720/](https://leetcode.com/problems/describe-the-painting/solutions/1359720/)

---

We can use the line sweep approach to compute the sum (color mix) for each point. We use this line to check when a sum changes (a segment starts or finishes) and describe each mix. But there is a catch: different colors could produce the same sum. 

I was puzzled for a moment, and then I noticed that the color for each segment is distinct. So, every time a segment starts or ends, the color mix is different (even if the sum is the same). So we also mark `ends` of color segments on our line.

**Java**
```java
public List<List<Long>> splitPainting(int[][] segments) {
    long mix[] = new long[100002], sum = 0, last_i = 0;
    boolean ends[] = new boolean[100002];
    List<List<Long>> res = new ArrayList<>();
    for (var s : segments) {
        mix[s[0]] += s[2];
        mix[s[1]] -= s[2];
        ends[s[0]] = ends[s[1]] = true;
    }
    for (int i = 1; i < 100002; ++i) {
        if (ends[i] && sum > 0)
            res.add(Arrays.asList(last_i, (long)i, sum));
        last_i = ends[i] ? i : last_i;
        sum += mix[i];
    }    
    return res;
}
```
**C++**
```cpp
vector<vector<long long>> splitPainting(vector<vector<int>>& segments) {
    long long mix[100002] = {}, sum = 0, last_i = 0;
    bool ends[100002] = {};
    vector<vector<long long>> res;
    for (auto &s : segments) {
        mix[s[0]] += s[2];
        mix[s[1]] -= s[2];
        ends[s[0]] = ends[s[1]] = true;
    }
    for (int i = 1; i < 100002; ++i) {
        if (ends[i] && sum)
            res.push_back({last_i, i, sum});
        last_i = ends[i] ? i : last_i;
        sum += mix[i];
    }
    return res;
}
```
**Python 3**
```python
class Solution:
    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:
        mix, res, last_i = DefaultDict(int), [], 0
        for start, end, color in segments:
            mix[start] += color
            mix[end] -= color
        for i in sorted(mix.keys()):
            if last_i in mix and mix[last_i]:
                res.append([last_i, i, mix[last_i]])
                mix[i] += mix[last_i]
            last_i = i
        return res
```