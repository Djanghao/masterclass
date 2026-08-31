# O(1) space, O(n) kotlin simple solution with explanation

**Author:** justherefortesting
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/4453673/](https://leetcode.com/problems/find-missing-observations/solutions/4453673/)

---

# Intuition
sum would be (size of array + n) * mean
# Approach
1. Calculate sum
2. Reduce from sum existing numbers in array
3. If resultant sum / n is greater than 6 or less than 1 (As on dice we have 1-6, there is no >6 or 0 or negative number), no combination is possible, return empty array
3. Keep dividing sum by n, reducing n at every step and filling sum / n for every array element
4. Return array

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
class Solution {
    fun missingRolls(rolls: IntArray, mean: Int, n: Int): IntArray {
        
        var sum = mean * (rolls.size + n)
println(sum)
        var ans = IntArray(n)

        for (roll in rolls) {
            sum -= roll
        }
        
        var fill = n
        while (fill > 0) {
            val reduction = sum / fill
            println(reduction)
            if (reduction > 6 || reduction < 1) {
                return IntArray(0)
            }
            ans[n - fill] = reduction
            sum -= reduction
            fill--
        }

        return ans
    }
}
```