# Two Golang Solutions

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1579700/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/1579700/)

---

The time complexity of the first solution is `O(2n + 26)`

* The `2n` is for looping through both `word1` and `word2`. They both are the same length, so we get `2n` instead of `n * m`
* The `26` is for looping through `len(letters)`, because there are `26` letters in the alphabet. 

``` go
func checkAlmostEquivalent(word1 string, word2 string) bool {
    letters := make([]int, 26)
    
    for i := 0; i < len(word1); i++ {
        letters[int(word1[i] - 'a')]++
        letters[int(word2[i] - 'a')]--
    }
    
    for _, a := range letters {
        if a < -3 || a > 3 { return false }
    }
    
    return true
}
```

The worst time complexity of the following solution is `O(2n + 26)`, but since we are using a map instead of an array the time complexity can range from `O(2n + 1)` to `O(2n + 26)`.

``` go
func checkAlmostEquivalent(word1 string, word2 string) bool {
    m := make(map[int] int)
    
    for i := 0; i < len(word1); i++ {
        m[int(word1[i] - 'a')]++
        m[int(word2[i] - 'a')]--
    }
    
    for _, val := range m {
        if val < -3 || val > 3 { return false }
    }
    
    return true
}
```