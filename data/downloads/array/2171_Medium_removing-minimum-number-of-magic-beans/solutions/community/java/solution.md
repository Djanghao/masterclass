# Simple Java Solution Using Sort

**Author:** 4ppl3Hun73r
**Votes:** 88
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766868/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766868/)

---

nums = a, b, c, d ( a < b < c < d )
if make nums [a, a, a, a] remove beans (b - a) + (c - a) + (d - a) == b + c + d - 3a
if make nums [0, b, b, b] remove beans a + (c - b) + (d - b) == a + c + d - 2b
if make nums [0, 0, c, c] remove beans a + b + (d - c) == a + b + d - c
if make nums [0, 0, 0, d] remove beans a + b + c

b + c + d - 3a == (a + b + c + d) - 4a
a + c + d - 2b == (a + b + c + d) - 3b
a + b + d -c == (a + b + c + d) - 2c
a + b + c == (a + b + c + d) - d

```
	public long minimumRemoval(int[] beans) {
        Arrays.sort(beans);
        long sum = 0;
        for (int bean : beans) {
            sum += bean;
        }
        long result = Long.MAX_VALUE;
        long m = beans.length;
        for (int i = 0; i < beans.length; i++, m--) {
            result = Math.min(result, sum - m * beans[i]);
        }
        return result;
    }
```





