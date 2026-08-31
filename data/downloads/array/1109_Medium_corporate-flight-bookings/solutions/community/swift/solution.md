# Swift solution using diff array

**Author:** chaingangway
**Votes:** 1
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/1672898/](https://leetcode.com/problems/corporate-flight-bookings/solutions/1672898/)

---

In the interview, you may have to implement such a diff array on the whiteboard. All the key points I have concluded in this solution.
https://leetcode-cn.com/problems/range-addition/solution/swift-chai-fen-shu-zu-by-chaingangway-vxpl/

Apart from the above, you may notice the meaning of `i` or `j` in this problem. The operation in the `bookings[i] = [firsti, lasti, seatsi]`, of which `i` start from 1. But the answer to output starts from 0. So each range extracted from `bookings[i]` must minus one.


```swift
class Solution {
    func corpFlightBookings(_ bookings: [[Int]], _ n: Int) -> [Int] {
        // allocation
        var result = [Int](repeating: 0, count: n)
        // allocate diff
        var diff = Difference(result)
        for op in bookings {
            var i = op[0] - 1
            var j = op[1] - 1
            var val = op[2]
            diff.increase(i, j, val)
        }
        return diff.getResult()
    }
}

class Difference {
    private var diff: [Int] = [0]

    init(_ nums: [Int]) {
        // allocation
        diff = [Int](repeating: 0, count: nums.count)
        // init
        diff[0] = nums[0]
        for i in 1..<nums.count {
            diff[i] = nums[i] - nums[i - 1]
        } 
    }

    // [i, j] plus val
    func increase(_ i: Int, _ j: Int, _ val:Int) {
        // the validation of i or j is ensured by outside
        diff[i] += val
        if j + 1 < diff.count {
            diff[j + 1] -= val
        }
    }

    func getResult() -> [Int] {
        var result: [Int] = [Int](repeating: 0, count: diff.count)
        result[0] = diff[0]
        for i in 1..<diff.count {
            result[i] = diff[i] + result[i - 1]
        }
        return result
    }
}
```


