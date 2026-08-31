# C# solution

**Author:** Dmitriy-Maksimov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/6025033/](https://leetcode.com/problems/maximum-prime-difference/solutions/6025033/)

---

# Approach
- Find index of first prime number
- Find index of last prime number
- Return the difference

## Optimization
Because all elements `1 <= nums[i] <= 100` we can use `HashSet` to check is a number is prime.
In general case we should use 
```csharp []
private bool IsPrime(int num)
{
    if (num < 2)
    {
        return false;
    }
    
    for (var i = 2; i <= Math.Sqrt(num); i++)
    {
        if (num % i == 0)
        {
            return false;
        }
    }
    
    return true;
}
```


# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```csharp []
public class Solution
{
    private readonly HashSet<int> _primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    public int MaximumPrimeDifference(int[] nums)
    {
        var firstPrimeIndex = 0;
        var lastPrimeIndex = nums.Length - 1;

        while (!IsPrime(nums[firstPrimeIndex]))
        {
            firstPrimeIndex++;
        }

        while (!IsPrime(nums[lastPrimeIndex]))
        {
            lastPrimeIndex--;
        }

        return lastPrimeIndex - firstPrimeIndex;
    }

    private bool IsPrime(int num)
    {
        return _primes.Contains(num);
    }
}
```