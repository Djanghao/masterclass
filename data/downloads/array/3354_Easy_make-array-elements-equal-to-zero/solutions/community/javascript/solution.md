# 3354. Logic Explained | Beats 100% - runtime and memory

**Author:** ramana721
**Votes:** 4
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6055340/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6055340/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There is no need to write a brute code that changes its direction every time it meets a positive integer. The logic lies wiht the sum of left and right sides of the array pivoted at a certain point. 
There are two cases 
1) what we need to observe is that from a certain point if the net sum of elements on its left and right sides are same (i.e prefixSum and suffixSum are same from that element) then traversing in either way results in the desried outcome. 
2) if the prefix and suffix differ by 1 then it means we can still make the net array as 0's but it can only be possible by traversing one direction. 


# Complexity
- Time complexity:  O(N)

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def countValidSelections(self, nums: List[int]) -> int:
        suffixSum = sum(nums)
        prefixSum = 0
        res = 0
        for x in nums:
            if x == 0:
                if suffixSum == prefixSum:
                    res += 2
                elif suffixSum == prefixSum + 1 or suffixSum == prefixSum - 1:
                    res += 1
            suffixSum -= x
            prefixSum += x
        return res
```
```javascript []
var countValidSelections = function(nums) {
    let prefix = 0;
    let suffix = 0;
    nums.forEach((ele) => suffix += ele);
    let res = 0;
    for (let x of nums){
        if (x == 0){
            if (prefix == suffix) res += 2;
            else if(Math.abs(prefix-suffix) == 1) res += 1;
        }
        prefix += x;
        suffix -= x;
    }
    return res;
};
```