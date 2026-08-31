# easy

**Author:** CetinBudak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/5799134/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/5799134/)

---



```csharp []

public class Solution {
    public int MinNumberOperations(int[] target) {
        if(target.Length==1)
            return target[0];
        int count = target[0];

        for (int i = 1; i < target.Length; i++)
        {
            if (target[i] > target[i - 1])
                count += target[i] - target[i - 1];
        }
        return count;        
    }
}
```