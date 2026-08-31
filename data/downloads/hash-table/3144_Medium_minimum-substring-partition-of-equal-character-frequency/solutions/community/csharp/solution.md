# Easy dp

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5405703/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5405703/)

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
    public int MinimumSubstringsInPartition(string s) {
        int n= s.Length;
        bool[,] he = new bool [n,n];
        for (int i=0; i< n; i++){
            int []h= new int[26];
            for (int j=i; j<n; j++){
                h[s[j]-'a']++;
                int x=h[s[j]-'a'];
                bool check =true;
                for(int l=0; l<26; l++){
                    if(h[l]!=0&& h[l]!=x){check=false; break;}
                }
                he[i,j]=check;
            }
        }
        for (int i=0; i<n; i++){
            
        }
        int []dp= new int [n];
        for (int i=0; i< n; i++){

        dp[i]=i+1;
        }
        for (int i=1; i<n; i++){
            for (int j=i; j>=0; j--){
                if (j==0&&he[j,i] )dp[i]=1;
              else  if(he[j,i])dp[i]=Math.Min(dp[i], dp[j-1]+1);
            }
        }
        return dp[n-1];
    }
}
```