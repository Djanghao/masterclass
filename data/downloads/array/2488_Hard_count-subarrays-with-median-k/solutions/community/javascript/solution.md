# [Javascript] Count Left & Right Balance

**Author:** anna-hcj
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2851948/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2851948/)

---

**Solution: Count Left & Right Balance**

For a subarray to have median of `k`:
  1. The subarray must contain `k`.
  2. `k` must be the middle element (if odd) or lower mid element (if even).

Create subarrays revolving around `nums[i] = k`.

How do we find whether `k` is the mid/lower mid element?
*   Starting from `k`, count the "balance" on the left and right of `k`.
	*   If `nums[i] < k`, add `-1` to the balance.
	*   If `nums[i] > k`, add `1` to the balance.
* If `k` is the mid element, the left balance + right balance = `0`.
* If `k` is the lower mid element, left balance + right balance = `1`.

Store the count of left balances in a hashmap.
Go through each right balance,
  `Balance = 0`: Count the number of left balances that are equal to (`-right balance`)
  `Balance = 1`: Count the number of left balances that are equal to (`-right balance + 1`)

Time Complexity: `O(n)`
Space Complexity: `O(n)`
```
var countSubarrays = function(nums, k) {
  let n = nums.length, kIndex = nums.indexOf(k);
  let map = new Map(), leftBalance = 0;
  map.set(0, 1);
  for (let i = kIndex - 1; i >= 0; i--) {
    leftBalance += nums[i] > k ? 1 : -1;
    map.set(leftBalance, (map.get(leftBalance) || 0) + 1);
  }
  
  let rightBalance = 0, ans = 0;
  for (let j = kIndex; j < n; j++) {
    if (nums[j] !== k) rightBalance += nums[j] > k ? 1 : -1;
    let oddComplement = -rightBalance; // k = mid
    let evenComplement = -rightBalance + 1; // k = lower mid
    ans += (map.get(oddComplement) || 0);
    ans += (map.get(evenComplement) || 0);
  }
  return ans;
};
```