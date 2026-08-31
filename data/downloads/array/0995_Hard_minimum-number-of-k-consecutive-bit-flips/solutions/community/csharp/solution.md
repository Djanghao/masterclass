# C# | Runtime 310 ms Beats 100.00%, Memory 53.82 MB Beats 91.53% [EXPLAINED]

**Author:** r9n
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5778229/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5778229/)

---

# Intuition
I wanted to make sure all the bits in the array become 1, and I can only flip subarrays of length k. The challenge is to find the minimum number of flips needed or determine if it's impossible. To solve this, I needed a way to keep track of where flips start and end efficiently.

# Approach
Track Flips Efficiently: I used a difference array to manage where flips start and end. By keeping track of the flips that affect each index, I can decide if a flip is needed without re-flipping the entire subarray each time.

Iterate and Flip: As I went through each bit, I checked if it\u2019s flipped correctly. If not, and if there\u2019s space to flip a subarray of length k, I did it and updated my tracking array.

# Complexity
- Time complexity:
O(n). I only go through the array once, making it efficient.

- Space complexity:
O(n). I use a difference array of size n to track flips, which requires extra space proportional to the array size.

# Code
```csharp []
public class Solution {
    public int MinKBitFlips(int[] nums, int k) {
        int n = nums.Length;
        int flips = 0; // Total number of flips
        int currentFlips = 0; // Number of flips affecting the current index
        int[] diff = new int[n + 1]; // Difference array to track flip operations

        for (int i = 0; i < n; i++) {
            // Update current flips based on the difference array
            currentFlips += diff[i];
            
            // Determine if the current bit is flipped an odd number of times or not
            if ((nums[i] + currentFlips) % 2 == 0) {
                // If it's 0 and should be 1, flip starting at index i
                if (i + k > n) {
                    return -1; // Not possible to flip a subarray of length k
                }
                flips++;
                currentFlips++;
                // Apply the flip operation
                diff[i + k]--;
            }
        }
        return flips;
    }
}

```