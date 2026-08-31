# Golang - Sliding window, beat 90%, simple solution, detailed comments

**Author:** wip727
**Votes:** 2
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4709219/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4709219/)

---

```
/*

Build a sliding window and check the tail of the window if any word appears in the forbidden list. 
If yes, we move ("shrink") the left index of window to the next index where a fobidden word is matched.
For example: "cbaaaabc", forbidden = ["aaa","cb"]
    if current window is "baaa", the window becomes invalid and the new window would begine from the second "a".
The reason we can skip the head portion of the window is because:
    1, if this window starts from 0, the head portion was already checked when we build up the window
    2, if this window starts from arbitrary i, the head portion was already checked when we shrink the window to i.
*/

func longestValidSubstring(word string, forbidden []string) int {
    fMap := make(map[string]bool)
    for _, f := range forbidden {
        fMap[f] = true
    }

    left, right := 0, 1
    res := 0
    for ; right <= len(word); right++ {
        if isValid, newInd := checkWindow(word[left:right], fMap); !isValid {
            // shrink window
            left = left + newInd
        } else {
            // window is valid, update the result
            res = max(res, right - left)
        }
    } 
    return res
}

func checkWindow(s string, fMap map[string]bool) (bool, int) {
    for j := 1; j <= 10; j++ {
        // check all possible lengths of forbidden words
        // compare the portion s[len(s)-j : end] against forbidden word map
        if len(s) - j < 0 {
            return true, 0
        }

        if fMap[s[(len(s) - j):]] {
            return false, len(s) - j + 1
        }
    }
    return true, 0
}
```