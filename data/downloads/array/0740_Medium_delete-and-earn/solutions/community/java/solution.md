# For top down DP fans, Java 2ms solution explained

**Author:** kai99
**Votes:** 61
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/284609/](https://leetcode.com/problems/delete-and-earn/solutions/284609/)

---

I'm adding my top down approach cause it seems that all solutions are going bottom up,

```
// top down DP solution
  public int deleteAndEarn(int[] nums) {
    // if we sort the array, we do not need to delete elements smaller than nums[idx] (ie nums[idx] - 1) because they are already computed 
    // and saved in memo, we only need to delete nums[idx] + 1 and we can do this simply by skipping them since the array is sorted
    Arrays.sort(nums);
    return deleteAndEarn(nums, 0, new int[nums.length]);
  }

  private int deleteAndEarn(int[] nums, int idx, int[] memo) {
    // if we reached the end of the array, we can not earn anymore, return 0
    if(idx == nums.length)
      return 0;

    if(memo[idx] == 0) {
      // delete and earn this element
      int earned = nums[idx];
      int skip = idx + 1;
      
      // simply add all similar values of nums[idx] to earned at once
      while(skip < nums.length && nums[skip] == nums[idx]) {
        earned += nums[idx];
        skip++;
      }

      // skip all elements = nums[idx] + 1
      // this is instead of deleting the elements = nums[idx] + 1
      // which does not alter the array and make the solution work
      while(skip < nums.length && nums[skip] == nums[idx] + 1)
        skip++;
      
      // recurse
      earned += deleteAndEarn(nums, skip, memo);

      // skip deleting and earning this element
      int skipped = deleteAndEarn(nums, idx + 1, memo);

      // return the max of the 2 values
      memo[idx] = Math.max(earned, skipped);
    }

    return memo[idx];
  }
  ```