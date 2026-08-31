# Easy Kotlin Solution. TC O(n) SC O(1) 100% Runtime + 100% Memory Usage

**Author:** MarluxGitHub
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/1571668/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/1571668/)

---

```
class Solution {
    fun minStartValue(nums: IntArray): Int {
        var response = 1
        var sum = response

        for(num in nums) {
            sum += num
            if(sum < 1) {
                // compute diff if lesser then 1 und update response
                response += 1 - sum
                // add diff to sum to continue loop
                sum += 1 - sum
            }
        }

        return response
    }
}
```