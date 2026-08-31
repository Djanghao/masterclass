# Go O(n) with hashmap - Sliding window technique

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/2181340/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/2181340/)

---

```
func maxConsecutiveAnswers(answerKey string, k int) int {
    if len(answerKey) < 2 {return len(answerKey)}
    
    res, maxRepeatCharCount, frequencyMap := 0, 0, make(map[byte]int)
    leftWindow := 0
    
    for rightWindow := 0; rightWindow < len(answerKey); rightWindow++ {
        rightChar := answerKey[rightWindow]
        frequencyMap[rightChar]++
        
        if frequencyMap[rightChar] > maxRepeatCharCount {
            maxRepeatCharCount = frequencyMap[rightChar]
        }
        
        for rightWindow - leftWindow + 1 - maxRepeatCharCount > k {            
            leftChar := answerKey[leftWindow]
            frequencyMap[leftChar]--
            
            leftWindow++
        }
        
        if rightWindow - leftWindow + 1 > res {
            res = rightWindow - leftWindow + 1
        }
    }
    
    return res
}
```