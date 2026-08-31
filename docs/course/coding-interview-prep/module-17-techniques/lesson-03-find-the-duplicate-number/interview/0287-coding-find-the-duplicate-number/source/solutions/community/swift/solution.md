# Swift solution with explanation

**Author:** vc7
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/543300/](https://leetcode.com/problems/find-the-duplicate-number/solutions/543300/)

---

According to the [solution article](https://leetcode.com/problems/find-the-duplicate-number/solution/), we are already knowing that we can use Floyd's cycle detection algorithm.

# Why Using Cycle Detection

According to the description of this problem, we knowing that the value of the elements might between `1` to `count`.

So the hint tells as we might be ok to see this array as a kind of flow. Base on this, we also can say the value of an elements is represent the next index we can go.

For example, if we have a given array `[1, 3, 4, 2, 3]`

``` text
+-----+-----+-----+-----+-----+
| [0] | [1] | [2] | [3] | [4] |
+-----+-----+-----+-----+-----+
|  1  |  3  |  4  |  2  |  3  |
+-----+-----+-----+-----+-----+
```

We started from `[0]`, we found that we start from `1`, then we got `3` at `[1]`, `2` at `[3]` and so on.

And let's trying to redraw this array into a simple flow. (I am not sure we can call it a state machine or not lol)

``` text

+---+    +---+    +---+    +---+
| 1 | -> | 3 | -> | 2 | -> | 4 |
+---+    +---+    +---+    +---+
           ^                 |
           |                 |
           +-----------------+
```

Then we got a flow has a cycle. And that's the reason why we can use Floyd to solve this problem.

## Steps

We can devide this problem into 2 main parts base on Floyd's algorithm.

1. Prove the array (or flow) has a cycle, and get the intersection index of slow and fast from it.
2. Get the entrance of this cycle by using the intersection index then return the target index.

Please check [wiki](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_Tortoise_and_Hare) for the detail of Floyd's algorithm.

### Traversal ("1 Step")

Since we have already treat the value of an element as the destination index, our way of traversal will become like this

``` swift
var slow = nums[slow]
```

### Slow-Fast Pointer at Part 1.

``` swift
slow = nums[slow]           // Take 1 step
fast = nums[nums[fast]]     // Take 2 steps
```

Base on Floyd's algorithm's theory, if there is a loop inside a list, slow and fast pointers will meet on the loop. And that's the reason why we took the `meet` as the way of determine whether a list has a loop or not.

## Code

Base on the explanation above, we can have a piece of code liked below.

``` swift
class Solution {
    // Main method
    func findDuplicate(_ nums: [Int]) -> Int {
        let intersectionIndex = findIntersectionIndex(nums)
        return findStartIndex(nums, intersectionIndex)
    }
    
    private func findIntersectionIndex(_ nums: [Int]) -> Int {
        var slow = nums[0]
        var fast = nums[0]
        
        repeat {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while slow != fast
        
        return slow
    }
    
    private func findStartIndex(_ nums: [Int], _ intersection: Int) -> Int {
        var slow = nums[0]
        var fast = intersection
        
        while slow != fast {
            slow = nums[slow]
            fast = nums[fast]
        }
        
        return slow
    }
}
```