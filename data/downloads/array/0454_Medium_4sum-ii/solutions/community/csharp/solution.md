# C# || Using Dictionary and O(N*N)

**Author:** workwithanshika
**Votes:** 2
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/3030416/](https://leetcode.com/problems/4sum-ii/solutions/3030416/)

---

# Code
```
public class Solution {
    public int FourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        
        Dictionary<int,int> dd = new Dictionary<int,int>();
        int ans = 0;
        //storing every possible combination sum of 2 arrays
        for(int i=0;i < nums1.Length; i++)
        {
            for(int j=0; j< nums2.Length; j++)
            {
                int sum = nums1[i] + nums2[j];
                if(dd.ContainsKey(sum))
                    dd[sum]++;
                else
                    dd.Add(sum,1);
            }
        }
        //Now iterating over another 2 arrays if we get -ve of that
        for(int i=0;i < nums3.Length; i++)
        {
            for(int j=0; j< nums4.Length; j++)
            {
                int sum = nums3[i] + nums4[j];
                sum = -(sum);
                if(dd.ContainsKey(sum))
                    ans += dd[sum];
                
            }
        }

        return ans;
    }
}
```