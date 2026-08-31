# Easy js solution

**Author:** Sirojiddin12
**Votes:** 1
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3825156/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3825156/)

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
/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
  let res=[];
  for(let i=1; i<=n/2; i++){
      if(isPrime(i) && isPrime(n-i)){
          res.push([i, n-i]);
      }
  }  
  return res;
};
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}
```