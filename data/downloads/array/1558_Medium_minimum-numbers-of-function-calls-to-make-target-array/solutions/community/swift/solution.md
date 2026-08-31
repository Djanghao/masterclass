# Intuitive and efficient Swift solution

**Author:** melihov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/4046702/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/4046702/)

---

# Approach
Count array mapping runs until all the elements are zeros, adding extra run count for uneven elements.

# Code
```
class Solution {
    func minOperations(_ nums: [Int]) -> Int {
        var res = 0
	    var tmp = nums
	    var modified = false

	    while true {
		    modified = false

            tmp = tmp.map { num in
                guard num != 0 else { return num }
                guard num != 1 else { res += 1; return 0 }

                modified = true

                guard (num % 2) == 1 else { return (num / 2) }

                res += 1 // extra run to make num even

                return (num - 1) / 2
            }

		    guard modified else { break }

		    res += 1
	    }

		return res
	}
}
```