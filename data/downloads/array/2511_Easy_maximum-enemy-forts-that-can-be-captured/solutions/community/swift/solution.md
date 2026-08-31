# Swift | Short | O(n) time, O(1) space | With Explanation

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3850805/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3850805/)

---

# Explanation
This solution generates the result in one pass through the input array `forts`. 

The idea is that we need only count forts after we see a `1` or a `-1`. We keep track of whether it was a `1` or `-1`.

When `fort` is zero and `start` is non-zero we count the forts we see in `numForts`. In the code this is handle in the `case 0` clause of the `switch`.

When we see a non-fort, that is `fort != 0`, we compare it to `start`. If `fort` has the opposite sign to `start` it means this would be a valid move for the army and we update `maxForts`. 

> **Note**
> If start is `1` and the fort value is `-1` it is the army moving forward through the array, and vice versa. Otherwise, it is an invalid move and we ignore the count.

We reset the `numForts` count when we see a non-fort, irrespective of whether the move is valid or not. 

The non-fort logic is contained in the `default` clause of the `switch`.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    func captureForts(_ forts: [Int]) -> Int {
        var start = 0, numForts = 0, maxForts = 0
        for fort in forts {
            switch fort {
            case 0:
                if start != 0 { numForts += 1}
            default:
                if start == -fort { maxForts = max(maxForts, numForts) }
                numForts = 0
                start = fort
            }
        }
        return maxForts
    }
}
```