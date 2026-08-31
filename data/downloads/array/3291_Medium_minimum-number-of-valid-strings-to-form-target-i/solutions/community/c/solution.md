# KMP

**Author:** votrubac
**Votes:** 41
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5788364/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5788364/)

---

**Intuition:** if we match right-to-left, we can greedily take the largest prefix in `words` that is also a suffix in `target`.
> It can be proven by a contradiction. As a quick example, say we matched two prefixes ["abc]["def"].
> - If there is a longer second prefix, e.g. ["ab]["cdef"], picking it will never make the result worse.
> - However, if we use a shorter second prefix, e.g. ["abc]?["ef"], the result *could* become worse.


Now, the trick is how to find the largest prefix/suffix efficiently.

For that, we employ the KMP algorithm. The prefix function for `words[i] + "#" + target` returns the prefix array.

The corresponding element of that array shows the longest suffix that is also a prefix.

The `prefix_function` method is taken as-is from the CP-A web site.

**Complexity Analysis**
- Time: O(n + k * m), where n is len(words), m is len(target) and k is the number of words.
- Memory: O(n + k * m)

**C++**
```cpp 
vector<int> prefix_function(const string &s) {
    int n = (int)s.length();
    vector<int> pi(n);
    for (int i = 1; i < n; i++) {
        int j = pi[i-1];
        while (j > 0 && s[i] != s[j])
            j = pi[j-1];
        if (s[i] == s[j])
            j++;
        pi[i] = j;
    }
    return pi;
}    
int minValidStrings(vector<string>& words, string target) {
    vector<vector<int>> pis;
    for (const auto &w : words)
        pis.push_back(prefix_function(w + "#" + target));
    int len = target.size(), res = 0;
    while(len > 0) {
        int match = 0;
        for (int i = 0; i < words.size(); ++i)
            match = max(match, pis[i][words[i].size() + len]);
        if (match == 0)
            return -1;
        ++res;
        len -= match;
    }
    return res;
}
```