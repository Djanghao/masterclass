# Java | Simple Detailed Explanation || ⏲ 3ms100% faster || 2 Pointer

**Author:** abhi9720
**Votes:** 18
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/1625468/](https://leetcode.com/problems/watering-plants-ii/solutions/1625468/)

---

###  \u2714 ***Solution: 2 Pointer*** | Beats 100 %, 3ms \u23F2
-----
* Alice start from i=0
* Bob start from j=n-1 index , n size of array
* Both Alice and bob move one step , Now  all cases possible in their movement
	* **Case 1 :** Alice and Bob both have sufficient water , they will water plant 
	* **Case 2 :** Either Alice or Bob water finished , then refill water can of their and `increase refill count`
	* **Case 3**: If Alice and bob reach a plant at same time , then Check which one have more water , that will watering plant , if both with equal water then Alice water 
	* Lets Make all these If-else conditions 

### Lets Code  \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB\uD83D\uDCBB
---
Do read comment for more better understanding 
```
class Solution {
    public int minimumRefill(int[] p, int ca, int cb) {                
	
        int refill= 0,oca =  ca, ocb =  cb;// let save our  orginal capacity    , needed to refill can again
        int i=0, j = p.length-1; // starting both end 
        
        while(i<=j){
		
             if(i==j){// mean both at same position
                if(ca>=cb){
                   if(p[i]>ca){
                        refill++;
                    }                         
                }
                 else{                                      
                      if(p[j]>cb){
                        refill++;                        
                    }                     
                 }
				 // no more plant left for watering so break loop 
                 break; 
            }
                       
            // first check if they have sufficient amount of water 
            // if not then refill it with orginal capacity                 
			
            if(p[i]>ca){
                refill++;
                ca =  oca;
            }            
            if(p[j]>cb){
                refill++;
                cb=  ocb;
            }
            
			// decrease consumed water 
            ca-=p[i] ;                                  
            cb-=p[j]; 
			
			// move both 
			i++;           
            j--;			                                                
        }
        return refill;                
    }
}
```
