# Go simple hehe

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/2456361/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/2456361/)

---

```
func canThreePartsEqualSum(arr []int) bool {
    sum := 0
    
    for _, num := range arr {
        sum += num
    }
    
    if sum%3 != 0 {
        return false
    }
    
    partSum, currentSum, count := sum/3, 0, 0
    
    for i := 0; i < len(arr); i++ {
        currentSum += arr[i]
        
        if currentSum == partSum {
            currentSum = 0
            count++
        }
    }

    return count >= 3
}
```