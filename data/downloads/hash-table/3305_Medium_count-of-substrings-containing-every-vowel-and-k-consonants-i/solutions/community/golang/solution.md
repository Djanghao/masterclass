# Easy and Clean Brute Force Solution in Golang

**Author:** BakhodirYashinMansur
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5846260/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5846260/)

---


# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func countOfSubstrings(word string, k int) int {
    count:=0
    n:=len(word)
    for i:=0;i<n;i++{
        consonantCount:=0
        vowelCount := map[byte]int{}
        for j:=i; j < n; j++{
            if word[j] == 'a' || word[j] == 'e' || word[j] == 'i' || word[j] == 'o' || word[j] == 'u' {
                vowelCount[word[j]]++
            } else {
                consonantCount++
            }
            if len(vowelCount) == 5 && consonantCount == k {
                count++
            }
        }
    }
    return count
}


```