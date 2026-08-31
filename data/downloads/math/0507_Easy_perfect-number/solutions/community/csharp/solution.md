# ✔C# Easy to understand solution | Beats Runtime 100% Memory 65%

**Author:** Timaku
**Votes:** 1
**Link:** [https://leetcode.com/problems/perfect-number/solutions/3910219/](https://leetcode.com/problems/perfect-number/solutions/3910219/)

---

![image.png](./images/0.png)


# Approach
The GetSumOfDivisors method takes an integer num as input and returns the sum of its proper divisors.
It uses a loop to iterate over all numbers from 1 to the square root of num. For each number i, it checks if num is divisible by i using the modulo operator (%).
If num is divisible by i, then both i and num/i are divisors of num, so they are added to the sum.
Finally, the sum of divisors is returned, but since the input number itself is also included in the sum, it is subtracted from the sum before returning.

# Complexity
- Time complexity:
$$O(sqrt(n))$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public bool CheckPerfectNumber(int num) {
        return GetSumOfDivisors(num) == num;
    }

    private static int GetSumOfDivisors(int num)
    {
        int sum = 0;
        for (int i = 1; i <= Math.Sqrt(num); i++)
        {
            if (num % i == 0)
            {
                sum += i;

                if (i != num / i)
                {
                    sum += num / i;
                }
            }
        }

        return sum - num;
    }
}
```