# Golang 0ms solution, easy to understand

**Author:** JieBai
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/946390/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/946390/)

---

maxLen of a letter means the max length of substring end up with the letter, for example substring "abc", the maxLen of c is 3.

Which stands for there are 3 substrings are end up with c, they are "abc", "bc" and "c".

Iterate p, for each letter find out the maxLen, the answer is just the sum of all the max lengths  

```
func findSubstringInWraproundString(p string) int {
    if len(p) == 0 {
        return 0
    }
    pre := 1
    res := 0
    maxLen := make([]int, 26) //use maxLen slice to maintain the max len of substring of each letter
    maxLen[p[0] - 'a'] = 1
    
    for i := 1; i < len(p); i++ {
        if p[i] - p[i - 1] == 1 || p[i - 1] - p[i] == 25 {
            pre++ //if current letter is at alphabet sequence of previous letter, increase 1 to the max len
        } else {
            pre = 1 //otherwise the max len is 1
        }    
        maxLen[p[i] - 'a'] = max(maxLen[p[i] - 'a'], pre) //update the maxLen of this letter
    }
    for _, v := range maxLen {
        res += v //sum up the max len of each letters
    }
    return res
}

func max(a, b int) int {
    if a > b {
        return a
    } else {
        return b
    }
}
```