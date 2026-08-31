# C++ Trie -- Use Array(Quick) Not Map(Slow)

**Author:** WangQiuc
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/986896/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/986896/)

---

Pratice Trie in C++.
An int is much cheaper/faster than an pointer
```
int trie[250005][26];

class Solution {
public:
    int countDistinct(string s) {
        int cnt = 0, n = s.length();
        memset(trie, 0, (n*n*26*4));
        for(int i = 0; i < n; i++) {
            int cur = 0;
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0for(int j = i; j < n; j++) {
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0  int &nxt = trie[cur][s[j]-'a'];
                if(!nxt) nxt = ++cnt;
                cur = nxt;
            }
        }
        return cnt;
    }
};
```