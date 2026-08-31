# Check if leap year

**Author:** vkhush
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/3478645/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/3478645/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Method 1: Using array of days of months
```
class Solution {
public:
    int numberOfDays(int year, int month) {
        
        int monthDays[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int result = monthDays[month - 1];

        if(month == 2 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0))           
            return result + 1; 

        return result;
    }
};
```

Method 2: using xor

```
class Solution {
public:

    int numberOfDays(int year, int month) {
        
        if(month == 2)
            return 28 + ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));

        return 31 - ((month <= 7) ^ (month & 1));
    }
};
```