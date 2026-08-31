# Beats 100% 🔥💯 |Java|C++|Python

**Author:** raviparihar_
**Votes:** 13
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5393431/](https://leetcode.com/problems/three-consecutive-odds/solutions/5393431/)

---

Explanation:
Java- In This method efficiently checks for three consecutive odd numbers in a single pass through the array with a time complexity of O(n).

Initialization:
Two pointers left and right are initialized. left starts at 0 and right starts at n.

Binary Search Loop:
The while loop continues as long as left is less than or equal to right.
Calculate Midpoint:

Calculate the middle point mid using the formula mid = left + (right - left) / 2. This avoids potential overflow issues compared to using (left + right) / 2.
Calculate Current Sum:

Calculate the current sum of the first mid rows using the formula curr = mid * (mid + 1) / 2. This formula gives the sum of the first mid natural numbers.

Check Conditions:
If curr (the sum of the first mid numbers) is equal to n, it means we can form exactly mid complete rows. Return mid cast to an integer.
If curr is less than n, it means we can form more rows, so move the left pointer to mid + 1 to check higher values.
If curr is greater than n, it means we have too many rows, so move the right pointer to mid - 1 to check lower values.

Return Result:
When the loop exits, right will be the largest number of complete rows that can be formed with n coins. Return right cast to an integer.
Example Walkthrough:
Let's go through an example where n = 8.

Initialize left = 0 and right = 8.
Calculate mid = (0 + 8) / 2 = 4. Calculate curr = 4 * (4 + 1) / 2 = 10.
Since 10 > 8, set right = 4 - 1 = 3.
Calculate mid = (0 + 3) / 2 = 1. Calculate curr = 1 * (1 + 1) / 2 = 1.
Since 1 < 8, set left = 1 + 1 = 2.
Calculate mid = (2 + 3) / 2 = 2. Calculate curr = 2 * (2 + 1) / 2 = 3.
Since 3 < 8, set left = 2 + 1 = 3.
Calculate mid = (3 + 3) / 2 = 3. Calculate curr = 3 * (3 + 1) / 2 = 6.
Since 6 < 8, set left = 3 + 1 = 4.
Now left = 4 and right = 3, so the loop exits.
Finally, return right which is 3, meaning the maximum number of complete rows that can be formed with 8 coins is 3.

This approach ensures that we find the maximum number of complete rows efficiently using binary search, with a time complexity of O(log n).

```
class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int count = 0;
        for (int num : arr) {
            if (num % 2 != 0) {
                count++;
                if (count == 3) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
        return false;
    }
}
```
```
class Solution {
public:
    int arrangeCoins(int n) {
        long left = 0, right = n;
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long curr = mid * (mid + 1) / 2;
            
            if (curr == n) {
                return mid;
            }
            if (curr < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }
};
```
```
class Solution:
    def arrangeCoins(self, n: int) -> int:
        left, right = 0, n
        
        while left <= right:
            mid = left + (right - left) // 2
            curr = mid * (mid + 1) // 2
            
            if curr == n:
                return mid
            if curr < n:
                left = mid + 1
            else:
                right = mid - 1
        
        return right
```
![image](./images/0.jpeg)
