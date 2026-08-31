# Go solution

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/2481319/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/2481319/)

---

```
func sortEvenOdd(nums []int) []int {
    var oddArr, evenArr []int
    
    for i, num := range nums {
        if i%2 == 0 {
            evenArr = append(evenArr, num)
        } else {
            oddArr = append(oddArr, num)
        }
    }
    
    sort.Slice(evenArr, func(i, j int) bool {
        return evenArr[i] < evenArr[j]
    })
    
    sort.Slice(oddArr, func(i, j int) bool {
        return oddArr[i] > oddArr[j]
    })
    
    res := make([]int, len(nums))
    
    i, j := 0, 0
    
    for k := 0; k < len(res); k++ {
        if k%2 == 0 {
            res[k] = evenArr[i]
            i++
        } else {
            res[k] = oddArr[j]
            j++
        }
    }
    
    return res
}
```