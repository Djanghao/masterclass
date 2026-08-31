# Division and Modulo

**Author:** votrubac
**Votes:** 62
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1693253/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1693253/)

---

We pre-initialize the result with filled `k`-size strings.

Then, we place `i`-th character into res`[i / k][i % k]`.

**C++**
```cpp
vector<string> divideString(string s, int k, char fill) {
    vector<string> res((s.size() + k - 1) / k, string(k, fill));
    for (int i = 0; i < s.size(); ++i)
        res[i / k][i % k] = s[i];
    return res;
}
```