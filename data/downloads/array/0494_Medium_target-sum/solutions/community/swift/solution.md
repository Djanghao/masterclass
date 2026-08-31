# Swift: 6 solutions, from recursive to DP to OPTIMIZED, 100% with complexity analysis

**Author:** voxqhuy
**Votes:** 10
**Link:** [https://leetcode.com/problems/target-sum/solutions/818871/](https://leetcode.com/problems/target-sum/solutions/818871/)

---

**Recursive** Brute-force
*Time: O(2^n), Space:O(m) where n is nums.count and m is the range of sum*
```
func findTargetSumWays(_ nums: [Int], _ S: Int) -> Int {
	return helper(nums, 0, nums.count, S)
}

func helper(_ nums: [Int], _ index: Int, _ count: Int, _ target: Int) -> Int {
	if index == count {
		return target == 0 ? 1 : 0
	} else {
		let plus = helper(nums, index + 1, count, target - nums[index])
		let minus = helper(nums, index + 1, count, target + nums[index])
		return plus + minus
	}
}
```
Let's improve the recursion with memoization
**Recursive with memo (top-down)**
*Time: O(n * m), Space:O(n * m) where n is nums.count and m is the range of sum*
```
func findTargetSumWays(_ nums: [Int], _ S: Int) -> Int {
	var memo = [[Int]: Int]()
	return helper(nums, 0, nums.count, S, &memo)
}

func helper(_ nums: [Int], _ index: Int, _ count: Int, _ target: Int, _ memo: inout [[Int]: Int]) -> Int {
	if let solved = memo[[index, target]] { return solved }

	if index == count {
		return target == 0 ? 1 : 0
	} else {
		let plus = helper(nums, index + 1, count, target - nums[index], &memo)
		let minus = helper(nums, index + 1, count, target + nums[index], &memo)
		memo[[index, target]] = plus + minus
		return memo[[index, target]]!
	}
}
```
---
Let's try to do it iteratively
**Iterative with 2D memo**
*Time: O(n * m), Space:O(n * m) where n is nums.count and m is the range of sum*
```
func findTargetSumWays(_ nums: [Int], _ S: Int) -> Int {
	let count = nums.count
	let sum = nums.reduce(0, +)
	if (S < -sum || S > sum) { return 0 } // impossible

	var memo = Array(repeating: Array(repeating: 0, count: sum * 2 + 1), count: count) 
	memo[0][sum + nums[0]] = 1
	memo[0][sum - nums[0]] += 1 // nums[0] could be 0

	for i in 1..<count {
		let num = nums[i]
		for j in 0...2*sum {
			if memo[i - 1][j] > 0 { // if there's valid sum of j up to index i - 1
				memo[i][j + num] += memo[i - 1][j]
				memo[i][j - num] += memo[i - 1][j]
			}
		}
	}

	return memo[count - 1][sum + S]
}
```
Improve the solution above by using only 1D array
**Iterative with 1D memo**
*Time: O(n * m), Space:O(m) where n is nums.count and m is the range of sum*
```
func findTargetSumWays(_ nums: [Int], _ S: Int) -> Int {
	let count = nums.count
	let sum = nums.reduce(0, +)
	if (S < -sum || S > sum) { return 0 } // impossible

	var memo = Array(repeating: 0, count: sum * 2 + 1) 
	memo[sum + nums[0]] = 1
	memo[sum - nums[0]] += 1 // nums[0] could be 0

	for i in 1..<count {
		let num = nums[i]
		var nextMemo = Array(repeating: 0, count: sum * 2 + 1) 
		for j in 0...2*sum {
			if memo[j] > 0 { // if there's valid sum of j in the past
				nextMemo[j + num] += memo[j]
				nextMemo[j - num] += memo[j]
			}
		}
		memo = nextMemo
	}

	return memo[sum + S]
}
```

---
Here is a solution after some advanced thought process.
Let's say we have the total sum of all numbers and call it "sum". We know that to subtract and add numbers in "nums" to get to "S" we need some numbers that can add up to ("S" - "sum") / 2, and **SUBTRACT those out**.

For example: if our "nums" is 1 2 2 3 4 and S is 4.
The total "sum" of "nums" is 12 as you can easily calculate. How do we get from 12 to 4? We need numbers that can add up to (12 - 4) / 2 = 4, and **SUBTRACT those out**. From observing, those numbers can be 1, 3 or 2, 2.

Thereforre, if we do -1 +2 +2 -3 + 4, or +1 -2 -2 +3 +4, we both will get 4 which is what we wanted for "S"

Here is the implementation.
*Time: O(n * t), Space:O(n * t) where n is nums.count and t is the target which = (sum - S) / 2*
```
func findTargetSumWays(_ nums: [Int], _ S: Int) -> Int {
	let count = nums.count
	let sum = nums.reduce(0, +)
	if (S < -sum || S > sum) { return 0 } // impossible
	if (sum - S) % 2 == 1 { return 0 } // impossible

	let target = (sum - S) / 2 // we only need to find numbers that add up to this target

	var memo = Array(repeating: Array(repeating: 0, count: target + 1), count: count + 1)
	memo[0][0] = 1; 

	for i in 1...count {
		let num = nums[i - 1]
		for curTarget in 0...target {
			memo[i][curTarget] += memo[i - 1][curTarget]
			if curTarget >= num { // num is a possible candidate
				memo[i][curTarget] += memo[i - 1][curTarget - num]
			}
		}
	}

	return memo[count][target]
}
```

Use the idea above and optimize it as 1D Array, we will have
**MOST OPTIMIZED solution**
*Time: O(n * t), Space:O(t) where n is nums.count and t is the target which = (sum - S) / 2*
```
func findTargetSumWays(_ nums: [Int], _ S: Int) -> Int {
	let count = nums.count
	let sum = nums.reduce(0, +)
	if (S < -sum || S > sum) { return 0 } // impossible
	if (sum - S) % 2 == 1 { return 0 } // impossible

	let target = (sum - S) / 2 // we only need to find numbers that add up to this target

	var memo = Array(repeating: 0, count: target + 1)
	memo[0] = 1; 

	for num in nums {
		for curTarget in stride(from: target, through: 0, by: -1) {
			if curTarget >= num { // num is a possible candidate
				memo[curTarget] += memo[curTarget - num]
			}
		}
	}

	return memo[target]
}
```