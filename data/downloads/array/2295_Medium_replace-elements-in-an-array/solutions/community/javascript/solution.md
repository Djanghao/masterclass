# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 5
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/5709737/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/5709737/)

---

# Tuntun Mosi ko Pranam
Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
class Solution {
    public int[] arrayChange(int[] nums, int[][] operations) {
        HashMap<Integer,Integer> hash= new HashMap<>();
        for(int i=0;i<nums.length;i++){
            hash.put(nums[i], i);
        }
        for(var oper:operations){
            nums[hash.get(oper[0])]= oper[1];
            hash.put(oper[1], hash.get(oper[0]));
        }
        return nums; 
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)