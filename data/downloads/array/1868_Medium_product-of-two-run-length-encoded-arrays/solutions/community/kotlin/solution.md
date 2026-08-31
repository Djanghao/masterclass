# Easy kotlin solution

**Author:** peter3579e
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/5357974/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/5357974/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    /*
     encoded1 = [[1,0],[2,0],[3,2]], encoded2 = [[2,0],[3,2]]
                              ^                          ^
    ans([2,3][6,1])
     */
    fun findRLEArray(encoded1: Array<IntArray>, encoded2: Array<IntArray>): List<List<Int>> {

        var pointer1 = 0
        var pointer2 = 0
        val ans = mutableListOf<List<Int>>()

        while(pointer1 < encoded1.size && pointer2 < encoded2.size) {
            val arr1 = encoded1[pointer1]
            val arr2 = encoded2[pointer2]

            val take = minOf(arr1[1],arr2[1]) // 2
            val product = arr1[0] * arr2[0] // 6

            if(ans.isNotEmpty() && product == ans.last()[0]) {
                val top = ans.removeLast()
                ans.add(listOf(product,top[1] + take))
            } else {
                ans.add(listOf(product,take))
            }

            
            encoded1[pointer1][1] = encoded1[pointer1][1] - take
            encoded2[pointer2][1] = encoded2[pointer2][1] - take   

            if(encoded1[pointer1][1] == 0) pointer1++
            if(encoded2[pointer2][1] == 0) pointer2++
        }
        

        return ans
    }
}
```