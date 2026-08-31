# Swift Oneliner | 0ms | 15.42 MB

**Author:** thomasmani1999
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-longest-new-string/solutions/5659728/](https://leetcode.com/problems/construct-the-longest-new-string/solutions/5659728/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can only accept strings of AABB i.e. we cannot accept AAA or BBB.SO count for pairs of AABB and then add number of Z

# Approach
<!-- Describe your approach to solving the problem. -->
First I found total number of pairs of AABB possible. Thsat would be min(x,y)

Then added 1 cause we can form AABBAA or BBAABB. If x and y are equal we dont add this one.

Now Z is AB this can be added to the first or last of the string infinite number of times

So the total possible would be ((min(x, y) * 2) + 1 + z) * 2 if X and Y are not equal

and if x and y are equal  (x * 2) + z) * 2

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```swift []
class Solution {
    func longestString(_ x: Int, _ y: Int, _ z: Int) -> Int {
        return ((min(x, y) * 2) + z + ( x != y ? 1 : 0)) * 2
    }
}
```