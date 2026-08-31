# c# : Easy Solution

**Author:** rahul89798
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/3596121/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/3596121/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int[] GetStrongest(int[] arr, int k) {
        Array.Sort(arr);
        var ans = new int[k];
        var median = arr[(arr.Length - 1) / 2];

        Array.Sort(arr, (a, b) => {
            var temp1 = Math.Abs(a - median);
            var temp2 = Math.Abs(b - median);
            if(temp1 == temp2)
                return b.CompareTo(a);
            
            return temp2.CompareTo(temp1);
        });

        for(int i = 0; i < k; i++)
            ans[i] = arr[i];

        return ans;
    }
}
```