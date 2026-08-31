# dp not so hard

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/5193878/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/5193878/)

---

# Intuition for every leter we check, if it can be middle of palindrom, an after we fill table, we use dp array 
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
    public int MinCut(string s) {
        int n=s.Length;
        bool[,] h= new bool[n,n];
        if(n==1)return 0;
        for (int i=0; i< n; i++){
            h[i,i]=true;
        }

        if(s[0]==s[1])h[0,1]=true;
        for(int i=1; i<n-1; i++){
            if(s[i-1]==s[i+1]){
                int l=i-1;
                int r=i+1;
                while(l>=0 && r<n && s[l]==s[r]){
                    h[l,r]=true;
                    l--;
                    r++;
                }
               
            }
              if(s[i]==s[i+1]){
                int l=i;
                int r=i+1;
                while(l>=0 && r<n && s[l]==s[r]){
                    h[l,r]=true;
                   
                    l--;
                    r++;
                }
               
            }
        }
      

        int []ans= new int[n];
        Array.Fill(ans,5000);
        Console.WriteLine("perA");
        for (int i=0; i<n; i++){
            ans[i]=Math.Min(ans[i],i);
           if(i>0) ans[i]=Math.Min(ans[i-1]+1, ans[i]);
            for(int j=i-1; j>=0; j--){
                if(h[j,i]){if(j==0)  ans[i]=0;
               else ans[i]=Math.Min(ans[i], ans[j-1]+1);}
            }
        } 
    return ans[n-1];
    }
}
```