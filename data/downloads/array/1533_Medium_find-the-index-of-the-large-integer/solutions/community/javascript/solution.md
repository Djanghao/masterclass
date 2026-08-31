# JavaScript binary search solution

**Author:** st-ones
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3063794/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3063794/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The fact that it's only one number is different allows to use binary search mechanism, because we can divide by 2 remains index candidates after each sums comparison. 

# Approach
<!-- Describe your approach to solving the problem. -->
Classic binary search algo.
1. set `left = 0` and `rigth = n - 1`
2. while `left < right`
    - calculate `mid`
    - be sure that `compareSub` get equals number of indexes from `l to r` and `x to y`
    - if `compareSub === 0` return `mid`
    - else update `left` and `right`
3. return `left`
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log(n))$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
var getIndex = function(reader) {
    const n = reader.length();
    let left = 0;
    let right = n - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        const compare = (right - left) % 2 === 0 
                ? reader.compareSub(left, mid, mid, right)
                : reader.compareSub(left, mid, mid + 1, right);
        if (compare === 0) {
            return mid;
        } else if (compare === 1) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    console.log(left, right);
    return left;
};
```