# Easy to understand || Beat 100% with Java and C++ || O(1) Time complexity 🔥🔥

**Author:** anuragiyer
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/5439355/](https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/5439355/)

---

![image.png](./images/0.png)

# Please upvote if you like the explanation \uD83E\uDD7A\uD83E\uDD7A

# Intuition
- Firstly, we should know that the queen cannot move, so we just have to move the white pieces as much as we want to capture the queen.
- Secondly, then answer can either be 1 or 2, nothing other than that. For example, if the rook, bishop and queen are in the same vertical or horizontal line, and the bishop is blocking the rook's capture, then we simply move the bishop away and capture the queen with the rook, if the bishop is not blocking rook's capture, then we simply capture the queen in one move.
- If the bishop, the rook and the queen are in one diagonal and the rook is blocking the bishop from capturing the queen, we move the rook to the queens horizontal and the take the queen with the rook or we can take the rook even with the bishop thus returning the answer 2, but if the rook is not blocking bishop's capture, then we take with the bishop in 1 move.

# Approach
1. We check if the y-coordinate of the rook and the y-coordinate of the queen is the same or not. If it is, we check if the y-coordinate of the bishop is the same as them as well. And it that is true as well we check if the x-coordinate of the bishop is in between the x-coordinate of the queen and the rook. If it is in between them, then we return the value 2 else we return the value as 1.
2. We check if the x-coordinate of the rook and the x-coordinate of the queen is the same or not. If it is, we check if the x-coordinate of the bishop is the same as them as well. And it that is true as well we check if the y-coordinate of the bishop is in between the y-coordinate of the queen and the rook. If it is in between them, then we return the value 2 else we return the value as 1.
3. Next we need to find out if the queen and the bishop lie on the same diagonal. For that we perform the operation `x = max(e-c, c-e)` and `y = max(f-d, d-f)`. What this operation does is it finds the magnitude of the horizontal and vertical distance between the bishop and the queen. If both the horizontal and the vertical distances are equal, then we know that they are in a diagonal. So we need to check if the rook lies in between the diagonal of the queen and bishop or not.
4. So first we find if the bishop and the rook are in a diagonal or not. For that we repeat the same process `u = max(a-c, c-a)` and `v = max(b-d, d-b)`, where u checks the horizontal distance between the rook and the bishop and v checks the vertical distance between the rook and the bishop. If that is equal, the the rook and the bishop are in one diagonal. But that does not guarantee that rook is in between the queen and the bishop.
5. So, we need to check the diagonal distances between the bishop and rook and the bisop and queen. SO we compare the vertical distance between bishop and queen, which is x and the vertical distance between bishop and rook, which is u. If `u < x` then rook **can** lie between the bishop and the queen. But the problem is still far from finished.
6. The bishop and rook can be lying on 4 different diagonals and out of that only one diagonal will be the diagonal which is commone between the queen, the bishop and the rook. So we check if the x and y coordinates of the rook both lie between the x and y coordinates of the queen and the bishop. If that is the case, we return 2.
7. If the bishop and the queen lie on a diagonal but the rook is not in between them, then we return 1.
8. For all the remaining cases, we return 2.


# Complexity
- **Time complexity: O(1)**

- **Space complexity:O(1)**

# Code
```Python3 []
class Solution:
    def minMovesToCaptureTheQueen(self, a: int, b: int, c: int, d: int, e: int, f: int) -> int:
        if a==e:
            if c == a and ((b<d and d<f) or (f<d and d<b)):
                return 2
            return 1
        if b == f:
            if b == d and ((a<c and c<e) or (e<c and c<a)):
                return 2
            return 1
        x = max(e-c, c-e)
        y = max(f-d, d-f)
        if x == y:
            u = max(a-c, c-a)
            v = max(b-d, d-b)
            if u == v and u<x:
                if ((c<a and a<e) or (e<a and a<c)) and (d<b and b<f) or (f<b and b<d):
                    return 2
            return 1
        return 2
```
```Python []
class Solution(object):
    def minMovesToCaptureTheQueen(self, a, b, c, d, e, f):
        if a==e:
            if c == a and ((b<d and d<f) or (f<d and d<b)):
                return 2
            return 1
        if b == f:
            if b == d and ((a<c and c<e) or (e<c and c<a)):
                return 2
            return 1
        x = max(e-c, c-e)
        y = max(f-d, d-f)
        if x == y:
            u = max(a-c, c-a)
            v = max(b-d, d-b)
            if u == v and u<x:
                if ((c<a and a<e) or (e<a and a<c)) and (d<b and b<f) or (f<b and b<d):
                    return 2
            return 1
        return 2
```
```C++ []
class Solution {
public:
    int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        if (a == e){
            if (c == a and ((b<d and d<f) or (f<d and d<b))){
                return 2;
            }
            return 1;
        }
        if (b == f){
            if (b == d and ((a<c and c<e) or (e<c and c<a))){
                return 2;
            }
            return 1;
        }
        int x = max(e-c, c-e);
        int y = max(f-d, d-f);
        if (x == y){
            int u = max(a-c, c-a);
            int v = max(b-d, d-b);
            if ((u == v and u<x) and ((c<a and a<e) or (e<a and a<c)) and ((d<b and b<f) or (f<b and b<d))){
                return 2;
            }
            return 1;
        }
        return 2;
    }
};
```
```Java []
class Solution {
    public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
        if (a == e) {
            if (c == a && ((b < d && d < f) || (f < d && d < b))) {
                return 2;
            }
            return 1;
        }
        if (b == f) {
            if (b == d && ((a < c && c < e) || (e < c && c < a))) {
                return 2;
            }
            return 1;
        }
        int x = Math.max(e - c, c - e);
        int y = Math.max(f - d, d - f);
        if (x == y) {
            int u = Math.max(a - c, c - a);
            int v = Math.max(b - d, d - b);
            if (u == v && u < x) {
                if (((c < a && a < e) || (e < a && a < c)) && ((d < b && b < f) || (f < b && b < d))) {
                    return 2;
                }
            }
            return 1;
        }
        return 2;
    }
}
```