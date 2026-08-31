# [Java/C++/Python] Easy and Concise with Explanation

**Author:** lee215
**Votes:** 281
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3421831/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3421831/)

---

# Why somebody downvoted me without a word?
# Please Upvote \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
<br>

# **Intuition**
Same problem:
Find out the minimum `k` where `word` is subsequence of `"abc"` repeated `k` times.

Since `"abc"` is increasing,
so we can split the original `work` into `k` strict increasing subarray.
<br>

# **Explanation**
Initial the `prev` as a big char,
then iterate each char `c` in `word`.
If `c <= prev`, it means we need to start a new `"abc"`,
then we increase `k++`.

Finally we find `k`, `word` is subsequence of `"abc"` repeated `k` times.
We return `k * 3 - n`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int addMinimum(String word) {
        int k = 0, prev = 'z', n = word.length();
        for (int i = 0; i < n; ++i) {
            k += word.charAt(i) <= prev ? 1 : 0;
            prev = word.charAt(i);
        }
        return k * 3 - n;
    }
```

**C++**
```cpp
    int addMinimum(string word) {
        int k = 0, prev = 'z';
        for (char& c: word) {
            k += c <= prev;
            prev = c;
        }
        return k * 3 - word.size();
    }
```

**Python**
```py
    def addMinimum(self, word: str) -> int:
        k, prev = 0, 'z'
        for c in word:
            k += c <= prev
            prev = c
        return k * 3 - len(word)
```

**Python 1-Liner**
```py
    def addMinimum(self, word: str) -> int:
        return 3 + sum(a >= b for a,b in pairwise(word)) * 3 - len(word)
```
