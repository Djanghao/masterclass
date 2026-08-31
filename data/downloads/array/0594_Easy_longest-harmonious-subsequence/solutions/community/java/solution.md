# java optimized solution Beats 99%

**Author:** Sharan79
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/2207248/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/2207248/)

---

### **Approach 1: Using Sorting | Beats 99%**
```
class Solution {
    public int findLHS(int[] nums) {
       if(nums.length == 0){
           return 0;
       }
        Arrays.sort(nums);
        int left = 0, right = 1;
        int ArrayLen = 0;
        while(right < nums.length){
            int diff = nums[right]-nums[left];
            if(diff==1){
                ArrayLen = Math.max(ArrayLen, right-left+1);
            }
            if(diff <= 1){
                right++;
            }else{
                left++;
            }
        }
        return ArrayLen;
    }
}

//Time Complexity : O(nlogn), for sorting 
//Space Complexity : In worst case O(n), but in average case O(logn) space is required by sorting.
```

### **Approach 2: Using HashMap | Beats 45%**
```
class Solution {
    public int findLHS(int[] nums) {
        HashMap <Integer, Integer> map = new HashMap<>();
        int res = 0;
        for(int i : nums){
            int currentFrequency = map.getOrDefault(i,0);
            map.put(i, currentFrequency+1);
        }
        // map.keySet() will returns all key present in map
        for(int key : map.keySet()){
            if(map.containsKey(key+1)){
                res = Math.max(res, map.get(key) + map.get(key+1));
            }
        }
        return res;
    }
}

//Time Complexity : O(n), One loop is required to fill map and one for traversing the map.
//Space Complexity : O(n), In worst case map size grows upto size n.
```