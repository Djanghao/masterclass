# [Go] Single Pass

**Author:** harotobira
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/556708/](https://leetcode.com/problems/palindrome-permutation/solutions/556708/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Palindrome Permutation.
Memory Usage: 1.9 MB, less than 100.00% of Go online submissions for Palindrome Permutation.
```
func canPermutePalindrome(s string) bool {
    mapN := [128]int{}
    count := 0
    for i := range s {
        mapN[s[i]]++
        if mapN[s[i]] % 2 == 0{
            count --
        } else {
            count++
        }
    }
    
    return count <=1
}
```