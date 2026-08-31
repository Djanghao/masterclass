# Simple and Fast Solution using Sliding Window with 2 Pointers (JAVA & DART)

**Author:** m3n99
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5180373/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5180373/)

---

![c1ee5054-dd07-4caa-a7df-e21647cfae9e_1709942227.5165014.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to find the smallest subarray whose sum is at least the target value. A sliding window approach allows us to expand and contract the window to maintain the sum close to or above the target.


# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize Pointers and Variables:

    - left pointer to the start of the window.
    - total to keep track of the current sum within the window.
    - answer to store the minimum length found, initialized to an impossible large value (n + 1 where n is the length of the array).

2. Expand the Window:

    - Iterate through the array with a right pointer, adding nums[right] to total.

3. Contract the Window:

    - Whenever total is greater than or equal to target, update answer with the current window length (right - left + 1) if it is smaller than the current answer.
    - Subtract nums[left] from total and move the left pointer to the right to potentially find a smaller window.

4. Return Result:

    - If answer remains n + 1, it means no valid subarray was found, so return 0.
    - Otherwise, return the value of answer.
# Complexity
- Time complexity:**\uD835\uDC42(\uD835\uDC5B)**, because each element is processed at most twice (once by the right pointer and once by the left pointer).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:**O(1)**, as we are using a constant amount of extra space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []

public class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int answer = n+1; 
        int left = 0;
        int total = 0;

        for (int right = 0; right < n; right++) {
            total += nums[right];

            while (total >= target) {
                answer = Math.min(answer, right - left + 1);
                total -= nums[left];
                left++;
            }
        }

        return answer == n + 1 ? 0 : answer;
    }

}
```
```Dart []
class Solution {
  int minSubArrayLen(int target, List<int> nums) {
    int n = nums.length;
    int answer = n + 1;
    int left = 0; // start of sub
    int total = 0; // total sum

    for (int right = 0; right < n; right++) { // right moving pointer
      total += nums[right]; 

      while (total >= target) {
        answer = min(answer, right - left + 1); // +1 since arr start from 0
        total -= nums[left]; // start delete from left to reduce length
        left++;
      }
    }

    return answer == n + 1 ? 0 : answer;
  }
}
```