# [Java/C++/Python] Starts With

**Author:** lee215
**Votes:** 45
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/1994777/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/1994777/)

---

# **Explanation**
for each word `w` in `words` list,
check if word `w` `startsWith` the string `s`
<br>

# **Complexity**
Time `O(NS)`
Space `O(1)`
<br>

**Java**
```java
    public int countPrefixes(String[] words, String s) {
        int res = 0;
        for (String w : words)
            if (s.startsWith(w))
                res++;
        return res;
    }
```

**C++**
Time O(NWS)
```cpp
    int countPrefixes(vector<string>& words, string s) {
        int res = 0;
        for (auto& w : words)
            res += s.find(w) < 1;
        return res; 
    }
```

**C++**
Suggested by @mzchen
```cpp
    int countPrefixes(vector<string>& words, string s) {
        int res = 0;
        for (auto& w : words)
            res += !s.compare(0, w.size(), w);
        return res;
    }
```

**Python**
```py
    def countPrefixes(self, words, s):
        return sum(map(s.startswith, words))
```
