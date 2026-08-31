# ✅ DP | Clean & Short

**Author:** eleev
**Votes:** 3
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5562081/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5562081/)

---

# Intuition & Pseudocode
```
- DP represents the minimum height required to place 
  the first i books optimally
- For each book position i determine whether placing it on the current
  shelf or starting a new shelf
    - Accumulate widths of previous books to fit within shelfWidth
    - Track the tallest book on the shelf to determine its height
- Update each DP entry to always ensure the minimum possible height
    - Set dp[i] to the minimum of its current value and the sum of the 
      new shelf's height and the optimal height of preceding books 
```

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func minHeightShelves(_ books: [[Int]], _ shelfWidth: Int) -> Int {
        let n = books.count
        var dp = CollectionOfOne(0) + ContiguousArray(repeating: Int.max, count: n)
        
        for i in 1...n {
            var (width, height) = (0, 0)
            
            for j in stride(from: i, to: 0, by: -1) {
                width += books[j-1][0]
                if width > shelfWidth {
                    break
                }
                height = max(height, books[j-1][1])
                dp[i] = min(dp[i], dp[j-1] + height)
            }
        }
        return dp[n]
    }
}
```