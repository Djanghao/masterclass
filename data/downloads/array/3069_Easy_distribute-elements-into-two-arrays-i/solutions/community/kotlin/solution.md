# Kotlin O(n) solution using integer array only

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5124899/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/5124899/)

---

![Screenshot 2024-05-07 171708.png](./images/0.png)

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun resultArray(nums: IntArray): IntArray {
        val array1 = IntArray(nums.size)
        val array2 = IntArray(nums.size)
        array1[0] = nums[0]
        array2[0] = nums[1]

        var j = 0
        var k = 0
        for(i in 2 until nums.size) {
            val num = nums[i]
            if(array1[j] > array2[k]) {
                array1[++j] = num
            } else {
                array2[++k] = num
            }
        }

        j++
        k = 0
        for (i in j until nums.size) {
            array1[i] = array2[k++]
        }

        return array1
    }
}
```