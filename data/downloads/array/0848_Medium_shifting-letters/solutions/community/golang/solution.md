# Go clean O(n) time complexity

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/2517246/](https://leetcode.com/problems/shifting-letters/solutions/2517246/)

---

```
func shiftingLetters(s string, shifts []int) string {
	sum := 0

	for i := len(shifts) - 1; i >= 0; i-- {
		prev := shifts[i]
		shifts[i] += sum
		sum += prev
	}

	var res strings.Builder

	for i := 0; i < len(s); i++ {
        if shifts[i] > 26 {
            shifts[i] %= 26
        }
        
        targetChar := s[i] + byte(shifts[i])
        
        if targetChar > 'z' {
            targetChar -= 'z' - 'a' + 1
        }
        
		res.WriteByte(targetChar)
	}

	return res.String()
}

```