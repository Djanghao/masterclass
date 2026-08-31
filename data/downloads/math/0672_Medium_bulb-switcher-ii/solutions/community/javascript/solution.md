# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 5
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/5767457/](https://leetcode.com/problems/bulb-switcher-ii/solutions/5767457/)

---

# Tuntun Mosi ko Pranam
Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)

# Code
```java []
class Solution {
    public int flipLights(int n, int presses) {
        n = Math.min(n, 3);
        if(presses == 0){
            return 1;
        }if(presses == 1){
            return new int[]{2, 3, 4}[n - 1];
        }if(presses == 2){
            return new int[]{2, 4, 7}[n - 1];
        }
        return (int)Math.pow(2, n);
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)