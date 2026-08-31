# Reducing arrays into a sum of the helper function results

**Author:** melihov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/4047115/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/4047115/)

---

# Approach
Create a helper function counting possible products of a number in an array. Return the sum of both arrays being mapped to the power of 2 and reduced with the helper function.

# Code
```
class Solution {
	func countProducts(of: Int, inArray: [Int]) -> Int {
		guard inArray.count > 1 else { return 0 }

		var res = 0

		for i in 0...(inArray.count - 2) {
			for j in (i + 1)...(inArray.count - 1) {
				if inArray[i] * inArray[j] == of { res += 1 }
			}
		}

		return res
	}

	func numTriplets(_ nums1: [Int], _ nums2: [Int]) -> Int {
		nums1.map { num in num * num }.reduce(0, { acc, num in
			acc + countProducts(of: num, inArray: nums2)
		}) + nums2.map { num in num * num }.reduce(0, { acc, num in
			acc + countProducts(of: num, inArray: nums1)
		})
	}
}
```