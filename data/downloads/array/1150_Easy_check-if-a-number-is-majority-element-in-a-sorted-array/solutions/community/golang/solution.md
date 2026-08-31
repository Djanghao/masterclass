# [Go] Binary search; 100%, 0 ms; 5 lines; stdlib; O(log n); explained; unit test

**Author:** vsir
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3620053/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3620053/)

---

## Intuition

The problem is asking us if the length of subarray consisting of `target` elements is longer than the half of a given sorted array `nums`.


## Approach 1: [Binary Search](https://leetcode.com/tag/binary-search/)

-   Use [binary search](https://leetcode.com/tag/binary-search/) to find the `target` &rsquo;s first (*left*) position in the `nums`. If possible, use the language&rsquo;s standard library.
-   Then use [binary search](https://leetcode.com/tag/binary-search/) once again to find the `target +1` (right) position in the `nums`.
-   Tell if the length of subarray denoted by *left* and *right* boundaries is greater than the `nums` &rsquo;s half.


## Code

```go
func isMajorityElement(nums []int, target int) bool {
	l := sort.SearchInts(nums, target)
	r := sort.SearchInts(nums, target+1)
	return (r - l) > len(nums)/2
}
```


### Complexity

-   Time: $O(log \\space n)$
-   Space: $O(1)$


### Unit test

The code above covered by unit test is available in the [Go Playground](<https://go.dev/play/p/dCL_yfGecLt>).

If you have questions, feel free to ask.


# If you like solution and explanatiuon, please ****Upvote!****