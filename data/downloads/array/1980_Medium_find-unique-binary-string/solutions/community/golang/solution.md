# Go backtracking beats 100%

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/2524101/](https://leetcode.com/problems/find-unique-binary-string/solutions/2524101/)

---

```
func findDifferentBinaryString(nums []string) string {
    numSet := make(map[string]struct{})
    
    for _, num := range nums {
        numSet[num] = struct{}{}
    }
    
    length := len(nums[0])
    
    combination, visit := make([]byte, length), make([]bool, length)
    
    var res string
    
    var backtrack func(int) bool
    backtrack = func(index int) bool {
        if index == length {
            if _, ok := numSet[string(combination)]; !ok {
                res = string(combination)
                return true
            }
            
            return false 
        }
        
        if visit[index] == false {
            visit[index] = true
            
            combination[index] = '0'
            
            if backtrack(index+1) {
                return true
            }

            combination[index] = '1'
            
            if backtrack(index+1) {
                return true
            }
            
            visit[index] = false
        }
        
        return false
    }
    
    backtrack(0)
    
    return res
}
```