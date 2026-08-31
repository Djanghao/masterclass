# Two solutions: DP with optimized Queue & DFS (Runtime & Memory beats 100.00% of users with Swift)

**Author:** gustilc
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/4642680/](https://leetcode.com/problems/jump-game-vi/solutions/4642680/)

---

# Intuition
Perhaps a simple solution is the DFS (or BFS) approach, where for each position, we enqueue all the positions up to $k$ moves forward. The runtime complexity, at first glance, doesn't seem too bad; after all, it will not grow exponentially greater than $n$, just $O(n * k$. However, for combinations of large $n$ and large $k$, it appears to exceed the time limit on Leetcode.
Another approach could be using dynamic programming (DP) where, instead of starting with the first local solution, we start with the next one. This means finding the maximum sum at position $i$ based on the sums calculated before it, up to $k$ positions before it. At first, one might think that for this solution, we should start at the end and go recursively backward, but this is a very inefficient idea due to exponential growth.
As mentioned earlier, we cannot start from the end, but we can start with $i$ equal to 1 because we already know the sums before it; $i$ equal to $0$ is the original number, and $i$ equal to $1$ we have just calculated, and so on until we reach $i$ equal to $i = n\u22121$.
One optimization could be to maintain a queue of indexes instead of checking for the maximum of the previous $k$ sums. These indexes will represent the calculated sums that are larger than the current sum. This ensures that the first index in this queue always points to the largest sum in the range of the last $k$ sums. Additionally, we need to remember to remove the first index in the queue if it is equal to $i\u2212k$.

# Approach
We create a copy of the nums array to update each value with the sum of itself plus the maximum sum in the $k$ positions before it. We also maintain a queue of indexes that we clean in each iteration for sums smaller or equal to the sum at $i$. At the end of the loop, we remove the first index in the queue if it is equal to $i\u2212k$.

# Complexity
- Time complexity: $O(n)$
Since we do not visit any number in the copy of nums more than once, neither in the queue, the runtime complexity will be $O(n)$

- Space complexity: $O(n + k)$
The size of the copy of nums is equal to the size of nums, and the maximum size of the queue is $k$ , so the overall space complexity is $O(n + k)$

# Code
```
class Solution {
    //DFS with time Limit Exceeded
    func maxResultDFS(_ nums: [Int], _ k: Int) -> Int {
        if nums.count == 1 { return nums[0] }
        var maximums = Array(repeating:Int.min, count:nums.count)
        maximums[0] = nums[0]
        var stack = [(0,maximums[0])]
        while stack.count > 0 {
            let elem = stack.removeLast()
            let idx = elem.0
            guard elem.1 == maximums[idx] else { continue }
            let maxIdx = nums.count - idx - 1
            let maxK = min(k, maxIdx) + 1
            for i in 1..<maxK  {
                let nextIdx = idx+i
                let nextSum = maximums[idx] + nums[nextIdx]
                if nextSum > maximums[nextIdx] {
                    maximums[nextIdx] = nextSum
                    if nextIdx < nums.count { 
                        stack.append( (nextIdx, nextSum) ) } } } }
        return maximums.last!
    }

    func maxResult(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        var dp = nums
        var deque = [Int]()

        for i in 0..<n {
            if !deque.isEmpty { dp[i] += dp[deque.first!] }

            while !deque.isEmpty && dp[i] >= dp[deque.last!] {
                deque.removeLast() }

            deque.append(i)

            if deque.first! == i - k { deque.removeFirst() }
        }
        return dp[n - 1]
    }
}
```