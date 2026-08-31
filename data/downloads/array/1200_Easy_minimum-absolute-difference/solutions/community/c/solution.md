# ✅ Easy to Understand | C++ | With explanation | O(nlogn) time | O(n) memory | With examples

**Author:** SainathTallam
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/1637354/](https://leetcode.com/problems/minimum-absolute-difference/solutions/1637354/)

---

# Approach : 
* sort the array
because minimum difference exists only between two adjacent numbers after sorting(since no duplicates are present)

We can use a stack to store the pair of elements whose difference is the minimum possible

* We traverse through the sorted array
# **Case 1** : if stack is empty
	push the arr[i] and arr[i+1] . so we assume arr[i+1]-arr[i] gives the minimum difference
#  **Case 2** : Stack is not empty 
* **Case 2.1:** `Difference of elements in top of stack is less than the difference of arr[i+1] - arr[i]`
*Example* : stack contains (1,2) and arr[i] = 2 arr[i+1] = 5
In this case as we can observe (2,5) is not usefil to us. So just continue without performing any action.
**Case 2.2:** `Difference of elements in top of stack is more than the difference of arr[i+1] - arr[i]`
*Example* : stack contains (1,3) and arr[i] = 3 arr[i+1] = 4
So now we need to remove (1,3) from stack and push (3,4)
**Case 2.3:** `Difference of elements in top of stack is equal to the difference of arr[i+1] - arr[i]`
*Example* : stack contains (1,3) and arr[i] = 3 arr[i+1] = 5
so just push (3,5) also into the stack

# More Examples
* Stack -> (1,2) (2,3) (3,4) and arr[i] = 4 arr[i+1] = 5
Since difference is same we push (4,5) also into the stack
stack becomes (1,2) (2,3) (3,4) (4,5)

* Stack-> (1,3) (3,5) (8,10) and arr[i] = 10 arr[i+1] = 11
since we found a more optimal minimum difference. We will empty the wholse stack and push (10,11) into it
stack becomes (10,11)

* Stack -> (1,3) (3,5) and arr[i] = 5 arr[i+1] = 9
since the current difference is more than that the difference of elements inside the stack.
We just continue
Stack is -> (1,3) (3,5)

```
class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& arr)
    {
        int n = arr.size() ;
        sort(arr.begin(),arr.end()) ;
        
        stack<pair<int,int>> st ;
        
        for(int i=0;i<n-1;i++)
        {
			// Case 1 : Stack is empty
            if(st.empty())
            {
                st.push({arr[i],arr[i+1]}) ;
                continue ;
            }
            
            int diff = arr[i+1]-arr[i] ;
            
            int x = st.top().second - st.top().first ;
			
             // Case 2.1
            if(x<diff)
                continue ;
            
			// Case 2.2
            if(x==diff)
            {
                st.push({arr[i],arr[i+1]}) ; continue ;
            }
            
			//Case 2.3
            while(!st.empty())
                st.pop() ;
            st.push({arr[i],arr[i+1]}) ;
            
        }
        
        vector<vector<int>> ans ;
        
        while(!st.empty())
        {
            ans.push_back({st.top().first,st.top().second}) ;
            st.pop() ;
        }
        
        reverse(ans.begin(),ans.end()) ;
        return ans ;
        
    }
};
```

Thanks for reading.
Upvote if this is helpful.