# [Java/Python 3] 2 methods: One Pass and short codes w/ analysis.

**Author:** rock
**Votes:** 63
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/708240/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/708240/)

---

**One Pass:**

```java
    public double average(int[] salary) {
        double sum = 0d;
        int M = Integer.MIN_VALUE, m = Integer.MAX_VALUE;
        for (int s : salary) {
            m = Math.min(m, s);
            M = Math.max(M, s);
            sum += s;
        }
        return (sum - m - M) / (salary.length - 2);
    }
```
```python
    def average(self, salary: List[int]) -> float:
        m, M, total = math.inf, -math.inf, 0.0
        for s in salary:
            m, M = min(m, s), max(M, s)
            total += s
        return (total - m - M) / (len(salary) - 2)
```

----
**Short code:**
The following java code has been improved by **@sydym6**
```java

import java.util.IntSummaryStatistics;

    public double average(int[] salary) {
        IntSummaryStatistics stat = Arrays.stream(salary).summaryStatistics();
        return (double)(stat.getSum() - stat.getMax() - stat.getMin()) / (stat.getCount() - 2);
    }
```


```python
    def average(self, salary: List[int]) -> float:
        return (sum(salary) - max(salary) - min(salary)) / (len(salary) - 2)
```

**Analysis:**

Time: `O(n)`, space: `O(1)`.