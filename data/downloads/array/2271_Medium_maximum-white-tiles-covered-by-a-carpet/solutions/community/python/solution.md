# Easy short Python with explanation and example

**Author:** gauau
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2038241/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/2038241/)

---

Brute force solution: For the start each tile, continue to iterate to the right until we run out of `carpetLen`. This runs in `O(n^2)`
=> Better solution with runtime `O(nlogn)`:
- We create a prefix sum array `dp` to store the TOTAL coverage from 0 to the start of each tile
- For each tile with start `s`, we binary search the end of the carpet `s + carpetLen` to see which tile on the right would the carpet end belongs to
- Finally, knowing the index of the right tile `r`, we subtract the TOTAL coverage of the right tile (memorized in the `dp` array) to the TOTAL coverage of the left tile (memorized in the `dp` array) and any offset (since the end may lie somewhere within the right tile, or on the right hand side of it if the right tile is the last one)
- Example:
Input: 
`tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10`
=>
`starts = [1, 10, 12, 20, 30]`
`ends = [5, 11, 18, 25, 32]`
`dp = [0, 5, 7, 14, 20, 23]`
=> for each iteration:
[e, l, r, cover] = 
[11 0 2 6]
[20 1 4 9]
[22 2 4 9]
[30 3 5 6]
[40 4 5 3]
=> maxCover = 9
```
def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:
	tiles.sort()
	maxCover = 0
	starts, ends = zip(*tiles)
	dp = [0]*(len(tiles) + 1) # dp: total covered lengths from 0
	for i in range(len(tiles)):
		dp[i+1] = dp[i] + ends[i] - starts[i] + 1 # length of each tile is end - start + 1
	for l in range(len(tiles)):
		e = starts[l] + carpetLen
		r = bisect_right(starts, e)
		cover = dp[r] - dp[l] - max(0, ends[r-1] - e + 1) # total cover on the right MINUS total cover on the left MINUS offset
		maxCover = max(maxCover, cover)
	return maxCover 
```