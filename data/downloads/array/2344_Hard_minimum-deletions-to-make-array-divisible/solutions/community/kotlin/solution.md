# Java/Kotlin GCD explained

**Author:** awawa
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2292984/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/2292984/)

---

### Solution
The challenge basically asks us to find the smallest number from `nums` such that it divides all numbers from `numsDivide`. Using Euklidean algorithm we can easily find such number that it divides all numbers in `numsDivide` - GCD. Now as we have GCD of all numbers in `numsDivide` we can sort `nums` and search for the smallest index `i` such that `GCD % nums[i] == 0`. If there is such index we return it, otherwise we return `-1`.

### Proof
GCD is the greatest number such that all numbers in `numsDivide` are divisible by it. So there are no bigger numbers, but there might be smaller ones. Now there is a property that if `a % b == 0` and `b % c == 0` then `a % c == 0`. That means that if there is a number that divides GCD, then this number also divides all numbers in `numsDivide`. 

Also, all numbers that are smaller than GCD and divide all numbers in `numsDivide` must divide GCD. To prove that suppose that there is number `a` that divides all numbers in `numsDivide` but does not divide GCD. Then because all numbers are divisible by `a` and GCD, then they must be divisible by `a * GCD`. But `a * GCD` is greater than GCD which is a contradiction because GCD is the greatest number that divides all numbers in `numsDivide`.

### Java
```Java
class Solution {
    public int minOperations(int[] nums, int[] numsDivide) {
        Arrays.sort(nums);
        
        int g = numsDivide[0];
        for (int num: numsDivide) g = gcd(num, g);
        for (int i = 0; i < nums.length; i++) if (g % nums[i] == 0) return i;
        return -1;
    }
    
    private int gcd(int a, int b) {
        if (a == 0) return b;
        if (b == 0) return a;
        
        while (a != 0) {
            int t = a;
            a = b % a;
            b = t;
        }
        
        return b;
    }
}
```

### Kotlin
```Kotlin
class Solution {
    fun minOperations(nums: IntArray, numsDivide: IntArray): Int {
        nums.sort()
        
        var g = numsDivide[0]
        for (num in numsDivide) g = gcd(num, g)
        
        for (i in nums.indices) if (g % nums[i] == 0) return i
        return -1
    }
    
    private fun gcd(num1: Int, num2: Int): Int {
        var a = minOf(num1, num2)
        var b = maxOf(num1, num2)
        while (a != 0) {
            val t = a
            a = b % a
            b = t
        }
        return b
    }
}
```