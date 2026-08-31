# Easy - Swift

**Author:** TuringAccount
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/5824664/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/5824664/)

---


# Code
```swift []
class Solution {
    func maximumBeauty(_ flowers: [Int]) -> Int {
        var flowers = flowers
        var first: [Int: Int] = [:]
        var last: [Int: Int] = [:]
        
        // Find first and last occurrence of each flower
        for i in 0..<flowers.count {
            if first[flowers[i]] == nil {
                first[flowers[i]] = i
            } else {
                last[flowers[i]] = i
            }
        }
        
        var intervals: [[Int]] = []
        for (key, fIndex) in first {
            if let lIndex = last[key] {
                intervals.append([key, fIndex, lIndex])
            }
        }
        
        flowers[0] = max(flowers[0], 0)
        var pref: [Int] = [flowers[0]]
        
        for i in 1..<flowers.count {
            flowers[i] = max(flowers[i], 0)
            pref.append(pref[i - 1] + flowers[i])
        }
        
        var res = Int.min
        
        for interval in intervals {
            let value = interval[0]
            let left = interval[1]
            let right = interval[2]
            
            var area = 0
            if left == 0 {
                area = pref[right]
            } else {
                area = pref[right] - pref[left - 1]
            }
            
            if area == 0 {
                res = max(res, 2 * value)
            } else if value < 0 {
                res = max(res, 2 * value + area)
            } else {
                res = max(res, area)
            }
        }
        
        return res

    }
}
```