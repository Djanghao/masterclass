# Golang w/o map. Sorting time n*log(n) space 0(1)

**Author:** gene-rode
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/3206128/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/3206128/)

---


```
func countElements(nums []int) (res int) {
    sort.Ints(nums)

    for _, v := range nums {
        if  v != nums[0] && v != nums[len(nums)-1] {
         res++
        }
    }
    return
 
}
```