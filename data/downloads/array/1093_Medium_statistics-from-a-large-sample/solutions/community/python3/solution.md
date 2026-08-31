# Clean Python | High Speed | O(n) time, O(1) space | Beats 98.9%

**Author:** avs-abhishek123
**Votes:** 2
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/3125221/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/3125221/)

---


# Code
```
class Solution:
    def sampleStats(self, count):
        n = sum(count)
        mi = next(i for i in range(256) if count[i]) * 1.0
        ma = next(i for i in range(255, -1, -1) if count[i]) * 1.0
        mean = sum(i * v for i, v in enumerate(count)) * 1.0 / n
        mode = count.index(max(count)) * 1.0
        for i in range(255):
            count[i + 1] += count[i]
        median1 = bisect.bisect(count, (n - 1) / 2)
        median2 = bisect.bisect(count, n / 2)
        median = (median1 + median2) / 2.0
        return [mi, ma, mean, median, mode]
```