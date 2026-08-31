# Swift - With detailed explanation.

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/6038929/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/6038929/)

---

# Code
```swift []
class Solution {
    func secondsToRemoveOccurrences(_ s: String) -> Int {
        //00001 -> 10000 - takes 4 seconds 
        //10001 -> takes 3 seconds. So if we encounter a 1 , it takes number of zeros preceding it to move this 1 to the place of first 0.

        var seconds = 0
        var zeros = 0

        for char in s {
            zeros += char == "0" ? 1 : 0 
            if char == "1" && zeros > 0 {
                /*
                    unless we see a `1`, seconds wont move as we are not spending any time changing anything. 
                    1. it takes exactly 1 second to change a `01` to `10`. If we reach here, We have seen atleast 1 `0` before this `1``. 
                        We will at the least spend 1 second extra. Thats the lower bound.
                    2. if there are multiple zeros before 1, then it takes numZeros seconds to move this 1 to preceed all 0s. This is the upper bound.
                    3. We take the max, since we need those many seconds to move the 1 before those many zeros
                **/
                seconds = max(seconds + 1, zeros)
            }
        }
        return seconds
    }
}
```