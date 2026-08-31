# C++ - First Timers Explanation - Meet In Middle - Simplest Code!

**Author:** geekykant
**Votes:** 68
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2850095/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2850095/)

---

This is actually a simple concept - but can be little challenging first time you see it.
This was my first time, if you are too, good for you.

I have explained below just the way I understood this concept. Short and to point. No BS.

**Method 1: Naive Method - DP** (\u274C TLE)
* Memoization would be memory limit, since states include - pos, k, sum
* Handling -ve nos. is possible using `unordered_map<string, int>`, where we define a 
`key = pos + "#" + k + "#" + sum`, but not a good way.
```cpp
int totalSum;
int solve(vector<int>& nums, int sum, int k, int pos) {
    if (k == 0) return abs(2 * sum - totalSum);
    if (pos == nums.size()) return INT_MAX;

    int take = solve(nums, sum + nums[pos], k - 1, pos + 1);
    int dontTake = solve(nums, sum, k, pos + 1);

    return min(take, dontTake);
}
int minimumDifference(vector<int>& nums) {
    int n = nums.size();
    totalSum = accumulate(begin(nums), end(nums), 0);
    return solve(nums, 0, n / 2, 0);
}
```

**Method 2: Meet in the Middle:** \u2705
- Out of `N` length array, we first partition it as left and right arrays each of `N/2` length.
- Why? Because it works somewhat like divide and conquer technique.

**Step 0**: Pre-compute all the`subarray lengths` -> `subarray possible sum` on either N/2 sides.
Example: We have `nums = [3,9,7,3]`

**Left** (0 to N/2-1)
| subarray length | possible sums |
|-----------------|---------------|
| 0 ->            |  [0]          |
| 1 ->            |  [3, 9]       |
| 2 ->            |  [12]         |

**Right** (N/2 to N-1)
| subarray length | possible sums |
|-----------------|---------------|
| 0 ->            | [0]           |
| 1 ->            | [7, 3]        |
| 2 ->            | [10]          |

- Now think what we are going to do - we can take each `i` length `left` array sum and compare with each `n-i` length on `right side`.
- Can we do it better? Yes, `lower_bound` operation and `totalSum/2 - iLengthSubArrSum` can help us - since otherwise we will N^2 and also search which will cost us.

**Read the code now:**
```cpp
vector<vector<int>> findAllSubsetsSum(vector<int>& nums, int l, int r) {
    int totLengthOfSubarray = r - l + 1;
    vector<vector<int>> res(totLengthOfSubarray + 1);
    for (int i = 0; i < (1 << totLengthOfSubarray); i++) {
        int sum = 0, countOfChosenNos = 0;
        for (int j = 0; j < totLengthOfSubarray; j++) {
            if (i & (1 << j)) {
                sum += nums[l + j];
                countOfChosenNos++;
            }
        }
        res[countOfChosenNos].push_back(sum);
    }
    return res;
}

int minimumDifference(vector<int>& nums) {
    int totalSum = accumulate(begin(nums), end(nums), 0);
    int n = nums.size();

    auto left = findAllSubsetsSum(nums, 0, n / 2 - 1);
    auto right = findAllSubsetsSum(nums, n / 2, n - 1);
    int target = totalSum / 2, ans = INT_MAX;

    //we can take (0 to n/2) length numbers from left
    for (int i = 0; i <= n / 2; i++) {
        //now we take rest - (n/2-i) length from right, we sort it to binary search
        auto r = right[n / 2 - i];
        sort(begin(r), end(r));

        for (int curleftSum : left[i]) {
            int needSumFromRight = target - curleftSum;
            auto it = lower_bound(begin(r), end(r), needSumFromRight);
            if (it != end(r))
                ans = min(ans, abs(totalSum - 2 * (curleftSum + *it)));
        }
    }
    return ans;
}
```

**Q. Why is the minimum answer - `abs(totalSum - 2 * (curleftSum + *it))`?**
- `(curleftSum + *it)` is the sum of one side of our `N/2` elements. Consider this as sum `A`.
- The sum of other `N/2` elements would be `totalSum - A`. Correct?
- Absolute difference would be =  `abs((totalSum - A) - A)` =  `abs(totalSum - 2*A)` = `abs(totalSum - 2 * (curleftSum + *it))`, same as we want.

**Upvote if it helps :)**