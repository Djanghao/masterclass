# 🏐⚫️ Separate Black and White Balls 🏐⚪️

**Author:** shivampatel066
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5914039/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5914039/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key insight for this problem is realizing that we don't actually need to perform the swaps. Instead, we can count the number of swaps that would be necessary. Each white ball (0) needs to move past all the black balls (1) that come before it. This means the number of steps for each white ball is equal to the number of black balls that precede it.
# Approach
<!-- Describe your approach to solving the problem. -->
Initialize two variables:

steps to keep track of the total number of steps needed
onesCount to keep track of the number of black balls (1s) we've seen so far


Iterate through each character in the input string:

If we encounter a black ball (1), increment onesCount
If we encounter a white ball (0), add the current onesCount to steps
This is because this white ball needs to move past all the black balls we've seen so far


Return the total number of steps

This approach works because it effectively calculates the number of swaps each white ball would need to make to get to its correct position on the left, without actually performing the swaps.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
We iterate through the string once, where n is the length of the string.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
We only use a constant amount of extra space (two variables) regardless of the input size.
# Code
```swift []
class Solution {
    func minimumSteps(_ s: String) -> Int {
        var steps = 0
        var onesCount = 0
        
        for char in s {
            if char == "1" {
                onesCount += 1
            } else {
                steps += onesCount
            }
        }
        
        return steps
    }
}
```