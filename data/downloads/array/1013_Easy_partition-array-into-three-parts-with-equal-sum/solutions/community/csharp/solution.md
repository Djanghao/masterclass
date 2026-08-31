# C# Easy to understand solution | Beats Runtime 60% Memory 39%

**Author:** Timaku
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/3750862/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/3750862/)

---

![image.png](./images/0.png)

# Approach
First, we validate that the sum of the array can be divided by three. Then, we calculate the average of the array and iterate through it to count how many times we can split the array such that the sum of each subarray is equal to the average.
# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public bool CanThreePartsEqualSum(int[] arr) {
        if (arr.Sum() % 3 != 0)
        {
            return false;
        }

        int sum = 0;
        int counter = 0;
        int average = arr.Sum() / 3;
        foreach (int number in arr)
        {
            sum += number;
            if (sum == average)
            {
                counter++;
                sum = 0;
            }
        }

        return counter >= 3;
    }
}
```