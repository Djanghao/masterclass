# Easy to understand || C++ || O(n) Time || O(1) Space || Beats 98% ||Code with Explanation

**Author:** devrajsingh
**Votes:** 35
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/1494992/](https://leetcode.com/problems/longest-mountain-in-array/solutions/1494992/)

---

***If you like my approach,Please upvote this***
```
class Solution {
public:
    int longestMountain(vector<int>& arr) {
        int n=arr.size();
        int ans=0;
        int i=1;
        int upper,lower;
        
        while(i<n)
       {    upper=0;lower=0;                  //Each time after traversing one mountain or not,we have to set upper & lower to 0
            while(i<n && arr[i-1]==arr[i])    //   for flat array,where elements are equal
              i++;                            //This also handles when we get same adjacent elements
            while(i<n && arr[i-1]<arr[i])     //Increasing part of mountain
            {  upper++;i++;
                
            }
                    
            
           while(i<n && arr[i-1]>arr[i])    //Decreasing part of mountain 
           {
               lower++;
               i++;    
           } 
          if(upper && lower)       //Mountain only exists if we have both incresing part and decreasing part adjacently
           { ans=max(ans,lower+upper+1);
           }
        
        }
        
        return ans;
     
    }
};
```
***Another Variation if we need to choose Subsequence not subarray***
***                                                                                                                         ***
***                                                                                                                         ***
```
 class Solution
 public:
   int longestMountain(vector<int>&arr){          //        This is valid if we are choosing subsequence not subarray.   //  
        vector<int> LIS(n,1);
        vector<int> LDS(n,1);
        for(int i=0;i<n;i++)
        {                                   //This is for longest increasing subsequence
            for(int j=i-1;j>=0;j--) 
            {    if(arr[i]>arr[j] && LIS[j]+1>LIS[i])
                    LIS[i]=LIS[j]+1;
                
            }
        }
        for(int i=n-1;i>=0;i--)
        {                                     // This is for longest decreasing subsequence from start or Longest increasing from end 
            for(int j=i+1;j<n;j++)
            {    if(arr[i]>arr[j] && LDS[j]+1>LDS[i])
                    LDS[i]=LDS[j]+1;
                
            }
        }
        int maxx=0;
        for(int i=0;i<n;i++)
        {  if(LIS[i]>1 && LDS[i]>1)
              maxx=max(maxx,LIS[i]+LDS[i]-1);    
        }
        if(maxx<3)                               // When length is less than 3 means no valid mountain 
            return -1;
        return maxx;
  
  }
  };
  ```
