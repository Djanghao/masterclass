# [swift]memo && DFS

**Author:** KuShuLian
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/2170576/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/2170576/)

---

```swift
https://leetcode.com/problems/selling-pieces-of-wood/
class Solution {
    func sellingWood(_ height: Int, _ width: Int, _ _prices: [[Int]]) -> Int {
        var memo = [[Int]](repeating: [Int](repeating: -1, count: width + 5), count: height + 5)

        var prices = [[Int]](repeating: [Int](repeating: 0, count: width + 5), count: height + 5)
        _prices.forEach { p in
            prices[p[0]][p[1]] = p[2]
        }



        func dfs(_ curHeight: Int, _ curWidth: Int) -> Int {

            guard -1 == memo[curHeight][curWidth] else {
                return memo[curHeight][curWidth]
            }

            var ans = prices[curHeight][curWidth]
            //horizon
            for firstPartHeight in 1..<curHeight {
                ans = max(ans, dfs(firstPartHeight, curWidth) + dfs(curHeight - firstPartHeight, curWidth))
            }
            //vertical
            for firstPartWidth in 1..<curWidth {
                ans = max(ans, dfs(curHeight, firstPartWidth) + dfs(curHeight, curWidth - firstPartWidth))
            }
            memo[curHeight][curWidth] = ans
            return ans
        }

        return dfs(height, width)
    }
}
```