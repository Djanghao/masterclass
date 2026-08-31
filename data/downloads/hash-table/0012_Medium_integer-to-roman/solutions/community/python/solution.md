# Easiest Beginner Friendly Sol || C++,  Java, Python

**Author:** singhabhinash
**Votes:** 385
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/3216797/](https://leetcode.com/problems/integer-to-roman/solutions/3216797/)

---

# Intuition of this Problem:
This code takes a non-negative integer as input and converts it into its corresponding Roman numeral representation. The approach used here is to store the Roman numeral values and their corresponding symbols in a vector of pairs. The algorithm then iterates through the vector and repeatedly adds the corresponding symbols to the result string while subtracting the corresponding value from the input integer until the input integer becomes zero.
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Initialize an empty string called Roman to store the resulting Roman numeral.
2. Create a vector of pairs called storeIntRoman, to store the Roman numeral values and their corresponding symbols.
3. Iterate through the storeIntRoman vector using a for loop.
4. For each pair, check if the input integer is greater than or equal to the Roman numeral value.
5. If it is, add the corresponding symbol to the Roman string and subtract the corresponding value from the input integer.
6. Repeat steps 4-5 until the input integer becomes zero.
7. Return the Roman string.
<!-- Describe your approach to solving the problem. -->

# Humble Request:
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188

![57jfh9.jpg](./images/0.jpeg)

# Code:
```C++ []
//Approach 1 : 
//time complexity - O(1) since the algorithm always iterates through a constant number of values (13 in this case).
//O(1) since the amount of extra space used is constant (the size of the storeIntRoman vector, which is also 13 in this case
class Solution {
public:
    string intToRoman(int num) {
        string Roman = "";
        // Creating vector of pairs to store the Roman numeral values and their corresponding symbols
        vector<pair<int, string>> storeIntRoman = {{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"}, {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}};
        // Iterating through the vector and repeatedly adds the corresponding symbols to the result string while subtracting the corresponding value from the input integer until the input integer becomes zero.
        for (int i = 0; i < storeIntRoman.size(); i++) {
            while (num >= storeIntRoman[i].first) {
                Roman += storeIntRoman[i].second;
                num -= storeIntRoman[i].first;
            }
        }
        return Roman;
    }
};
```
```C++ []
//Approach 2
//time complexity - O(1) since the algorithm always iterates through a constant number of values (13 in this case).
//O(1) since the amount of extra space used is constant (the size of the storeIntRoman vector, which is also 13 in this case
class Solution {
public:
    string intToRoman(int num) {
        string ones[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
        string tens[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        string hundreds[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        string thousands[]= {"", "M", "MM", "MMM"};
        
        string Roman =  thousands[num / 1000] + hundreds[(num % 1000) / 100] + tens[(num % 100) / 10] + ones[num % 10];
        return Roman;
    }
};
```
```Java []
class Solution {
    public String intToRoman(int num) {
        String Roman = "";
        int[][] storeIntRoman = {{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"}, {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}};
        for (int i = 0; i < storeIntRoman.length; i++) {
            while (num >= storeIntRoman[i][0]) {
                Roman += storeIntRoman[i][1];
                num -= storeIntRoman[i][0];
            }
        }
        return Roman;
    }
}

```
```Python []
class Solution:
    def intToRoman(self, num: int) -> str:
        Roman = ""
        storeIntRoman = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
        for i in range(len(storeIntRoman)):
            while num >= storeIntRoman[i][0]:
                Roman += storeIntRoman[i][1]
                num -= storeIntRoman[i][0]
        return Roman

```

# Time Complexity and Space Complexity:
- Time complexity: **O(13) = O(1)** - Approach 1

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(13) = O(1)** - Approach 1
<!-- Add your space complexity here, e.g. $$O(n)$$ -->