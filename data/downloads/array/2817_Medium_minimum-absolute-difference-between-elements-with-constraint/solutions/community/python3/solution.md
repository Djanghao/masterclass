# [Python3] 2 heaps, intuitive answer

**Author:** jkoj25
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/4007263/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/4007263/)

---

Similar to leetcode_dafu's solution https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901622/heapq-or-union-find/, but I hope it is a little more clear.

# Approach
<!-- Describe your approach to solving the problem. -->
First, sort nums increasing. Then we can make one pass through, and note that this tells us that the current value will always be greater than every value we have seen before. So we use two heaps, one to check whether there is a possible difference candidate to the left of the current value, and one to tell us whether there is a candidate to the right. Each heap will contain (index, value) pairs (index here referring to original unsorted index); the left heap is a min heap since we look for the smallest indices first on the left, and the right heap is a max heap since we look for the largest indices first on the right (to guarantee we're far enough away). Then as we make our one pass, we check whether the top element of either heap is far enough away, and if it is, we pop it and consider it as a candidate for minimum difference. We're okay to pop them off, since we know we're looking at elements in ascending order, so we know we are already considering the closest possible match for that number. 

# Complexity
- Time complexity: O(nlogn) -- we sort length-n array, and then do 2n logn inserts into heap
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minAbsoluteDifference(self, nums: List[int], x: int) -> int:
        sortedNums = sorted((nums[i], i) for i in range(len(nums)))
        heapLeft, heapRight = [], []
        minDiff = float('inf')

        for i in range(len(sortedNums)):
            val, index = sortedNums[i]
            heapq.heappush(heapLeft, (index, val)) # min heap. smallest indices pop off (look for match on left side)
            heapq.heappush(heapRight, (-index, val)) # max heap. biggest indices pop off (look for match on right side)

            # because of sorting, everything in either heap is already less than val. so we just need to do an index check
            while heapLeft and heapLeft[0][0] + x <= index:# heapLeft we use to check whether current number can be the front half
                minDiff = min(minDiff, val - heapq.heappop(heapLeft)[1])
            while heapRight and heapRight[0][0] + x <= -index: # heapRight we use to check whether current number can be back half 
                minDiff = min(minDiff, val - heapq.heappop(heapRight)[1])
            # note that we don't mind popping these off, because we are always checking their distance with the closest valid partner
        return minDiff
```