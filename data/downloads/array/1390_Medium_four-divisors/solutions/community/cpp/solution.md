# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n*sqrt(n)) Time Comp💀💯

**Author:** atishayj4in
**Votes:** 6
**Link:** [https://leetcode.com/problems/four-divisors/solutions/5571248/](https://leetcode.com/problems/four-divisors/solutions/5571248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int subans(int n) {
        int d = 0;
        int four = 0;
        for (int i = 1; i*i<=n; i++) {
            if (n%i==0) {
                if(n/i==i){
                    d+=i;
                    four++;
                }else{
                    d+= i+(n/i);
                    four+=2;
                }
            }
            if(four>4){ 
                return 0;
            }
        }
        if(four==4){
            return d;
        }
        return 0;
    }
    public int sumFourDivisors(int[] nums) {
        int ans = 0;
        for (int i=0; i<nums.length; i++) {
            ans+=subans(nums[i]);
        }
        return ans;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)