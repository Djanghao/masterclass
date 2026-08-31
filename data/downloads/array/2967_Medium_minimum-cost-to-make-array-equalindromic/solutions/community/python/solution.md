# (Explained with proofs in Video Solution ✅) (Median)( why not Mean❓ and why Till 10^4 🙋‍♂️)

**Author:** ayushnemmaniwar12
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4415399/](https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/solutions/4415399/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Building a palindromes to check ranges and proving why mean will fail

# ***Easy Video Explanation***

https://youtu.be/TQAc20MPW9M




# Approach
<!-- Describe your approach to solving the problem. -->

Our code defines a Solution class with functions to check if a number is a palindrome (isPal), calculate the cost of transforming an array to a target value (calculateCost), and find the minimum cost of transforming the array into a palindrome (minimumCost).

The minimumCost function first sorts the array and determines the middle value, considering odd and even lengths. It initializes the ans variable with a large value. If the middle value is a palindrome, it calculates the cost using the calculateCost function. Then, it explores the neighboring values to the left and right until it finds palindromes, updating left and right.

The final result is the minimum cost among the initial middle, left, and right values. The code utilizes long data types to handle large numbers and follows a similar logic in both Java and Python, adjusting syntax and data types accordingly.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    bool isPal(int n) {
        long long r, sum = 0, temp;
        temp = n;
        while (n > 0) {
            r = n % 10;
            sum = (sum * 10) + r;
            n = n / 10;
        }
        return temp == sum;
    }

    long long calculateCost(vector<int>& nums, int r) {
        long long cost = 0;
        for (int n : nums) {
            cost += abs(n - r);
        }
        return cost;
    }
    long long minimumCost(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        int middle = 0;
        if (n == 1) return 0;

        if (n % 2 != 0) {
            middle = nums[(n) / 2];
        } else {
            middle = (nums[(n + 1) / 2] + nums[n / 2]) / 2;
        }
        long long ans=1e15;
        if(isPal(middle)) {
            ans=calculateCost(nums,middle);
        }
        
        long long low=middle-1;
        long long high=middle+1;
        long long left=-1,right=-1;
        while(left==-1 || right==-1) {
            if(left==-1 && isPal(low)) {
                left=low;
            }
            if(right==-1 && isPal(high)) {
                right=high;
            }
            low--;
            high++;
        }

        return min(ans,min(calculateCost(nums,right),calculateCost(nums,left)));
    }
};
```
```python []
class Solution:
    def isPal(self, n):
        temp = n
        rev = 0
        while n > 0:
            rev = rev * 10 + n % 10
            n = n // 10
        return temp == rev

    def calculateCost(self, nums, r):
        cost = 0
        for n in nums:
            cost += abs(n - r)
        return cost

    def minimumCost(self, nums):
        nums.sort()
        n = len(nums)
        middle = 0
        if n == 1:
            return 0

        if n % 2 != 0:
            middle = nums[n // 2]
        else:
            middle = (nums[(n + 1) // 2] + nums[n // 2]) // 2
        ans = 1e15
        if self.isPal(middle):
            ans = self.calculateCost(nums, middle)

        low, high = middle - 1, middle + 1
        left, right = -1, -1
        while left == -1 or right == -1:
            if left == -1 and self.isPal(low):
                left = low
            if right == -1 and self.isPal(high):
                right = high
            low -= 1
            high += 1

        return min(ans, min(self.calculateCost(nums, right), self.calculateCost(nums, left)))

```
```Java []

import java.util.Arrays;

public class Solution {
    public boolean isPal(int n) {
        long r, sum = 0, temp;
        temp = n;
        while (n > 0) {
            r = n % 10;
            sum = (sum * 10) + r;
            n = n / 10;
        }
        return temp == sum;
    }

    public long calculateCost(int[] nums, int r) {
        long cost = 0;
        for (int n : nums) {
            cost += Math.abs(n - r);
        }
        return cost;
    }

    public long minimumCost(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        int middle = 0;
        if (n == 1) return 0;

        if (n % 2 != 0) {
            middle = nums[n / 2];
        } else {
            middle = (nums[(n + 1) / 2] + nums[n / 2]) / 2;
        }
        long ans = 1e15;
        if (isPal(middle)) {
            ans = calculateCost(nums, middle);
        }

        long low = middle - 1;
        long high = middle + 1;
        long left = -1, right = -1;
        while (left == -1 || right == -1) {
            if (left == -1 && isPal((int) low)) {
                left = low;
            }
            if (right == -1 && isPal((int) high)) {
                right = high;
            }
            low--;
            high++;
        }

        return Math.min(ans, Math.min(calculateCost(nums, (int) right), calculateCost(nums, (int) left)));
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00