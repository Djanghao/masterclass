# C++ || Complete Explanation || Kadane''s Extension || Using left right Array

**Author:** KR_SK_01_In
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/1938623/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/1938623/)

---

# ****INTUITION :- 
## Stores the Max subarray sum from left to right , takes the currsum = max(arr[i] , currsum + arr[i]) . i.e at any time max_ending_here (currsum+arr[i]) becomes smaller than current value of arr[i] , so replace currsum with arr[i] . 

## We are finding bestmax every time to stores the max subarray sum similar to kadanes algo considering no deletions .

## Now we are storing the kadanes sum from right to left in right array .

## Finally we are checking for every (ith) index to remove , not considering ith element in subarray , by taking ans = max ( ans , left[i-1] + right[i+1] ) .i.e gives kadanes sum from the left array till index i-1  and gives kadanes sum from right array till index i+1 . Not taking index i in considerations .

## Finally we will get our required sum .

# ****IF U FIND THIS SOLUTION HELPFUL , PLEASE UPVOTE IT !!!
```
int maximumSum(vector<int>& arr) {
        
          int n=arr.size();
        
        // if all numbers are negative return maxone
        int maxnum=arr[0];
        
        for(int i=1;i<n;i++)
        {
            maxnum=max(maxnum , arr[i]);
        }
        
        if(maxnum<=0)
        {
            return maxnum;
        }
        
          // Make the left array for the storing the kadanes sum 
        // Mkae the right array for storing the kadanes sum from right to left 
        
        vector<int> left(n) , right(n);
        
        int bestmax=0 , currmax=0;
        
        for( int i=0;i<n;i++)
        {
        currmax= max(arr[i] , currmax + arr[i]); // if(currmax + arr[i] <0) take just arr[i]
            bestmax = max(bestmax , currmax);
            left[i]=currmax;
        }
        currmax=0;
        for(int i=n-1;i>=0;i--)
        {
            currmax=max(arr[i], currmax + arr[i]); 
            bestmax=max(bestmax , currmax);
            right[i]=currmax;
        }
        
        int ans=bestmax;
        
        for(int i=1;i<n-1;i++)
        {
            ans = max(ans , left[i-1] + right[i+1]);
        }
        
        return ans;
        
    }
```