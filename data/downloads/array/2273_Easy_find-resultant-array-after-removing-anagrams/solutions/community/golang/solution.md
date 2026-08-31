# easy solution

**Author:** Orcaa
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/3280257/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/3280257/)

---

# Code
```
func removeAnagrams(words []string) []string {
    
    j := 0

    for i, v := range words {
        if v != "" {
             for j := i+1; j < len(words); j++ {
                if sort(v) == sort(words[j]) {
                    words[j] = ""
                }else{
                    break
                }
            }
            words[j] = v
            j++
        }
    }
    

    return words[:j]
}

func sort(str string) string {
  runes := []rune(str)

    // Bubble sort the slice of runes
    for i := 0; i < len(runes); i++ {
        for j := i + 1; j < len(runes); j++ {
            if runes[i] > runes[j] {
                temp := runes[i]
                runes[i] = runes[j]
                runes[j] = temp
            }
        }
    }

    // Convert the slice of runes back to a string
    sortedStr := string(runes)

    return sortedStr
}
```