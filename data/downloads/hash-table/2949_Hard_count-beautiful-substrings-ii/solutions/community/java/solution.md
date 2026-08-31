# [Java/C++/Python] HashMap

**Author:** lee215
**Votes:** 50
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330696/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330696/)

---

# **Need to know**
If we only have the condition `vowels == consonants`,
we can count the difference between vowels and consonants in prefix substring,
and count the count in a hashmap,
to find out the number of substring with diff `0`.


# **Explanation**
In this problem, we have one more constrain of
`(vowels * consonants) % k == 0`.
Assume the length is `l` and `vowels == consonants`,
so `(l / 2) * (l / 2)  k == 0`,
so `l * l % (k * 4) == 0`.

We only need to find out the smallest `l` satifying the above equation,
and only need to consider the substring with length `l, 2l, 3l ...`
In additional to the solution in "need to know" section,
we count the index in bucket with different module of `l`.
<br>

# **Complexity**(
Time `O(n + k)`
Space `O(n + k)`

Both can improve to `O(n + sqrt(k))`.
<br>

**Java**
```java
    public long beautifulSubstrings(String s, int k) {
        int n = s.length(), v = 0, l;
        for (l = 1; l * l % (K * 4) > 0; ++l);
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        HashMap<Integer, Integer>[] seen = new HashMap[l];
        for (int i = 0; i < l; i++) {
            seen[i] = new HashMap<>();
        }
        seen[l - 1].put(0, 1);
        long res = 0;
        for (int i = 0; i < n; i++) {
            v += vowels.contains(s.charAt(i)) ? 1: -1;
            int c = seen[i % l].getOrDefault(v, 0);
            res += c;
            seen[i % l].put(v, c + 1);
        }
        return res;
    }
```

**C++**
```cpp
    long long beautifulSubstrings(string s, int k) {
        int n = s.length(), v = 0, l;
        for (l = 1; l * l % (k * 4); ++l);
        set<char> vowels = {'a', 'e', 'i', 'o', 'u'};
        vector<unordered_map<int, int>> seen(l);
        seen[l - 1][0] = 1;
        long long res = 0;
        for (int i = 0; i < n; i++) {
            v += vowels.find(s[i]) != vowels.end() ? 1: -1;
            res += seen[i % l][v]++;
        }
        return res;
    }
```

**Python**
```py
    def beautifulSubstrings(self, s: str, k: int) -> int:
        n = len(s)
        l = next(i for i in count(1) if i * i % k == 0) * 2
        vowels = set(list('aeiou'))
        seen = [Counter() for i in range(l)]
        seen[-1][0] = 1
        res = 0
        v = 0
        for i,c in enumerate(s):
            v += 1 if s[i] in vowels else -1
            res += seen[i % l][v]
            seen[i % l][v] += 1
        return res
```
