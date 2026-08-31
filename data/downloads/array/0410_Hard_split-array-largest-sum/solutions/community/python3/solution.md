# Python solutions with thinking process (similar problems listed)

**Author:** otoc
**Votes:** 21
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/326747/](https://leetcode.com/problems/split-array-largest-sum/solutions/326747/)

---

Please see my solutions for these similar problems.

For these problems, it's relatively easy to solve the subproblem:
given a specific guess, determine whether it's possible to xxx?
Furthermore, the range of guess is limited, and the boolean answer of the above subproblem has the pattern
F...FT...T or T...TF...F.
Thus, we can use binary search to find the minimal/maximal value such that the boolean answer is True.
[378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/1004232/Python-solution-with-thinking-process)
[668. Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/discuss/1714072/Simple-Python-Binary-Search-(similar-problem-listed))
[410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/discuss/326747/Python-solutions-with-thinking-process)
[1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/discuss/390359/Simple-Python-Binary-Search)
[1231. Divide Chocolate](https://leetcode.com/problems/divide-chocolate/discuss/409956/Simple-Python-Binary-Search-(similar-problem-listed))
[875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/discuss/390523/Simple-Python-Binary-Search)
[774. Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/discuss/390526/Simple-Python-Binary-Search)
[1201. Ugly Number III](https://leetcode.com/problems/ugly-number-iii/discuss/390530/Simple-Python-Binary-Search)
[1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/discuss/1714075/Simple-Python-Binary-Search-(similar-problem-listed))
[1891. Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/discuss/2361972/Python-Binary-search-solution-(similar-problems-listed))
[2141. Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/discuss/1698346/Python-Binary-search-solution-(similar-problems-listed))

Key points of this problem:
1. Because all integers are non-negative, the possible range of the largest one of m sums 
is [max(nums), sum(nums)].
2. Use binary search to find the minimal possible value of the largest sum:
Given a guess max_sum, is it possible to split the array into m non-empty contiguous 
subarrays such that the sum of each subarray <= max_sum?  If not, this means the guess 
max_sum is too small. If yes, try another smaller guess.

Solution 1: binary search
time: O(n log(s)), where s = sum(nums)
space: O(1)
```
    def splitArray(self, nums: List[int], m: int) -> int:
        def cannot_split(max_sum, m):
            cuts, curr_sum  = 0, 0
            for x in nums:
                curr_sum += x
                if curr_sum > max_sum:
                    cuts += 1
                    curr_sum = x
            subs = cuts + 1
            return (subs > m)
        
        low, high = max(nums), sum(nums)
        while low < high:
            guess = low + (high - low) // 2
            if cannot_split(guess, m):
                low = guess + 1
            else:
                high = guess
        return low
```

Without hints, it is very difficult to get the above key points. Dynamic programming is the first idea in my mind to solve this problem.

Top-down DP: without the break condition, the solution will exceed time limit
time: O(n^2 m), space: O(n m)
```
    def splitArray(self, nums: List[int], m: int) -> int:
        def recursive(m, i):
            if m == 1:
                return sums[i]
            if m == i:
                return maxs[i]
            if (m, i) in dp:
                return dp[(m, i)]
            tmp = float('inf')
            for j in reversed(range(m - 1, i)):
                tmp = min(tmp, max(recursive(m - 1, j), sums[i] - sums[j]))
                if sums[i] - sums[j] >= tmp:
                    break
            dp[(m, i)] = tmp
            return dp[(m, i)]
        
        sums, maxs = [0], [0]
        for x in nums:
            sums.append(sums[-1] + x)
            maxs.append(max(maxs[-1], x))
        dp = {}
        return recursive(m, len(nums))
```

Bottom-up approach: without the break condition, the solution will exceed time limit
time: O(n^2 m), space: O(n m)
```
    def splitArray(self, nums: List[int], m: int) -> int:       
        sums, maxs = [0], [0]
        for x in nums:
            sums.append(sums[-1] + x)
            maxs.append(max(maxs[-1], x))
        dp = [[float('inf') for _ in range(len(nums) + 1)] for _ in range(m + 1)]
        for i in range(1, len(nums) + 1):
            dp[1][i] = sums[i]
        for m1 in range(1, m + 1):
            dp[m1][m1] = maxs[m1]
        for m1 in range(2, m + 1):
            for i in range(m1 + 1, len(nums) + 1):
                for j in reversed(range(m1 - 1, i)):
                    dp[m1][i] = min(dp[m1][i], max(dp[m1-1][j], sums[i] - sums[j]))
                    if sums[i] - sums[j] >= dp[m1][i]:
                        break
        return dp[m][len(nums)]
```

Further optimization:
dp[m1][i] = min{max{a_j, b_j} for j in range(m1 - 1, i)}
a_j is monotonically increasing,
b_j is monotonically decreasing,
if b_j >= a_j, the optimum is located in the interval [j, high],
else, the optimum is located in the interval [low, j).
So, we can use binary search to optimize.

Time: O(m n log n)
Space: O(m n)

```
    def splitArray(self, nums: List[int], m: int) -> int:       
        sums, maxs = [0], [0]
        for x in nums:
            sums.append(sums[-1] + x)
            maxs.append(max(maxs[-1], x))
        dp = [[float('inf') for _ in range(len(nums) + 1)] for _ in range(m + 1)]
        for i in range(1, len(nums) + 1):
            dp[1][i] = sums[i]
        for m1 in range(1, m + 1):
            dp[m1][m1] = maxs[m1]
        for m1 in range(2, m + 1):
            for i in range(m1 + 1, len(nums) + 1):
                low, high = m1 - 1, i - 1
                while low < high:
                    mid = low + (high - low) // 2
                    a, b = dp[m1-1][mid], sums[i] - sums[mid]
                    dp[m1][i] = min(dp[m1][i], max(a, b))
                    if b >= a:
                        low = mid + 1
                    else:
                        high = mid
                a, b = dp[m1-1][low], sums[i] - sums[low]
                dp[m1][i] = min(dp[m1][i], max(a, b))
        return dp[m][len(nums)]
```

