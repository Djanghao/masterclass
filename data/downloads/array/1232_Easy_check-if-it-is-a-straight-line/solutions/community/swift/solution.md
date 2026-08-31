# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3599096/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/3599096/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func checkStraightLine(_ c: [[Int]]) -> Bool {
        Set(c[1...].map{$0[1]==c[0][1] ? 1 : Float($0[0]-c[0][0]) / Float($0[1]-c[0][1])}).count == 1
    }
}
```

---

**One-Liner approach, illustrated (accepted answer)**
```
class Solution {
    func checkStraightLine(_ coordinates: [[Int]]) -> Bool {
        let (X,Y) = (0,1) // indices
        let (x0, y0) = (coordinates[0][X], coordinates[0][Y])

        return Set(
            coordinates.dropFirst()
            .map { point in
                point[X] == x0 ? .infinity : Float(point[Y]-y0) / Float(point[X]-x0)
            }
        )
        .count == 1
    }
}
```