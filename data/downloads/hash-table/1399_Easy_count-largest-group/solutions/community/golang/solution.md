# Go with hashmap

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/2466952/](https://leetcode.com/problems/count-largest-group/solutions/2466952/)

---

```
func countLargestGroup(n int) int {
    m := make(map[int][]int)
    
    for i := 1; i <= n; i++ {
        sum := sumDigit(i)
        m[sum] = append(m[sum], i)
    }
    
    max := -1<<63
    
    for _, lst := range m {
        if len(lst) > max {
            max = len(lst)
        }        
    }
    
    count := 0 
    
    for _, lst := range m {
        if len(lst) == max {
            count++
        }
    }
    
    return count
}

func sumDigit(num int) int {
    sum := 0
    
    for num > 0 {
        sum += num%10
        num /= 10
    }
    
    return sum
}
```