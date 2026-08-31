# Go solution with backtracking

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2524379/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2524379/)

---

```
func maxCompatibilitySum(students [][]int, mentors [][]int) int {
    result, m, mentorVisit := int(0), len(students), make([]bool, len(students))
    
    var backtrack func(int, int)
    backtrack = func(index int, currentCompatibility int) {
        if index == m {
            result = max(result, currentCompatibility)
            return
        }
        
        for i := 0; i < m; i++ {
            if mentorVisit[i] == false {
                mentorVisit[i] = true
                backtrack(index + 1, currentCompatibility + getCompatibility(students[index], mentors[i])) 
                mentorVisit[i] = false
            }  
        }
    }
    
    backtrack(0, 0)
    
    return result
}

func getCompatibility(sAnswers, mAnswers []int) int {
    sum := 0
    
    for i := 0; i < len(sAnswers); i++ {
        if sAnswers[i] == mAnswers[i] {
            sum++
        }
    }
    
    return sum
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}
```