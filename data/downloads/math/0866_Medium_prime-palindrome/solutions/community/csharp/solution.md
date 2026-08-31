# Simple C# Solution (With Explanation)

**Author:** inderbindra
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/6054060/](https://leetcode.com/problems/prime-palindrome/solutions/6054060/)

---

# Approach

The code finds the smallest prime palindrome number greater than or equal to a given integer (n . Here's how it works step by step:

1. **Edge Case for Small Values**:  
   If (n <= 2), the function directly returns `2` since it is the smallest prime palindrome.

2. **Iterative Search**:  
   Starting from (n), the function iterates to find a number that satisfies two conditions:
   - It is a **palindrome** (reads the same forward and backward).
   - It is **prime** (divisible only by 1 and itself).

3. **Optimization with Odd Numbers**:  
   - The function skips even numbers (except for (2)) since even numbers (greater than (2)) cannot be prime.

4. **Palindrome Check First**:  
   - The function first checks if a number is a palindrome using the `IsPalindrome` method. This avoids unnecessary primality checks for non-palindromic numbers.

5. **Prime Check Next**:  
   - If the number is a palindrome, the `IsPrime` function verifies its primality.

6. **Result**:  
   - Once a number satisfies both conditions, it is returned as the result.


# Complexity
- **Time complexity: O(k * sqrt(n))**
    - **IsPalindrome Function**:
        - The `IsPalindrome` function has a time complexity of (O(d)), where (d) is the number of digits in the number.
        - For a number (n), (d) is proportional to (log10(n)). This is generally very small compared to the cost of the `IsPrime` function and does not dominate the complexity.

    - **IsPrime Function**:
        - The `IsPrime` function checks divisors up to (sqrt(n)), so its complexity is ( O(sqrt(n))) for each call.

    - **PrimePalindrome Function**:
        - The `PrimePalindrome` function iterates through numbers, skipping even numbers and checking each number for both palindromic property and primality.
        - If the density of prime palindromes is very low (which it generally is), the loop could potentially iterate through many numbers, performing `IsPalindrome` and `IsPrime` checks repeatedly.

    - **Why \\( O(n \\cdot \\sqrt{n}) \\) is an Overestimate**

        - The **key factor** here is how many numbers the loop iterates through before finding a prime palindrome.
        - The loop doesn't iterate through all \\( n \\) numbers because:
        - Non-palindromic numbers are skipped as soon as `IsPalindrome` fails.
        - Many composite numbers are skipped because `IsPrime` will terminate early.
  
    - Thus, the iteration count is proportional to the sparsity of **prime palindromes**, which is far lower than the sparsity of primes themselves.

    - **Refined Time Complexity**
        - The actual complexity is closer to:
            - **Best Case**: (O(sqrt(n)))) (if (n) itself is a prime palindrome).
            - **Average Case**: Proportional to the density of prime palindromes. Empirically, this is lower than (O(n * sqrt(n)))).
            - **Worst Case**: (O(k * sqrt(n))), where (k) is the number of numbers checked before finding the result. (k) depends on the sparsity of prime palindromes.

        - While `O(n * sqrt(n)))` is a theoretical upper bound, the actual practical complexity is lower due to the filtering done by `IsPalindrome`.

- **Space Complexity: O(1)**
    - The algorithm uses a few variables and performs checks without storing large structures.

# Code
```csharp []
public class Solution {
    public int PrimePalindrome(int n) {
        int num = n;

        if(n <= 2)
        {
            return 2;
        }
        string s;
        while(true)
        {
            // This condition is added for optimization.
            if(num % 2 == 0)
            {
                num++;
                continue;
            }
            // Important is to check IsPalindrome first & then IsPrime.
            if(IsPalindrome(num) && IsPrime(num))
            {
                return num;
            }
            num++;
        }
        return num;
    }
    private bool IsPrime(int n)
    {
        int sqrt = (int)Math.Sqrt(n);
        for(int i=2; i<=sqrt; i++)
        {
            if(n % i == 0)
            {
                return false;
            }
        }
        return true;
    }

    private bool IsPalindrome(int n)
    {
        string s = n.ToString();
        int left=0, right = s.Length-1;
        while(left < right)
        {
            if(s[left] != s[right])
            {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```