# Classic Digit DP | Similar Problems

**Author:** then00bprogrammer
**Votes:** 76
**Link:** [https://leetcode.com/problems/count-of-integers/solutions/3594894/](https://leetcode.com/problems/count-of-integers/solutions/3594894/)

---

# Intuition
Since N<=1e22 so we can't count the numbers manually.

# Approach
1. let a = numbers between num1 and num2 with digitsum <= max_sum
2. let b = numbers between num1 and num2 with digitsum <= min_sum-1
3. a-b is the answer. Since a-b gives numbers with digitsum>min_sum-1 (since all the numbers lowers got subtracted) and digitsum<=max_sum.

# Detailed Explanation
The basic idea is to try all possible digits at every index without exceeding higher number while being equal to or more than lower number.
1. $$tight1$$ tells us if all the digits we've choosen so far are the lowest possible ones, so if $$tight1$$ is true we can't choose a digit less than *lowest digit allowed* at that index otherwise our number would become lower than *lowest number allowed*.
2. Hence if $$tight1$$ is true and we still choose *lowest digit allowed*, it remains true otherwise it becomes false i.e. lowest digit can be 0 in further places.
3. $$tight2$$ tells us if all the digits we've choosen so far are the highest possible ones, so if $$tight2$$ is true we can't choose a digit higher than *largest digit allowed* at that index otherwise our number would become higher than *largest number allowed*.
4. Similarly if $$tight2$$ is true and we still choose *largest digit allowed*, it remains true otherwise it becomes false i.e. largest digit can be 9 in further places.
# Code
```
const int MOD = 1e9 + 7;

class Solution {
    int dp[23][2][2][401];

    int countStrings(int i, bool tight1, bool tight2, int sum, string& num1, string& num2) {
        if (sum < 0) return 0;
        if (i == num2.size()) return 1;
        if (dp[i][tight1][tight2][sum] != -1) return dp[i][tight1][tight2][sum];

        int lo = tight1 ? num1[i] - '0' : 0;
        int hi = tight2 ? num2[i] - '0' : 9;

        int count = 0;
        for (int idx = lo; idx <= hi; idx++) {
            count = (count % MOD + countStrings(i + 1,
                     tight1 & (idx == lo), tight2 & (idx == hi),
                     sum - idx, num1, num2) % MOD) % MOD;
        }

        return dp[i][tight1][tight2][sum] = count;
    }

public:
    int count(string num1, string num2, int min_sum, int max_sum) {
        memset(dp, -1, sizeof(dp));
        int leadingZeroes = num2.length() - num1.length();
        string num1extended = string(leadingZeroes,'0')+num1;

        //Avoid dealing with different length numbers
        //If the numbers are 1 and 999 convert 1 into 001

        int total = countStrings(0, 1, 1, max_sum, num1extended, num2);
        int unnecessary = countStrings(0, 1, 1, min_sum - 1, num1extended, num2);
        int ans = (total - unnecessary + MOD) % MOD;
        
        return ans;
    }
};

```
# Complexity
- **Time complexity:**
O(10 * 2 * 2 * Number_Of_Digits * Sum)
i.e. O(Number_Of_Digits * Sum)

- **Space complexity:**
O(Number_Of_Digits * Sum) 
# Similar Problems:
1. [233. Number of Digit One](https://leetcode.com/problems/number-of-digit-one/?envType=list&envId=owsh7g4c)
2. [600. Non-negative Integers without Consecutive Ones](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/?envType=list&envId=owsh7g4c)
3. [902. Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/?envType=list&envId=owsh7g4c)
4. [1012. Numbers With Repeated Digits](https://leetcode.com/problems/numbers-with-repeated-digits/?envType=list&envId=owsh7g4c)
5. [1397. Find All Good Strings](https://leetcode.com/problems/find-all-good-strings/?envType=list&envId=owsh7g4c) (Very tough, prerequisite-KMP)
<!-- # Study Resources -->
<!-- - **Youtube** : Kartik Arora's [playlist on Digit DP](https://youtube.com/playlist?list=PLb3g_Z8nEv1hB69JL9K7KfEyK8iQNj9nX) -->
# Edit
- For Java Code people can refer to @hitzy's comment
- We don't need to reset dp array between min_sum and max_sum function calls, hence omitted that

