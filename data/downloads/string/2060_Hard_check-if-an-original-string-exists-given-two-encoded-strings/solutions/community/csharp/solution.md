# C# DP

**Author:** sree_lakshmi
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/4817918/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/4817918/)

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
    Dictionary<(int,int,int), bool> dp = new();
    int m,n;
    public bool PossiblyEquals(string s1, string s2) {
        m = s1.Length;
        n = s2.Length;
        return CheckPossibility(s1, s2, 0,0,0);
    }

    public bool CheckPossibility(string s1, string s2, int i, int j, int diff){
        if(i == m && j == n) return diff == 0;

        if(dp.ContainsKey((i,j,diff))) return dp[(i,j,diff)];
        bool isPossible = false;
        if(i <m && Char.IsDigit(s1[i])){
            isPossible = backTrackS1(s1, s2, i, j, diff);
        }
        else if(j <n && Char.IsDigit(s2[j])){
            isPossible = backTrackS2(s1, s2, i, j, diff);
        }
        else if( diff < 0 && j < n) {
            isPossible = CheckPossibility(s1, s2, i, j+1, diff+1);
        }
        else if(diff > 0 && i < m ) {
            isPossible = CheckPossibility(s1, s2, i+1, j, diff-1);
        }
        else if(diff == 0 && i< m && j <n && s1[i] == s2[j]){
            isPossible = CheckPossibility(s1, s2, i+1, j+1, diff);
        }

        dp[(i,j,diff)] = isPossible;
        return dp[(i,j,diff)];
    }

    public bool backTrackS2(string s1, string s2, int i, int j, int diff){
        int digit = 0;
        while( j< n && Char.IsDigit(s2[j])){
            digit = digit * 10 + int.Parse(s2[j].ToString());
            if(CheckPossibility(s1, s2, i, j+1, diff + digit)) return true;
            j++;
        }
        return false;
    }

    public bool backTrackS1(string s1, string s2, int i, int j, int diff){
        int digit = 0;
        while(i < m && Char.IsDigit(s1[i])){
            digit = digit * 10 + int.Parse(s1[i].ToString());
            if(CheckPossibility(s1,s2,i+1,j,diff - digit)) return true;
            i++;
        }
        return false;

    }
}
```