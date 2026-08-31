# Set

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884430/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884430/)

---

A set allows us to track whether an element was marked and not, and retrieve smallest elements.

(with a priority queue, we need to track marked elements separately).

**C++**
```cpp
vector<long long> unmarkedSumArray(vector<int>& nums, vector<vector<int>>& queries) {
    vector<long long> res;
    long long sum = accumulate(begin(nums), end(nums), 0LL);
    set<array<int, 2>> s;
    for (int i = 0; i < nums.size(); ++i)
        s.insert({nums[i], i});
    for (const auto &q : queries) {
        auto it = s.find({nums[q[0]], q[0]});
        if (it != end(s)) {
            sum -= nums[q[0]];
            s.erase(it);
        }
        for (int k = q[1]; k && !s.empty(); --k) {
            sum -= (*begin(s))[0];
            s.erase(begin(s));
        }
        res.push_back(sum);
    }
    return res;
}
```