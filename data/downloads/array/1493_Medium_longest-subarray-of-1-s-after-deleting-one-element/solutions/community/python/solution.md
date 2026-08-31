# Python, Java | Elegant & Short | One pass | O(n) time | O(1) memory

**Author:** Kyrylo-Ktl
**Votes:** 43
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/2610918/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/2610918/)

---

## Python:

```
def longestSubarray(self, nums: List[int]) -> int:
	longest = prev = curr = 0

	for bit in nums:
		if bit:
			curr += 1
			longest = max(longest, prev + curr)
		else:
			prev, curr = curr, 0

	return longest - (longest == len(nums))
```

## Java:

```
public int longestSubarray(int[] nums) {
	int longest = 0;
	int prev = 0, curr = 0;

	for (int bit : nums) {
		if (bit == 0) {
			prev = curr;
			curr = 0;
		} else {
			longest = Math.max(longest, prev + ++curr);
		}
	}

	return longest == nums.length ? longest - 1 : longest;
}
```

If you like this solution remember to **upvote it** to let me know.