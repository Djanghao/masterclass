# go (short)

**Author:** blackcrow01
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/1156436/](https://leetcode.com/problems/repeated-string-match/solutions/1156436/)

---

	func repeatedStringMatch(A string, b string) int {
		count := 0
		a := A

		for {
			if strings.Contains(A, b){
				return count+1
			} else if len(a)*count > len(b) {
				return -1
			}
			A += a
			count += 1
		}
	}