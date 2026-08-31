# C# Binary Search With Space and Time Complexity

**Author:** nhquang
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/6124712/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/6124712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
We do binary search on the removable array. In each binary search iteration, we check if after we remove the characters (with index taken from removable[0] to removable[mid]) from s, p is still a subsequence of s. If it's valid subsequence, we try increasing the removable range by increasing the l pointer. Otherwise, we decrease the removable range by decreasing the r pointer.


# Complexity
- Time complexity: O((n + k)* logk) - n is the length of string s and k is the length of removable arr. (n + k) is the result of adding the removed indices to the HashSet and checking if p is a subsequence of p.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k) - k is the length of removable. In each binary search iteration we create a hashset to store all the removed indices.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaximumRemovals(string s, string p, int[] removable) {
        int l = 0, r = removable.Length - 1, rs = 0;
        while(l <= r){
            var mid = l + (r - l) / 2;
            var removed = new HashSet<int>();
            for(int i = 0; i <= mid; i++)
                removed.Add(removable[i]);
            if(IsSubsequence(s, p, removed)){
                l = mid + 1;
                rs = mid + 1;
            }
            else r = mid - 1;
        }
        return rs;
    }
    bool IsSubsequence(string s, string p, HashSet<int> removed){
        int idx = 0;
        for(int i = 0; i < s.Length && idx < p.Length; i++){
            if(removed.Contains(i) == false){
                if(p[idx] == s[i])
                    idx++;
            }
        }
        return idx == p.Length;
    }
}
```