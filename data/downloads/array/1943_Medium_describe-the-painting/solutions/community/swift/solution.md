# Two Swift solutions

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/1365870/](https://leetcode.com/problems/describe-the-painting/solutions/1365870/)

---

1. Line feed
```
class Solution {
    func splitPainting(_ segments: [[Int]]) -> [[Int]] {
        let n = segments.count, (mi, ma) = segments.reduce(into: (Int(Int.max), Int(Int.min)), { $0.0 = min($0.0, $1[0]); $0.1 = max($0.1, $1[1]) }), lineLen = ma - mi + 1
        var line = [[Int]](repeating: [Int](repeating: 0, count: 2), count: lineLen), start = 0, color = 0, result = [[Int]]()
        for segment in segments {
            line[segment[1] - mi][0] -= segment[2]
            line[segment[0] - mi][1] += segment[2]
        }
        for i in 0..<lineLen {
            let end = i + mi
            for j in 0...1 where line[i][j] != 0 {
                if color > 0 && start < end {
                    result.append([start, end, color])
                }
                color += line[i][j]
                start = end
            }
        }
        return result
    }
}
```

2. Sorting starts and ends (TLE)
```
class Solution {
    func splitPainting(_ segments: [[Int]]) -> [[Int]] {
        let n = segments.count, sortedStarts = Array(0..<n).sorted(by: { segments[$0][0] < segments[$1][0] }), sortedEnds = Array(0..<n).sorted(by: { segments[$0][1] < segments[$1][1] })
        var iStart = 0, iEnd = 0, lastStart = 0, colors = Set<Int>(), result = [[Int]]()
        while iStart < n || iEnd < n {
            if iStart == n || iEnd < n && segments[sortedEnds[iEnd]][1] <= segments[sortedStarts[iStart]][0] { // process end
                let end = segments[sortedEnds[iEnd]][1]
                result.append([lastStart, end, colors.reduce(0, +)])
                while iEnd < n && segments[sortedEnds[iEnd]][1] == end {
                    colors.remove(segments[sortedEnds[iEnd]][2])
                    iEnd += 1
                }
                lastStart = end
            } else { // process start
                let start = segments[sortedStarts[iStart]][0]
                if !colors.isEmpty && start > lastStart {
                    result.append([lastStart, start, colors.reduce(0, +)])
                }
                while iStart < n && segments[sortedStarts[iStart]][0] == start {
                    colors.insert(segments[sortedStarts[iStart]][2])
                    iStart += 1
                }
                lastStart = start
            }
        }
        return result
    }
}
```