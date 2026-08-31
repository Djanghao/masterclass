# Swift: MINIMAL solution Top-down & bottom-up with complexity

**Author:** voxqhuy
**Votes:** 4
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/746665/](https://leetcode.com/problems/combination-sum-iv/solutions/746665/)

---

# Approach 1: Top down
# 
Time: O(mn), Space: O(n)
where m in the nums.count, n is target
```
func combinationSum4(_ nums: [Int], _ target: Int) -> Int {
	var dict = [Int : Int]()
	dict[0] = 1
	return helper(nums, target, &dict)
}

func helper(_ nums: [Int], _ target: Int, _ dict: inout [Int : Int]) -> Int {
	if target < 0 { return 0 }
	if let saved = dict[target] { return saved }

	var result = 0
	for num in nums {
		result += helper(nums, target - num, &dict)
	}

	dict[target] = result
	return result
}
```

# Approach 2: Bottom-up 
Time: O(mn), Space: O(n)
where m in the nums.count, n is target
```
func combinationSum4(_ nums: [Int], _ target: Int) -> Int {
	var combos = Array(repeating: 0, count: target + 1)
	combos[0] = 1

	for i in 1..<combos.count {
		for num in nums {
			let sum = i - num
			if sum >= 0 {
				combos[i] = (combos[i] + combos[sum]) % 2147483647
			}
		}
	}

	return combos[target]
}
```
