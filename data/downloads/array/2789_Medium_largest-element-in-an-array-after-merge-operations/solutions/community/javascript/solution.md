# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/5767442/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/5767442/)

---

# Tuntun Mosi ko Pranam
Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
class Solution {
  public long maxArrayValue(int[] nums) {
    long ans = nums[nums.length - 1];
    for (int i = nums.length - 2; i >= 0; --i){
        if (nums[i] > ans){
            ans = nums[i];
        }else{
            ans += nums[i];
        }
    }
    return ans;
  }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)