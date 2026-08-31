# JAVA 11 FEATURES || 100% || 0ms|| simple || concise 5 lines || 2 WAYS

**Author:** ManojKumarPatnaik
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/2006243/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/2006243/)

---

```
**class Solution {
    public int maxOperations(int[] nums, int k) {
        var map=new HashMap<Integer,Integer>();
        int c=0;
        for(int i=0;i<nums.length;i++){
            if(map.containsKey(k-nums[i])&&map.get(k-nums[i])>0){
                c++;
                map.put(k-nums[i],map.get(k-nums[i])-1);
            }else map.put(nums[i],map.getOrDefault(nums[i],0)+1);
        }return c;
    }
}**

2ND METHOD 2 POINTERS TECHNIC USING BINARY SEARCH.

public int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);
        int i=0;
        int j=nums.length-1;
        int count=0;
        while(i<j)
        {
            if(nums[i]+nums[j]==k)
            {
                i++;
                j--;
                count++;
            }
            else if(nums[i]+nums[j]<k)
            {
                i++;
            }
            else if(nums[i]+nums[j]>k)
            {
                j--;
            }
        }
        return count;
        
    }
```