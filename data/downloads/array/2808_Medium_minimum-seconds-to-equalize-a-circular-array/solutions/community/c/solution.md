# Maximum Gap

**Author:** votrubac
**Votes:** 92
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3867950/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3867950/)

---

If  number `n` appears at positions `i` and `j`, it will take `(j - i) / 2` seconds to make all numbers between `i` and `j` equal `n`.

So, we need to find the maximum gap for all positions of `n`.

## Collect Positions
For each number, we store its positions in a hash map of vectors.

Then, for each `n`, we compute a maximum gap between two consecutive positions. 

> Note that we add one more position - `pos[0] + nums.size()` - to simulate a gap between the first and last positions.

In the end, we return the smallest maximum gap among all numbers.

**C++**
```cpp
int minimumSeconds(vector<int>& nums) {
    unordered_map<int, vector<int>> n_pos;
    for (int i = 0; i < nums.size(); ++i)
        n_pos[nums[i]].push_back(i);
    int res = INT_MAX;
    for (auto &[n, pos] : n_pos) {
        pos.push_back(pos[0] + nums.size());
        int seconds = 0;
        for (int i = 1; i < pos.size(); ++i)
            seconds = max(seconds, (pos[i] - pos[i - 1]) / 2);
        res = min(res, seconds);
    }
    return res;
}
```

## One Pass
Similar to above, but using two maps to track the most recent `pos` and the largest `gap` for each number.

Note that here `i` goes to `nums.size() * 2` to simulate a circular array.

**Python 3**
```python
class Solution:
    def minimumSeconds(self, nums: List[int]) -> int:
        pos, gap = {}, defaultdict(lambda: 0)
        for i, n in enumerate(nums + nums):
            if n in pos:
                gap[n] = max(gap[n], (i - pos[n]) // 2)
            pos[n] = i
        return min(gap.values())
```

**C++**
```cpp
int minimumSeconds(vector<int>& nums) {
    unordered_map<int, int> pos, gap;
    for (int i = 0; i < nums.size() * 2; ++i) {
        int n = nums[i % nums.size()];
        if (pos.count(n))
            gap[n] = max(gap[n], (i - pos[n]) / 2);
        pos[n] = i;
    }
    return min_element(begin(gap), end(gap), [](const auto &p1, const auto &p2){
        return p1.second < p2.second;
    })->second;
}
```