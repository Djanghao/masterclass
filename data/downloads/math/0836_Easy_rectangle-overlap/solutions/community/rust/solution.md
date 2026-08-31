# Solution 1-Liner

**Author:** Shree_Govind_Jee
**Votes:** 2
**Link:** [https://leetcode.com/problems/rectangle-overlap/solutions/4315869/](https://leetcode.com/problems/rectangle-overlap/solutions/4315869/)

---

# Code
```java []
class Solution {
    public boolean isRectangleOverlap(int[] rec1, int[] rec2) {
        return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
    }
}
```
```javascript []
return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
```
```Rust []

return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
```
```ruby []
return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
```
```C []
return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
```
```C++ []
return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
```
```TypeScript []
return rec1[0]<rec2[2] && rec2[0]<rec1[2] && rec1[1]<rec2[3] && rec2[1]<rec1[3];
```

