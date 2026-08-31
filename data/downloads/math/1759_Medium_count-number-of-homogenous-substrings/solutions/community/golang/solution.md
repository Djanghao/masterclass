# Go Solution | O(n) | With Explanation

**Author:** zell_dev
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266570/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266570/)

---

**1. Initialize Counters**
- Use int64 for total and count to accommodate large counts.
- Set curr to the first character of s.

**2. Iterate and Count Substrings**
* Loop through s. If we encounter a character that matches curr, we increment count. This is because each additional matching character creates a new set of homogenous substrings equal to the length of the sequence.  
For instance, a sequence of three 'a's generates 'a', 'aa', 'aaa' which is a total of 1 + 2 + 3 = 6 substrings.

* If the character does not match, reset count to 1 and update curr.

**3. Update Total**
* Add count to total with each iteration. This progressive addition accounts for all new substrings formed by each consecutive character match.

**4. Return Result**
* Return (total % mod) and cast it to int. The modulo operation ensures that our result remains within the 32-bit integer range, which is particularly necessary when dealing with large numbers to avoid integer overflow and to meet problem constraints.

```
func countHomogenous(s string) int {
    mod := 1000000007
    var total int64 = 0
    var count int64 = 0
    curr := s[0]
    
    for i, _ := range s {
        if s[i] == curr {
            count++
        } else {
            count = 1
            curr = s[i]
        }
        total += count
    }
    
    return int(total % int64(mod))
}
```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding