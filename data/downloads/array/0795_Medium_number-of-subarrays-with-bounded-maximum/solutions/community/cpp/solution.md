# C++ Solution | Monotonic Stack modification

**Author:** its_gupta_ananya
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1200644/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1200644/)

---

This appraoach is a modification Of monotonic stack to store the Previous Greater Element(pge) - (stored in vector named left) and Next Greater Element (nge) for every element(stored in vector named right).
For any element i, it forms a part of valid subarrays till it encounters it's next greater elements from the left as well as the right side, that is, we count the number of subarrays for a particular i for which that element would be the maximum element. The size of the subarray is calculated as ```(i-left[i])*(right[i]-i)``` 
For example, in the example [2,1,4,3]:-
1. 2 lies in the given raneg [L,R) and The previous greater element for 2 does not exist i.e. left = -1 and the next greater element is at index 3. Hence number of subarrays **including 2 as the maximum element** become (0-(-1))*(3-0)  = 3.
2. Similarly we calculate number of subarrays for every index i (if nums[i] lies in the range).
You can read more about Monotonic Stacks on this great discuss post [https://leetcode.com/problems/sum-of-subarray-minimums/discuss/178876/stack-solution-with-very-detailed-explanation-step-by-step] 

Code implementing the same is:-
```
class Solution {
public:
    int numSubarrayBoundedMax(vector<int>& A, int L, int R) {
        
        int n = A.size();

        stack<int> pge,nge; //Previous greater element(pge) and Next Greater element(nge)
        vector<int> left(n,-1);//Stores PGE for index i
        vector<int> right(n,n);//Stores NGE for index i
        int ans= 0;
        for(int i=0;i<n;++i)
        {
            while(!pge.empty() && A[pge.top()] < A[i])
                pge.pop();
            if(!pge.empty()) left[i] = pge.top();
            pge.push(i);
            
            while(!nge.empty() && A[nge.top()] < A[i]){
                right[nge.top()] = i;
                nge.pop();
            }
            nge.push(i);
        }

        for(int i=0;i<n;++i){
            if(A[i] >=L && A[i]<=R){
                ans+=(right[i]-i)*(i-left[i]);//Adds contribution of particular index into the ans value
            }
        }
        return ans;          
        }
};
        
   
```
Hope this helps!
Stay Safe!