# Simple swift solution

**Author:** venkatasaipulipati_123
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5749853/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5749853/)

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
    func checkValid(_ matrix: [[Int]]) -> Bool {
        var n = 0
        let ansArr:[Int] = Array(1...matrix.count)
        for arr in matrix{
            if(arr.sorted() != ansArr){
                return false
            }
        }
        while(n < matrix.count){
            var sampleArr:[Int] = []
            for arr in matrix{
                sampleArr.append(arr[n])
            }
            if(sampleArr.sorted() != ansArr){
                return false
            }
            n+=1
        }
        return true
    }
}
```