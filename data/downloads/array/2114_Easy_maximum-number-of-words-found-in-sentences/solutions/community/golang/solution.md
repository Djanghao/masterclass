# : )

**Author:** Kabeer_M
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/4676909/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/4676909/)

---


# Code
```
func mostWordsFound(sentences []string) int {
    var ans int
    for _,sentence := range sentences {
        count := 0
        for _,letter := range sentence {
            if letter == ' ' {
                count++
            }
        }
        if count > ans {
            ans = count
        }
    }
    return ans+1
}
```