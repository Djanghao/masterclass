# Longest Prefix

**Author:** votrubac
**Votes:** 29
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4304433/](https://leetcode.com/problems/make-three-strings-equal/solutions/4304433/)

---

Find the lenght of the longest matching prefix `i` amongs all strings.

So, we keep `i * 3` characters and remove the rest.

**C++**
```cpp
int findMinimumOperations(string s1, string s2, string s3) {
    int i = 0, sz = min({s1.size(), s2.size(), s3.size()});
    while (i < sz && s1[i] == s2[i] && s2[i] == s3[i])
        ++i;
    return i == 0 ? -1 : s1.size() + s2.size() + s3.size() - i * 3;
}
```