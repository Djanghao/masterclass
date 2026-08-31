# Why to multiply ? Neat and Simple solution O(N) - 72 ms

**Author:** shivamLeet07
**Votes:** 22
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1837393/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/1837393/)

---

```
var arraySign = function(nums) {
    var ans = 1
    for(i of nums){
        if(i == 0){
            return 0
        }
        if(i < 0){
            ans = -ans
        }
    }
    return ans
};
```