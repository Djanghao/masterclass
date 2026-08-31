# java | Two Line code || 100% faster

**Author:** abhi9720
**Votes:** 61
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/1615855/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/1615855/)

---

**Kepoint** \uD83E\uDD14- Here In single linked list we can only traverse from start to end , binary last bit is present at tail of linked list .
* We will use **Left Shift Operator**
##### DONT SEE CODE - JUST READ EXAMPLE 
**Example:**
head = [1,0,1,1]
```
	              ->    Intialize ans = 0
				  operation  => ans = ( ans<<1) + head.val
				  
                              1           0            1            1
   pointer       			  ^
							  ans = (0<<1) + 1
							  
							=> ans  =  1*(2^0) 
-----------------------------------------------------------------------------------
				-> To add 0 we will left shift ans till now by 1 position
                              1           0            1            1
     pointer        			          ^
							  ans =  (1<<1)+0	= 		2	  
							  
						   => ans  =  1*(2^1) +  0*(2^1)
------------------------------------------------------------------------------------
				-> Again to add 1 shift ans till now by 1 position
                              1           0            1           1
	         pointer        			               ^
							  ans =  	(2<<1)+1 = 4+1=5
							  
						=> ans  =  1*(2^2) +  0*(2^1)  +  1*(2^0)
------------------------------------------------------------------------------------
			-> Again to add 1 shift ans till now by 1 position
                              1           0            1             1
		pointer         			                                 ^  
							  ans =  	(5<<1)+1 = 10+1 =  11
							  							  							  
               	  => ans  =  1*(2^3) +  0*(2^2)  +  1*(2^1) +   1*(2^0)							  

```

---  
### Code \uD83D\uDCBB\uD83D\uDC4D\uD83C\uDFFB
***

```
class Solution {
    public int getDecimalValue(ListNode head) {     
        int ans = 0;
        for(ListNode temp =  head;temp!=null;temp=temp.next){
            ans =  (ans<<1)+temp.val;
        }                
        return ans;        
    }
}
```


### \uD83E\uDD84Upvote if it help You