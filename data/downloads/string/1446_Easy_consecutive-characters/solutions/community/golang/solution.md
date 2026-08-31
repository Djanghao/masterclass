# Go fast O(n)  4 ms

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/consecutive-characters/solutions/2178409/](https://leetcode.com/problems/consecutive-characters/solutions/2178409/)

---

```
func maxPower(s string) int {
    if len(s) == 0 {return 0}
    
    var res int
    
    counter, preChar := 1, s[0]
    
    for i := 1; i < len(s); i++ {
        if s[i] == preChar {
            counter++
            
            if counter > res {res = counter}
        } else {
            counter = 1
            preChar = s[i]
        }
    }
    
    if counter > res {res = counter}
    
    return res
}

```