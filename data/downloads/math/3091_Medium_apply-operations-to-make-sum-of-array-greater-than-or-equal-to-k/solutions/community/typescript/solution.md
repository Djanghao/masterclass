# [C++|Java|Python3|Javascript|Typescript] math

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916806/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916806/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/cdc5e101ce1f1fae525345dec774217fbbdba2c4) for my solutions of [weekly 390](https://leetcode.com/contest/weekly-contest-390/). 

**C++**
```
class Solution {
public:
    int minOperations(int k) {
        int p = sqrt(k), q = (k+p-1)/p; 
        return p + q - 2; 
    }
};
```
**Java**
```
class Solution {
    public int minOperations(int k) {
        int p = (int) Math.sqrt(k), q = (k+p-1)/p; 
        return p + q - 2;
    }
}
```
**Python3**
```
class Solution:
    def minOperations(self, k: int) -> int:
        p = isqrt(k)
        q = (k+p-1)//p
        return p+q-2
```
**Javascript**
```
var minOperations = function(k) {
    const p = Math.floor(Math.sqrt(k)), q = Math.ceil(k/p); 
    return p + q - 2; 
};
```
**Typescript**
```
function minOperations(k: number): number {
    const p = Math.floor(Math.sqrt(k)), q = Math.ceil(k/p); 
    return p + q - 2; 
};
```