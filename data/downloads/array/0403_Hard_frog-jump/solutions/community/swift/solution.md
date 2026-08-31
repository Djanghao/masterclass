# very easy solution with DP

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3965632/](https://leetcode.com/problems/frog-jump/solutions/3965632/)

---



# Complexity
- Time complexity:
O(n*K)

- Space complexity:
O(n*K)

# Code
```
class Solution {
    func canCross(_ stones: [Int]) -> Bool {
	let finalStone = stones[stones.count - 1]
	var stoneToSteps = [Int: Set<Int>]()
	stoneToSteps[0] = [1]

	for stone in stones {
		if let steps = stoneToSteps[stone] {
			for step in steps {
				let dest = stone + step
				if dest == finalStone { return true }
				stoneToSteps[dest, default: Set<Int>()].insert(step)

				if step > 1 && dest < finalStone {
					stoneToSteps[dest]!.insert(step - 1)
				}

				if dest < finalStone {
					stoneToSteps[dest]!.insert(step + 1)
				}
			}
		}
	}

	return false
    }
}
```