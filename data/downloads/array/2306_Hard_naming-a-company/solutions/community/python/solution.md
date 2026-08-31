# [Java/C++/Python] Group by First Letter

**Author:** lee215
**Votes:** 162
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/2141172/](https://leetcode.com/problems/naming-a-company/solutions/2141172/)

---

# **Explanation**
Any `idea = first letter + postfix string`.
We can group all ideas by their first letter.

If two ideas `ideas[i]` and `ideas[j]` share a common postfix string,
then `ideas[i]` can not pair with any idea starts with `ideas[j][0]`
and  `ideas[j]` can not pair with any idea starts with `ideas[i][0]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public long distinctNames(String[] ideas) {
        HashSet<Integer>[] count = new HashSet[26];
        for (int i = 0; i < 26; ++i)
            count[i] = new HashSet<>();
        for (String s : ideas)
            count[s.charAt(0) - 'a'].add(s.substring(1).hashCode());
        long res = 0;
        for (int i = 0; i < 26; ++i)
            for (int j = i + 1; j < 26; ++j) {
                long c1 = 0, c2 = 0;
                for (int c : count[i])
                    if (!count[j].contains(c)) c1++;
                for (int c : count[j])
                    if (!count[i].contains(c)) c2++;
                res += c1 * c2;
            }
        return res * 2;
    }
```

**C++**
```cpp
    long long distinctNames(vector<string>& ideas) {
        unordered_set<string> count[26];
        for (auto& s: ideas)
            count[s[0] - 'a'].insert(s.substr(1));
        long long res = 0;
        for(int i = 0; i < 26; ++i)
            for(int j = i + 1; j < 26; ++j) {   
                long long c1 = 0L, c2 = 0L;
                for (auto& c: count[i])
                    if (!count[j].count(c)) c1++;
                for (auto& c: count[j])
                    if (!count[i].count(c)) c2++;
                res += c1 * c2;
            }
        return res * 2;
    }
```

**Python**
```py
    def distinctNames(self, ideas):
        count = defaultdict(set)
        for a in ideas:
            count[a[0]].add(hash(a[1:]))
        res = 0
        for a, seta in count.items():
            for b, setb in count.items():
                if a >= b: continue
                same = len(seta & setb)
                res += (len(seta) - same) * (len(setb) - same)
        return res * 2
```
