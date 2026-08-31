# Go simple solution

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/2456333/](https://leetcode.com/problems/shortest-completing-word/solutions/2456333/)

---

```
func shortestCompletingWord(licensePlate string, words []string) string {
    frequencyMap := make(map[byte]int)
    
    for i := 0; i < len(licensePlate); i++ {
        if char, ok := isChar(licensePlate[i]); ok {
            frequencyMap[char]++
        }
    }
    
    res, minLength := "", 1<<63-1
    
    for _, word := range words {
        wordFrequencyMap := make(map[byte]int)
        
        for i := 0; i < len(word); i++ {
            wordFrequencyMap[word[i]]++
        }
        
        if len(wordFrequencyMap) < len(frequencyMap) {
            continue
        }
        
        isValid := true
        
        for char, fre := range frequencyMap {
            currentFre, ok := wordFrequencyMap[char]
            
            if !ok || currentFre < fre {
                isValid = false
                break
            } 
        }
        
        if isValid && len(word) < minLength {
            res = word
            minLength = len(word)
        }
    }
    
    return res
}

func isChar(char byte) (byte, bool) {
    if char >= 'a' && char <= 'z' {
        return char, true
    }
    
    if char >= 'A' && char <= 'Z' {
        return char + 32, true
    }
    
    return 0, false
}
```