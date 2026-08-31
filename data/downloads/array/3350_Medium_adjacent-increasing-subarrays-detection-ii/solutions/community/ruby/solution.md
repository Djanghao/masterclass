# Easy binary search on answer solution || beats 100%

**Author:** be_fighter
**Votes:** 2
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6028699/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6028699/)

---


# Approach
#  Initialize dp Array
1. Purpose: To determine the lengths of all increasing subarrays ending at each position in nums.
2. The dp array stores at each index i the length of the longest increasing subarray that ends at i.
3. If nums[i] > nums[i - 1], then nums[i] can extend the increasing subarray ending at i-1. So, dp[i] = dp[i - 1] + 1.
4. Otherwise, dp[i] = 1 (because a new increasing subarray starts at i).
# Binary Search for the Maximum k
1. Goal: Use binary search to find the maximum possible k such that there exists an increasing subarray of length k in nums.
2. Initialize low = 1 and high = n / 2 (assuming that k should not exceed half the length of nums).
# Helper Function check
1. Purpose: For a given k, the check function verifies if there exists an increasing subarray of length k.
2. This function iterates through the dp array to see if there are two indices i and i + k such that both dp[i] >= k and dp[i + k] >= k.
3. If such a pair exists, it means that nums contains a subarray of length k with increasing values, so the function returns true.
Otherwise, it returns false.
# Binary Search Process
1. In each iteration of the binary search:
1. Calculate mid = low + (high - low) / 2.
2. Use check(dp, mid) to see if a subarray of length mid with increasing elements exists.
3. If check(dp, mid) is true, update ans to mid (as mid is a candidate for the maximum valid k) and search for a potentially larger value by setting low = mid + 1.
4. If check(dp, mid) is false, decrease the search space by setting high = mid - 1.
# Return Result
1. After the binary search completes, ans holds the maximum value of k for which there exists an increasing subarray of length k in nums.

# Complexity
- Time complexity:
O(N * logn)

- Space complexity:
O(N)

# Code
```cpp []
class Solution {
public:
    bool check(vector<int>&v,int k){
      for(int i=0;i<v.size()-k;i++){
        if(v[i]>=k && v[i+k]>=k){
            return true;
        }
      }
        return false;
    }
    int maxIncreasingSubarrays(vector<int>& nums) {
        
        int n=nums.size();
        if(n==2){
            return 1;
        }

        vector<int>dp(n,1);
        int last=nums[0];
        for(int i=1;i<nums.size();i++){
            if(nums[i]<=nums[i-1]){
                dp[i]=1;
            }
            else{
                dp[i]=dp[i-1]+1;
            }
        }

        int ans=1;
        int low=1,high=n/2;

        while(low<=high){
            int mid=low+(high-low)/2;
            if(check(dp,mid)){
                ans=mid;
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
        return ans;        
    }
};
```
```java []
import java.util.*;

class Solution {
    public boolean check(List<Integer> v, int k) {
        for (int i = 0; i < v.size() - k; i++) {
            if (v.get(i) >= k && v.get(i + k) >= k) {
                return true;
            }
        }
        return false;
    }

    public int maxIncreasingSubarrays(int[] nums) {
        int n = nums.length;
        if (n == 2) {
            return 1;
        }

        List<Integer> dp = new ArrayList<>(Collections.nCopies(n, 1));
        for (int i = 1; i < n; i++) {
            if (nums[i] <= nums[i - 1]) {
                dp.set(i, 1);
            } else {
                dp.set(i, dp.get(i - 1) + 1);
            }
        }

        int ans = 1;
        int low = 1, high = n / 2;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (check(dp, mid)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}

```
```python []
class Solution:
    def check(self, v, k):
        for i in range(len(v) - k):
            if v[i] >= k and v[i + k] >= k:
                return True
        return False

    def maxIncreasingSubarrays(self, nums):
        n = len(nums)
        if n == 2:
            return 1

        dp = [1] * n
        for i in range(1, n):
            if nums[i] <= nums[i - 1]:
                dp[i] = 1
            else:
                dp[i] = dp[i - 1] + 1

        ans = 1
        low, high = 1, n // 2

        while low <= high:
            mid = low + (high - low) // 2
            if self.check(dp, mid):
                ans = mid
                low = mid + 1
            else:
                high = mid - 1
        return ans

```
```javascript []
class Solution {
    check(v, k) {
        for (let i = 0; i < v.length - k; i++) {
            if (v[i] >= k && v[i + k] >= k) {
                return true;
            }
        }
        return false;
    }

    maxIncreasingSubarrays(nums) {
        const n = nums.length;
        if (n === 2) {
            return 1;
        }

        const dp = Array(n).fill(1);
        for (let i = 1; i < n; i++) {
            if (nums[i] <= nums[i - 1]) {
                dp[i] = 1;
            } else {
                dp[i] = dp[i - 1] + 1;
            }
        }

        let ans = 1;
        let low = 1, high = Math.floor(n / 2);

        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            if (this.check(dp, mid)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }
}

```
![c2d27b08-ffbe-4bc6-8b29-5fc4d8effd5f_1723775276.9029489.jpeg](./images/0.jpeg)
