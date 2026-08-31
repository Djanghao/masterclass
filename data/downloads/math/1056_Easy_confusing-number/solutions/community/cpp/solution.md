# C++ O(1) time and space complexity, with explanations

**Author:** yujui
**Votes:** 3
**Link:** [https://leetcode.com/problems/confusing-number/solutions/2989775/](https://leetcode.com/problems/confusing-number/solutions/2989775/)

---

# Intuition
This problem is mostly testing for your knowledge of how to extract the Least Significant Number and re-insert into a new number to "rotate" it, which can be done with some aritmethtic operations. The remaining part is just ability to check for the conditions it listed (2,3,5,7 are invalid, all else are valid as long as the new number after rotating is different from original input).

# Approach
Iterate through the input and extract the least significant number, check it for validity, and then push it into a variable where the new, rotated number will be formed. 
 
# Complexity
- Time complexity: O(1) constant time, since the input is 0 to  10^9. At most you will have 10 iterations of arithmetic operations.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), no additional space used.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool confusingNumber(int n) {
        int newNumber = 0;
        int oldNumber = n;
        while(n){ //Keep iterating until n is 0
            int x = n % 10; //Extract the least significant number (LSN)
            if (x == 2 || x == 3 || x == 4 || x == 5 || x == 7){ //Any time you see these numbers you know it is are invalid
                return false;
            }
            newNumber = newNumber * 10 + ((x == 6 || x == 9) ? (x == 6 ? 9 : 6): x); //LSN becomes most significant number, replace 6 with 9 and 9 wth 6
            n /= 10; //Remove the LSN and move on to the next number
        }
        return newNumber != oldNumber; //the newly constructed number cannot equal to original number
    }
};
```