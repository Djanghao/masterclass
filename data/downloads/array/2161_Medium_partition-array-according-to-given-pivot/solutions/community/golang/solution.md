# Golang solution time complexity O(n)/memory complexity O(1)

**Author:** SolskGaer
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/2897868/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/2897868/)

---

# Time efficient solution

```
func pivotArray(nums []int, pivotal int) []int {
    var gt []int
    var pos, count int
    for i := range nums{
        if nums[i] < pivotal{
            nums[pos] = nums[i]
            pos++
        }else if nums[i] == pivotal{
            count++
        }else{
            gt = append(gt, nums[i])
        }
    }
    for i := 0; i < count; i++{
        nums[pos] = pivotal
        pos++
    }
    for _, num := range gt{
        nums[pos] = num
        pos++
    }
    return nums
}
```
# Memory efficient solution
think about insertion sort, when nums[i] is less than pivotal, we need to put it before all pivotal values, when nums[i] is equal to pivotal, we just need to put it right after all the pivotal values
```
func pivotArray(nums []int, pivotal int) []int {
	for i := 1; i < len(nums); i++ {
		if nums[i] <= pivotal {
			temp := nums[i]
			var j int
			for j = i; j > 0 && ((temp == pivotal && nums[j-1] > pivotal) || (temp < pivotal && nums[j-1] >= pivotal)); j-- {
				nums[j] = nums[j-1]
			}
			nums[j] = temp
		}
	}
	return nums
}
```