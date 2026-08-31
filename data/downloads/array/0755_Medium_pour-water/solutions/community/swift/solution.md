# Swift - easy to understand

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water/solutions/5964456/](https://leetcode.com/problems/pour-water/solutions/5964456/)

---


# Code
```swift []
class Solution {
    func pourWater(_ heights: [Int], _ volume: Int, _ k: Int) -> [Int] {
        guard k >= 0 && k < heights.count else { return [] }
        var result = heights
        var volume = volume 

        while volume > 0 {
            var index = k //water is poured at index k

            //find a lower index value to the left of k
            for i in stride(from: k-1, through: 0, by: -1) {
                guard result[i] <= result[index] else { break }
                if result[i] < result[index] {
                    index = i
                }
            }

            if index == k {
                //then it did not move left and stayed
                //so lets check if it can move right
                for i in stride(from: k+1, through: result.count - 1, by: 1) {
                    guard result[i] <= result[index] else { break }
                    if result[i] < result[index] {
                        index = i
                    }
                }
            }
            result[index] += 1
            volume -= 1
        }

        return result
    }
}
```