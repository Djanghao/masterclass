# kotlin. sort and iterate

**Author:** ckp_idolol
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5667798/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5667798/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
sort and iterate

# Approach
<!-- Describe your approach to solving the problem. -->
- sort
- keep adding to sum until <= 5000 and increment count every time

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun maxNumberOfApples(weight: IntArray): Int {
        weight.sort()
        var count=0
        var sum=0
        for(wt in weight){
            sum += wt
            if(sum <= 5000) count++ else break
        }
        return count
    }
}
```