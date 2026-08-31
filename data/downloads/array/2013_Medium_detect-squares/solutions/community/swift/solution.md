# Swift solution

**Author:** yamironov
**Votes:** 2
**Link:** [https://leetcode.com/problems/detect-squares/solutions/1472026/](https://leetcode.com/problems/detect-squares/solutions/1472026/)

---

Swift solution
```swift
class DetectSquares {

    private var xs = [Int: [Int: Int]]()
    private var ys = [Int: [Int: Int]]()
    private var xys = [Int: [Int: Int]]()

    init() {
        // nothing to do
    }
    
    func add(_ point: [Int]) {
        let x = point[0], y = point[1]
        xs[x, default: [Int: Int]()][y, default: Int(0)] += 1
        ys[y, default: [Int: Int]()][x, default: Int(0)] += 1
        xys[x + y, default: [Int: Int]()][x, default: Int(0)] += 1
    }

    func count(_ point: [Int]) -> Int {
        let x = point[0], y = point[1]
        let result = checkBottomRight(x, y) + checkTopLeft(x, y) + checkBottomLeft(x, y) + checkTopRight(x, y)
        return result
    }

    private func checkBottomRight(_ brX: Int, _ brY: Int) -> Int {
        let brCount = 1
        var result = 0
        for tlX in xys[brX + brY, default: [Int: Int]()].keys where brX > tlX {
            let tlY = brY + (brX - tlX)
            let tlCount = xs[tlX, default: [Int: Int]()][tlY, default: 0]
            let blCount = xs[tlX, default: [Int: Int]()][brY, default: 0]
            let trCount = xs[brX, default: [Int: Int]()][tlY, default: 0]
            result += brCount * tlCount * blCount * trCount
        }
        return result
    }

    private func checkTopLeft(_ tlX: Int, _ tlY: Int) -> Int {
        let tlCount = 1
        var result = 0
        for brX in xys[tlX + tlY, default: [Int: Int]()].keys where brX > tlX {
            let brY = tlY + (tlX - brX)
            let brCount = xs[brX, default: [Int: Int]()][brY, default: 0]
            let blCount = xs[tlX, default: [Int: Int]()][brY, default: 0]
            let trCount = xs[brX, default: [Int: Int]()][tlY, default: 0]
            result += brCount * tlCount * blCount * trCount
        }
        return result
    }

    private func checkBottomLeft(_ blX: Int, _ blY: Int) -> Int {
        let blCount = 1
        var result = 0
        for brX in ys[blY, default: [Int: Int]()].keys where brX > blX {
            let tlY = blY + (brX - blX)
            let brCount = xs[brX, default: [Int: Int]()][blY, default: 0]
            let tlCount = xs[blX, default: [Int: Int]()][tlY, default: 0]
            let trCount = xs[brX, default: [Int: Int]()][tlY, default: 0]
            result += brCount * tlCount * blCount * trCount
        }
        return result
    }

    private func checkTopRight(_ trX: Int, _ trY: Int) -> Int {
        let trCount = 1
        var result = 0
        for brY in xs[trX, default: [Int: Int]()].keys where brY < trY {
            let tlX = trX + (brY - trY)
            let brCount = xs[trX, default: [Int: Int]()][brY, default: 0]
            let tlCount = xs[tlX, default: [Int: Int]()][trY, default: 0]
            let blCount = xs[tlX, default: [Int: Int]()][brY, default: 0]
            result += brCount * tlCount * blCount * trCount
        }
        return result
    }
}
```