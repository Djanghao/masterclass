# Backtracking

**Author:** otabek94_30
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/5242416/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/5242416/)

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
func maximumEvenSplit(finalSum int64) []int64 {
    if finalSum % 2 != 0{
        return []int64{}
    }
	res := []int64{}
	var backtracking func(arr []int64, index, finalSum int64) 

	backtracking = func(arr []int64, index, finalSum int64)  {
		if 0 == finalSum {
			res = make([]int64, len(arr))
			copy(res, arr)
            return
		} 
		for i := index; i <= finalSum; i = i + 2 {
            if len(res) > 0{
                return 
            }
			arr = append(arr, i)
			backtracking(arr, i+2, finalSum-i) 
			arr = arr[:len(arr)-1]
		}
	} // 2 4 6 8 10 12 => 12, 2+10, 8+4, 2+4+6
	backtracking([]int64{}, 2,finalSum)
    return res 
}
```