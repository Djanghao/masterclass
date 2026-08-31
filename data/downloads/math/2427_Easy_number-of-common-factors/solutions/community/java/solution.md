# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/2670532/](https://leetcode.com/problems/number-of-common-factors/solutions/2670532/)

---

**Java**
```
class Solution {
    public int commonFactors(int a, int b) {
        int count = 0, n = 0;
        while(n++ <= Math.min(a,b)){
            if(a % n == 0 && b % n == 0)    count++;
        }
        return count;
    }
}
```
**JavaScript**
```
var commonFactors = function(a, b) {
    let count = n = 0
    while(n++ <= Math.min(a,b)){
        if(a % n == 0 && b % n == 0)    count++
    }
    return count
};
```
**Python**
```
class Solution(object):
    def commonFactors(self, a, b):
        count, n = 0, 1
        while n <= min(a,b):
            if a % n == 0 and b % n == 0:
                count += 1
            n += 1
        return count
```