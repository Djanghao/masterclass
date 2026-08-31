# Swift | 100% time, crazy bit tricks

**Author:** VladimirTheLeet
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524340/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524340/)

---

# Complexity
- Time complexity: $$O(2^m\u22C5m^2)$$
- Space complexity: $$O(2^m + m^2)$$
Here $$m$$ is number of elements in array - 1, aka $$(n * 2) -1$$

# Code
```
class Solution {
    func maxScore(_ nums: [Int]) -> Int
    {
        var gcds: [[NumberValue]] = Array(repeating: Array(repeating: 1,
            count: nums.count), count: nums.count - 1)
        
        for i in 0..<(nums.count - 1) {
            for j in (i + 1)..<nums.count {
                gcds[i][j] = NumberValue(gcd(nums[i], nums[j]))
            }
        }

        var memo: [NumbersState : NumberValue] = [:]
        memo.reserveCapacity(1 << (nums.count - 1)) // 2 ^ 13 at worst when count == 14
        let initialState = NumbersState.setup(nums)

        func maxScore(_ nums: NumbersState, _ level: NumberValue = 1) -> NumberValue
        {
            if let cachedResult = memo[nums] { return cachedResult }
            var score: NumberValue = 0
            for (i, j) in nums
            {
                score = max(score, level * gcds[i][j] +
                  maxScore(nums.takenPair(i, j), level + 1))
            }
            memo[nums] = score
            return score
        }

        return Int(maxScore(initialState))
    }
}

typealias NumbersState = UInt16
typealias NumberValue = UInt32
var maxSize: UInt32 = 14

extension NumbersState: Sequence
{
    // set bits on the right represent available indexes to pick
    static func setup(_ nums: [Int]) -> NumbersState
    {   
        maxSize = UInt32(nums.count) 
        return UInt16.max >> (16 - maxSize)
    }

    // Remove the numbers from use by setting their bits to 0
    func takenPair(_ i: Int, _ j: Int) -> NumbersState {
        return self & ~((1 << i) | (1 << j))      
    }

    // Returns the new UInt32 number as iterator
    public func makeIterator() -> UInt32
    {
        let i = UInt32(self.trailingZeroBitCount)
        let j = UInt32((self & ~(1 << i)).trailingZeroBitCount)
        if j == self.bitWidth { return 0 }
        return UInt32(self) | (i << 16) | (j << 24)
        // 8bits: j     8 bits: i      16bits: bits representing numbers
    }
}

// for-in iteration over still available pairs
extension UInt32: IteratorProtocol
{
    public mutating func next() -> (Int, Int)?
    {
        if self == 0 { return nil }
        var i = (self & (UInt32.max >> 8)) >> 16
        var j = self >> 24
        let pair = (Int(i), Int(j))
        let nums = UInt16(self & (UInt32.max >> 16))
        var checkingBit: UInt16 = 1

        @discardableResult
        func moveToNextIndex(_ x: inout UInt32) -> Bool
        {
            x += 1
            if x >= maxSize { return false }
            checkingBit = 1 << x
            while nums & checkingBit == 0
            {                
                checkingBit <<= 1
                x += 1
                if x >= maxSize { return false }
            }
            return true
        }

        if !moveToNextIndex(&j)
        {
            moveToNextIndex(&i)
            j = i
            if !moveToNextIndex(&j) {
                i = 0; j = 0; self = 0
            }               
        }
        self = (self & (UInt32.max >> 16)) | (i << 16) | (j << 24)
        return pair      
    }
}

// greatest common divisor 
func gcd(_ x: Int, _ y: Int) -> Int
{
    let rem = x % y
    if rem == 0 { return y }
    else { return gcd(y, rem) }
}
```