# Golang 0ms brute force solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1564817/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/1564817/)

---

```go
func countVowelSubstrings(word string) int {
    counter := 0
    loop:
    for m := 0; m < len(word); m++ {
        a, e, i, o, u := 0, 0, 0, 0, 0
        for n := m; n < len(word); n++ {
            switch word[n] {
            case 'a':
                a++
            case 'e':
                e++
            case 'i':
                i++
            case 'o':
                o++
            case 'u':
                u++
            default:
                continue loop
            }
            if a > 0 && e > 0 && i > 0 && o > 0 && u > 0 {
                counter++
            }
        }
    }
    return counter
}
```