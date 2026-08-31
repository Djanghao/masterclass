# C#| Easy Solution with explanation

**Author:** shwetaja
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5105853/](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5105853/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 
**Binary Search+Sliding Window**

        In this problem, we are required to find the median of uniqueness array.
        Generally median is the middle element of the array.
        The definition of median in this problem is like this:
        Case 1> If n is odd then there will be only one median which is n/2 th element.
        Case 2> If n is even then there will be 2 medians :n/2th element and n/2+1th element and we will return the 
        smaller of 2 as ans.
        
        Because uniqueness Array(U.A) is sorted 
        therefore always n/2 will be the median when n is 
        even.
        In both case 1 and case 2,median=n/2th element.

        When array is given , we can easily find its 
        median using the above formula.
        
        But in this problem, we are not given uniqueness 
        array.We need to build the U.A. first in order to 
        find the median.

        **How to build the U.A.?**
        
        1>One way is to use brute force approach as 
        given below:
        1>We can generate all the subarrays of nums array.
        2>We can then calculate the count of distinct 
        elements in each subarray and store it in U.A

        Above B.F. approach will fail due to time constraints.
        Therefore we need to use some other method.    
        
        2>We are interested in building the U.A. because 
        we want to find the median.So instead of 
        building entire U.A.,
        we can pick some number and check if is the 
        potential candidate of becoming a median.
        And then we will return min of all those 
        potential candidates as our answer.
        
        **How to decide if some number is the potential 
        candiate for median?**
        
        If guessed number satisfies the following 
        property  then it is potential median:
        
        1>As per definition of median in this problem, 
        n/2th element in the U.A. is the median.
        Thus median will have n/2-1 elements before it.
        Here n is the size of the U.A.

        Now, we dont know what are the contents of U.A. 
        But **we know following things of U.A.**
        
        1>We know n/2th elemnet of U.A.It is the number 
        we have picked as median.
        2>We know the size of U.A. We are storing the 
        distinct count of each subarray in the U.A. Therefore,
        total no of subarrays of nums array is the size of U.A.

        Some number is the potential candiate of becoming 
        a median if there are subarrays whose distinct 
        element count is less than or equal to k where 
        k is our picked number for median.
        The no of such subarrays should be greater than 
        or equal to n/2.
        We can find no of such subarrays using AtMostK 
        Sliding Window algorithm.
        We can guess the median in the range from low 
        to hi using Binary Search.




# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long AtMostK(int[] nums,int k)
    {
        int start=0,end=0;
        Dictionary<int,int> map=new Dictionary<int,int>();
        int n=nums.Length;
        long ans=0;

        for(end=0;end<n;end++)
        {
            if(map.ContainsKey(nums[end]))
            {
                map[nums[end]]++;
            }
            else
            {
                map.Add(nums[end],1);
            }

            while(map.Count>k)
            {
                map[nums[start]]--;
                if(map[nums[start]]==0)
                {
                    map.Remove(nums[start]);
                }
                start++;
            }
            ans+=end-start+1;
        }
        return ans;
    }
    
    public int MedianOfUniquenessArray(int[] nums) 
    {
        int n=nums.Length;
        long totalSub=(long)n*(n+1)/2;
        HashSet<int> hs=new HashSet<int>(nums);
        int lo=1;
        int hi=hs.Count;
        long ans=0;

        while(lo<=hi)
        {
          
            int mid=(lo+hi)/2;
            
            long count=AtMostK(nums,mid);
            
                if((count*2)>=(totalSub))
                {
                  ans=mid;
                  hi=mid-1;      
                }
                else
                {
                    lo=mid+1;
                }
            }
            return Convert.ToInt32(ans);
        }
}
```