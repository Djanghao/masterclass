# [C++, Java, Python3] Simple Counting

**Author:** tojuna
**Votes:** 98
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/3445659/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/3445659/)

---


# Intuition
Since the range of numbers is small `-50 <= nums[i] <= 50`  we can use this to our advantage. Store counts of numbers smaller than 0 in a counter array and use that to find the `xth` smallest number.  

# Approach
Iterate over the counter array and sum the counts of each number. When the sum of counts is greater than or equal to `x` we have found out `xth` smallest number. If sum of counts is never greater than or equal to `x` there aren't enough negative numbers.
Line by line explanation:
1. `if nums[i] < 0: counter[nums[i] + 50] += 1` For negative numbers increment counter, -50 is mapped to 0, -1 is mapped to 49.
2. `if i - k >= 0 and nums[i - k] < 0: counter[nums[i - k] + 50] -= 1` Since we only have to consider a window of size k, we need to remove elements on the front of the sliding window. The front will be at  index `i - k`. Now since we only added negative numbers to the counter we'll remove only if `nums[i - k]` is negative.
3. `if i - k + 1 < 0: continue` This checks if the sliding window has atleast k elements
4. The rest of the code iterates over the `counter` array to find the `xth` smallest number.

# Complexity
- Time complexity: `O(n * 50)`

- Space complexity: `O(n - k + 1 + 50)`

# Code
**Python3**:
```
def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
    counter, ans = [0] * 50, [0] * (len(nums) - k + 1)
    for i in range(len(nums)):
        if nums[i] < 0: counter[nums[i] + 50] += 1
        if i - k >= 0 and nums[i - k] < 0: counter[nums[i - k] + 50] -= 1
        if i - k + 1 < 0: continue
        count = 0
        for j in range(50):
            count += counter[j]
            if count >= x:
                ans[i - k + 1] = j - 50
                break
    return ans
```

**C++**:
```
vector<int> getSubarrayBeauty(vector<int>& nums, int k, int x) {
    vector<int> ans(nums.size() - k + 1), counter(50);
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] < 0) counter[nums[i] + 50]++;
        if (i - k >= 0 && nums[i - k] < 0) counter[nums[i - k] + 50]--;
        if (i - k + 1 < 0) continue;
        for (int j = 0, count = 0; j < 50; j++) {
            count += counter[j];
            if (count >= x) {
                ans[i - k + 1] = j - 50;
                break;
            }
        }
    }
    return ans;
}
```

**C++ but more concise**:
```
vector<int> getSubarrayBeauty(vector<int>& nums, int k, int x) {
    vector<int> ans(nums.size() - k + 1), counter(50);
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] < 0) counter[nums[i] + 50]++;
        if (i - k >= 0 && nums[i - k] < 0) counter[nums[i - k] + 50]--;
        for (int j = 0, count = 0; j < 50 && count < x && i >= k - 1; j++)
            if((count += counter[j]) >= x)
                ans[i - k + 1] = j - 50;
    }
    return ans;
}
```
**Java**:
```
public int[] getSubarrayBeauty(int[] nums, int k, int x) {
    int[] counter = new int[50], ans = new int[nums.length - k + 1];;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] < 0) counter[nums[i] + 50]++;
        if (i - k >= 0 && nums[i - k] < 0) counter[nums[i - k] + 50]--;
        if (i - k + 1 < 0) continue;
        for (int j = 0, count = 0; j < 50; j++) {
            count += counter[j];
            if (count >= x) {
                ans[i - k + 1] = j - 50;
                break;
            }
        }
    }
    return ans;
}
```

**Java but more concise**:
```
public int[] getSubarrayBeauty(int[] nums, int k, int x) {
    int[] counter = new int[50], ans = new int[nums.length - k + 1];;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] < 0) counter[nums[i] + 50]++;
        if (i - k >= 0 && nums[i - k] < 0) counter[nums[i - k] + 50]--;
        for (int j = 0, count = 0; j < 50 && count < x && i >= k - 1; j++)
            if ((count += counter[j]) >= x)
                ans[i - k + 1] = j - 50;
    }
    return ans;
}
```

## Bonus:
Use `SortedList` in Python:
```
from sortedcontainers import SortedList
class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        sl, ans = SortedList(), []
        for i, y in enumerate(nums):
            sl.add(y)
            if len(sl) > k: sl.remove(nums[i - k])
            if i >= k - 1: ans.append(min(0, sl[x - 1]))
        return ans
```
Time Complexity: `O(nlogk)`