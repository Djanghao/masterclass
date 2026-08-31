# Simple Backtrack C# Solution with clear explanation

**Author:** thinhpham4903
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5403749/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5403749/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- This Problem is quite simple once you write down all the possible cases
# Approach
<!-- Describe your approach to solving the problem. -->
- I don't think the code is simple enough to understand, sooo. Just read it.
- The way I come up with the solution is that
1. Write down all the possible cases with all the constrants from the problems
2. Find down which pattern is the most promissing to answer to problems
3. Find the way meet the requirements (I use StringBuilder and cur to keep track of the current string I need to avoid)

* There your go, hope you guys can give me upvotes 
# Complexity
- Time complexity: x
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: x
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C#
public class Solution {
    public string GetHappyString(int n, int k) {
        List<string> l = new List<string>();
        string[] arr= new string[]{"a","b","c"};

        StringBuilder str = new StringBuilder();
        void BackTrack(StringBuilder sb, string cur){
            if(sb.Length == n){
                l.Add(sb.ToString());
                return;
            }
           

            foreach(string s in arr){
                if(s != cur){
                    sb.Append(s);
                    BackTrack(sb, s);
                    sb.Length--;
                }
            }
        }
        BackTrack(str, "");
        
        if(l.Count >= k){
            return l[k-1];
        }
        return "";
    }
}
```