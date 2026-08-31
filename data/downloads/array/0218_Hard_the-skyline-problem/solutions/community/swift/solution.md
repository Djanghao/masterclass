# Swift - lazy propagation segment tree O(N log N)

**Author:** dikra
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/4665717/](https://leetcode.com/problems/the-skyline-problem/solutions/4665717/)

---

# Complexity
- Time complexity: $$O(N log N)$$
- Space complexity: $$O(N log N)$$

# Code
```
class Solution {
    func getSkyline(_ buildings: [[Int]]) -> [[Int]] {
        var arr = [Range:Int]()
        var lazyArr = [Range:Int]()
        var xCoords = Array(buildings.reduce(into: Set<Int>()) {
            $0.insert($1[0])
            $0.insert($1[1])
        }).sorted()
        let minX = xCoords.first!
        let maxX = xCoords.last!

        for building in buildings {
            update(minX, maxX, building[0], building[1] - 1, building[2], &arr, &lazyArr)
        }

        var result = [[Int]]()
        var lastY = 0
        for x in xCoords {
            let y = query(minX, maxX, x, &arr, &lazyArr)
            if y != lastY {
                result.append([x, y])
                lastY = y
            }
        }
        return result
    }

    private func update(_ i: Int, _ j: Int, _ le: Int, _ ri: Int, _ val: Int, _ arr: inout [Range:Int], _ lazyArr: inout [Range:Int]) {
        guard i <= j else { return }
        guard i <= ri, j >= le else { return }
        resolveLazy(i, j, &arr, &lazyArr)

        let key = Range(i, j)
        let mid = (i + j) >> 1
        let leKey = Range(i, mid)
        let riKey = Range(mid + 1, j)

        if le <= i, j <= ri {
            arr[key] = max(arr[key, default: 0], val)
            if i != j {
                let mid = (i + j) >> 1
                lazyArr[Range(i, mid)] = max(lazyArr[Range(i, mid), default: 0], val)
                lazyArr[Range(mid + 1, j)] = max(lazyArr[Range(mid + 1, j), default: 0], val)
            }
            return
        }

        update(i, mid, le, ri, val, &arr, &lazyArr)
        update(mid + 1, j, le, ri, val, &arr, &lazyArr)
        arr[key] = max(arr[key, default: 0], arr[leKey, default: 0], arr[riKey, default: 0])
    }

    private func query(_ i: Int, _ j: Int, _ x: Int, _ arr: inout [Range:Int], _ lazyArr: inout [Range:Int]) -> Int {
        guard i <= j else { return 0 }
        resolveLazy(i, j, &arr, &lazyArr)
        guard i <= x, x <= j else { return 0}

        if i == j {
            return arr[Range(i, j), default: 0]
        }

        let mid = (i + j) >> 1
        return max(query(i, mid, x, &arr, &lazyArr), query(mid + 1, j, x, &arr, &lazyArr))
    }

    private func resolveLazy(_ i: Int, _ j: Int, _ arr: inout [Range:Int], _ lazyArr: inout [Range:Int]) {
        let key = Range(i, j)
        let mid = (i + j) >> 1
        let leKey = Range(i, mid)
        let riKey = Range(mid + 1, j)

        if let lazyVal = lazyArr[key] {
            lazyArr[key] = nil
            arr[key] = max(arr[key, default: 0], lazyVal)

            if i != j {
                lazyArr[leKey] = max(lazyArr[leKey, default: 0], lazyVal)
                lazyArr[riKey] = max(lazyArr[riKey, default: 0], lazyVal)
            }
        }
    }

    struct Range: Hashable {
        let le: Int
        let ri: Int

        init(_ le: Int, _ ri: Int) {
            self.le = le
            self.ri = ri
        }
    }
}
```