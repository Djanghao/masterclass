# Monotomic Increasing Stack - Time: O(n), Space: O(n)

**Author:** Primike
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4598970/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4598970/)

---

# Intuition
Usually it seems like some subarray problems include a stack when trying to minimize or maximize something.

# Approach
Use a stack to store a tuple of the (**current number, the streak of how many subarrays it is the minimum of up to that point**)

Added a 0 to finish off any remaining elements at the end since the smallest possible number is 1. The 0 does not affect the result since its 0.

When the loop encounters a smaller element than the last on the stack it will pop elements until it the stack is empty or it is larger than the last stack element. This will increase the current numbers streak

While doing this it will add to the result (**the current popped element**) * (**number of subarrays it is the minimum of up to the elements position - back streak**) * (**the other subarrays that it is the minimum of from the front - front streak**). The last part works because the stack is in increasing order. Steaks cannot be added they have to be multiplied.

If the arr is in increasing order all numbers will be added to the stack with a streak of 1 each until they are popped by the 0 at the end. 

If the elements are not in order the idea still applies but in parts.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func sumSubarrayMins(_ arr: [Int]) -> Int {
        let mod = 1_000_000_007
        let arr = arr + [0]
        var stack = [(Int, Int)]()
        var result = 0

        for number in arr { 
            var streak = 1
            
            while let last = stack.last, last.0 >= number {
                stack.removeLast()
                result += (last.0 * last.1 * streak) % mod
                streak += last.1
            }

            stack.append((number, streak))
        }

        return result % mod
    }
}
```