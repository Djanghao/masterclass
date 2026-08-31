# GO | MAX BETWEEN LENGTH OF (ALL-ODD, ALL-EVEN & EVEN-ODD/ODD-EVEN)

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5505866/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5505866/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maximumLength(nums []int) int {
	longestEvenSequence, longestOddSequence := 0, 0
	for _, num := range nums {
		if num%2 == 0 {
			longestEvenSequence++
		} else {
			longestOddSequence++
		}
	}
    // INSTEAD OF THIS WE CAN CHECK THE FIRST NUM OF ARRAY, IF ITS ODD FIND ODD-EVEN SEQUENCE, ELSE FIND EVEN-ODD SEQUENCE
	longestEvenOddSequence, longestEvenOddSequenceLastPicked, longestOddEvenSequence, longestOddEvenSequenceLastPicked := 0, "Odd", 0, "Even"
	for _, num := range nums {
		if longestEvenOddSequenceLastPicked == "Odd" && num%2 == 0 {
			longestEvenOddSequence++
			longestEvenOddSequenceLastPicked = "Even"
		} else if longestEvenOddSequenceLastPicked == "Even" && num%2 != 0 {
			longestEvenOddSequence++
			longestEvenOddSequenceLastPicked = "Odd"
		}
		if longestOddEvenSequenceLastPicked == "Odd" && num%2 == 0 {
			longestOddEvenSequence++
			longestOddEvenSequenceLastPicked = "Even"
		} else if longestOddEvenSequenceLastPicked == "Even" && num%2 != 0 {
			longestOddEvenSequence++
			longestOddEvenSequenceLastPicked = "Odd"
		}
	}
	// ans := 0
	// BRUTE FORCE TO FIND MAX BETWEEN FOUR NUMBERS
	// if longestEvenSequence > longestOddSequence {
	// 	if longestEvenSequence > longestEvenOddSequence {
	// 		if longestEvenSequence > longestOddEvenSequence {
	// 			ans = longestEvenSequence
	// 		} else {
	// 			ans = longestOddEvenSequence
	// 		}
	// 	} else {
	// 		if longestEvenOddSequence > longestOddEvenSequence {
	// 			ans = longestEvenOddSequence
	// 		} else {
	// 			ans = longestOddEvenSequence
	// 		}
	// 	}
	// } else {
	// 	if longestOddSequence > longestEvenOddSequence {
	// 		if longestOddSequence > longestOddEvenSequence {
	// 			ans = longestOddSequence
	// 		} else {
	// 			ans = longestOddEvenSequence
	// 		}
	// 	} else {
	// 		if longestEvenOddSequence > longestOddEvenSequence {
	// 			ans = longestEvenOddSequence
	// 		} else {
	// 			ans = longestOddEvenSequence
	// 		}
	// 	}
	// }

	// EFFICIENT WAY TO FIND MAX BETWEEN FOUR NUMBERS
	ans := longestEvenSequence
	if longestOddSequence > ans {
		ans = longestOddSequence
	}
	if longestEvenOddSequence > ans {
		ans = longestEvenOddSequence
	}
	if longestOddEvenSequence > ans {
		ans = longestOddEvenSequence
	}

	return ans
}
```