# Heap + hashmap O(nlogn)

**Author:** Harkness
**Votes:** 21
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4916744/](https://leetcode.com/problems/most-frequent-ids/solutions/4916744/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use a max heap to store `[freq, ID]`.

Also store the frequency of each ID in a map: `cnt[ID] = freq`

At each step `i`, update the frequency of `nums[i]` in `cnt`. Also put the new pair of `[freq, ID]` in the heap. We lazily update the heap, meaning at each step, we don't remove the stale pair in the heap, but when we look at the top of the heap for the max frequency, we ignore/pop the item if the frequency does not match what's stored in `cnt`. The pop operation can be amortized on each step of `cnt` update, so total amortized time is `O(nlogn)`

# Complexity
- Time complexity: `O(nlogn)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import heapq as hq
class Solution:
    def mostFrequentIDs(self, nums: List[int], freq: List[int]) -> List[int]:
        cnt = defaultdict(int)
        n = len(nums)
        heap = []
        res = [0] * n
        for i, (v, f) in enumerate(zip(nums, freq)):
            cnt[v] += f
            hq.heappush(heap, [-cnt[v], v])
            while heap and -heap[0][0] != cnt[heap[0][1]]:
                hq.heappop(heap)
            if heap:
                res[i] = -heap[0][0]
        return res
```