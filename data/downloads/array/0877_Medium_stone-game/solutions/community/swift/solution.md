# Swift | Recursion + Memo | O(n^2)

**Author:** punk9595
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game/solutions/1384621/](https://leetcode.com/problems/stone-game/solutions/1384621/)

---

```
class Solution {
    var memo = [[Int]: Int]()
    
    func stoneGame(_ piles: [Int]) -> Bool {
        let sum = piles.reduce(0, +)
        let maxAlex = recurse(0, piles.count-1, piles)
        
        return maxAlex > sum - maxAlex
    }
    
    func recurse(_ start: Int, _ end: Int, _ nums: [Int]) -> Int {
        if start > end {
            return 0
        }
        if let found = memo[[start,end]] {
            return found
        }
        let choseStart = nums[start] + min(recurse(start+2, end, nums), recurse(start+1, end-1, nums))
        let choseEnd = nums[end] + min(recurse(start, end-2, nums), recurse(start+1, end-1, nums))
        let result = max(choseStart, choseEnd)
        memo[[start,end]] = result
        return result
    }
}
```