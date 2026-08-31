# [Java/C++/Python] Greedy, O(1) Solution

**Author:** lee215
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4600637/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/4600637/)

---

# **Solution 1**
We have 8 keys to map,
so we firstly fill each key a character
so 8 characters can map to 1-key push.
Then 2-keys, 3-keys..

Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minimumPushes(String word) {
        int res = 0;
        for (int i = 0; i < word.length(); i++)
            res += i / 8 + 1;
        return res;
    }
```

**C++**
```cpp
    int minimumPushes(string word) {
        int res = 0;
        for (int i = 0; i < word.size(); i++)
            res += i / 8 + 1;
        return res;
    }
```

**Python**
```py
    def minimumPushes(self, word: str) -> int:
        return sum(i // 8 + 1 for i in range(len(word)))
```
<br><br>

# **Solution 2: O(1) Solution**

Time `O(1)`
Space `O(1)`

**Java**
```java
    public int minimumPushes(String word) {
        int n = word.length();
        return (1 + n / 8) * (n / 8) * 4 + (n / 8 + 1) * (n % 8);
    }
```

**C++**
```cpp
    int minimumPushes(string word) {
        int n = word.size();
        return (1 + n / 8) * (n / 8) * 4 + (n / 8 + 1) * (n % 8);
    }
```

**Python**
```py
    def minimumPushes(self, word: str) -> int:
        n = len(word)
        return (1 + n // 8) * (n // 8) * 4 + (n // 8 + 1) * (n % 8)
```
