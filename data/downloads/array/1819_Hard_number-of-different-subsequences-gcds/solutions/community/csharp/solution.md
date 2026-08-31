# C# Solution || Easy to understand

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/3519383/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/3519383/)

---


```
public class Solution {
    public int CountDifferentSubsequenceGCDs(int[] nums) {
        int gcd(int a,int b) => (a == 0) ? b : gcd(b % a, a);
        HashSet<int> set = new HashSet<int>();
        int max = nums[0];
        for(int i = 0; i < nums.Length;i++){
            set.Add(nums[i]);
            max = Math.Max(max,nums[i]);
        }
        int res = 0;
        for(int i = 1;i <= max;i++){ // possiable gcds
            int curGcd = 0;
            for(int j = i;j <= max;j+=i){
                if(!set.Contains(j)) continue;
                curGcd = gcd(curGcd,j);
                if(curGcd == i){
                    res++;
                    break;
                }
            }
        }
        return res;
    }
}
```