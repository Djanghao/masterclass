# Detail Go DP solution refered to 0-1 knapsack problem

**Author:** zf6cag5dpe71czpk
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/5412190/](https://leetcode.com/problems/number-of-great-partitions/solutions/5412190/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Great pair = total possible pair - not great pair
- Use "0-1 knapsack problem, find total number of solution" to find not great pair by dynamic programming 

# Approach
<!-- Describe your approach to solving the problem. -->

### Solution Explanation:
1. **Initial Checks:**
   - If there's only one number in the array, it's impossible to create two groups, so the result is immediately `0`.
   - Calculate the total sum of the array. If this sum is less than `2*k`, it's impossible to split the array into two valid groups, hence return `0`.

2. **Dynamic Programming Table Setup:**
   - The solution uses a 2D dynamic programming table `ret` where `ret[i][j]` represents the number of ways to form a sum `j` using the first `i` items of `nums`.
   - The table is initialized such that `ret[0][0]` is `1` (base case: one way to form a sum of `0` with zero items), and `ret[i][0]` is set to `1` for all `i` because there's always one way to form a sum of `0` (by choosing no elements).

3. **Filling the DP Table:**
   - The loop goes through each item and each potential sum up to `k-1` (since we're interested in sums less than `k` to later find partitions that don't meet the requirement).
   - If the current item can fit into the current sum (i.e., `j >= nums[i-1]`), the number of ways to achieve sum `j` with the first `i` items is the sum of:
     - The number of ways to achieve this sum without the current item (`ret[i-1][j]`).
     - The number of ways to achieve the remaining sum (`j-nums[i-1]`) after including the current item (`ret[i-1][j-nums[i-1]]`).
   - If the current item doesn't fit, the value is simply carried over from the row above (`ret[i-1][j]`), indicating we're excluding the current item.

4. **Calculating Non-Great Partitions:**
   - After filling the DP table, calculate the sum of all possible ways to form sums less than `k` using all items. This sum represents the number of non-great partitions, i.e., where at least one group's sum is less than `k`.
   - The total number of ways to split the array into two groups irrespective of sum is `2^n` (since each item can independently be in one of two groups).
   - Subtract the number of non-great partitions (doubled, because each non-great partition where one group is invalid implies another partition where the other group is invalid) from the total to get the number of great partitions.

5. **Modulo Operation:**
   - Since the output can be large, the result is returned modulo \\(10^9 + 7\\).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
func countPartitions(nums []int, k int) int {
	var n = len(nums)
	if n <= 1 {
		return 0
	}

	// impossible to have any great partition
	var sum = 0
	for _, val := range nums {
		sum += val
	}
	if sum < k*2 {
		return 0
	}

    // 0-1 knapsack problem, find total number of solution -> find "not great" pair
	var ret = make([][]*big.Int, n+1)
	for i := range ret {
		ret[i] = make([]*big.Int, k)
		for j := range ret[i] {
			ret[i][j] = big.NewInt(0)
		}
	}

	for j := range ret[0] {
		ret[0][j] = big.NewInt(0)
	}
	for i := range ret {
		ret[i][0] = big.NewInt(1)
	}
	ret[0][0] = big.NewInt(1)
	for i := 1; i <= n; i++ {
		for j := 1; j < k; j++ {
			var remain = j - nums[i-1]
			if remain >= 0 {
				ret[i][j].Add(ret[i-1][j], ret[i-1][remain])
			} else {
				ret[i][j].Set(ret[i-1][j])
			}
		}
	}

	// great pair = total possibility - not great pair
	var notGreat = big.NewInt(0)
	for _, val := range ret[n] {
		notGreat.Add(notGreat, val)
	}
	notGreat.Mul(notGreat, big.NewInt(2))
	var total = new(big.Int).Exp(big.NewInt(2), big.NewInt(int64(n)), nil)
	var great = new(big.Int).Sub(total, notGreat)
	// process result as the question requesting
	var mod = big.NewInt(int64(math.Pow(10, 9)) + int64(7))
	return int(great.Mod(great, mod).Int64())
}

```
