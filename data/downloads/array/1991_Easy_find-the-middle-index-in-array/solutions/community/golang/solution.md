# Golang 100% fastest  clean code

**Author:** gene-rode
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3156246/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3156246/)

---

```
func findMiddleIndex(nums []int) int {
    totalSum := 0
    for _,v := range nums {
        totalSum += v 
    }
    
    leftSum := 0
    for k, v := range nums {
        totalSum -= v
        if totalSum == leftSum { return k }
        leftSum += v
    }
  
  return -1
}
```