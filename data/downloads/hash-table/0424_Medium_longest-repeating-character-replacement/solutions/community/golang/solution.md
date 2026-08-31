# Go - sliding window O(n) time

**Author:** MaulBark
**Votes:** 11
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/1843197/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/1843197/)

---

Posting this, because I had a hard time figuering it out.
What really wouldn't get into my head, was, that everytime the window would extend to the right (pushing the end one index further), 
only the new char needs to be checked for exceeding the maxiumRepetition count. 
Only this recent char was every changed, making it far easier to track the char having the highest repetition count
inside of the window. 
```
func characterReplacement(s string, k int) int {
    m := map[byte]int{}
    maxLen := 0
    maxRepeat := byte(0)
    start := 0
    end := 0
    
    // first iterate over s by incremeting end (and sometimes start) 
    for end < len(s) {
        // store/increment count for recently added char
        char := s[end]
        m[char]++
        count := m[char]
        
        // since only the char just added could have changed the status quo of the char with the highest repetition count
        // we just need to check if the recently added char has a greater repetition count, than the previous one
        if maxRepeat == 0 || m[maxRepeat] < count {
            maxRepeat = char
        }

        // if the window size minus the dominant character becomes bigger than k (meaning that we cannot swap all different chars)
        // start shifting the window by increasing start index (and decrementing counter for char)
        if end-start + 1 - m[maxRepeat] > k {
            m[s[start]]--
            start++
        }
        
        // monitor if a new maxLen was reached
        if maxLen < end-start +1 {
            maxLen = end-start+1
        }
        end++ // increment end for next iteration
    }

    return maxLen
}
```