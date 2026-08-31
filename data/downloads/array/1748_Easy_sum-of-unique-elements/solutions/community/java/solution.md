# [Java] easy and short HashMap

**Author:** zeldox
**Votes:** 70
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1065806/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1065806/)

---

if you like it pls upvote

Java
```
class Solution {
    public int sumOfUnique(int[] nums) {
        int res = 0;
        Map<Integer,Integer> map = new HashMap<>();
        for(int i = 0;i<nums.length;i++){
            map.put(nums[i],map.getOrDefault(nums[i],0)+1);
            if(map.get(nums[i]) == 1)res+=nums[i];
            else if(map.get(nums[i]) == 2)res-=nums[i];
        }
        return res;
    }
}
```