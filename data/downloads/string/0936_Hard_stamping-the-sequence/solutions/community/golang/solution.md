# Golang | 3 ms | Faster than 50% | Use less memory than 50% | Greedy + Observation

**Author:** mbfibat
**Votes:** 6
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/2457610/](https://leetcode.com/problems/stamping-the-sequence/solutions/2457610/)

---

- First, we can see that, if we reverse the whole process, the segment of target who was stamped later, will remain it state throughout the reverse process. 
- This give us an idea, we will try to reconstruct the answer **from the end greedily**. The problem now will be: "For as long as we **are able to stamp** any segment of ```target```, put that segment into ```answer```".
- Being **able to stamp** means that each character in the segment of ```target```, will either match the corresponding character of ```stamp```, or has been stamped earlier (note that we reverse the process, so earlier means later).
- If we can no longer stamp any segment, check if all the positions in ```target``` have been stamped or not, and return the answer.
- The time complexity is ```O(N^2)``` and the space complexity is ```O(N)```

```
func movesToStamp(stamp string, target string) []int {
    cur := make([]byte, len(target)) // Since target is a string, and string is immutable, I convert it into an array of bytes for easier management.
    for i, _ := range target {
        cur[i] = target[i]
    }
    
    match := func(pos int) bool { // Function to check if the current segment match the stamp
        ok := false
        for i, _ := range stamp {
            if cur[pos + i] != '?' && stamp[i] != cur[pos + i] { // Check if the current character has been stamped or match the corresponding character in stamp.
                return false
            }
            if (cur[pos + i] != '?') { // Here, if all the segment is '?', we don't need to stamp
                ok = true // Thus, we put in one more condition that there should exist a non-'?' character.
            }
        }
        return ok // If all condition are satisfied, then ok = true.
    }
    
    revans := make([]int, 0) // Construct the answer from the end
    chk := make([]bool, len(cur)) // Chk is a boolean array, since we will consider each segment [L, R] only once. If [L, R] has been stamped, we will put chk[L] = true
    for {
        found := false // found = whether we can stamp any segment
        for i := 0; i + len(stamp) - 1 < len(cur); i++ {
            if !chk[i] && match(i) { // If we can stamp the segment [i, i + len(stamp) - 1], and this segment has not been stamped before
                revans = append(revans, i) // Then we put it into the answer
                for j := 0; j < len(stamp); j++ { // And also set the segment has been stamped
                    cur[i + j] = '?' // By using the character '?'
                }               
                found = true 
                chk[i] = true
            }
        }
        if !found { // If no segment can be stamped, we break the loop
            break
        }
    }
    for _, c := range cur {
        if c != '?' { // If any position is not stamped, return an empty array
            return []int{}
        }
    }
    
    ans := make([]int, len(revans)) // Construct the answer array from the reverse answer array
    for i := len(revans) - 1; i >= 0; i-- {
        ans[len(revans) - 1 - i] = revans[i]
    }
    return ans
}
```