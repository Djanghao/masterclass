# Optimal Solution | Check Only 3 Differences | O(NlogN) | C++ | Java

**Author:** sundarlinga6
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082113/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082113/)

---

# Intuition
Sort both the arrays to match the smallest number
Since only 2 elements are deleted from `nums1`, Its guaranteed that `nums2[0]` must match with one of `nums1[0]` ,`nums1[1]` and `nums1[2]`.
Hence the possible differences we can have are
1. `nums2[0]`-`nums1[0]`
2. `nums2[0]`-`nums1[1]`
3. `nums2[0]`-`nums1[2]`


# Approach
- Sort both `nums1` and `nums2`.
- Computed the 3 possible `diffs` as per intuition.
- Iterate through these 3 possible `diffs` we have computed  and check whether all elements have same diff with maximum of 2 elements not satisfying the `diff`.
- Return the minimum of the valid `diff` 

# Complexity
- Time complexity:
$$O(sorting)$$

- Space complexity:
$$O(sorting)$$ 


```java []
class Solution {
    public int minimumAddedInteger(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int n= nums1.length, ans = Integer.MAX_VALUE;
        int [] diffs = {nums2[0]-nums1[0],nums2[0]-nums1[1],nums2[0]-nums1[2]};
        for(int diff : diffs) {
            int j=0, deleted=0;
            for(int i=0;i<n && j<n-2 ;i++){
                if(nums2[j]-nums1[i] != diff){
                    deleted++;
                }
                else {
                    j++;
                }
                if( deleted>2 ){
                    break;
                }
            }
            if(j==n-2){
                ans = Math.min(ans,diff);
            }
        }
        return ans;
    }
}
```
```c++ []
class Solution {
public:
    int minimumAddedInteger(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(),nums1.end());
        sort(nums2.begin(),nums2.end());
        int n= nums1.size(), ans = INT_MAX;
        vector<int>diffs = {nums2[0]-nums1[0],nums2[0]-nums1[1],nums2[0]-nums1[2]};
        for(auto diff : diffs) {
            int j=0, deleted=0;
            for(int i=0;i<n && j<n-2 ;i++){
                if(nums2[j]-nums1[i] != diff){
                    deleted++;
                }
                else {
                    j++;
                }
                if( deleted > 2 ){
                    break;
                }
            }
            if(j==n-2){
                ans = min(ans,diff);
            }
        }
        return ans;
        
    }
};
```

