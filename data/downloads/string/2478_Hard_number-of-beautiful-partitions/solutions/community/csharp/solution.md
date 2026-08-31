# C# recursive + memo

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2834195/](https://leetcode.com/problems/number-of-beautiful-partitions/solutions/2834195/)

---

# Intuition


# Approach
 

# Complexity
- Time complexity:
 O(N*N*N)

- Space complexity:
 
O(N*K)

# Code
```
public class Solution {
    int M = (int)(1e9+7);
    HashSet<char> Prime = new (){'2','3','5','7'};
    int[,] DP;
    
    public int BeautifulPartitions(string s, int k, int minLength) {
        int res = 0;
        if(!Prime.Contains(s[0]) || s.Length<k*minLength || Prime.Contains(s[s.Length-1])) return 0;
        DP = new int[s.Length,k+1];
        for(int i=0;i<s.Length;i++)
        {
            for(int j=0;j<k+1;j++)
            {
                DP[i,j] = -1;
            }
            DP[i,0] = 0;
        }
        return B(s,0,k,minLength);
    }
    
    private int B(string s, int start, int k, int m)
    {
        if(DP[start,k]==-1)
        {
           
        if(s.Length-start<k*m)
        {
            DP[start,k] = 0;
        }
        else if(k==1)
        {
            DP[start,k] = 1;
        } 
        else
        {
        int sl = (k-1) * m;
        int res = 0;
        for(int i=m-1; i<s.Length-sl-start; i++)
        {
            if(start+i+1>=s.Length)
                break;
            if(!Prime.Contains(s[start+i]) && Prime.Contains(s[start+i+1]))
            {
                res += (B(s,start+i+1,k-1,m) % M);
                res = res % M;
            }
        }
             DP[start,k] = res;
        }
        }
        return DP[start,k];
    }
}
```