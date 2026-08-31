# [Java/JavScript/C++/C/C#]Optimize Solution

**Author:** Shree_Govind_Jee
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/4369518/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/4369518/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long res=0;
        while(total >= 0){
            res += ((total/cost2) + 1);
            total -= cost1;
        }
        return res;
    }
}
```
```javascript []
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    var res = 0;
    while(total >= 0){
        res += Math.trunc((total/cost2)+1);
        total -= cost1;
    }
    return (res);
};
```
```C++ []
class Solution {
public:
    long long waysToBuyPensPencils(int total, int cost1, int cost2) {
        long long res=0;
        while(total >= 0){
            res += ((total/cost2)+1);
            total-=cost1;
        }
        return res;
    }
};
```
```C []
long long waysToBuyPensPencils(int total, int cost1, int cost2) {
    long long res=0;
    while(total >= 0){
        res += ((total/cost2)+1);
        total -= cost1;
    }
    return res;
}
```
```C# []
public class Solution {
    public long WaysToBuyPensPencils(int total, int cost1, int cost2) {
        long res=0;
        while(total >= 0){
            res += ((total/cost2)+1);
            total -= cost1;
        }
        return res;
    }
}
```

