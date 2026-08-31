# faster then 98 percent solutions.

**Author:** bhaskarudit8
**Votes:** 1
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/5529233/](https://leetcode.com/problems/arranging-coins/solutions/5529233/)

---



![Screenshot 2024-07-24 at 8.53.36\u202FPM.png](./images/0.png)
<!-- Describe your first thoughts on how to solve this problem. -->
# Intuition
Mathematical Problem based on the sum of the first k natural numbers formula.
Binary Search optimizes finding the largest k within [1, n] range efficiently.
# Approach
1. Use Binary Search to find the maximum number of complete rows that can be formed with n coins.
2. Define Search Space from 1 to n.
3. Calculate Midpoint (mid) in each iteration to estimate the number of rows.
4. Apply Sum Formula sum = mid * (mid + 1) / 2 to find total coins needed for mid rows.
5. Adjust Search Range based on comparison between sum and n.
6. Loop until start exceeds end to find the solution.


# Complexity
- Time complexity:$$O(logn)$$

- Space complexity:$$O(1)$$

# Code
```
class Solution {
    fun arrangeCoins(n: Int): Int {
        var n = n.toLong()
        var start = 1.toLong()
        var end = n
      
        
        while(start <= end){
            var mid = start+ (end - start) / 2
            var sum = mid*(mid+1)/2

            if(sum == n) return mid.toInt()
            else if(sum > n) end = mid - 1
            else start = mid + 1

        }
        return end.toInt()
    }
}

/**
s = 1 , e = 2 ,n = 2, m = 1 ,sum = 1
s = 2, e = 3 , n =8, m = 2, sum = 3 
s = 3, e =3


s = 0 , e = 
 */
```