# Very Easy and Understandable Solution in C#✅

**Author:** alexvenmil
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/4416806/](https://leetcode.com/problems/sum-of-unique-elements/solutions/4416806/)

---

![image.png](./images/0.png)


# Code
```
public class Solution {
    public int SumOfUnique(int[] nums) 
    {
        int sum = 0;

        for (int i = 0; i < nums.Length; i++) 
        {
            int current = nums[i];
            bool isUnique = true;

            // Check if the current element is unique
            for (int j = 0; j < nums.Length; j++) 
            {
                if (i != j && nums[j] == current) 
                {
                    // If there is another occurrence, mark as not unique
                    isUnique = false;
                    break;
                }
            }

            // If the element is unique, add it to the sum
            if (isUnique)
            {
                sum += current;
            }
        }

        return sum;
    }
}

```