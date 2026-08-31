# Python3 O(n) simple to understand solution with explanation

**Author:** mxmb
**Votes:** 8
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1659010/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1659010/)

---

Let's make note of something before we start:
* The length of the cycle is `len(nums)*2`, so queries at time `t, t*len(nums)*2 ... t*len(nums)*2*n` will be equal. 
* Let's set `time %= len(nums)*2` for simplicity

There are two cases
* The array is shrinking (or is empty) if `0 <= time <= len(nums)`:
	* At a given `time`, the new array is `nums[time:]` and is of length `len(nums)-time`. The element at position `idx+time` in the original array corresponds to the element at position `idx` in the new array, so `nums[idx+time] == nums[time:][idx]` if `0 <= idx+time < len(nums)`, else the query is out of bounds so we return -1.


* The array is growing if `len(nums) < time < 2*len(nums)`:
	*  At a given `time`, the new array is `nums[:time-len(nums)]` and is of length `time-len(nums)`. Since we are adding back elements in their original order, the element at `idx` in the original array equals the element at `idx` in the new array, as `nums[idx] == nums[:time-len(nums)][idx]` if `0 <= idx < time-len(nums)`, else the query is out of bounds so we return -1.

```python
def elementInNums(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        def answerQuery(query):
            time, idx = query
            time %= len(nums)*2
            if time <= len(nums):
                return nums[idx+time] if 0 <= idx+time < len(nums) else -1
            else:
                return nums[idx] if 0 <= idx < time-len(nums) else -1
        
        return [answerQuery(query) for query in queries]
```