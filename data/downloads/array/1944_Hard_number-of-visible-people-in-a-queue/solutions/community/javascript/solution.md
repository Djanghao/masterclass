# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5772524/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5772524/)

---

# Tuntun Mosi ko Pranam
Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
class Solution {
    public int[] canSeePersonsCount(int[] height) {
        int n=height.length; 
        int[] ans = new int[n];
        Stack<Integer> stac = new Stack<>();
        ans[n-1]=0; stac.push(height[n-1]);
        for(int i=n-2; i>=0; i--){
            int count=0;
            while(!stac.isEmpty() && stac.peek()<height[i]){
                stac.pop(); count++;
            }
            if(stac.isEmpty()){
                ans[i]=count;
            }else{
                ans[i]=count+1;
            }
            stac.push(height[i]);
        }
        return ans;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)