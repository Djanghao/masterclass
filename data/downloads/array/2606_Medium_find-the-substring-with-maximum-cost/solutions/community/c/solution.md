# Kadane

**Author:** votrubac
**Votes:** 37
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3366393/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3366393/)

---

We use array `v` to store the resulting value of each character:
- We initialize it with `1, 2, 3, 4, ...`. This is what `iota` is doing.
- Then we override certain values from `vals`.

Now, we can represent `s` as a numeric array, and we use Kadane to find the maximum sum subarray.

**C++**
```cpp
int maximumCostSubstring(string s, string chars, vector<int>& vals) {
    int v[26] = {}, max_cost = 0, cost = 0;
    iota(begin(v), end(v), 1);
    for (int i  = 0; i < chars.size(); ++i)
        v[chars[i] - 'a'] = vals[i];
    for (char ch : s) {
        cost = max(0, cost + v[ch - 'a']);
        max_cost = max(max_cost, cost);
    }
    return max_cost;
}
```