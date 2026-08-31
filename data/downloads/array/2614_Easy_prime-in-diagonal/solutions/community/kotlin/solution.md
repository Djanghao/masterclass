# Easy + Clean -> Solution [Python3, Java, Kotlin]

**Author:** KmrVikas
**Votes:** 5
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3395755/](https://leetcode.com/problems/prime-in-diagonal/solutions/3395755/)

---

Java
```
class Solution {
    public int diagonalPrime(int[][] nums) {
        int ans = 0;
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            if (isPrime(nums[i][i])) {
                ans = Math.max(ans, nums[i][i]);
            }
        }
        for (int i = n - 1; i >= 0; i--) {
            if (isPrime(nums[n - i - 1][i])) {
                ans = Math.max(ans, nums[n - i - 1][i]);
            }
        }
        return ans;
    }
    
    private boolean isPrime(int n) {
        // Check if the number is less than or equal to 1, return false if it is
        if (n <= 1) {
            return false;
        }
        // Loop through all numbers from 2 to
        // the square root of n (rounded down to the nearest integer)
        for (int i = 2; i <= Math.sqrt(n); i++) {
            // If n is divisible by any of these numbers, return false
            if (n % i == 0) {
                return false;
            }
        }
        // If n is not divisible by any of these numbers, return true
        return true;
    }
}

```

Python3
```
class Solution:
    def diagonalPrime(self, nums: List[List[int]]) -> int:
        ans = 0
        
        for i in range(len(nums)):
                    if (self.isPrime(nums[i][i])):
                        ans = max(ans, nums[i][i])
        for i in range(len(nums)-1,-1,-1):
             if (self.isPrime( nums[len(nums) - i -1][i])):
                        ans = max(ans, nums[len(nums) - i -1][i])
        return ans
    
    def isPrime(self,n):
        # Check if the number is less than or equal to 1, return False if it is
        if n <= 1:
            return False
        # Loop through all numbers from 2 to
        # the square root of n (rounded down to the nearest integer)
        for i in range(2, int(n**0.5)+1):
            # If n is divisible by any of these numbers, return False
            if n % i == 0:
                return False
        # If n is not divisible by any of these numbers, return True
        return True
``

Kotlin
``
class Solution {
    fun diagonalPrime(nums: Array<IntArray>): Int {
        var ans = 0
        val n = nums.size
        for (i in 0 until n) {
            if (isPrime(nums[i][i])) {
                ans = maxOf(ans, nums[i][i])
            }
        }
        for (i in n - 1 downTo 0) {
            if (isPrime(nums[n - i - 1][i])) {
                ans = maxOf(ans, nums[n - i - 1][i])
            }
        }
        return ans
    }
	
   private fun isPrime(n: Int): Boolean {
        // Check if the number is less than or equal to 1, return false if it is
        if (n <= 1) {
            return false
        }
        // Loop through all numbers from 2 to
        // the square root of n (rounded down to the nearest integer)
        for (i in 2..Math.sqrt(n.toDouble()).toInt()) {
            // If n is divisible by any of these numbers, return false
            if (n % i == 0) {
                return false
            }
        }
        // If n is not divisible by any of these numbers, return true
        return true
    }
}



                
                
        
```