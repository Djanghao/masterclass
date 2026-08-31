# [Java/Python 3] Sliding Window T O(n) S O(1), w/ brief explanation and analysis.

**Author:** rock
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454254/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2454254/)

---

Maintain a sliding window of size `k`, keep updating the count of `W` out of it and find the minimum.

Note: `lo` and `hi` are the lower and upper bounds of the sliding window, exclusive and inclusive respectively.
```java
    public int minimumRecolors(String blocks, int k) {
        int min = Integer.MAX_VALUE;
        for (int lo = -1, hi = 0, white = 0; hi < blocks.length(); ++hi) {
            white += blocks.charAt(hi) == 'W' ? 1 : 0;
            if (hi - lo >= k) { // the window reaches size of k.
                min = Math.min(min, white); // update  minimum.
                // slide 1 step right the lower bound of the sliding
                // window and update the value of white count.
                white -= blocks.charAt(++lo) == 'W' ? 1 : 0;
            }
        }
        return min;
    }
```
```python
    def minimumRecolors(self, blocks: str, k: int) -> int:
        lo, white, mi = -1, 0, inf
        for hi, c in enumerate(blocks):
            if c == 'W':
                white += 1
            if hi - lo >= k:
                mi = min(white, mi)
                lo += 1
                white -= blocks[lo] == 'W' 
        return mi
```
Time `O(k * n)` Python 3 code: - credit to **@chuhonghao01**
```python
    def minimumRecolors(self, blocks: str, k: int) -> int:
        n, mi = len(blocks), inf
        for i in range(n - k + 1):
            white = blocks.count('W', i, i + k)
            mi = min(white, mi)
        return mi
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = blocks.length()`.

----

Similar Problems: - Credit to **@haihoangdang91**.

1151. Minimum Swaps to Group All 1's Together
2134. Minimum Swaps to Group All 1's Together II
