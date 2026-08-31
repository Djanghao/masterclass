# [GO] Solution Two pointers

**Author:** harotobira
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/561821/](https://leetcode.com/problems/reverse-only-letters/solutions/561821/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Reverse Only Letters.
Memory Usage: 2 MB, less than 100.00% of Go online submissions for Reverse Only Letters.
```
func reverseOnlyLetters(S string) string {
    s := []byte(S)
    i,j := 0, len(S) - 1
    for i < j {
        for i < j && !isLetter(s[i]){
            i++
        }
        for i < j && !isLetter(s[j]){
            j--
        }
        s[i], s[j] = s[j], s[i]
        i++
        j--
    }
    
    return string(s)
}


func isLetter(b byte) bool {
	return 'a' <= b && b <= 'z' ||
		'A' <= b && b <= 'Z'
}
```