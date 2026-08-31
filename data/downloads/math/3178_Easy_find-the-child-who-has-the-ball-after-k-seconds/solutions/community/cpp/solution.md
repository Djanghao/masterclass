# O(1) || Math

**Author:** fahad_Mubeen
**Votes:** 64
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282014/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282014/)

---

# Intuition
- Simplify the problem by understanding the cyclic nature of the ball passing. By calculating the number of complete back-and-forth trips and the remaining steps, we can determine the final position of the ball. 
- If the total number of complete trips is even, the ball continues in the forward direction.
- If odd, it reverses direction.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```C++ []
class Solution {
public:
    int numberOfChild(int n, int k) {
        n--; // Decrement n to simplify calculation (so range is now 0 to n-1)
        int rounds = k / n; // Calculate the number of complete back-and-forth trips
        int rem = k % n; // Calculate the remaining steps after the last complete trip

        if(rounds % 2 == 0) {
            // If the number of complete back-and-forth trips is even
            return rem; // The ball is passed forward from the start
        } else {
            // If the number of complete back-and-forth trips is odd
            return (n - rem); // The ball is passed backward from the end
        }
    }
};
```
```Java []
class Solution {
    public int numberOfChild(int n, int k) {
        n--; // Decrement n to simplify calculation (so range is now 0 to n-1)
        int rounds = k / n; // Calculate the number of complete back-and-forth trips
        int rem = k % n; // Calculate the remaining steps after the last complete trip

        if (rounds % 2 == 0) {
            // If the number of complete back-and-forth trips is even
            return rem; // The ball is passed forward from the start
        } else {
            // If the number of complete back-and-forth trips is odd
            return n - rem; // The ball is passed backward from the end
        }
    }
}

```
```Python3 []
class Solution:
    def numberOfChild(self, n: int, k: int) -> int:
        n -= 1  # Decrement n to simplify calculation (so range is now 0 to n-1)
        rounds = k // n  # Calculate the number of complete back-and-forth trips
        rem = k % n  # Calculate the remaining steps after the last complete trip

        if rounds % 2 == 0:
            # If the number of complete back-and-forth trips is even
            return rem  # The ball is passed forward from the start
        else:
            # If the number of complete back-and-forth trips is odd
            return n - rem  # The ball is passed backward from the end

```

