# Digit DP Solution

**Author:** dhavalkumar
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4519684/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4519684/)

---

# Complexity
- Time complexity: $$O(2.n) = O(34) \\approx O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2.n) = O(34) \\approx O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
int64_t memoization[17][2];

class Solution {
public:
    // Using Digit DP to count all the Powerful Integers till x
    long long countPowerfulIntegers(long long x, int limit, string suffix) {
        // Convert 'x' to a string representation
        string xStr = to_string(x);
        const int xSize = (int)xStr.size();
        
        // Initialize memoization array with -1 current_digits
        memset(memoization, -1, sizeof memoization);
        
        // Calculate the difference in lengths between 'x' and the suffix
        int indexDifference = xSize - (int)suffix.size();
        
        // If 'x' is shorter than the suffix, there are no powerful integers
        if (indexDifference < 0)
            return 0;
        
        // Define a recursive function to compute the count of powerful integers
        function<int64_t(int, int)> countRecursive = [&](int index, int tight) -> int64_t {
            if (index == xSize)
                return 1;
            
            // Retrieve the current_digit from memoization if previously calculated
            int64_t& answer = memoization[index][tight];
            if (answer != -1)
                return answer;
            
            answer = 0;
            if (index >= indexDifference) {
                int current_digit = suffix[index - indexDifference] - '0';
                if (current_digit <= limit) {
                    if (tight and current_digit <= xStr[index] - '0') {
                        answer += countRecursive(index + 1, current_digit == xStr[index] - '0');
                    } else if (!tight) {
                        answer += countRecursive(index + 1, 0);
                    }
                }
            } else if (tight) {
                int digit = xStr[index] - '0';
                for (int current_digit = 0; current_digit <= min(limit, digit); current_digit++) {
                    answer += countRecursive(index + 1, current_digit == digit);
                }
            } else {
                for (int current_digit = 0; current_digit <= min(limit, 9); current_digit++) {
                    answer += countRecursive(index + 1, 0);
                } 
            }
            
            return answer;
        };
        
        // Calculate the count of powerful integers in the range [0, x]
        return countRecursive(0, 1);
    }
    
    // Function to count powerful integers within a given range
    long long numberOfPowerfulInt(long long start, long long finish, int limit, string suffix) {
        // Calculate the count of powerful integers in the range [0, finish] and [0, start - 1]
        return countPowerfulIntegers(finish, limit, suffix) - countPowerfulIntegers(start - 1, limit, suffix);
    }
};
```

# Reference:
- [Digit DP codeforces blog](https://codeforces.com/blog/entry/53960)
- [Digit DP USACO blog](https://usaco.guide/gold/digit-dp?lang=cpp)
- [Introduction to Digit Dynamic Programming by Kartik Arora](https://www.youtube.com/watch?v=heUFId6Qd1A)

# Digit DP Problems:
- [Leetcode 2457. Minimum Addition to Make Integer Beautiful](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/description/)
- [Leetcode 2801. Count Stepping Numbers in Range](https://leetcode.com/problems/count-stepping-numbers-in-range/description/)
- [Leetcode 2376. Count Special Integers](https://leetcode.com/problems/count-special-integers/description/)
