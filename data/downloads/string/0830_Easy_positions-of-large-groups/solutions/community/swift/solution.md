# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/6054336/](https://leetcode.com/problems/positions-of-large-groups/solutions/6054336/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func largeGroupPositions(_ s: String) -> [[Int]] {
        var strArr:[String] = []
        let arr = Array(s)
        var start = arr[0]
        var startIndex = 0
        var ans:[[Int]] = []
        for i in 1..<s.count{
            if(arr[i] != start){
                if(i - startIndex >= 3){
                    ans.append([startIndex,i-1])
                }
                start = arr[i]
                startIndex = i
            }
        }
        if(arr.count - startIndex >= 3){
            ans.append([startIndex,arr.count - 1])
        }
        ans.sorted{$0[0] < $1[0]}
        return ans
    }
}
```