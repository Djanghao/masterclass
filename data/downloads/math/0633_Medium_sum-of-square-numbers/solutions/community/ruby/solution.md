# Simple sqrt, two pointer solution

**Author:** amkumar0301
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5326092/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5326092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Look for two numbers between 0 and sqrt of c. take two pointers and move them based on your current result. If it's greater than `c` move the right pointer to <- direction that will decrease the number if it's less then `c` move the left pointer to -> direction that will increase the value. 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(sqrt(n))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```javascript []
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let low = 0;
    let high = parseInt(Math.sqrt(c));
    while(low <= high){
        let sq_sum = low*low + high*high
        if(sq_sum === c){
            return true;
        }else if(sq_sum < c){
            low += 1;
        }else{
            high -= 1;
        }
    }
    return false;
};
```
```ruby []
# @param {Integer} c
# @return {Boolean}
def judge_square_sum(c)
    left = 0
    right = Math.sqrt(c).to_i

    while left <= right
        square_sum = left*left + right*right
        return true if  square_sum == c
        
        if square_sum > c
            right -= 1
        else
            left += 1
        end
    end
    false
end
```