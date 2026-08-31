# Simple solution + comments

**Author:** user2967EU
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3305150/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/3305150/)

---



# Code
```
class Solution {
    func lengthOfLongestSubstringTwoDistinct(_ s: String) -> Int {
        var result = 0
        var left = 0
        var right = 0
        let str = Array(s)
        var index = [String.Element: Int]()

        // 1. looping through array
        // 2. indexing unique char positions
        // 3. if new uniqe char is faced, update the window
        // 4. if existing char is faces, just updating the index

        while right < str.count {
            // tracking char position
            index[str[right]] = right

            // time to reduce the window
            if index.count == 3 {
                // find the position of extra char 
                // which has the smallest position 
                let minIdx = index.values.min()!
                // kick it nahuy
                index.removeValue(forKey: str[minIdx])

                // move window left position
                left = minIdx + 1
            }

            // update window size
            result = max(right - left + 1, result)

            right += 1
        }

        return result
    }
}
```