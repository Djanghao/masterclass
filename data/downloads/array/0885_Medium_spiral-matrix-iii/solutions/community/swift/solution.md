# Swift🫧clean

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/5604690/](https://leetcode.com/problems/spiral-matrix-iii/solutions/5604690/)

---

**Simulation (accepted answer)**
```
class Solution {
    func spiralMatrixIII(_ rows: Int, _ cols: Int, _ rStart: Int, _ cStart: Int) -> [[Int]] {
        var result = [[Int]]()
        let deltas = [0,1,0,-1,0]
        var pos = [rStart, cStart] // [yPos, xPos]
        var direction = 0  // 0=east 1=south 2=west 3=north
        var bounds = [cStart+1, rStart+1, cStart-1, rStart-1]
        
        while result.count < rows*cols {
            // if within matrix, output position
            if 0..<rows ~= pos[0], 0..<cols ~= pos[1] {
                result.append(pos)
            }
            
            // update position
            pos = zip(pos, deltas[direction...]).map(+)
            
            // if hit bounds, update edge and direction 
            if pos[1-direction&1] == bounds[direction] {
                bounds[direction] += 1-(direction&2) // looks fancy, but just +/- 1
                direction = (direction+1) % 4
            }
        }
        return result
    }
}
```