# C# Detailed explanation ✅

**Author:** Ofekuch
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/5214873/](https://leetcode.com/problems/ugly-number-iii/solutions/5214873/)

---

**(Scroll down for an example)**

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Least Common Multiple (LCM): The problem involves finding the Nth ugly number, where an ugly number is one that is divisible by any of the given factors (a, b, or c). To efficiently find the Nth ugly number, we first calculate the least common multiples (LCM) of pairs of factors (ab, ac, and bc) to avoid counting duplicates.

Binary Search: We use binary search to find the Nth ugly number within a defined search range. We start with a range from 1 to a large upper bound (2000000000) and iteratively narrow down the range until we find the Nth ugly number.

Counting Ugly Numbers: Within each iteration of the binary search, we count the number of ugly numbers within the current range. We achieve this by calculating the count of numbers divisible by each factor individually and subtracting the counts of numbers divisible by each pair of factors to avoid double counting. Finally, we add back the count of numbers divisible by all three factors to ensure they are counted once.

Greatest Common Divisor (GCD): We use the greatest common divisor (GCD) function to calculate the LCM of pairs of factors, ensuring accurate calculations and preventing overflow.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    int a,b,c,n; 
    long ab,ac,bc,abc;

    // Method to find the Nth Ugly Number
    public int NthUglyNumber(int n, int a, int b, int c) {
        // Assign the input values to the class variables
        this.a = a;
        this.b = b;
        this.c = c;
        this.n = n;

        // Calculate the least common multiples of pairs of factors
        ab = ((long)a * b) / GCD(a, b);
        ac = ((long)a * c) / GCD(a, c);
        bc = ((long)b * c) / GCD(b, c);
        abc = ((long)a * bc) / GCD(a, bc);

        // Define the search range
        long l = 1, m = -1, ugly = 0;
        long r = 2000000000;

        // Binary search to find the Nth ugly number within the range
        while (l <= r) {
            m = l + (r - l) / 2;
            if (CountUgly(m)) {
                ugly = m;
                r = m - 1;  // Narrow down the search range
            } else {
                l = m + 1;  // Narrow down the search range
            }
        }
        return (int)ugly;  // Return the Nth ugly number
    }

    // Method to count the number of ugly numbers within a range
    bool CountUgly(long number) {
        // Initialize the count of ugly numbers
        long count = 0;

        // Calculate the count of numbers divisible by each factor
        count = number / a + number / b + number / c
                - number / ab - number / ac - number / bc
                + number / abc;

        // Check if the count of ugly numbers is greater than or equal to N
        return count >= n;
    }

    // Method to calculate the greatest common divisor (GCD) of two numbers
    long GCD(long num1, long num2) {
        while (num2 != 0) {  
            long temp = num2;  
            num2 = num1 % num2;  
            num1 = temp;  
        }  
        return num1;
    }
}


```


# Example:


n = 10
a = 2
b = 3
c = 5

**Step 1: Calculate LCM of Pairs of Factors**

ab = LCM(2, 3) = 6
ac = LCM(2, 5) = 10
bc = LCM(3, 5) = 15
abc = LCM(2, 15) = 30


**Step 2: Binary Search**

We initialize the search range l = 1 and r = 2000000000 and perform binary search to find the Nth ugly number.

Step 3: Iterative Process

Iteration 1: l = 1, r = 2000000000

Middle value: m = 1000000000
Count of ugly numbers <= m: Perform calculations using CountUgly(m)
Adjust search range based on the result
If count >= n: r = m - 1
If count < n: l = m + 1
Iteration 2: l = 1, r = 999999999

Middle value: m = 500000000
Adjust search range based on the result
Iteration 3: l = 1, r = 499999999

...
(continue the BS)
...

Middle value: m = 59
Adjust search range based on the result
Iteration 26: l = 1, r = 58

Middle value: m = 30
Adjust search range based on the result
Iteration 27: l = 1, r = 29

Middle value: m = 15
Adjust search range based on the result
Iteration 28: l = 1, r = 14

Middle value: m = 8
Adjust search range based on the result
Iteration 29: l = 1, r = 7

Middle value: m = 4
Adjust search range based on the result
Iteration 30: l = 1, r = 3

Middle value: m = 2
Adjust search range based on the result
Iteration 31: l = 3, r = 3

Middle value: m = 3
Adjust search range based on the result
Step 4: Final Result

The Nth ugly number is found to be 3