# [Java/C++/Python] Two Solutions with Explanation

**Author:** lee215
**Votes:** 77
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/1709725/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/1709725/)

---

# **Solution 1: Combination**
Assume `a[i]` is the index of `i`th seat,
there are `a[i+1] - a[i]` ways to put a divider between `i`th and `i+1`th seats.
We only needs to calculate the produit of all these `a[i+1] - a[i]`.

If the number of seat is odd or is less than 2, then no way to divide the corridor.

Time `O(n)`
Space `O(1)`
<br>

**C++**
```cpp [tag-C++]
    int numberOfWays(string s) {
        long res = 1, j = 0, k = 0, mod = 1e9 + 7;
        for (int i = 0; i < s.size(); ++i) {
            if (s[i] == 'S') {
                if (++k > 2 && k % 2 == 1)
                    res = res * (i - j) % mod;
                j = i;
            }
        }
        return k % 2 == 0 && k > 0 ? res : 0;
    }
```

**Java**
```java [tag-Java]
    public int numberOfWays(String s) {
        long res = 1, j = 0, k = 0, mod = (long)1e9 + 7;
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == 'S') {
                if (++k > 2 && k % 2 == 1)
                    res = res * (i - j) % mod;
                j = i;
            }
        }
        return k % 2 == 0 && k > 0 ? (int)res : 0;
    }
```

**Python**
`O(n)` space
```py [tag-Python]
    def numberOfWays(self, s):
        a = [i for i,c in enumerate(s) if c == 'S']
        res = 1
        for i in xrange(1,len(a) - 1,2):
            res *= a[i+1] - a[i]
        return res % (10**9+7) * (len(a) % 2 == 0 and len(a) >= 2)     
```
<br>

# **Solution 2: DP**
`a` the number of 0 seat
`b` the number of 1 seat
`c` the number of 2 seats

Time `O(n)`
Space `O(1)`

**C++**
```cpp [tag2-C++]
    int numberOfWays(string s) {
        int a = 1, b = 0, b2 = 0, c = 0, mod = 1e9 + 7;
        for (char& ch: s)
            if (ch == 'S')
                a = (a + c) % mod, c = b, b = a, a = 0;
            else
                a = (a + c) % mod;
        return c;
    }
```
**Java**
```java [tag2-Java]
    public int numberOfWays(String s) {
        int a = 1, b = 0, b2 = 0, c = 0, mod = (int)1e9 + 7;
        for (int i = 0; i < s.length(); ++i)
            if (s.charAt(i) == 'S') {
                a = (a + c) % mod;
                c = b; 
                b = a;
                a = 0;
            } else {
                a = (a + c) % mod;
            }
        return c;
    }
```

**Python**
```py [tag3-Python]
    def numberOfWays(self, s):
        a, b, c = 1, 0, 0
        for ch in s:
            if ch == 'S':
                a, b, c = 0, a + c, b
            else:
                a, b, c = a + c, b, c
        return c % (10**9+7)  
```
