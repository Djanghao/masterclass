# [Go] Map Solution

**Author:** harotobira
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/556704/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/556704/)

---

Runtime: 8 ms, faster than 92.86% of Go online submissions for Intersection of Three Sorted Arrays.
Memory Usage: 6 MB, less than 100.00% of Go online submissions for Intersection of Three Sorted Arrays.
```
func arraysIntersection(arr1 []int, arr2 []int, arr3 []int) []int {
    firstTwoArrays := map[int]int{}
    for i :=range arr1{
        firstTwoArrays[arr1[i]]++
    }
    for i := range arr2{
        firstTwoArrays[arr2[i]]++
    }
    
    for i := range arr3{
        firstTwoArrays[arr3[i]]++
    }
    
    var result  []int
    for key, count := range firstTwoArrays{
        if count == 3 {
            result = append(result, key)
        }
    }
    
    sort.Ints(result)
    return result
}
```