# Go O(n) Solution with comments

**Author:** shuoyan
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/552617/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/552617/)

---

For more golang solutions please check https://github.com/yinfirefire/LeetCode-GoSol

This solution is inspired by https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/discuss/489882/O(n)-Solution-with-explanation

``` go
func maxValueAfterReverse(nums []int) int {
	n := len(nums)
	maxPair := math.MinInt32
	minPair := math.MaxInt32
	//it is only possible to increase when in a, b ... c, d
	//the distance between min(c,d) and max(a, b) is positive
	//then will increase by 2*(min(c, d) - max(a, b)
	for i := 0; i < n-1; i++ {
		l := i
		r := i + 1
		maxPair = max(maxPair, min(nums[l], nums[r]))
		minPair = min(minPair, max(nums[l], nums[r]))
	}
	change := max(0, (maxPair-minPair)*2)
	//another situation is reverse from nums[0] or reverse from nums[-1]
	//if reverse from nums[0] to nums[i]
	//change = -abs(nums[i]-nums[i+1])+abs(nums[i+1]-nums[0])
	//if reverse from nums[i] to nums[-1]
	//change = -abs(nums[i]-nums[i-1])+abs(nums[-1]-nums[i-1])
	revHead:= math.MinInt32
	revTail:= math.MinInt32
	for i:=0; i<n-1; i++{
		revHead = max(revHead, -abs(nums[i]-nums[i+1])+abs(nums[i+1]-nums[0]))
		revTail = max(revTail, -abs(nums[i+1]-nums[i])+abs(nums[i]-nums[len(nums)-1]))
	}
	change = max(max(revTail, revHead), change)
	res:= 0
	for i:= 0; i<n-1; i++{
		res+=abs(nums[i]-nums[i+1])
	}
	return res+change
}

func abs(a  int) int{
	if a<0{
		return -a
	}
	return a
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```