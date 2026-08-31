# One pass easy game

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/2207601/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/2207601/)

---

```
func areNumbersAscending(s string) bool {
    arr := strings.Split(s, " ")
    
    lastNum := -1
    
    for i := 0; i < len(arr); i++ {
        if value, err := strconv.Atoi(arr[i]); err == nil {
            if lastNum != -1 && value <= lastNum {
                return false
            }
            
            lastNum = value
        }      
    }
    
    return true
}

```