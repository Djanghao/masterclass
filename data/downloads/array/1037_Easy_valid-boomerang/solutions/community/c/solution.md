# [c++] Full explanation(100% faster) || Using triangle rule

**Author:** Ved_Prakash1102
**Votes:** 7
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/1011448/](https://leetcode.com/problems/valid-boomerang/solutions/1011448/)

---

**Example : [1,1] [2,3] [3,2]**
Lets say:
```
(x1,y1) = (1,1) 
(x2,y2) = (2,3) 
(x3,y3) = (3,2)
```
**if slopes of lines with any two point will be same , then they are in straight line**
i.e.
```
L1 = (points[0][0] - points[1][0])/(points[0][1]-points[1][1]);
L2 = (points[0][0] - points[2][0])/(points[0][1]-points[2][1]);
```
```
(y2\u2212y1)/(x2\u2212x1) = (y3\u2212y1)/(x3\u2212x1)
L1 = L2
```
*  But if denominator is 0 then slope gives infinite value which is difficult to compare.

**Solution to above difficulty :**
Cross multiplication method comes with no error hence we will use that :)
```
 (y2\u2212y1)*(x3\u2212x1) = (y3\u2212y1)*(x2\u2212x1)
````
	
* so now if equal then not valid boomerang i.e they are in straight line
 If not equal then they are valid boomerang i.e not in straight line*

```
class Solution {
public:
    bool isBoomerang(vector<vector<int>>& points) {
     
        int LHS = (points[0][0] - points[1][0])*(points[0][1]-points[2][1]);
        int RHS = (points[0][0] - points[2][0])*(points[0][1]-points[1][1]);
        
        if(LHS == RHS) {
            return false;
        }
        return true;
     }
};
```