# javascript solution using permutations

**Author:** js-coder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6124070/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6124070/)

---

# Code
```javascript []
var findMinimumTime = function (strength, K) {
  var permute = function (nums) {
    const result = [];
    const dfs = (i) => {
      if (i === nums.length) {
        result.push(nums.slice());
        return;
      }
      for (let j = i; j < nums.length; j++) {
        if (j !== i)
          [nums[i], nums[j]] = [nums[j], nums[i]];
        dfs(i + 1);
        if (j !== i)
          [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
      ;
    dfs(0);
    return result;
  };
  strength.sort((a, b) => a - b)
  let allPermutations = permute(strength)
  const n = strength.length;
  let minTime = Infinity;
  for (let perm of allPermutations) {
    let time = 0
      , factor = 1;
    for (const energy of perm) {
      const neededTime = Math.ceil(energy / factor);
      time += neededTime;
      factor += K;
    }
    minTime = Math.min(minTime, time);
  }
  return minTime;
// to understand the ceil part read below
  /* whenever we break a lock the energy increases as multiple of X 
  for each unit time. so if we want to break lock 5 , x =3, time = 2
  then we need (int) 5 / 3 ie 1sec for energy to become 3 and 
  another 1sec which is the ceiling part for energy to become 6 
  so that we can break lock 5.
  */
};

```