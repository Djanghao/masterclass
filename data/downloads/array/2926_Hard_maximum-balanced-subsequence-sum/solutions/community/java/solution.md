# JAVA | TreeMap

**Author:** ForgottenSemicolon
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4250626/](https://leetcode.com/problems/maximum-balanced-subsequence-sum/solutions/4250626/)

---

```
class Solution {
    public long maxBalancedSubsequenceSum(int[] nums) {
        int n = nums.length;
        int [] arr = new int[n];
        for(int i = 0; i<n; i++){
            arr[i] = nums[i]-i;
        }
        TreeMap<Integer, Long> map = new TreeMap<>();
        long ans = Integer.MIN_VALUE;
        for(int i = 0; i<n; i++){
            if(nums[i]<=0){
                ans = Math.max(ans, nums[i]);
            }
            else{
                long temp = nums[i];
                if(map.floorKey(arr[i])!=null){
                    temp += map.get(map.floorKey(arr[i]));
                }
                while(map.ceilingKey(arr[i])!=null && map.get(map.ceilingKey(arr[i]))<temp){
                    map.remove(map.ceilingKey(arr[i]));
                }
                if(map.floorKey(arr[i])==null || map.get(map.floorKey(arr[i]))<temp){
                    map.put(arr[i], temp);
                }
                ans = Math.max(ans, temp);
            }
        }
        return ans;
    }
}
```