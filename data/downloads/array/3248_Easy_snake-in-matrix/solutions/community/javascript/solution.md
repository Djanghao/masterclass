# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 8
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5666781/](https://leetcode.com/problems/snake-in-matrix/solutions/5666781/)

---

Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
class Solution {
    public int finalPositionOfSnake(int n, List<String> commands) {
        int ans=0;
        for(int i=0; i<commands.size(); i++){
            String s = commands.get(i);
            if(s.equals("LEFT")){
                ans-=1;
            }else if(s.equals("RIGHT")){
                ans+=1;
            }else if(s.equals("UP")){
                ans-=n;
            }else if(s.equals("DOWN")){
                ans+=n;
            }
        }
        return ans;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)