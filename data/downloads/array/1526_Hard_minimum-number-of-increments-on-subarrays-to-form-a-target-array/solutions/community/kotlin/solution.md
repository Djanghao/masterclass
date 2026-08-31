# O(n) solution

**Author:** sifat_oshan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/754755/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/754755/)

---

	class Solution {
		fun minNumberOperations(target: IntArray): Int {
			var prev = 0
			var op = 0
			for (n in target) {
				if (n > prev) op += n - prev
				prev = n
			}
			return op
		}
	}