# Golang O(N) Explained

**Author:** tw13
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772067/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772067/)

---

```
func longestPalindrome(words []string) int {
    n := len(words)
    count := make(map[string]int, n)
    length := 0
	
	// for every word that has its corresponding reversed word, it will definitely be included in the final palindrome length
    for _, word := range words {
        reversed := reverse(word)
        if v, ok := count[reversed]; ok {
            length += 4
            if v == 1 {
                delete(count, reversed)
            } else {
                count[reversed]--
            }
        } else {
            count[word]++
        }
    }
    
	// among unused words, if there is a word with the same letters, we can add it to the final palindrome length
    for word, _ := range count {
        if isPair(word) {
            length += 2
            break
        }
    }
    
    return length
}

func reverse(s string) string {
    ss := make([]byte, 2)
    ss[0], ss[1] = s[1], s[0]
    return string(ss)
}

func isPair(s string) bool {
    return s[0] == s[1]
}
```