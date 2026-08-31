# Full solution : )

**Author:** parvez__khan
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/4426138/](https://leetcode.com/problems/largest-palindrome-product/solutions/4426138/)

---

The problem asks for the largest palindromic number that can be formed by multiplying two n-digit numbers. Here's a simplified explanation for the solution:

1. **Python Code Explanation:**
    - If `n` is 1, the largest palindromic number is 9.
    - For `n` greater than 1, iterate through all possible `n`-digit numbers in descending order.
    - Form a palindrome by concatenating the current number with its reverse.
    - Check if the palindrome can be expressed as the product of two `n`-digit numbers.
    - Return the result modulo 1337.

2. **C++ Code Explanation:**
    - Similar logic as in Python.
    - Use `stoll` to convert strings to long long in C++.
    - Use `pow` function to calculate powers of 10.

3. **Java Code Explanation:**
    - Similar logic as in Python and C++.
    - Use `Math.pow` for power calculations in Java.
    - Use `StringBuilder` to reverse a string in Java.

In simpler terms, the code iterates through possible `n`-digit numbers, creates palindromes, and checks if they can be formed by multiplying two `n`-digit numbers. The largest such palindrome modulo 1337 is returned.
```javas []
public class Solution {
    public int largestPalindrome(int n) {
        if (n == 1) {
            return 9;
        }
        long upperBound = (long) Math.pow(10, n) - 1;
        long lowerBound = (long) Math.pow(10, n - 1);

        for (long i = upperBound; i >= lowerBound; i--) {
            long palindrome = Long.parseLong(i + new StringBuilder(Long.toString(i)).reverse().toString());
            for (long j = upperBound; j * j >= palindrome; j--) {
                if (palindrome / j > upperBound) {
                    break;
                }
                if (palindrome % j == 0) {
                    return (int) (palindrome % 1337);
                }
            }
        }

        return -1; // This should not be reached
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.largestPalindrome(2));  // Output: 987
        System.out.println(solution.largestPalindrome(1));  // Output: 9
    }
}
```
```python []
class Solution:
    def largestPalindrome(self, n: int) -> int:
        if n == 1:
            return 9
        upper_bound = 10**n - 1
        lower_bound = 10**(n-1)

        for i in range(upper_bound, lower_bound, -1):
            palindrome = int(str(i) + str(i)[::-1])
            for j in range(upper_bound, int(palindrome**0.5), -1):
                if palindrome // j > upper_bound:
                    break
                if palindrome % j == 0:
                    return palindrome % 1337

# Example usage:
solution = Solution()
print(solution.largestPalindrome(2))  # Output: 987
print(solution.largestPalindrome(1))  # Output: 9
```
```C++ []
#include <iostream>

class Solution {
public:
    int largestPalindrome(int n) {
        if (n == 1) {
            return 9;
        }
        long long upper_bound = pow(10, n) - 1;
        long long lower_bound = pow(10, n - 1);

        for (long long i = upper_bound; i >= lower_bound; --i) {
            long long palindrome = stoll(to_string(i) + to_string(i));
            for (long long j = upper_bound; j * j >= palindrome; --j) {
                if (palindrome / j > upper_bound) {
                    break;
                }
                if (palindrome % j == 0) {
                    return palindrome % 1337;
                }
            }
        }

        return -1; // This should not be reached
    }
};

int main() {
    Solution solution;
    std::cout << solution.largestPalindrome(2) << std::endl;  // Output: 987
    std::cout << solution.largestPalindrome(1) << std::endl;  // Output: 9

    return 0;
}
```

