# Accumulate

**Author:** votrubac
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2934010/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2934010/)

---

**C++**
```cpp
int maximumValue(vector<string>& ss) {
    return accumulate(begin(ss), end(ss), 0, [](int res, const auto &s){
        return max(res, all_of(begin(s), end(s), ::isdigit) ? stoi(s) : (int)s.size());
    });
}
```