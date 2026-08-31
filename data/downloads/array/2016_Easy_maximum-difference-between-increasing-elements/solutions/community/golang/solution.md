# Go easy!

**Author:** ganesh_raveendran
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4298175/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/4298175/)

---


# Code
```
func maximumDifference(nums []int) int {
    min:= nums[0]
    maxDiff:=-1
    for i:=1;i<len(nums);i++{
        if nums[i]<min{
            min=nums[i]
        }else{
            diff:= nums[i]-min
            if diff>maxDiff{
                maxDiff=diff
            }
        }
    }
    if maxDiff<=0 {
        return -1
    }
    return maxDiff
}
```