# c# hashset + count

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/3748066/](https://leetcode.com/problems/number-of-black-blocks/solutions/3748066/)

---


```
public class Solution {
    public long[] CountBlackBlocks(int m, int n, int[][] C) {
        
        HashSet<long> B = new ();
        
        foreach(var c in C)
        {
            B.Add(c[0] * 100000L + c[1]);
        }
        
        
        long[] res = new long[5]{0,0,0,0,0};
        
        
        long total =   (m-1L)*(n-1L);
        
        
        foreach(var c in C)
        {
            long nr = (c[0]+1)*100000L;
            long pr = (c[0]-1)*100000L;
            long cr = (c[0])*100000L;
            //left cornor
            if(c[0]!=m-1 && c[1]!=n-1) 
            {
                int b = 1;
                
                if(B.Contains(nr + c[1]+1))
                    b++;
                if(B.Contains(cr + c[1]+1))
                    b++;
                if(B.Contains(nr + c[1]))
                    b++;
               res[b]++; 
            }
            //right cornor
            if(c[0]!=m-1 && c[1]!=0 && !B.Contains(cr+c[1]-1)) 
            {
                int b = 1;
                if(B.Contains(nr  + c[1]-1))
                    b++;
                if(B.Contains(nr + c[1]))
                    b++;
                res[b]++; 
            }
             //left bOTTOM
            if(c[0]!=0 && c[1]!=n-1 && !B.Contains(pr+c[1]+1) && !B.Contains(pr+c[1])) 
            {
                int b = 1;
                if(B.Contains(cr  + c[1]+1))
                    b++;
                res[b]++; 
            }
             //right bOTTOM
            if(c[0]!=0 && c[1]!=0 && !B.Contains(pr+c[1]-1) && !B.Contains(pr+c[1]) && !B.Contains(cr+c[1]-1)) 
            {
                res[1]++; 
            }
            
            
        }
        
        res[0] = total - res[1] - res[2] -res[3] - res[4];
            
        return res;
        
       
        

    }
}
```