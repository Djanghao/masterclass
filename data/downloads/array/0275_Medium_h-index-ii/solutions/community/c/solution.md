# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 4
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/5670891/](https://leetcode.com/problems/h-index-ii/solutions/5670891/)

---

Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
class Solution {
    public int hIndex(int[] citations) {
        int h = citations.length; int maxi=0;
         for (int i=0; i<citations.length; i++){
            if (citations[i]>= h-i){
                maxi = Math.max(maxi,h-i);
               
            }
         } return maxi;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)