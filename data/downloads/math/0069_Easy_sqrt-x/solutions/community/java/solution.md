# Easy Explained Solution - Beats 100%

**Author:** deepankyadav
**Votes:** 1050
**Link:** [https://leetcode.com/problems/sqrtx/solutions/3706594/](https://leetcode.com/problems/sqrtx/solutions/3706594/)

---

## ***Please Upvote my solution, if you find it helpful ;)***

# Intuition
We want to find the square root of a given non-negative integer x. Instead of using a traditional approach like repeatedly subtracting numbers until we reach 0 or using a library function, we'll use a smarter method called "Binary Search." Binary Search helps us quickly find the square root by repeatedly narrowing down the search range.

# Approach
1. We first check if x is 0 or 1. If it is, we know that the square root of 0 and 1 is 0 and 1 respectively, so we directly return x.

1. For any other value of x, we set up a search range between 1 and x. We initialize two variables start and end to represent the range.

1. Now comes the clever part: We use a while loop to repeatedly divide the search range in half (Binary Search) to find the square root.

1. In each iteration of the loop, we calculate the middle value mid using the formula **start + (end - start) / 2**. This formula ensures that we don't encounter any integer overflow when dealing with large values of x.

1. Next, we calculate the square of mid and compare it with x.

1. If the square of mid is greater than x, we know the square root lies in the lower half of the search range. So, we move the end pointer to the left to narrow down the search range.

1. If the square of mid is equal to x, we have found the square root! So, we return mid as the answer.

1. If the square of mid is less than x, we know the square root lies in the upper half of the search range. So, we move the start pointer to the right to continue the search.

1. We repeat steps 4 to 8 until the start pointer becomes greater than the end pointer. At this point, we have found the floor value of the square root, and end holds that value.

1. To ensure that we return the correct floor value of the square root, we round down the value of end to the nearest integer using the Math.round() method.


# Complexity
- Time complexity:
The time complexity of this approach is $$O(logN)$$. It's very efficient because Binary Search reduces the search range by half in each iteration, making the search faster.

- Space complexity:
The space complexity is $$O(1)$$, which means the amount of extra memory used is constant, regardless of the input. We only use a few variables to store the search range and the middle value during the computation.

# Code
```java []
class Solution {
    public int mySqrt(int x) {
        // For special cases when x is 0 or 1, return x.
        if (x == 0 || x == 1)
            return x;

        // Initialize the search range for the square root.
        int start = 1;
        int end = x;
        int mid = -1;

        // Perform binary search to find the square root of x.
        while (start <= end) {
            // Calculate the middle point using "start + (end - start) / 2" to avoid integer overflow.
            mid = start + (end - start) / 2;

            // If the square of the middle value is greater than x, move the "end" to the left (mid - 1).
            if ((long) mid * mid > (long) x)
                end = mid - 1;
            else if (mid * mid == x)
                // If the square of the middle value is equal to x, we found the square root.
                return mid;
            else
                // If the square of the middle value is less than x, move the "start" to the right (mid + 1).
                start = mid + 1;
        }

        // The loop ends when "start" becomes greater than "end", and "end" is the integer value of the square root.
        // However, since we might have been using integer division in the calculations,
        // we round down the value of "end" to the nearest integer to get the correct square root.
        return Math.round(end);
    }
}

```

```C++ []
class Solution {
public:
    int mySqrt(int x) {
        // For special cases when x is 0 or 1, return x.
        if (x == 0 || x == 1)
            return x;
        
        // Initialize the search range for the square root.
        int start = 1;
        int end = x;
        int mid = -1;
        
        // Perform binary search to find the square root of x.
        while (start <= end) {
            // Calculate the middle point using "start + (end - start) / 2" to avoid integer overflow.
            mid = start + (end - start) / 2;
            
            // Convert mid to long to handle large values without overflow.
            long long square = static_cast<long long>(mid) * mid;
            
            // If the square of the middle value is greater than x, move the "end" to the left (mid - 1).
            if (square > x)
                end = mid - 1;
            else if (square == x)
                // If the square of the middle value is equal to x, we found the square root.
                return mid;
            else
                // If the square of the middle value is less than x, move the "start" to the right (mid + 1).
                start = mid + 1;
        }
        
        // The loop ends when "start" becomes greater than "end", and "end" is the integer value of the square root.
        // However, since we might have been using integer division in the calculations,
        // we round down the value of "end" to the nearest integer to get the correct square root.
        return static_cast<int>(std::round(end));
    }
};
```
## ***Please Upvote my solution, if you find it helpful ;)***
![6a87bc25-d70b-424f-9e60-7da6f345b82a_1673875931.8933976.jpeg](./images/0.jpeg)

