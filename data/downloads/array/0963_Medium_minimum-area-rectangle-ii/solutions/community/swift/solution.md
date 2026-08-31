# Easy swift solution

**Author:** hsdsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/2735636/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/2735636/)

---

For every combination of all three points:
Determine if the inner product of those three points is zero to make a right angle.
Calculate the area of the rectangle created by those 3 points by outer product and determine that it is the smallest.
Confirm that there exists a fourth point that constitutes a rectangle.
```
struct Po:Hashable {
    var x: Int
    var y: Int
    init(_ p: [Int]){
        x = p[0]
        y = p[1]
    }
}

class Solution {
    func minAreaFreeRect(_ points: [[Int]]) -> Double {
        var ps: Set<Po> = Set(points.map { Po($0) } )
        let n = points.count
        var ret = Int.max
        for i in 0..<n {
            for j in 0..<n {
                if i != j {
                    for k in 0..<n {
                        if k != i && k != j  {
                            let ux = points[i][0] - points[k][0]
                            let uy = points[i][1] - points[k][1]
                            let vx = points[j][0] - points[k][0]
                            let vy = points[j][1] - points[k][1]
                            if ux*vx + uy*vy == 0 { //Three points make a right angle
                                let r = abs(ux*vy - vx*uy)
                                if r < ret { //Smallest area
                                    let np = [points[i][0]+vx, points[i][1]+vy]
                                    if ps.contains(Po(np)) { //The forth point exists
                                        ret = r
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if ret == Int.max { return 0}
        return Double(ret)
    }
}
```