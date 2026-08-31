# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-permutation/solutions/4565383/](https://leetcode.com/problems/find-permutation/solutions/4565383/)

---

# Complexity
Time Complexity: O(n), where n is the length of the string 's'
Space Complexity: O(n), as we use an additional array of size 's.length + 1'

# Code
```
object Solution {
    def findPermutation(s: String): Array[Int] = {
        // Initialize an array 'ss' with size one greater than the length of the string 's'
        var ss = new Array[Int](s.length + 1)
        
        // 'i', 'j', and 'k' are used as loop counters and indices
        var i = 0
        var j = 0
        var k = 0

        // Iterate over each character in the string 's', plus one extra iteration
        while(i <= s.length) {
            // Reset 'j' to 0 for each iteration of 'i'
            j = 0

            // Count the number of consecutive 'D's starting from the current position 'i'
            while(i + j < s.length && s(i + j) == 'D') {
                j += 1
            }

            // Mark the current position 'i' for reference
            k = i

            // Assign values in the array 'ss' starting from position 'i' and decreasing 'j'
            // This loop places the numbers in descending order for each sequence of 'D's
            while(j >= 0) {
                ss(i) = k + j + 1
                j -= 1
                i += 1
            }
        }

        // Return the array 'ss' which contains the permutation
        ss
    }
}

```