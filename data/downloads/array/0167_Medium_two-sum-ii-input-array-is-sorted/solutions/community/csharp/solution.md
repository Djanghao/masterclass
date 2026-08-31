# C#, 5 lines of code, easy one, Faster than 98%

**Author:** komiljon_aliev
**Votes:** 10
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1645664/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/1645664/)

---

```
public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int min = 0, max = numbers.Length - 1, temp = 0;
        while((numbers[min] + numbers[max]) != target)
            if((numbers[min] + numbers[max]) > target) max--;
            else min++;            
        return new int[]{min +1, max+1};
    }
}
```