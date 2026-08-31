# Code  Testcase  Test Result Test Result 2729. Check if The Number is Fascinating

**Author:** ruhul1995
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5117048/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/5117048/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun isFascinating(n: Int): Boolean {
        /*
            myObservation
            1. Follow the instruction and concatenate n + 2*n + 3*n
            2. Check if it contains all no's from 1 to 9 and shouldn't contain any zero.
            3. If step 2 satisfies return true else false.
        */

        // Logic Building
        //step 1
        var ans = n.toString() + (2 * n).toString() + (3 * n).toString()
        //println("ans = $ans")

        //Sorting the ans string variable to check if its is order format shown below
        //step 2
        var order = "123456789"
        var orderMap = order.mapIndexed {index, char -> char to index}.toMap()
        println("orderMap = $orderMap")
        var sortedAns = ans.toCharArray()
                        .sortedBy { orderMap.getOrDefault(it, Int.MAX_VALUE) }
                        .joinToString("")
        
        //step 3
        if ( sortedAns.equals(order))
        {
            return true
        }
        return false
    }
}
```