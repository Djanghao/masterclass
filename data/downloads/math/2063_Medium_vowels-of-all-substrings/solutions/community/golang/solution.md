# Golang very simple O(n) solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/1566669/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/1566669/)

---

```go
func countVowels(word string) int64 {
    vowel := int64(0)
    magic := int64(0)
    for i, v := range word {
        switch v {
        case 'a', 'e', 'i', 'o', 'u':
            magic += int64(i) + 1
        }
        vowel += magic
    }
    return vowel
}
```