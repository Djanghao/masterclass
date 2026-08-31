# [Java/Python] 1-Liner Solution

**Author:** lee215
**Votes:** 189
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1598919/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/1598919/)

---

# **Explanation**
If `s == 'H'`, return -1
If `s` starts with `HH'`, return -1
If `s` ends with `HH'`, return -1
If `s` has `'HHH'`, return -1

Each house `H` needs one bucket,
that's `s.count('H')`
Each `'H.H'` can save one bucket by sharing one in the middle,
that's `s.count('H.H')` (greedy count without overlap)
So return `s.count('H') - s.count('H.H')`
<br>

# **Key Point**
I'm not greedy,
Python `count` is greedy for me,
Java `replace` is greedy for me.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Python**
```py
    def minimumBuckets(self, s):
        return -1 if 'HHH' in s or s[:2] == 'HH' or s[-2:] == 'HH' or s == 'H' else s.count('H') - s.count('H.H')
```

**Java**
The number of "H" in `s` equals `n - s.replace("H", "").length()`
The number of "H.H" in `s` equals `n - s.replace("H.H", "  ").length()`
```java
    public int minimumBuckets(String s) {
        return (s.equals("H") || s.startsWith("HH") || s.endsWith("HH") || s.contains("HHH")) ?
               -1 : s.replace("H.H", "  ").length() - s.replace("H", "").length();
    }
```

**Python**
Regax soluiton from @stefan4trivia
```py
def minimumBuckets(self, s):
    return -1 if search('(^|H)H(H|$)', s) else s.count('H') - s.count('H.H')
```

**Java**
Regax soluiton from @stefan4trivia
Java's matches is for full matches
```java
public int minimumBuckets(String s) {
    return s.matches("(.*H)?H(H.*)?") ? -1 : s.length() - s.replaceAll("H(.H)?",
}
```
