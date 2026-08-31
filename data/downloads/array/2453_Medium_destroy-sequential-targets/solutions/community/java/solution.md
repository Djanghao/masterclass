# [Java/Python 3] Count the frequency of  the remainder of modulo.

**Author:** rock
**Votes:** 18
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/2756360/](https://leetcode.com/problems/destroy-sequential-targets/solutions/2756360/)

---

**Q & A**

Q1: What does `freqs.merge(n, 1, Integer::sum)` mean in Java code?
A1: `freqs.merge(n, 1, Integer::sum)` is simiar to `freqs.put(n, freqs.getOrDefault(n, 0) + 1)`, which increase the frequency (occurrence) of `n` by `1`; The difference between them is that `merge` return the increased frequency but `put` returns old value: the frequency before being increased (or `null`).

**End of Q & A**

----

1. Count the frequencies of `remainder = nums[i] % space`;
2. Traverse the input array `nums` again and locate the minimum.

```java
    public int destroyTargets(int[] nums, int space) {
        Map<Integer, Integer> freqs = new HashMap<>();
        int maxFreq = 0;
        for (int n : nums) {
            n %= space;
            maxFreq = Math.max(maxFreq, freqs.merge(n, 1, Integer::sum));
        }
        int min = Integer.MAX_VALUE;
        for (int n : nums) {
            if (freqs.get(n % space) == maxFreq && min > n) {
                min = n;
            }
        }
        return min;
    }
```
```python
    def destroyTargets(self, nums: List[int], space: int) -> int:
        freqs, mi = Counter(), inf
        for num in nums:
            freqs[num % space] += 1
        max_freq = max(freqs.values())
        for num in nums:
            if freqs[num % space] == max_freq and num < mi:
                mi = num
        return mi
```

**Analysis:**

Time & space: `O(n)`, where `n = nums.length`.

----

Please let me know if you have any questions, and **upvote** if the post is helpful.