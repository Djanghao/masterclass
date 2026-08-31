# Go solution backtracking

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/2524265/](https://leetcode.com/problems/beautiful-arrangement/solutions/2524265/)

---

```
func countArrangement(n int) int {
    var res int
    
    combination, visit, visitN := make([]int, n), make([]bool, n), make([]bool, n+1)
    
    var backtrack func(int)
    backtrack = func(index int) {
        if index == n {
            res++
            return
        }
        
        for num := 1; num <= n; num++ {
            if visit[index] == false && visitN[num] == false && (num % (index+1) == 0 || (index+1) % num == 0) {
                visitN[num] = true
                visit[index] = true
                combination[index] = num
                backtrack(index+1)
                visit[index] = false
                visitN[num] = false
            }
        }
    }
    
    backtrack(0)
    
    return res
}
```