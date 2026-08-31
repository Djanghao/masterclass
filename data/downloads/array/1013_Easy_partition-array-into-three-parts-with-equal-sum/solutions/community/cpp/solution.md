# 🚀 Beats 100% | Java, C++, Python | O(n) solution explained

**Author:** wallandteen
**Votes:** 18
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/3489641/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/3489641/)

---

> \u26A0\uFE0F **Disclaimer**: The original solution was crafted in Java. Thus, when we mention "Beats 100%" it applies specifically to Java submissions. The performance may vary for other languages.

Dont forget to upvote if you like the content below. \uD83D\uDE43

# Intuition
The problem asks us to divide the given array into three parts with equal sums. The key insight is that if the total sum of the array is not divisible by 3, then it is impossible to divide it into three parts with equal sums. Otherwise, we can try to find the three parts with equal sums.

# Approach
We start by calculating the total sum of the array. If it is not divisible by 3, we return `false` immediately. Otherwise, we set the target sum for each part as the total sum divided by 3.

Next, we iterate through the array and keep a running sum `currentSum` and a count of parts `count` with the sum equal to the target. For each number, we add it to `currentSum` and then check if `currentSum` is equal to the target. If it is, we reset `currentSum` to 0 and increment `count`.

If `count` reaches 2 before the end of the array, we return `true`, as the sum of the remaining part of the array will be equal to the target (because the total sum is divisible by 3).

Note that we need to stop the loop at the second-to-last element to ensure that there is at least one element left for the third part of the array. This is because the problem requires the array to be divided into three parts.

# Complexity Analysis
- Time complexity: The time complexity is $$O(n)$$, where $$n$$ is the length of the array, as we need to iterate through the array twice: once for calculating the total sum and once for finding the parts.
- Space complexity: The space complexity is $$O(1)$$, as we use only a constant amount of extra space for storing the total sum, target sum, running sum, and count.

# Code
```java []
class Solution {
    public boolean canThreePartsEqualSum(int[] arr) {
        int sum = 0;
        for (int n: arr) {
            sum += n;
        }

        if (sum % 3 != 0) {
            return false;
        }

        int target = sum / 3;
        int currentSum = 0;
        int count = 0;

        for (int i = 0; i < arr.length - 1; i++) {
            currentSum += arr[i];
            if (currentSum == target) {
                currentSum = 0;
                count++;
                if (count == 2) {
                    return true;
                }
            }
        }

        return false;
    }
}
```
``` cpp []
class Solution {
public:
    bool canThreePartsEqualSum(vector<int>& arr) {
        int total_sum = accumulate(arr.begin(), arr.end(), 0);
        if (total_sum % 3 != 0) {
            return false;
        }

        int target = total_sum / 3;
        int current_sum = 0;
        int count = 0;

        for (int i = 0; i < arr.size() - 1; i++) {
            current_sum += arr[i];
            if (current_sum == target) {
                current_sum = 0;
                count++;
                if (count == 2) {
                    return true;
                }
            }
        }

        return false;
    }
};
```
``` python []
class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        total_sum = sum(arr)
        if total_sum % 3 != 0:
            return False

        target = total_sum // 3
        current_sum = 0
        count = 0

        for i in range(len(arr) - 1):
            current_sum += arr[i]
            if current_sum == target:
                current_sum = 0
                count += 1
                if count == 2:
                    return True

        return False
```
