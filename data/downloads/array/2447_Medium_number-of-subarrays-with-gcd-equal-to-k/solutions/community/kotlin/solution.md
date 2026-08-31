# Kotlin solution

**Author:** uvc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/5051718/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/5051718/)

---



# Code
```
class Solution {
    fun subarrayGCD(nums: IntArray, k: Int): Int {
        var count = 0
        for(l in 0..<nums.size){
            for(r in l..<nums.size){
                val currgcd = getGCD(nums.slice(l..r))
                if(currgcd == k) count++
                else if(currgcd < k) break
            }
        }
        return count
    }

    fun getGCD(numbers: List<Int>): Int {
        if (numbers.size == 0) return -1
        var result = numbers[0]
        for (i in 1 until numbers.size) {
            var num1 = result
            var num2 = numbers[i]
            while (num2 != 0) {
                val temp = num2
                num2 = num1 % num2
                num1 = temp
            }
            result = num1
        }
        return result
    }
}
```