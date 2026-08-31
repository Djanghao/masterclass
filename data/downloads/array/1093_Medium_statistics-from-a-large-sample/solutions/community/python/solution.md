# Simple Python Solution | Faster than 92%

**Author:** hemantdhamija
**Votes:** 1
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/2931014/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/2931014/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def sampleStats(self, count: List[int]) -> List[float]:
        sample = {idx: cnt for idx, cnt in enumerate(count) if cnt}
        maximum, minimum, maxCount = max(sample.keys()), min(sample.keys()), max(sample.values())
        totalCount, totalSum = sum(sample.values()), sum(key * value for key, value in sample.items())
        mean, median, mode, medianCtr = totalSum / totalCount, 0, 0, 0
        for num in sample:
            if sample[num] == maxCount: mode = num
        count = list(accumulate(count))
        median1 = bisect.bisect(count, (totalCount - 1) / 2)
        median2 = bisect.bisect(count, totalCount / 2)
        median = (median1 + median2) / 2.0
        return [float(minimum), float(maximum), float(mean), float(median), float(mode)]
```