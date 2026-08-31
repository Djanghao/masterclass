# [Java/Python 3] One pass O(NM) HashTable codes w/ analysis.

**Author:** rock
**Votes:** 23
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1499081/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/1499081/)

---

```java
    public int numOfPairs(String[] nums, String target) {
        int cnt = 0, n = target.length();
        Map<Integer, Integer> prefix = new HashMap<>(), suffix = new HashMap<>();
        for (String num : nums) {
            int sz = num.length();
            if (target.startsWith(num)) {
                cnt += suffix.getOrDefault(n - sz, 0);
            }
            if (target.endsWith(num)) {
                cnt += prefix.getOrDefault(n - sz, 0);
            }
            if (target.startsWith(num)) {
                prefix.put(sz, 1 + prefix.getOrDefault(sz, 0));
            }
            if (target.endsWith(num)) {
                suffix.put(sz, 1 + suffix.getOrDefault(sz, 0));
            }
        }
        return cnt;
    }
```
```python
    def numOfPairs(self, nums: List[str], target: str) -> int:
            prefix, suffix = Counter(), Counter()
            cnt = 0
            for num in nums:
                if target.startswith(num):
                    cnt += suffix[len(target) - len(num)]
                if target.endswith(num):
                    cnt += prefix[len(target) - len(num)]
                if target.startswith(num):
                    prefix[len(num)] += 1
                if target.endswith(num):
                    suffix[len(num)] += 1
            return cnt
```
**Analysis:**

Let `N = nums.length`, `M` be the average size of the digits in `nums`, and `T = target.length()`, then each `startsWith()` cost time O(min(M, T)), therefore the total time is `O(N * M)`, space cost `O(N)`.