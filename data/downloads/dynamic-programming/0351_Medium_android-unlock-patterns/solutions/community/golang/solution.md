# Golang & JavaScript solution with DFS

**Author:** linfongi
**Votes:** 1
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/82544/](https://leetcode.com/problems/android-unlock-patterns/solutions/82544/)

---

    func numberOfPatterns(m int, n int) int {
    	used := &[3][3]bool{}
    	return traverse(0, 0, 0, m, n, used)*4 + traverse(0, 0, 1, m, n, used)*4 + traverse(0, 1, 1, m, n, used)
    }
    
    func traverse(count, r, c, m, n int, used *[3][3]bool) int {
    	if count >= n || r < 0 || c < 0 || r >= 3 || c >= 3 || used[r][c] {
    		return 0
    	}
    
    	count++
    	local := 0
    	if count >= m {
    		local = 1
    	}
    	used[r][c] = true
    	for dr := -1; dr <= 1; dr++ {
    		for dc := -1; dc <= 1; dc++ {
    			if r+dr < 3 && r+dr >= 0 && c+dc < 3 && c+dc >= 0 && (*used)[r+dr][c+dc] {
    				local += traverse(count, r+dr+dr, c+dc+dc, m, n, used)
    			} else {
    				local += traverse(count, r+dr, c+dc, m, n, used)
    			}
    			if dr*dc != 0 {
    				local += traverse(count, r+dr+dr, c+dc, m, n, used)
    				local += traverse(count, r+dr, c+dc+dc, m, n, used)
    			}
    		}
    	}
    	used[r][c] = false
    	count--
    	return local
    }