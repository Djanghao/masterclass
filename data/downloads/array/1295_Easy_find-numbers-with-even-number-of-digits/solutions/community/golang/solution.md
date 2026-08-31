# Funny with Go

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/2466927/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/2466927/)

---

```
func findNumbers(nums []int) int {
    isEven := func(num int) bool {
        count := 0
        
        for num > 0 {
            count++
            num /= 10
        }
        
        return count % 2 == 0
    }
    
    count := 0
    
    for _, num := range nums {
        if isEven(num) {
            count++
        }
    }
    
    return count
}
```