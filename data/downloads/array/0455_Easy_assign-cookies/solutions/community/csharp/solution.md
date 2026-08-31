# C# Solution for Assign Cookies Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4485331/](https://leetcode.com/problems/assign-cookies/solutions/4485331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This approach uses a two-pointer technique without requiring nested loops or additional comparisons, resulting in an optimized solution that still achieves the goal of maximizing the number of content children.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sort both arrays g (children\u2019s greed factors) and s (cookie sizes) in ascending order.
2.	Initialize contentChildren to 0, childIdx to track the index of the current child, and cookieIdx to track the index of the current cookie.
3.	Use a while loop to iterate through the arrays while there are still children and cookies to consider.
4.	Compare the size of the current cookie (s[cookieIdx]) with the current child\u2019s greed factor (g[childIdx]).
5.	If the size of the cookie is sufficient for the child\u2019s greed factor (s[cookieIdx] >= g[childIdx]), increment the count of content children (contentChildren) and move to the next child (childIdx++).
6.	Move to the next cookie (cookieIdx++) regardless of whether it was assigned to a child or not.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(g log g + s log s + max(g, s)) due to the initial sorting of arrays g and s. However, the actual processing loop has a complexity of O(max(g, s)), where g and s represent the lengths of arrays g and s respectively.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity remains O(1) as it doesn\u2019t utilize any extra space scaling with the input sizes.

# Code
```
public class Solution {
    public int FindContentChildren(int[] g, int[] s) {
        Array.Sort(g);
        Array.Sort(s);
        
        int contentChildren = 0;
        int childIdx = 0;
        int cookieIdx = 0;
        
        while (childIdx < g.Length && cookieIdx < s.Length) {
            if (s[cookieIdx] >= g[childIdx]) {
                contentChildren++;
                childIdx++;
            }
            cookieIdx++;
        }
        
        return contentChildren;
    }
}
```