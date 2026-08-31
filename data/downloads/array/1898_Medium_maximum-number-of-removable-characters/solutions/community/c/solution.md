# Binary Search

**Author:** votrubac
**Votes:** 82
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268446/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268446/)

---

For each removed position in our string, we store its index in `rem`. That way, we can quickly check if that character was removed for a given `k`.

Then, we binary-search for the largest `k` when we can find a subsequence with characters `rem[i] < k` removed.

**C++**
```cpp
int maximumRemovals(string s, string p, vector<int>& rem) {
    int l = 0, r = rem.size();
    vector<int> map(s.size(), INT_MAX);
    for (int i = 0; i < rem.size(); ++i)
         map[rem[i]] = i;
    while (l < r) {
        int m = (l + r + 1) / 2, j = 0;
        for (int i = 0; i < s.size() && j < p.size(); ++i)
            if (map[i] >= m && s[i] == p[j])
                ++j;
        if (j == p.size())
            l = m;
        else
            r = m - 1;
    }
    return l;
}
```
**Java**
```java
public int maximumRemovals(String s, String p, int[] rem) {
    int l = 0, r = rem.length;
    int[] map = new int[s.length()];
    Arrays.fill(map, rem.length);
    for (int i = 0; i < rem.length; ++i)
         map[rem[i]] = i;    
    while (l < r) {
        int m = (l + r + 1) / 2, j = 0;
        for (int i = 0; i < s.length() && j < p.length(); ++i)
            if (map[i] >= m && s.charAt(i) == p.charAt(j))
                ++j;
        if (j == p.length())
            l = m;
        else
            r = m - 1;
    }
    return l;
}
```