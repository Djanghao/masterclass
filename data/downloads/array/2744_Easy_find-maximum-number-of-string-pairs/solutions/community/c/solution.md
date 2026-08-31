# 676

**Author:** votrubac
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3677686/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3677686/)

---

There are 676 possible 2-character strings.

So, we use a boolean array to track if we've seen a string before.

> Note that we track reversed strings in the boolean array.  

**C++**
```cpp
int maximumNumberOfStringPairs(vector<string>& words) {
    int vis[676] = {}, res = 0;
    for (const auto &w : words) {
        res += vis[(w[1] - 'a') * 26 + w[0] - 'a'];
        vis[(w[0] - 'a') * 26 + w[1] - 'a'] = true;
    }
    return res;
}
```