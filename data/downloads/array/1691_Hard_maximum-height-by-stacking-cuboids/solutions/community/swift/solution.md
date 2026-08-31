# Swift | Sorting | DP | O(n^2) | Explained

**Author:** jayantsogikar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/970416/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/970416/)

---

* Each box(cuboid) should have an orientation in such a way that max height is achieved. Hence, we first sort each boxes to get the orientation with max height.
* Then we sort the whole set of cuboids based on its volume.
* Create a list called dp that stores the max height encountered till the present index.
* Now use two for loops, one moves ahead and other checks all the possible cubes that can be placed on the present cube, and once done opts for the cube that provides max height.
* Return the max height observed in the dp list
```swift
func maxHeight(_ cuboids: [[Int]]) -> Int {
    var mat : [[Int]] = cuboids.map({$0.sorted()}).sorted(by: {$0[0] * $0[1] * $0[2] <= $1[0] * $1[1] * $1[2]})
    var dp : [Int] = Array(repeating:0,count:mat.count)
    for i in 0..<dp.count{
        var c1 = mat[i], height = 0
        for j in 0..<i{
            var c2 = mat[j]
            if c1[0] >= c2[0] && c1[1] >= c2[1] && c1[2] >= c2[2]{
                height = max(height,dp[j] + c1[2])
            }
        }
        dp[i] = max(height,c1[2])
    }
    return dp.max()!
}
```