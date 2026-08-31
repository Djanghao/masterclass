# [Swift] Easy-understanding, Time: O(n), Space: O(1)

**Author:** kmshiori
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/1202817/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/1202817/)

---

Approach
* Get the all k with Left Side points
* Try all different cases to all k with Right Side points
	* Compare the current sum and result

```
class Solution {
    func maxScore(_ cardPoints: [Int], _ k: Int) -> Int {
        var result = cardPoints[0..<k].reduce(0, +), current = result
        
        for x in 1...k {
            current -= cardPoints[k-x]
            current += cardPoints[cardPoints.count-x]
            result = max(result, current)
        }
        
        return result
    }
}
```