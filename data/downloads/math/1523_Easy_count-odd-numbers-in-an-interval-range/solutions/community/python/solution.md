# 🔥O(1)-TC | 🚀Super Easy Solution🚀||🔥C++🔥|| Python3 || Java || Commented

**Author:** Naman_Ag
**Votes:** 92
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/3178012/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/3178012/)

---

# Consider\uD83D\uDC4D
```
                    Please Upvote If You Find It Helpful
```
# Intuition
Intuition is very simple, as we know that the in any range the number of odd and even numbers are equal.
So, we calculate the how many numbers in the range and divide them by `2`.
And if `low` or `high` is **odd** then we have an additional `odd` number and then we return the answer.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
    Example
    low = 4, high = 10 
    Odd numbers - (5,7,9) -> (10-4)/2 = 3

    low = 4, high = 11 
    Odd numbers - (5,7,9,11) -> (11-4)/2 = 3, as high is odd, 3+1 = 4
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Consider\uD83D\uDC4D
    Thanks for upvoting\uD83D\uDE0A. 
# Code
```C++ []
class Solution {
public:
    int countOdds(int low, int high) {
        // Initialize odd with the number of even numbers between low and high.
        int odd = (high - low)/2;

        // If either low or high is odd, increment odd by 1.
        if(low % 2 || high % 2)
            odd++;

        // Return the number of odd numbers between low and high.
        return odd;
    }
};

```
```python []
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        # Initialize odd with the number of even numbers between low and high.
        odd = (high - low) // 2
        
        # If either low or high is odd, increment odd by 1.
        if low % 2 == 1 or high % 2 == 1:
            odd += 1
        
        # Return the number of odd numbers between low and high.
        return odd

```
```Javs []
class Solution {
    public int countOdds(int low, int high) {
        // Initialize odd with the number of even numbers between low and high.
        int odd = (high - low) / 2;
        
        // If either low or high is odd, increment odd by 1.
        if (low % 2 == 1 || high % 2 == 1) {
            odd++;
        }
        
        // Return the number of odd numbers between low and high.
        return odd;
    }
}

```
```
                        Give a \uD83D\uDC4D. It motivates me alot
```
Let's Connect On [Linkedin](https://www.linkedin.com/in/naman-agarwal-0551aa1aa/)
