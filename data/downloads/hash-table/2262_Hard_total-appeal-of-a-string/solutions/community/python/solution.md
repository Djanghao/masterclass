# [Java/C++/Python] Easy and Concise with Explanation

**Author:** lee215
**Votes:** 237
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/1996390/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/1996390/)

---

# **Intuition**
Quite similar to [828. Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/discuss/128952/).
You can take 828 as an another chanllendge to practice more.
<br>

# **Explanation**
assume we have string xxxaxxxxb..., with s[i] = a and s[j] = b.
`s[i]` is th last character `a` before that `b`.

We want to count, how many substring ending at `s[j]` contains character `a`.
They are xxxaxxxxb, xxaxxxxb, xaxxxxb, axxxxb ...., 
`i + 1` substring ending with character `a` at `s[i]`,
so we do `res += i + 1`.

We repeatly do this for every `s[i]` and every one of 26 characters.
<br>

# **Complexity**
Time `O(n)`
Space `O(26)`
<br>

**Java**
```java
    public long appealSum(String s) {
        int last[] = new int[26];
        long res = 0;
        for (int i = 0; i < s.length(); ++i) {
            last[s.charAt(i) - 'a'] = i + 1;
            for (int j: last)
                res += j;
        }
        return res;
    }
```

**C++**
```cpp
    long long appealSum(string s) {
        vector<int> last(26);
        long res = 0, n = s.size();
        for (int i = 0; i < n; ++i) {
            last[s[i] - 'a'] = i + 1;
            for (int j: last)
                res += j;
        }
        return res;
    }
```

**Python**
```py
    def appealSum(self, s):
        last = {}
        res = 0
        for i,c in enumerate(s):
            last[c] = i + 1
            res += sum(last.values())
        return res
```
<br>
<br>


# **Solution 2: Improved from `O(26n)` to `O(n)`**
Don't do a O(26) for loop to accumulate the `last`,
insteadly ccount the total value of `last` and update it in `O(1)`
<br>

**Java**
```java
    public long appealSum(String s) {
        int last[] = new int[26];
        long res = 0, total = 0;
        for (int i = 0; i < s.length(); ++i) {
            total += i + 1 - last[s.charAt(i) - 'a'];
            last[s.charAt(i) - 'a'] = i + 1;
            res += total;
        }
        return res;
    }
```

**C++**
```cpp
    long long appealSum(string s) {
        vector<int> last(26);
        long res = 0, n = s.size(), total = 0;
        for (int i = 0; i < n; ++i) {
            total += i + 1 - last[s[i] - 'a'];
            last[s[i] - 'a'] = i + 1;
            res += total;
        }
        return res;
    }
```
<br>
<br>

# **Solution3: Count contirbution for each character**

This solution is more like what we do for [828. Count Unique Characters of All Substrings of a Given String](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/discuss/128952/).
You can take 828 as an another chanllendge to practice more.

In a substring, multiple same character only get one point.
We can consider that the first occurrence get the point.
Now for each character, we count its countribution for all substring.

For each character `s[i]`, 
the substring must start before `s[i]` to contain `s[i]`
and need to end after the `last` occurrence of `s[i]`,
otherwise the last occurrence of character `s[i]` will get the socre.

In total, there are `i - last[s[i]]` possible start position,
and `n - i` possible end position,
so `s[i]` can contribute `(i - last[s[i]]) * (n - i)` points.

From this formula, we can also the difference between problem 2262 and 828.

Complexity: Time `O(n)`, Space `O(26)`
<br>

**Java**
```java
    public long appealSum(String s) {
        int last[] = new int[26];
        Arrays.fill(last, -1);
        long res = 0, n = s.length();
        for (int i = 0; i < s.length(); ++i) {
            res += (i - last[s.charAt(i) - 'a']) * (n - i);
            last[s.charAt(i) - 'a'] = i;
        }
        return res;
    }
```

**C++**
```cpp
    long long appealSum(string s) {
        vector<int> last(26, -1);
        long res = 0, n = s.size();
        for (int i = 0; i < n; ++i) {
            res += (i - last[s[i] - 'a']) * (n - i);
            last[s[i] - 'a'] = i;
        }
        return res;        
    }
```

**Python**
```py
    def appealSum(self, s: str) -> int:
        last = defaultdict(lambda: -1)
        res, n = 0, len(s)
        for i, c in enumerate(s):
            res += (i - last[c]) * (n - i)
            last[c] = i
        return res
```
<br>
