# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636474/](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/solutions/4636474/)

---

**One-Liner, terse \uD83D\uDE44 (accepted answer)**
```
class Solution {
    func numSubmatrixSumTarget(_ m: [[Int]], _ t: Int) -> Int {
        m[0].indices.reduce((0,m.map{$0.reduce(into:[0]){$0+=[$0.last!+$1]}})){d,i in ((i..<d.1[0].count-1).reduce(d.0){r,j in d.1.reduce(into:(r,[0:1],0)){a,b in a.2+=b[j+1]-b[i];a.0+=a.1[a.2-t] ?? 0;a.1[a.2,default:0]+=1}.0},d.1)}.0
    }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
import Algorithms

class Solution {
    func numSubmatrixSumTarget(_ matrix: [[Int]], _ target: Int) -> Int {
        matrix[0].indices.reduce(0) { result, i in
            (i..<matrix[0].count).reduce(result) {result, j in
                matrix.reduce(into: (
                        result: result,
                        counts: [0:1],
                        cur:    0
                )) { data, row in
                    let prefixSums = row.reductions(0, +)
                    data.cur += prefixSums[j+1] - prefixSums[i]
                    data.result += data.counts[data.cur - target, default:0]
                    data.counts[data.cur, default:0] += 1
                }
                .result
            }
        }
    }
}
```