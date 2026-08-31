# Optimized Query Sum Solution in TypeScript

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/5275808/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/5275808/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I first sorting the nums array nums in ascending order. Then, I iterated through each query in the queries array. For each query, I initialized a sum variable and incremented it by adding elements from the sorted nums array until the sum was at most equal to the query value. Finally, I added the index of the last added element to the result array ans. This approach allowed me to find the minimum number of elements required to reach or exceed each query value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function answerQueries(nums: number[], queries: number[]): number[] {
    const nums2 = nums.sort((a, b) => a - b);
    let ans: number[] = [];

    for (let i = 0; i < queries.length; i++) {
      let j = 0;
      let sum = 0;
      while (sum <= queries[i]) {
        sum += nums2[j];
        j++;
      }
      ans.push(j - 1);
    }

    return ans;
};
```