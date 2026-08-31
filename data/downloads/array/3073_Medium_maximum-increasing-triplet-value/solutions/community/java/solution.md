# Simple Java Solution

**Author:** sakshikishore
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5811344/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/5811344/)

---



# Complexity
- Time complexity: O(nlog(n))
- n=nums.length

# Code
```java []
class Solution {
    public int maximumTripletValue(int[] nums) {
       ArrayList<Integer> l=new ArrayList<Integer>();
        int pref[]=new int[nums.length];
        l.add(nums[0]);
        pref[0]=-1;
        for(int i=1;i<pref.length;i++)
        {
            if(nums[i]<=l.get(0))
            {
                l.add(0,nums[i]);
                pref[i]=-1;
            }
            else
            {
                int low=0,high=l.size()-1;
                while(low<=high)
                {
                    int mid=(low+high)/2;
                    if(l.get(mid)>=nums[i])
                    {
                        high=mid-1;
                    }
                    else
                    {
                        low=mid+1;
                    }
                }
                pref[i]=l.get(low-1);
                l.add(low,nums[i]);
            }

        }
        int max=nums[nums.length-1];
        int result=Integer.MIN_VALUE;
        for(int j=nums.length-2;j>=1;j--)
        {
             if(pref[j]!=-1 && max-nums[j]+pref[j]>result && nums[j]<max)
             {
                result=max-nums[j]+pref[j];
             }
             if(nums[j]>max)
             {
                max=nums[j];
             }
        }

        return result;
    }
}
```