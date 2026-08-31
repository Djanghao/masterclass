# TypeScript fastest solution- 100% fast

**Author:** hr665102
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/5109106/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/5109106/)

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
```
function maximumSum(arr: number[]): number {
    var curr_sum_del:number = arr[0];
    var curr_sum_no_del:number = arr[0];
    var max_sum : number = arr[0];
    for(let i=1;i<arr.length;i++){
        curr_sum_del = Math.max(curr_sum_del+arr[i],arr[i],curr_sum_no_del);
        curr_sum_no_del = Math.max(curr_sum_no_del+arr[i],arr[i]);
        max_sum = Math.max(max_sum,curr_sum_del,curr_sum_no_del);
    }
    return max_sum;
};
```