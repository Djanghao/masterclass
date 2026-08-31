# [Python3] Heap/Priority Queue, O(NlogN + klogk)

**Author:** xil899
**Votes:** 95
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2456716/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2456716/)

---

**Initial Observation**
1. Given `n` can be as large as `10^5`, the time complexity of this problem has to be no worse than log-linear.
2. This problem is dealing with *subsequences* but not *subarrays*, indicating we can shuffle the order of the original array, e.g. by sorting it.
3. Given `-10^9 <= nums[i] <= 10^9`, indicating we need to be *clever* when dealing with positive and negative numbers.
4. Given we need to return the `k`-th largest subsequence sum, indicating we can use a min-heap to store the possible results.

**Implementation**
1. We find the sum of all positive numbers. This is the maximum possible sum among all subsequence sums. We initialize our min-heap `ans` to be `[maxSum]`.
2. We create an array `absNums` of the absolute values, sorted from smallest to largest.
3. We create a max-heap `maxHeap`. It will start with one pair in it. That pair will be `(maxSum - absNums[0], 0)`. The pairs are compared each time with largest sum first.
4. Before we have `k` elements in `ans`, we will:
```
pop (nextSum, i) from maxHeap
push nextSum to ans
if i + 1 < N:
	push (nextSum + absNums[i] - absNums[i + 1], i + 1) to maxHeap
	push (nextSum - absNums[i + 1], i + 1) to maxHeap
```

**Why we need two pushs following each pop from the max-heap?** (by @gonpachiro)
In this [post](https://stackoverflow.com/a/33220735), [David Eisenstat](https://stackoverflow.com/users/2144669/david-eisenstat) shared an intuitive explanation. Basically, we maintain a tree-structure via a min-heap to record the subsequence sums. Each time we delete a node, we insert its children. This way, we don't need to calculate every subsequence sum explicitly (i.e. by adding and subtracting rather than summing from scratch).

**Complexity**
Time Complexity: `O(NlogN + klogk)` for sorting and heap operations
Space Complexity: `O(N + k)`, for using `absNums`, `ans` and `maxHeap`
 
 **Solution**
```
class Solution:
    def kSum(self, nums: List[int], k: int) -> int:
        maxSum = sum([max(0, num) for num in nums])
        absNums = sorted([abs(num) for num in nums])
        maxHeap = [(-maxSum + absNums[0], 0)]
        ans = [maxSum]
        while len(ans) < k:
            nextSum, i = heapq.heappop(maxHeap)
            heapq.heappush(ans, -nextSum)
            if i + 1 < len(absNums):
                heapq.heappush(maxHeap, (nextSum - absNums[i] + absNums[i + 1], i + 1))
                heapq.heappush(maxHeap, (nextSum + absNums[i + 1], i + 1))
        return ans[0]
```

Please upvote if you find the solution helpful. Kudos to [btilly](https://stackoverflow.com/users/585411/btilly)'s [post](https://stackoverflow.com/questions/72114300) for inspiration.

**Cleaner Solution Using One Heap** (by @celestez)
```
class Solution:
    def kSum(self, nums: List[int], k: int) -> int:
        maxSum = sum([max(0, num) for num in nums])
        absNums = sorted([abs(num) for num in nums])
        maxHeap, nextSum = [(-maxSum + absNums[0], 0)], -maxSum
        for _ in range(k - 1):
            nextSum, i = heapq.heappop(maxHeap)
            if i + 1 < len(absNums):
                heapq.heappush(maxHeap, (nextSum - absNums[i] + absNums[i + 1], i + 1))
                heapq.heappush(maxHeap, (nextSum + absNums[i + 1], i + 1))
        return -nextSum
```