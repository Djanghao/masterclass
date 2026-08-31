# Clean || Simple || Java Solution

**Author:** HimanshuBhoir
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3421736/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3421736/)

---


```java []
class Solution {
    public int maxDivScore(int[] nums, int[] divisors) {
        Arrays.sort(divisors);
        int max = 0, res = divisors[0];
        for(int i=0; i<divisors.length; i++){
            int cnt = 0;
            for(int j=0; j<nums.length; j++){
                if(nums[j] % divisors[i] == 0)  cnt++;
            }
            if(cnt > max){
                max = cnt;
                res = divisors[i];
            }
        }
        return res;
    }
}
```