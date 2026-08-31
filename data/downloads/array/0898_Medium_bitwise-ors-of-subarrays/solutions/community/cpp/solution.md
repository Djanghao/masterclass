# C++ || Fully Explained Solution || Done after reading a lot of solutions || Check it

**Author:** KR_SK_01_In
**Votes:** 15
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/2544910/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/2544910/)

---

```
 /*
     
    
     Time complexity of this solution -> 
     
      see in the 2nd loop that comparision of -> while(j>=0 && curr_OR != prev_OR)
      
      we will do at most 32 times , 
      
       suppose at every time something is changing
      
       32 bits are there , in the OR having done at max 32 times , 
       
       both OR's will be equal 
       
       00000000000000000000000000.. 32times
       
       in worst case any particular bit is changing , sop loop will go till 
       
       the time all become ones , now there is no bit change in prev_OR & curr_OR
       
       So-> O(n * 32) this constant may vary.
       
       This I understands from studying many solutions 
       
       Your suggestions will be appreciated.
     
     */
    
    int subarrayBitwiseORs(vector<int>& arr) {
        
        int n=arr.size();
        
        // Intuition -> we will take the consider ith element as the end of the 
        
        // subarray , Now we will take prev_or -> checking  the OR from i-1th value 
        
        // to index j(backward direction), where the OR of the (i-1th to jth index) & (ith to jth index)
        
        // we have to check until both equals , till that element that subarray
        
        // will make its effect.
        
        set<int> st;
        
        for(int i=0;i<arr.size();i++)
        {
            // take this element in curr_OR , now calculate OR value in backward 
            
            // direction till that both curr_OR & prev_OR equals 
            
            // Why we consider till only that -> because curr_subarray considering 
            
            // arr[i] , then give same OR value which is previously calculated 
            
            // from arr[i-1] , so no new subarray value will be founded.
            
            
            int curr_OR=arr[i];
            int prev_OR=0;
            int j=i-1;
            st.insert(curr_OR);
            
            while(j>=0 && curr_OR != prev_OR)
            {
                curr_OR= curr_OR | arr[j];
                prev_OR= prev_OR | arr[j];
                st.insert(curr_OR);
                j--;
            }
        }
        
        return (int) st.size();
        
    }
};


```

## If You find this solution helpful , please upvote!!!