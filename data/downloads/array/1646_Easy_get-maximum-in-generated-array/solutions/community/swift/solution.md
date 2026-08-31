# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/6068211/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/6068211/)

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
    func getMaximumGenerated(_ n: Int) -> Int {
        if(n == 0){
            return 0
        }else if(n == 1){
            return 1
        }
        var arr = [0,1]
        for i in 2..<n+1{
            let position = i/2
            if(i%2 == 0){
                arr.append(arr[position])
            }else{
                arr.append(arr[position] + arr[position + 1])
            }
        }
        return arr.max()!
    }
}
```