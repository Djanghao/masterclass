# Daily Challenge Day-1 Easy Approach  😍😍😍

**Author:** 710sejal
**Votes:** 7
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702665/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3702665/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is to distribute bags of cookies among a given number of children such that the unfairness (maximum number of cookies obtained by any child) is minimized. The code uses a recursive backtracking approach to explore all possible distributions and find the minimum unfairness.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an array sum of length k to keep track of the number of cookies each child receives in different distributions
2. Initialize a variable minUnfairness to track the minimum unfairness among all distributions, and set it to Infinity.
3. Define a recursive function distribution that takes a parameter n, representing the current index of the bag in the cookies array.
4. In the distribution function:
   - Check if n is equal to the length of the cookies array. If true, calculate the maximum number of cookies obtained by any child using Math.max(...sum).
   - Update minUnfairness to be the minimum of the current minUnfairness and the calculated maximum.
   - Iterate through the children (from 0 to k-1) and do the following:
        - Add the n-th bag's cookies to the i-th child's sum by incrementing sum[i] with cookies[n].
        - Add the n-th bag's cookies to the i-th child's sum by incrementing sum[i] with cookies[n].
        - Subtract the n-th bag's cookies from the i-th child's sum by decrementing sum[i] with cookies[n].

5. Call the distribution function initially with n set to 0 to start the distribution process.
6. After exploring all possible distributions, return the minimum unfairness stored in the variable minUnfairness.

The approach uses recursion to explore different distributions of cookies among the children. By keeping track of the maximum number of cookies each child receives in each distribution and updating the minimum unfairness, it finds the optimal solution with the minimum unfairness among all distributions.

# Complexity
- Time complexity:O(k^(n+1))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(k^(n+1))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
## Dart Solution
```
class Solution {
  int distributeCookies(List<int> cookies, int k) {
      List<int> sum = List<int>.filled(k, 0);
      int ans = 1000000;
      void distribute(int n){
          if (n == cookies.length){
              int max = sum.reduce((a, b) => a > b ? a : b);
              ans = ans < max ? ans : max;
              return;
          }
          for (int i = 0; i < k; i++){
              sum[i] += cookies[n];
              distribute(n + 1);
              sum[i] -= cookies[n];
          }
      }
      distribute(0);
      return ans;
  }
}
```

## TypeScript Solution
 ```
 function distributeCookies(cookies: number[], k: number): number {
     let sum = new Array(k).fill(0);
    let ans = Infinity;
    const distribution = (n) => {
        if(n === cookies.length){
            const max = Math.max(...sum);
            ans = Math.min(ans,max);
            return;
        }
        for(let i=0;i<k;i++){
            sum[i] += cookies[n];
            distribution(n+1);
            sum[i] -= cookies[n];
        }
    }
    
    distribution(0)
    return ans
};
```

![Bill Murray Upvote](./images/0.gif&ehk=Qe7MtFmTQXVAHWoIuDgOlA4AyT6k7nm%2f%2fr6nmKwavns%3d&risl=&pid=ImgRaw&r=0)
