# [Java/Python 3] Compute the shorter distance, w/ brief explanation and analysis.

**Author:** rock
**Votes:** 56
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1417680/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1417680/)

---

1. Initialize the `prev` as `a`;
2. Traverse the `word`, for each character, compute the distances from current character, `cur`, to previous one, `prev`, clockwise and counter-clockwise, respectively; Choose the minimum between them; 
3. Count in `1` second for each typing character; therefore we can initialize `cnt` to `word.length()`.

```java
    public int minTimeToType(String word) {
        int cnt = word.length();
        char prev = 'a';
        for (int i = 0; i < word.length(); ++i) {
            char cur = word.charAt(i);
            int diff = Math.abs(cur - prev);
            cnt += Math.min(diff, 26 - diff);
            prev = cur;
        }
        return cnt;
    }
```
```python
    def minTimeToType(self, word: str) -> int:
        cnt, prev = len(word), 'a'
        for cur in word:
            diff = abs(ord(cur) - ord(prev)) 
            cnt += min(diff, 26 - diff)
            prev = cur
        return cnt
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = word.length()`.