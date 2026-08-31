# [C++/java/C#] Two plus Two sorted || Straight forward Solutions

**Author:** nitishhsinghhh
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2066048/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2066048/)

---

# Solution

A 2/2 split produce small sums than 1/3 splits. The idea is to sort the digits in an order and then consume (1, 3) and (2, 4) combination and return their result.
```cpp []
// Solution 1
class Solution {
public:
    int minimumSum(int num) {
        vector<int> temp;
        while (num > 0) {
            temp.push_back(num % 10);
            num = num / 10;
        }
        sort(temp.begin(), temp.end());
        return temp[0] * 10 + temp[2] + temp[1] * 10 + temp[3];
    }
};
// Solution 2
class Solution {
public:
    int minimumSum(int num) {
        vector<int> dig;
        int cur = 0;
        while (num > 0) {
            dig.push_back(num % 10);
            num /= 10;
        }
        sort(dig.begin(), dig.end());
        int num1 = dig[0] * 10 + dig[2];
        int num2 = dig[1] * 10 + dig[3];
        return num1 + num2;
    }
};
```
```java []
class Solution {
    public int minimumSum(int num) {
        int[] dig = new int[4];
        int cur = 0;
        while (num > 0) {
            dig[cur++] = num % 10;
            num /= 10;
        }
        Arrays.sort(dig);
        int num1 = dig[0] * 10 + dig[2];
        int num2 = dig[1] * 10 + dig[3];
        return num1 + num2;
    }
}
```
```csharp []
// Solution 1
public class Solution {
    public int MinimumSum(int num) {
        char[] minimumArray = num.ToString().ToCharArray();
        Array.Sort(minimumArray);
        return ((minimumArray[0] - '0') * 10 + (minimumArray[2] - '0'))
                + ((minimumArray[1] - '0') * 10 + (minimumArray[3] - '0'));
    }
}

// Solution 2
// Collect the digits then sort the array
public class Solution {
    public int MinimumSum(int num) {
        int[] dig = new int[4];
        int cur = 0;
        while (num > 0) {
            dig[cur++] = num % 10;
            num /= 10;
        }
        Array.Sort(dig);
        return dig[0] * 10 + dig[2] + dig[1] * 10 + dig[3];
    }
}
```

# Frequently encountered in technical interviews
```
std::vector<std::pair<std::string, int>> interview_frequency = {{"Amazon", 1}};
```