# 100% beat (both runtime and memory) O(1) **MUST SEE**!!

**Author:** Priyanshu_pandey15
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4522659/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4522659/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Take care of edge cases , like if rook and bishop are on the same pathway to capture the Queen.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {
    public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        int x = 5 , y = 5;
        if(a==e || b==f){
            if(a == e){
                if(c == e){
                    boolean bothLeft = b < f && d < f; 
                    boolean bothRight = b > f && d > f;
                    if(bothLeft || bothRight)
                    {
                        if(Math.abs(d -f) < Math.abs(b - f)){
                            x = 2;
                        }else
                        x = 1;
                    } 
                    else
                        x = 1;
                }
                else x =1;
            }else
            { 
                if(d == f){
                boolean bothUp = a < e && c < e;
                boolean bothDown = a > e && c > e;
                    if(bothUp || bothDown){
                        if(Math.abs(c - e) < Math.abs(a - e)){
                            x = 2;
                        }
                        else
                        x = 1;
                    }
                    else
                        x = 1;
                }
                else x = 1;
            }
        }else x = 2;

        int aa = Math.abs(c - e);
        int bb = Math.abs(d - f);
        if(aa == bb){
            int xx = Math.abs(a - e);
            int yy = Math.abs(b - f);
            if(xx == yy){
                boolean a1 = ( e - c )<0;
                boolean a2 = (e - a)<0;
                boolean b1 = (f - d)<0;
                boolean b2 = (f - b )<0;
                if(a1 == a2 && b1 == b2){
                    if(xx < aa){
                        y =2;
                    }else y =1;
                }else y =1;
            }else y = 1;
        }else return x;
        return x > y ? y : x;
    }
}
```