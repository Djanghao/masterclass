# [Go] Simple Solution with O(1) space and O(N) time complexity

**Author:** akash__gupta
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/1324550/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/1324550/)

---

```
func reverseWords(s []byte)  {
    i := 0 
    for j:=0; j<len(s); j++ {
        if s[j] ==' ' {
            reverse(s, i, j-1)      
            i=j+1
        }
    }

    reverse(s, i, len(s)-1)
    reverse(s, 0, len(s)-1)
}

func reverse(s []byte, i,j int) {
    for i<j {
        s[i], s[j] = s[j], s[i]
        i++
        j--
    }
}