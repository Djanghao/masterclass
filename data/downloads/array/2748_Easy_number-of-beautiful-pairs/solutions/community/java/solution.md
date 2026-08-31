# [Java/Python 3] Bruteforce: Check each pair, w/ analysis.

**Author:** rock
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3679155/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3679155/)

---



```java
    public int countBeautifulPairs(int[] nums) {
        int pairs = 0;
        for (int i = 0; i < nums.length; ++i) {
            int d = nums[i] % 10;
            for (int j = 0; j < i; ++j) {
                int n = nums[j];
                while (n >= 10) {
                    n /= 10;
                }
                pairs += gcd(n, d) == 1 ? 1 : 0;
            }
        }
        return pairs;
    }
    private int gcd(int x, int y) {
        while (y != 0) {
            int tmp = x % y;
            x = y;
            y = tmp;
        }
        return x;
    }
```

```python
    def countBeautifulPairs(self, nums: List[int]) -> int:
        pairs = 0
        for i, num in enumerate(nums):
            d = num % 10
            for j in range(i):
                n = nums[j]
                while n >= 10:
                    n //= 10
                pairs += gcd(d, n) == 1
        return pairs
```

**Analysis:**
`gcd(x, y)` cost `O(log(min(x, y)))`, therefore

Time: `O(n ^ 2 * log(max(nums)))`, space: `O(1)`, where `n = nums.length`.
