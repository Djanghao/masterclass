# Extremely Simple Swift Solution

**Author:** djpropah
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/6081707/](https://leetcode.com/problems/rectangle-area/solutions/6081707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Find out if they overlap, if yes compute diff if not just return both areas - diff
# Complexity
- Time complexity: O(k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func computeArea(_ ax1: Int, _ ay1: Int, _ ax2: Int, _ ay2: Int, _ bx1: Int, _ by1: Int, _ bx2: Int, _ by2: Int) -> Int {
        
        let ax = [ax1, ax2]
        let bx = [bx1, bx2]

        let ay = [ay1, ay2]
        let by = [by1, by2]

        var diff = 0
        if doesOverlap(ax, bx) && doesOverlap(ay, by) {
            diff = getDiff(ax, bx, ay, by)
        }

        return getArea(ax, ay) + getArea(bx, by) - diff

    }

    func getArea(_ x:[Int],_ y:[Int] ) -> Int {

        return abs(x[0]-x[1]) * abs(y[0] - y[1])

    }

    func getDiff(_ ax:[Int],_ bx:[Int],_ ay:[Int],_ by:[Int]) -> Int {
        let x = (ax + bx).sorted()
        let y = (ay + by).sorted()

        return abs(x[2]-x[1]) * abs(y[2] - y[1])


    }

    func doesOverlap(_ a:[Int],_ b:[Int]) -> Bool {
        let a = a.sorted()
        let b = b.sorted()

        if a[1] < b[0] || b[1] < a[0] {
            return false
        }
        return true
    }
}
```