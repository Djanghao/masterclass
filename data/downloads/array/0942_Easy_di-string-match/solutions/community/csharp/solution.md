# C# solution in  O(n) time complexity and O(1) space complexity

**Author:** Pirhana1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/di-string-match/solutions/5166172/](https://leetcode.com/problems/di-string-match/solutions/5166172/)

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
public class Solution {
    public int[] DiStringMatch(string s) {
        int[] list = new int[s.Length+1];
        int left=0;
        int right=s.Length;
        int i=0;
        foreach(char c in s)
        {
            if(c=='I')
            {
                list[i++]=left++;
            }
            else
            {
                list[i++]=right--;
            }
        }
        list[s.Length]=left;
        return list;
    }
}
```