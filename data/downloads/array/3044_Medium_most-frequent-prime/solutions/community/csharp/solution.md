# Check every number

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4746230/](https://leetcode.com/problems/most-frequent-prime/solutions/4746230/)

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
    public bool isprime(int n){
        for (int i=2; i<=(int)(Math.Sqrt(n)); i++){
            if (n%i==0) return false;
        }
        return true;
    }
    public int MostFrequentPrime(int[][] mat) {
        Dictionary<int,int> d1= new Dictionary<int,int>();
        int[][]d= new int[8][];
        d[0]=new int[]{1,0};
         d[1]=new int[]{1,1};
          d[2]=new int[]{1,-1};
           d[3]=new int[]{0,1};
            d[4]=new int[]{0,-1};
             d[5]=new int[]{-1,0};
              d[6]=new int[]{-1,1};
               d[7]=new int[]{-1,-1};
        int n=mat.Length;
        int m=mat[0].Length;
        for (int i=0; i<mat.Length; i++){
            for (int j=0; j<mat[0].Length; j++){
                int y=i, x=j;
                for(int k=0; k<8; k++){
                    int sum=mat[y][x];
                    int x1=x,y1=y;
                    while (true){
                 if (x1+d[k][1]>=0&& x1+d[k][1]<m&& y1+d[k][0]>=0&& y1+d[k][0]<n)
                      { 
                        x1+=d[k][1];y1+=d[k][0];sum=sum*10+mat[y1][x1]; 
                      if (sum>10){
                    if (isprime(sum)){if (d1.ContainsKey(sum))d1[sum]++;
                    else d1.Add(sum,1);
                    }
                     }  
                    }    
                    else break;            
                }
                }
            }
        }
        int max=0, ans=-1;
       if(d1.Count>0) foreach (int ke in d1.Keys){
            if (d1[ke]>max){max=d1[ke];ans=ke;}
            else if(d1[ke]==max){if(ke>ans)ans=ke;}
        } 
        return ans;
    }
}
```