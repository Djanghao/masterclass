# Easy

**Author:** mahmedAhmedAbdelfattah
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/6074570/](https://leetcode.com/problems/decode-xored-array/solutions/6074570/)

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
```csharp []
public class Solution {
    public int[] Decode(int[] encoded, int first) {
        int[] ans= new int[encoded.Length+1];
        ans[0]=first;

        for(int i=0;i<ans.Length-1;i++)
        {
            ans[i+1]=ans[i]^encoded[i];

        }
            return ans;        
    }
}
```