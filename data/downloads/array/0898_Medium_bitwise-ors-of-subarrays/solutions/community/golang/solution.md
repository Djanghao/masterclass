# Compare each number with subarrays ending in previous number

**Author:** sebnyberg
**Votes:** 3
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/1308856/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/1308856/)

---

Given the input

```
[1,3,7,3,2,4]
```

The brute-force approach is to construct all possible sub-arrays and calculate their OR, such as 

```
[1],[1,3],[1,3,7],[1,3,7,3],...
[3],[3,7],[3,7,3],...
```

However, this is clearly too slow. 

For each number in the input `arr`, OR the number with `[0, prev...]` where prev contains each unique value that could come from subarrays ending in the previous position. The result is then used as the "previous possible subarray values" for the next value, and so on.

For example, given `[1,3,7,3,2,4]`.

1. OR the first number `1` with all possible subarrays ending in the previous value, in this case only the dummy value `0`. This gives  `[0,1]` for the next round.
2. OR the second number `3` with all possible subarrays ending in previous value, in this case `[0,1]`, yielding `[3,3]` for the next round (insert dummy 0 at the start).
3. OR `7` with `[0,3,3]`, yielding `[7,7,7]` (insert dummy at the start)
4. OR `3` with `[0,7,7,7]`, yielding `[3,7,7,7]` (insert dummy again...)
5. OR `2` with `[0,3,7,7,7]` yielding `[2,3,7,7,7]`
6. OR `4` with `[0,2,3,7,7,7]`, yielding `[4,6,7,7,7,7]`.

Notice how the previous sub-array list contains both repetition and is steadily growing. This is because it is constrained by the largest number from previous positions, so the `7` in this case forces all subarrays before the 7 (`[1,3,7]`, `[3,7]`) to be at least as large.

This leads to the optimization of only comparing the last element from current sub-arrays with any new or'ed value. These values are monotonically growing, so this is a safe procedure.

Final solution (beats 100%/100%):

```go
func subarrayBitwiseORs(arr []int) int {
	prev := []uint32{0}
	cur := []uint32{0}
	seen := make(map[uint32]bool)
	for _, num := range arr {
		cur = cur[:1]
		for _, prevNum := range prev {
			new := prevNum | uint32(num)
			seen[new] = true
			if cur[len(cur)-1] != new {
				cur = append(cur, new)
			}
		}
		cur, prev = prev, cur
	}
	return len(seen)
}
```