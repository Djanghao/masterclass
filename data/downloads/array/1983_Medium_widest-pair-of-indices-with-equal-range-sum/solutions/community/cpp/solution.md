# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/3385206/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/3385206/)

---

```C++ []
class Solution {
public:
    int widestPairOfIndices(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size() , ans = 0;
        vector<int> idx(2*n+1,-1);
        idx[n] = 0;
        for( int i = 0 , val = n ; i < n ; i++ ) {
            val += nums1[i]-nums2[i];
            if(idx[val] != -1)
                ans = max(ans,i+1-idx[val]);
            else
                idx[val] = i+1;
        }
        return ans;
    }
};
```

```Python3 []
class Solution:
    def widestPairOfIndices(self, nums1: List[int], nums2: List[int]) -> int:
        
        nums = [a - b for a,b in zip(nums1,nums2)]
        result = 0
        d = {0:-1}
        s = 0

        for i,n in enumerate(nums):
            s += n
            if s in d:
                result = max(result,i - d[s])
            else:
                d[s] = i
        
        return result
```

```Java []
class Solution {
    public int widestPairOfIndices(int[] nums1, int[] nums2) {
        HashMap<Integer,Integer> map = new HashMap<>();
        int n = nums1.length;
        int sum = nums1[0]-nums2[0];
        map.put(sum,0);
        int ans=0;
        if(sum==0)
            ans=1;
        for(int i=1;i<n;i++) {
            sum+=nums1[i]-nums2[i];
            if(sum==0)
                ans=i+1;
            else {
                if(!map.containsKey(sum))
                    map.put(sum,i);
                else
                    ans=Math.max(ans,i-map.get(sum));    
            }    
        }
         return ans;   
    }
}
```
