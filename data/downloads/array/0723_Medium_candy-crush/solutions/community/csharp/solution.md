# Easy simulation

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/candy-crush/solutions/5562988/](https://leetcode.com/problems/candy-crush/solutions/5562988/)

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
    public int[][] CandyCrush(int[][] b) {
        bool check =true; 
        while (check){
            check=false;
             int k=1;
            int [,]m= new int[ b.Length, b[0].Length];
            for (int i=0;i< b.Length; i++ ){              
                for(int j=0; j< b[0].Length-2; j+=k){
                      k=1;
                  while(b[i][j]!=0 && j+k< b[0].Length && b[i][j]==b[i][j+k]){
                    k++;
                  }
                  if(k>=3){ check=true;
                    for(int l=0;  l<k; l++){
                    m[i,j+l]=1;
                  }
                  }
            }
        }       
        for(int j=0; j< b[0].Length; j++){
            k=1;
         for (int i=0;i< b.Length-2; i+=k ){  
              k=1;          
              while(b[i][j]!=0 && i+k< b.Length && b[i][j]==b[i+k][j]){
                    k++;
                  }
                  if(k>=3){ check=true;
                    for(int l=0;  l<k; l++){
                    m[i+l,j]=1;
                  }
                  }
            }
        }         
         int [,]m1= new int[ b.Length, b[0].Length];
         for (int i=0; i<b.Length; i++ ){            
            for(int j=0; j<b[0].Length;j++){
            m1[i,j]+=m[i,j] ;
            }           
        }

        for (int i=0; i<b[0].Length; i++ ){            
            for(int j=b.Length-2;j>=0; j--){
            m[j,i]+=m[j+1,i] ;
            }           
        }
        for(int j=0; j<b[0].Length; j++){
       for (int i=b.Length-1; i>=0; i--){
        if(m1[i, j]==1)continue;
        else if (m[i,j]!=0)b[i+m[i,j]][j]=b[i][j];
       }      
       for (int i=0; i<m[0,j]; i++) {
        b[i][j]=0;
       } 
        }
        }
       return b; 
    }
}
```