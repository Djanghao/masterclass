# Backtracking Solution

**Author:** arj9022
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/4258012/](https://leetcode.com/problems/word-squares/solutions/4258012/)

---

# Intuition
Simple Backtracking

# Code
```
func wordSquares(words []string) [][]string {
	solutions := [][]string{}
	var b func([]string)
	b = func(solution []string) {
		if len(solution) > 0 && len(solution) == len(solution[0]) {
			cp := make([]string, len(solution))
			copy(cp, solution)
			solutions = append(solutions,cp)
			return
    }
    for _,word := range words {
      // place the option
			if !isValidOption(solution, word) {
				continue
			}
			solution = append(solution, word) 
			// recursive call
			b(solution)
			// backtrack (remove the option)
			solution = solution[0: len(solution)-1]
    }
	}
	b([]string{})
	return solutions
}

func isValidOption(solution []string, word string) bool {
	if len(solution) == 0 {
		return true
	}
	if len(word) != len(solution[0]){
		return true
	} 
	for i:=0; i < len(solution);  i = i+1 {
		if solution[i][len(solution)] != word[i]{
			return false
		}
	}
	return true
}
```