# [Python3] Binary Search + Heap, Beats 100%

**Author:** axgarg
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4784184/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4784184/)

---

```
from collections import defaultdict
import heapq

class Solution(object):
    def earliestSecondToMarkIndices(self, nums, changeIndices):
        """
        :type nums: List[int]
        :type changeIndices: List[int]
        :rtype: int
        """

        def is_possible(idx):
            map = defaultdict(int)
            for i in range(idx+1):
                if changeIndices[i] not in map:
                    map[changeIndices[i]] = i

            arr = []
            for key in map:
                heapq.heappush(arr, (-map[key], key))
            
            utilised = 0
            track_heap = []
            while arr:
                idx1, key = heapq.heappop(arr)
                idx1 = abs(idx1)
                min_req = 1 if nums[key-1] > 0 else 0
                total_capacity = idx-idx1-utilised
                if min_req <= total_capacity:
                    utilised += (1+min_req)
                    heapq.heappush(track_heap, (nums[key-1], key, 1+min_req))
                else:
                    if not track_heap or (track_heap[0][0] >= nums[key-1]):
                        continue
                    else:
                        _, _, cap_utilised = heapq.heappop(track_heap)
                        utilised -= cap_utilised
                        utilised += (1+min_req)
                        heapq.heappush(track_heap, (nums[key-1], key, 1+min_req))

            already_utilised_keys = set()
            while track_heap:
                _, idx3 ,_ = heapq.heappop(track_heap)
                already_utilised_keys.add(idx3)
            
            cap_req = utilised
            for i in range(len(nums)):
                number = nums[i]
                if i+1 not in already_utilised_keys:
                    cap_req += (number + 1)
            return cap_req <= idx+1

        low = 0
        high = len(changeIndices)-1
        ans = float('inf')
        while low <= high:
            mid = low + (high-low)//2
            if is_possible(mid):
                ans = min(ans, mid)
                high = mid-1
            else:
                low = mid+1
        
        return -1 if ans == float('inf') else (ans+1)
```