# Memoization and Tabulation Approach

**Author:** aayush21
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/4037941/](https://leetcode.com/problems/delete-and-earn/solutions/4037941/)

---

# Tabulation O(nlogn) 
```
function deleteAndEarn(nums: number[]): number {
  let n = nums.length
  let dp = new Array(n).fill(0) 

  nums.sort((a, b) => a - b)
 
  //Base case if the array has only one element you can delete it and earn 
  dp[n-1] = nums[n-1];

  for(let i = n-2; i >= 0; i--) { 
    let ifDeleted = 0; 
    let k = i; 

    while(k < nums.length && nums[k] === nums[i]) { 
      ifDeleted += nums[k]
      k++;
    } 

    while(k < nums.length && nums[k] === nums[i] + 1) { 
      k++;
    } 

    ifDeleted = k < nums.length ? ifDeleted + dp[k] : ifDeleted; 
    let ifNotDeleted = dp[i+1]; 

    dp[i] = Math.max(ifDeleted, ifNotDeleted)
  } 

  return dp[0];
};
```
# Memoization - O(nlogn)
```
function help(nums: number[], index: number, dp: number[]) { 
  //the base case if there are no elements return 0
  if (index >= nums.length) { 
    return 0;
  } 
  //cache hit
  if(dp[index] !== -1){ 
    return dp[index]
  }

  //include the sums of duplicate as well
  let currentSum = 0; 
  let i = index;
  while(nums[i] === nums[index]) { 
    currentSum += nums[i]; 
    i++;
  } 

  //skip all the elements > currentElement + 1
  while(nums[i] === nums[index] + 1) { 
    i++;
  } 

  //return max off 2 choices, either to delete that element or to not delete that
  //if you are deleting then add its value to the answer as well
  return dp[index] = Math.max(currentSum + help(nums, i, dp), help(nums, index+1, dp))
}

function deleteAndEarn(nums: number[]): number {
  //cache
  const dp = new Array(200001).fill(-1)
  //sort to get the duplicates adjacent
  nums.sort((a, b) => a - b)
  return help(nums, 0, dp)
};