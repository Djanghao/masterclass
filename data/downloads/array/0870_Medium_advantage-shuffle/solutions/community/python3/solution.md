# Solution

**Author:** deleted_user
**Votes:** 4
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/3499371/](https://leetcode.com/problems/advantage-shuffle/solutions/3499371/)

---

```C++ []
class Solution {
public:
    vector<int> advantageCount(vector<int>& nums1, vector<int>& nums2) {
        vector<pair<int,int>>v;
        for(int i=0;i<nums2.size();i++)
        {
            v.push_back({nums2[i],i});
        }
        sort(nums1.begin(),nums1.end());
        sort(v.begin(),v.end());
        int n=v.size();
        vector<int>res(n,-1);
        int j=0;
        for(int i=0;i<n;i++)
        {
            if(v[j].first<nums1[i])
            {
                res[v[j].second]=nums1[i];
                nums1[i]=-1;
                j++;
            }
        }
        j=0;
        for(int i=0;i<n;i++)
        {
            if(nums1[i]!=-1)
            {
                while(res[j]!=-1)
                {
                    j++;
                }
                res[j]=nums1[i];
            }
        }
        return res;
    }
};
```

```Python3 []
class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        from collections import deque
        q = deque(sorted(nums1))
        n = len(nums1)
        order = sorted(range(n), key=lambda x: nums2[x], reverse=True)
        res = [0] * n
        for idx in order:
            if q[-1] > nums2[idx]:
                res[idx] = q.pop()
            else:
                res[idx] = q.popleft()
        return res
```

```Java []
class Solution {
    public int[] advantageCount(int[] nums1, int[] nums2) {
        int n = nums1.length;
        Arrays.sort(nums1);
        int[] ans = new int[n];
        boolean[] vis = new boolean[n];
        ArrayList<Integer> arr = new ArrayList<>();
        for(int i=0;i<n;i++){
            int ub = upperBound(nums1, nums2[i]);
            if(ub!=n && vis[ub]==false){
                 ans[i] = nums1[ub];
                 vis[ub] = true;
            }
            else if(ub<n-1 && vis[ub]==true){
                while(ub<n && vis[ub]==true){
                    ub++;
                }
                if(ub==n){
                    arr.add(i);
                }
                else{
                     ans[i] = nums1[ub];
                     vis[ub]=true;
                }
            }
            else{
              arr.add(i);
            }
        }
        int j=0;
        for(int x: arr){
            while(j<n && vis[j]==true){
                j++;
            }
            ans[x]=nums1[j];
            vis[j]=true;
        }
        return ans;
    }
    public int upperBound(int[] nums, int target){
        int low = 0;
        int high = nums.length-1;
        while(low<=high){
            int mid = low+(high-low)/2;
            if(nums[mid]<=target){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
        return low;
    }
}
```
