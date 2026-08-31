# 🔥 O(N) | No Multiset, Deque, set etc. + Similar Questions 🔥🔥🔥

**Author:** piyushjaiswal380
**Votes:** 101
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3706927/](https://leetcode.com/problems/continuous-subarrays/solutions/3706927/)

---

# Intution : 
Why Think about sliding window, If question ask about subarray or **number of subarray**  then there is mostly chance of using sliding window...

Let say the array **A** is    **[a,b,c,d]**

According to question every element in subarray have a absolute difference between [0,2].
Let your subarray is **[a]**
1. So, new element added must ranges from **l =**  **a-2** to **r =**  **a+2** 
1. If you add new element **b** in your subarray then **b** is added only if **b** ranges from **(l,r)**
2. if **b** ranges from **(l,r)** then new **l = max(l,b-2)** and new **r = min(r,b+2)**
3. if you want to add new element **c** in array and it does not range from **(l,r)** then you need to do following thing:
*    Make window size = 1 by setting **j = i-1**
*    Increase window size from end untill you find that element that does not belong to **c-2** to **c+2**



```
class Solution {
public:
    long long continuousSubarrays(vector<int>& nums) {
            
            
            int l = 0, r = 0,j = 0;
            
            long long ans = 0;
            
            for(int i = 0;i<nums.size();i++){
                    
                    if(i == 0){ // First element
                            ans = ans + 1;
                            l = nums[i] - 2;  // range from a - 2
                            r = nums[i] + 2; // rane to a + 2
                    }else if(nums[i] >= l && nums[i] <= r){ // If new element belong to same range then 
                                    
                                    l = max(l,nums[i]-2); // take max from (a-2,b-2)
                                    r = min(r,nums[i]+2); // take min from (a+2,b+2)
                                    ans = ans + (i-j+1); // add subarray to answer
                                    
                    }else{ // If doest not belong to ranges try to remove from i-1 
                                  
                                   j = i-1;
                                   l = nums[i] - 2 , r = nums[i] + 2;  // new ranges
                                   while(nums[j]  >= nums[i] - 2 && nums[j] <= nums[i] + 2){
                                           
                                           l = max(l,nums[j] - 2); // take max 
                                           r = min(r,nums[j] + 2); // take min
                                           j--;
                                           
                                   }
                                   j++; 
                                    
                                  
                                   ans = ans + (i-j+1); 
                            
                    }
            }
            
            
            
            
            return ans;
        
    }
};
```


Some Similar Questions

https://leetcode.com/problems/maximum-number-of-robots-within-budget/
https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
https://leetcode.com/problems/count-subarrays-with-fixed-bounds/
https://leetcode.com/problems/count-number-of-nice-subarrays/
https://leetcode.com/problems/longest-nice-subarray/
https://leetcode.com/problems/count-the-number-of-good-subarrays/
https://leetcode.com/problems/find-k-closest-elements/
https://leetcode.com/problems/jump-game-vi/


**Proof that it is not O(n^2) by [@S_Changal](https://leetcode.com/S_Changal/)
If we have to go to the left most element every iteration then it just means that whole subarray to the left is satisfying the given condition. For every i from 1 to n the whole left subarray will satisfy the given condition. As the condition is satisfied for every value of "i" so the code will not proceed to the last else condition. Instead of that it will just stop at second else if condition for whole array.


