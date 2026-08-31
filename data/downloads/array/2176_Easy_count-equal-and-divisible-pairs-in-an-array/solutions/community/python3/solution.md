# [Java/Python 3] Traverse indices with same values.

**Author:** rock
**Votes:** 22
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1783416/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1783416/)

---

```java
    public int countPairs(int[] nums, int k) {
        Map<Integer, List<Integer>> indices = new HashMap<>();
        for (int i = 0; i < nums.length; ++i) {
            indices.computeIfAbsent(nums[i], l -> new ArrayList<>()).add(i);
        } 
        int cnt = 0;
        for (List<Integer> ind : indices.values()) {
            for (int i = 0; i < ind.size(); ++i) {
                for (int j = 0; j < i; ++j) {
                    if (ind.get(i) * ind.get(j) % k == 0) {
                        ++cnt;
                    }
                }
            }
        }
        return cnt;
    }
```
```python
    def countPairs(self, nums: List[int], k: int) -> int:
        cnt, d = 0, defaultdict(list)
        for i, n in enumerate(nums):
            d[n].append(i)
        for indices in d.values():    
            for i, a in enumerate(indices):
                for b in indices[: i]:
                    if a * b % k == 0:
                        cnt += 1
        return cnt
```