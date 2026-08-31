# Binary Search solution on Swift

**Author:** blackbirdNG
**Votes:** 3
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/3051193/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/3051193/)

---


# Code
```
func guessNumber(_ n: Int) -> Int {
    var low = 0
    var high = n
    while low <= high {
        let mid = (low+high) / 2
        if guess(mid) == 0 {
            return mid
        }
        if guess(mid) == 1 {
            low = mid + 1                
        } else if guess(mid) == -1 {
            high = mid - 1
        }
    }
    return -1
}
```
### Please upvote if the solution was useful!