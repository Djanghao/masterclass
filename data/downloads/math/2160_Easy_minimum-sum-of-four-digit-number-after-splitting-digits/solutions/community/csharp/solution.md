# C# easy solution.

**Author:** aloneguy
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/3280424/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/3280424/)

---


# Complexity
- Time complexity: 26 ms.Beats 62.7% of other solutions.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 26.5 Mb.Beats 92.7% of other solutions.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumSum(int num) {
      int[] arr=new int[4];
      int i=0;
      while(i<4){
      arr[i]=num%10;
      num/=10;
      i++;
      }  
      Array.Sort(arr);
      return (arr[0]+arr[1])*10+arr[3]+arr[2];
    }
}
```