# [Java/Python 3] Put into HashSet Int instead of double/float.

**Author:** rock
**Votes:** 21
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/2807175/](https://leetcode.com/problems/number-of-distinct-averages/solutions/2807175/)

---

Essentially a two pointers algorithm is impelemented.
```java
    public int distinctAverages(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        Arrays.sort(nums);
        for (int i = 0, n = nums.length; i < n / 2; ++i) {
            seen.add(nums[i] + nums[n - 1 - i]);
        }
        return seen.size();
    }
```

Note: when `i` iterates from `0` to `n - 1`, `~i` iterates for `-1` to `-n` at the same time.


```python
    def distinctAverages(self, nums: List[int]) -> int:
        a, n = sorted(nums), len(nums) // 2
        return len({a[i] + a[~i] for i in range(n)})
```

Use Deque.
```java
    public int distinctAverages(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        Arrays.sort(nums);
        Deque<Integer> dq = new ArrayDeque<>();
        for (int n : nums) {
            dq.offer(n);
        }
        while (!dq.isEmpty()) {
            seen.add(dq.poll() + dq.pollLast());
        }
        return seen.size();
    }
```


**Analysis:**

Sorting is the major part of the time cost.

Time: `O(nlogn)`, space: `O(n)`, where `n = nums.length`.