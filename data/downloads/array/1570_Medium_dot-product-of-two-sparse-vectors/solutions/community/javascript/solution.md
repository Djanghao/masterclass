# Simple JavaScript Approach

**Author:** donovanodom
**Votes:** 5
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/2346685/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/2346685/)

---

```
const SparseVector = function(nums) {
    this.nums = nums
}

SparseVector.prototype.dotProduct = function(vec) {
    let product = 0
    for(i = 0; i < vec.nums.length; i++){
        if(vec.nums[i] == 0 || this.nums[i] == 0) continue
        product += vec.nums[i] * this.nums[i]
    }
    return product
}