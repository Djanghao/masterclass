# Most optimized O(1) approach

**Author:** MainFrameKuznetSov
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5716056/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5716056/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Keep extracting digits of the numbers and do the following.
# Approach
<!-- Describe your approach to solving the problem. -->
1. Extract the Last Digit:
The code uses the modulus operator (% 10) to extract the last digit of each number (num1, num2, num3). Then, it removes the last digit from each number using integer division (/= 10).

2. Repeat for Each Digit:
This process is repeated to extract each subsequent digit from the end until we have extracted all four digits of each number.

3. Calculate the Key:
For each digit position (1st, 2nd, 3rd, 4th), the code calculates the minimum digit from num1, num2, and num3 and uses it to form the result key. The key is formed by multiplying each digit by its positional value (units, tens, hundreds, thousands).

4. Return the Key:
Finally, the key is returned after removing any leading zeros.

# Example
Input:
num1 = 528, num2 = 839, num3 = 45

Output:
348

Explanation:

1. After padding with leading zeros:

- num1 = 0528
- num2 = 0839
- num3 = 0045

2. Extract the digits:

- 1st digit: 0 (min of 0, 0, 0)
- 2nd digit: 3 (min of 5, 8, 4)
- 3rd digit: 4 (min of 2, 3, 5)
- 4th digit: 8 (min of 8, 9, 5)

3. Result: 0348 which is 348 without leading zeros.

# Complexity
- Time complexity:- $O(1)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int generateKey(int num1, int num2, int num3) {
        int f1=num1%10,f2=num2%10,f3=num3%10;
        num1/=10;
        num2/=10;
        num3/=10;
        int s1=num1%10,s2=num2%10,s3=num3%10;
        num1/=10;
        num2/=10;
        num3/=10;
        int t1=num1%10,t2=num2%10,t3=num3%10;
        num1/=10;
        num2/=10;
        num3/=10;
        int ans=min(f1,min(f2,f3))*1+min(s1,min(s2,s3))*10+min(t1,min(t2,t3))*100+min(num1,min(num2,num3))*1000;
        return ans;
    }
};
```