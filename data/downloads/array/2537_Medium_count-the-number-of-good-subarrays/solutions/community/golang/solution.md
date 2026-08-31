# Another Sliding Window "At Most" Problem. Golang O(n) Solution

**Author:** dattennganchodenho
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3116054/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3116054/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When I saw the "at least" keyword in the problem, I started to think this might be an "at most" sliding window problem. The whole idea is instead of finding ***the number of subarrays that has "at least k good pairs"***, we will find ***the number of subarrays that has "at most k-1 good pairs" (let's call it 'total')***, then our result would be total subarrays - "at most k-1 good pairs" subarrays = n*(n+1)/2 - total.
# Approach
<!-- Describe your approach to solving the problem. -->
t = our good pairs in the window.
seen = map to keep the count of the numbers are in the current window.
total = number of subarray that has "at most k-1 good pairs"

**Expanding Window:**
- Each time we add nums[i] to the window, t += seen[nums[i]] - 1, because we can pair this new nums[i] with seen[nums[i]] - 1 other elements in the window to form a good pair.

**Shrinking Window:**
- The condition of shirking is when t > k-1, because we are trying to get the subarray with at most k-1 good pairs
- Each time we remove nums[j] out of the window, t -= seen[nums[j]]-1.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Other "At Most" Sliding Window Problems:
- [https://leetcode.com/problems/count-number-of-nice-subarrays/description/](https://leetcode.com/problems/count-number-of-nice-subarrays/description/)
- [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)
- [https://leetcode.com/problems/binary-subarrays-with-sum/description/](https://leetcode.com/problems/binary-subarrays-with-sum/description/)
- [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/)
- [https://leetcode.com/problems/subarrays-with-k-different-integers/description/](https://leetcode.com/problems/subarrays-with-k-different-integers/description/)
- [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/)

# Code
```

func countGood(nums []int, k int) int64 {
	var t int64 = 0
	var total int64 = 0
	seen := make(map[int]int)
	n := int64(len(nums))
	j := 0
	for i := 0; i < len(nums); i++ {
		seen[nums[i]]++
		t += int64(seen[nums[i]] - 1)
		for j < i && t > int64(k-1) {
			t -= int64(seen[nums[j]] - 1)
			seen[nums[j]]--
			j++
		}
		total += int64(i - j + 1)
	}
	return n*(n+1)/2 - total
}


```