# Swift Solution || Worked 😒.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/3081576/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/3081576/)

---

# Explanation
1. The smallestValue() function will return the smallest value which is the sum of the prime factors of a given number.
2. It will check if the given number is prime, if it is, then it will return the number itself. If not, it will run the getPrimeFactorSum() function and return the sum of the prime factors of the given number.
3. isPrime() function will check if the given number is prime or not. It will return true if the number is prime, otherwise it will return false.
4. getFirstPrimeFactor() function will return the first prime factor of a given number.
5. getPrimeFactorSum() function will return the sum of the prime factors of a given number.
6. It will check if the given number is prime or not. If it is prime, it will return the number itself. If not, it will run the getFirstPrimeFactor() function and return the sum of the prime factors of the given number.

# Approach
1. If the number is prime, return the number.
2. If the number is not prime, get the sum of its prime factors.
3. If the sum is equal to the number, return the number.
4. Otherwise, recursively call the function on the sum.

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(1)

# Code
```
class Solution {
    func smallestValue(_ n: Int) -> Int 
{
        if(isPrime(n)) 
        {
            return n;
        }
        let sum = getPrimeFactorSum(n);
        if(sum == n) 
        {
            return n;
        }
        return smallestValue(sum);
    }
    
    func isPrime(_ n: Int) -> Bool 
{ 
        if(n == 2) 
        {
            return true
        };
        for i in 2..<Int(sqrt(Double(n)) + 1) {
            if(n % i == 0) 
            {
                return false;
            }
        }
        return true;
    }
    
    func getFirstPrimeFactor(_ n: Int) -> Int 
{ 
        if(isPrime(n)) 
        {
            return n;
        }
        for i in 2..<n {
            if(n % i == 0) 
            {
                return i;
            }
        }
        return n;
    }

    func getPrimeFactorSum(_ n: Int) -> Int 
{ 
        var sum = 0;
        var n = n;
        while(!isPrime(n)) {
            let m = getFirstPrimeFactor(n);
            n /= m;
            sum += m;
        }
        sum += n;
        return sum;
    }
    
}
```