# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3316629/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3316629/)

---



# Code
```
class Solution {
    func evenOddBit(_ n: Int) -> [Int] {
        var (n, i, ans) = (n, 0, [0, 0])
        
        while n>0{
            if n%2 == 1{
                ans[i%2] += 1
            }
            
            i += 1
            n /= 2
        }
        
        return  ans
    }
}

```