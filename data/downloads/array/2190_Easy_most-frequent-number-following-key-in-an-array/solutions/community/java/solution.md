# [Java/Python 3] Simple code.

**Author:** rock
**Votes:** 27
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1822098/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1822098/)

---

**Java**
```java
    public int mostFrequent(int[] nums, int key) {
        Map<Integer, Integer> freq = new HashMap<>();
        int mostFreq = -1;
        for (int i = 0, n = nums.length, max = 0; i + 1 < n; ++i) {
            if (nums[i] == key) {
                int candidate = nums[i + 1];
                freq.put(candidate, 1 + freq.getOrDefault(candidate, 0));
                if (freq.get(candidate) > max) {
                    max = freq.get(candidate);
                    mostFreq = candidate;
                }
            }
        }
        return mostFreq;
    }
```
Or make the above simpler as follows:

```java
    public int mostFrequent(int[] nums, int key) {
        Map<Integer, Integer> freq = new HashMap<>();
        int mostFreq = nums[0];
        for (int i = 0, n = nums.length; i + 1 < n; ++i) {
            if (nums[i] == key && 
                        freq.merge(nums[i + 1], 1, Integer::sum) > 
                        freq.get(mostFreq)) {
                mostFreq = nums[i + 1];
            }
        }
        return mostFreq;
    }
```

----

**Python 3**

```python
    def mostFrequent(self, nums: List[int], key: int) -> int:
        c = Counter()
        for i, n in enumerate(nums):
            if n == key and i + 1 < len(nums):
                c[nums[i + 1]] += 1
        return c.most_common(1)[0][0]
```

One liner for fun: - credit to **@stefan4trivia**.

```python
    def mostFrequent(self, nums: List[int], key: int) -> int:
        return statistics.mode(b for a, b in itertools.pairwise(nums) if a == key)
```