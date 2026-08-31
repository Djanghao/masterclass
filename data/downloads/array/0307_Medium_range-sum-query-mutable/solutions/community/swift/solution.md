# NumArray implementation

**Author:** wgperegoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/5662098/](https://leetcode.com/problems/range-sum-query-mutable/solutions/5662098/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Fairly simple question once you understand what its asking

# Approach
<!-- Describe your approach to solving the problem. -->
Initial approach was to use a for-loop over the index values
But want to get better at using these Swift higher-order functions in interview questions (had to look up syntax for `reduce(_:_:)`)

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
/**
Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]


[1,3,5]
sum([0,2]) -> 9

[1,2,5]
sum([0,2]) - 8
*/

class NumArray {
    var nums: [Int]

    init(_ nums: [Int]) {
        self.nums = nums
    }
    
    func update(_ index: Int, _ val: Int) {
        nums[index] = val
    }
    
    func sumRange(_ left: Int, _ right: Int) -> Int {
        return nums[left ... right].reduce(0, { 
            $0 + $1
        })
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * let obj = NumArray(nums)
 * obj.update(index, val)
 * let ret_2: Int = obj.sumRange(left, right)
 */
```