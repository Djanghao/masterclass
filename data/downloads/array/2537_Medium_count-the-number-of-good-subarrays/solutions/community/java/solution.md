# ✅ Java | Easy | Sliding Window | Using HashMap

**Author:** kalinga
**Votes:** 20
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052838/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052838/)

---

```
class Solution {
    public long countGood(int[] nums, int k) {
        int j=0;
        int i=0;
        long ans=0l;
        long count=0l;
        HashMap<Integer,Integer> hm=new HashMap<>();
        while(j<nums.length){
            hm.put(nums[j],hm.getOrDefault(nums[j],0)+1);
            count += hm.get(nums[j]) - 1;
            while(count>=k){
                ans += (nums.length - j);
                int lf = hm.get(nums[i]);
                count-=lf-1;
                hm.put(nums[i], hm.get(nums[i]) - 1);
                if(hm.get(nums[i])==0)
                    hm.remove(nums[i]);              
                i++;
            }
            j++;
        }
        return ans;
    }
}
```
**For Explanation I found a good video :- https://youtu.be/ZCI-mXIQWAE**

**IF YOU LIKED THE APPROACH PLEASE UPVOTE \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F**