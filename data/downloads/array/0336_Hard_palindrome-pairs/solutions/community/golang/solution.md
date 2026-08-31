# Go golang map solution

**Author:** karsten_agathon
**Votes:** 8
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/2586386/](https://leetcode.com/problems/palindrome-pairs/solutions/2586386/)

---

```
func palindromePairs(words []string) [][]int {
    dict := map[string]int{}
    
    for i, word := range words {
        dict[reverse(word)] = i
    }
    
    result := map[[2]int]bool{}
    
    for i, word := range words {
        for j := 0; j <= len(word); j++ {
            now := word[:j]
            
            if k, ok := dict[now]; ok && i != k && isPalindrome(word[j:]) {
                result[[2]int{i, k}] = true
            }
            
            now = word[len(word)-j:]
            
            if k, ok := dict[now]; ok && i != k && isPalindrome(word[:len(word)-j]) {
                result[[2]int{k, i}] = true
            }
        }
    }
    
    ans := make([][]int, 0, len(result))
    
    for pair := range result {
        now := pair
        ans = append(ans, now[:])
    }
    
    return ans
}

func isPalindrome(word string) bool {
    for l, r := 0, len(word)-1; l < r; l, r = l+1, r-1 {
        if word[l] != word[r] {
            return false
        }
    }
    
    return true
}

func reverse(word string) string {
    str := []byte(word)
    
    for l, r := 0, len(word)-1; l < r; l, r = l+1, r-1 {
        str[l], str[r] = str[r], str[l]
    }
    
    return string(str)
}
```