# [Java/Python 3] Time O(n) space O(1) code.

**Author:** rock
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1635064/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1635064/)

---

For each descent periods ending at `i`, use `cnt` to count the # of the the periods and add to the output variable `ans`.
```java
    public long getDescentPeriods(int[] prices) {
        long ans = 0;
        int cnt = 0, prev = -1;
        for (int cur : prices) {
            if (prev - cur == 1) {
                ++cnt; 
            }else {
                cnt = 1;
            }
            ans += cnt;
            prev = cur;
        }
        return ans;
    }
```
```python
    def getDescentPeriods(self, prices: List[int]) -> int:
        ans = cnt = 0
        prev = -math.inf
        for cur in prices:
            if prev - cur == 1:
                cnt += 1
            else:
                cnt = 1
            ans += cnt
            prev = cur
        return ans
```