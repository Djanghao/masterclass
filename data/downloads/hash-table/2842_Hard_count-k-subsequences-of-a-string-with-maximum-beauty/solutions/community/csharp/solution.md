# C++ || Java || Python || C# || Beginner Friendly with Explanation || Mr. Robot

**Author:** LakshayBrejwal_1_0
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993553/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993553/)

---

# Solving the K Subsequences with Maximum Beauty

## Approach: Factorial and Combinations

### Explanation

In this solution, we aim to count the number of K subsequences with maximum beauty from a given string. To achieve this, we follow these steps:

1. We calculate the frequency of each character in the input string using an unordered map.

2. If the number of unique characters in the string is less than K, it's impossible to create K subsequences with maximum beauty. In this case, we return 0.

3. We create a vector, `charCounts`, to store the frequency of characters. We sort this vector in descending order to work with the most frequent characters first.

4. We initialize the `answer` variable to 1, which will store the final result.

5. We find the lowest character count among the K most frequent characters and store it in `lowestCharCount`.

6. We keep track of how many characters have the same frequency as `lowestCharCount` in `currentLowestCharCount`.

7. We iterate through the sorted `charCounts` vector, considering the K most frequent characters. For each character, we multiply it with the `answer`.

8. If the character count is equal to `lowestCharCount`, we increment `currentLowestCharCount` and keep track of how many characters have the same frequency as `lowestCharCount`.

9. Finally, we calculate the number of K subsequences with maximum beauty. We use a helper function, `f`, to calculate the factorial modulo a given `moduloValue`. The function `f` calculates the factorial for a given number using modular arithmetic to avoid integer overflow.

### Dry Run

Let's dry run an example to illustrate how the approach works:

Input:
- inputStr = "aabcbcbcc"
- kValue = 2

Step 1: Calculate character frequencies
- Frequency of 'a' = 2
- Frequency of 'b' = 3
- Frequency of 'c' = 4

Step 2: Sort character frequencies in descending order
- charCounts = [4, 3, 2]

Step 3: Initialize variables
- answer = 1
- tt (total unique characters) = 3
- lowestCharCount = 3
- tll (total characters with the same frequency as lowestCharCount) = 1
- currentLowestCharCount = 1

Step 4: Iterate through charCounts
- For 'c' (frequency 4):
  - Multiply answer by 4 (current answer = 4)
  - Not equal to lowestCharCount, so no change in currentLowestCharCount

- For 'b' (frequency 3):
  - Multiply answer by 3 (current answer = 12)
  - Equal to lowestCharCount, so increment currentLowestCharCount to 2

- For 'a' (frequency 2):
  - Multiply answer by 2 (current answer = 24)
  - Not equal to lowestCharCount, so no change in currentLowestCharCount

Step 5: Calculate K subsequences with maximum beauty
- Use the `f` function to calculate `f(1, 2, moduloValue)` (factorial of 1 modulo moduloValue)
- Multiply answer by the result of `f(1, 2, moduloValue)`
- Final answer = (24 * 1) % (10^9 + 7) = 24

Result: The number of K subsequences with maximum beauty in "aabcbcbcc" is 24.

### Easy-to-Understand Variable Names

In this solution, we use clear and descriptive variable names to enhance readability:

- `charCounts`: Stores character frequencies.
- `answer`: Stores the final result.
- `tt`: Total unique characters.
- `lowestCharCount`: The lowest character count among the K most frequent characters.
- `tll`: Total characters with the same frequency as `lowestCharCount`.
- `currentLowestCharCount`: Tracks the number of characters with the same frequency as `lowestCharCount`.

### Complexity Analysis

- Time Complexity: O(N*log(N)), where N is the number of unique characters in the input string. This complexity arises from sorting `charCounts`.
- Space Complexity: O(N), where N is the number of unique characters in the input string. This space is used to store the character frequencies in `charCounts`.

### Codes in (C++) (Java) (Python) (C#) (JavaScript)

```cpp []
class Solution {
public:
    // Helper function to calculate factorial modulo moduloValue
    int f(int totalElements, int selectedElements, int moduloValue) {
        if (selectedElements == 0)
            return 1;
    
        vector<int> temp(totalElements + 1);
        temp[0] = 1;
        
        // Calculate factorial modulo moduloValue for each number up to totalElements
        for (int i = 1

; i <= totalElements; i++)
            temp[i] = (1LL * temp[i - 1] * i) % moduloValue;
        
        int result = temp[totalElements];
        result = (1LL * result * help(temp[selectedElements], moduloValue)) % moduloValue;
        result = (1LL * result * help(temp[totalElements - selectedElements], moduloValue)) % moduloValue;
        
        return result;
    }

    // Helper function to calculate modular inverse using extended Euclidean algorithm
    int help(int num, int moduloValue) {
        int mod0 = moduloValue;
        int y = 0, x = 1;
        
        while (num > 1) {
            int quotient = num / moduloValue;
            int temp = moduloValue;
            moduloValue = num % moduloValue;
            num = temp;
            temp = y;
            y = x - quotient * y;
            x = temp;
        }
        
        if (x < 0)
            x += mod0;
        
        return x;
    }
    
    int countKSubsequencesWithMaxBeauty(string inputStr, int kValue) {
        int moduloValue = 1e9 + 7;
        unordered_map<char, int> mp;
        
        for (auto ch : inputStr) {
            mp[ch]++;
        }
        
        if (mp.size() < kValue) {
            return 0;
        }
        
        vector<int> charCounts;
        for (auto charCountPair : mp) {
            charCounts.push_back(charCountPair.second);
        }
        
        sort(charCounts.begin(), charCounts.end());
        reverse(charCounts.begin(), charCounts.end());
        
        int answer = 1;
        int tt = charCounts.size();
        int lowestCharCount = charCounts[kValue - 1];
        int tll = 0, currentLowestCharCount = 0;
        
        for (int i = 0; i < tt; i++) {
            if (i < kValue) {
                answer = (1LL * answer * charCounts[i]) % moduloValue;
                if (charCounts[i] == lowestCharCount) {
                    currentLowestCharCount++;
                }
            }
            
            if (charCounts[i] == lowestCharCount) {
                tll++;
            }
        }
        
        answer = (1LL * answer * f(tll, currentLowestCharCount, moduloValue)) % moduloValue;
        return answer;
    }
};
```

```java []
class Solution {
    // Helper function to calculate factorial modulo moduloValue
    private int f(int totalElements, int selectedElements, int moduloValue) {
        if (selectedElements == 0)
            return 1;

        int[] temp = new int[totalElements + 1];
        temp[0] = 1;

        // Calculate factorial modulo moduloValue for each number up to totalElements
        for (int i = 1; i <= totalElements; i++)
            temp[i] = (int) (1L * temp[i - 1] * i % moduloValue);

        int result = temp[totalElements];
        result = (int) (1L * result * help(temp[selectedElements], moduloValue) % moduloValue);
        result = (int) (1L * result * help(temp[totalElements - selectedElements], moduloValue) % moduloValue);

        return result;
    }

    // Helper function to calculate modular inverse using extended Euclidean algorithm
    private int help(int num, int moduloValue) {
        int mod0 = moduloValue;
        int y = 0, x = 1;

        while (num > 1) {
            int quotient = num / moduloValue;
            int temp = moduloValue;
            moduloValue = num % moduloValue;
            num = temp;
            temp = y;
            y = x - quotient * y;
            x = temp;
        }

        if (x < 0)
            x += mod0;

        return x;
    }

    public int countKSubsequencesWithMaxBeauty(String inputStr, int kValue) {
        int moduloValue = 1_000_000_007;
        HashMap<Character, Integer> mp = new HashMap<>();

        for (char ch : inputStr.toCharArray()) {
            mp.put(ch, mp.getOrDefault(ch, 0) + 1);
        }

        if (mp.size() < kValue) {
            return 0;
        }

        List<Integer> charCounts = new ArrayList<>(mp.values());
        charCounts.sort(Collections.reverseOrder());

        int answer = 1;
        int tt = charCounts.size();
        int lowestCharCount = charCounts.get(kValue - 1);
        int tll = 0, currentLowestCharCount = 0;

        for (int i = 0; i < tt; i++) {
            if (i < kValue) {
                answer = (int) (1L * answer * charCounts.get(i) % moduloValue);
                if (charCounts.get(i) == lowestCharCount) {
                    currentLowestCharCount++;
                }
            }

            if (charCounts.get(i) == lowestCharCount) {
                tll++;
            }
        }

        answer = (int) (1L * answer * f(tll, currentLowestCharCount, moduloValue) % moduloValue);
        return answer;
    }
}
```

```python []
class Solution:
    def f(self, totalElements, selectedElements, moduloValue):
        if selectedElements == 0:
            return 1

        temp = [0] * (totalElements + 1)
        temp[0] = 1

        # Calculate factorial modulo moduloValue for each number up to totalElements
        for i in range(1, totalElements + 1):
            temp[i] = (temp[i - 1] * i) % moduloValue

        result = temp[totalElements]
        result = (result * self.help(temp[selectedElements], moduloValue)) % moduloValue
        result = (result * self.help(temp[totalElements - selectedElements], moduloValue)) % moduloValue

        return result

    def help(self, num, moduloValue):
        mod0 = moduloValue
        y, x = 0, 1

        while num > 1:
            quotient = num // moduloValue
            temp = moduloValue
            moduloValue = num % moduloValue
            num = temp
            temp = y
            y = x - quotient * y
            x = temp

        if x < 0:
            x += mod0

        return x

    def countKSubsequencesWithMaxBeauty(self, inputStr, kValue):
        moduloValue = 10 ** 9 + 7
        mp = {}

        for ch in inputStr:
            if ch in mp:
                mp[ch] += 1
            else:
                mp[ch] = 1

        if len(mp) < kValue:
            return 0

        charCounts = list(mp.values())
        charCounts.sort(reverse=True)

        answer = 1
        tt = len(charCounts)
        lowestCharCount = charCounts[kValue - 1]
        tll, currentLowestCharCount = 0, 0

        for i in range(tt):
            if i < kValue:
                answer = (answer * charCounts[i]) % moduloValue
                if charCounts[i] == lowestCharCount:
                    currentLowestCharCount += 1

            if charCounts[i] == lowestCharCount:
                tll += 1

        answer = (answer * self.f(tll, currentLowestCharCount, moduloValue)) % moduloValue
        return answer
```

```csharp []
public class Solution {
    // Helper function to calculate factorial modulo moduloValue
    private int f(int totalElements, int selectedElements, int moduloValue) {
        if (selectedElements == 0)
            return 1;

        int[] temp = new int[totalElements + 1];
        temp[0] = 1;

        // Calculate factorial modulo moduloValue for each number up to totalElements
        for (int i = 1; i <= totalElements; i++)
            temp[i] = (int) (1L * temp[i - 1] * i % moduloValue);j

        int result = temp[totalElements];
        result = (int) (1L * result * help(temp[selectedElements], moduloValue) % moduloValue);
        result = (int) (1L * result * help(temp[totalElements - selectedElements], moduloValue) % moduloValue);

        return result;
    }

    // Helper function to calculate modular inverse using extended Euclidean algorithm
    private int help(int num, int moduloValue) {
        int mod0 = moduloValue;
        int y = 0, x = 1;

        while (num > 1) {
            int quotient = num / moduloValue;
            int temp = moduloValue;
            moduloValue = num % moduloValue;
            num = temp;
            temp = y;
            y = x - quotient * y;
            x = temp;
        }

        if (x < 0)
            x += mod0;

        return x;
    }

    public int CountKSubsequencesWithMaxBeauty(string inputStr, int kValue) {
        int moduloValue = 1_000_000_007;
        Dictionary<char, int> mp = new Dictionary<char, int>();

        foreach (char ch in inputStr) {
            if (mp.ContainsKey(ch))
                mp[ch]++;
            else
                mp[ch] = 1;
        }

        if (mp.Count < kValue) {
            return 0;
        }

        List<int> charCounts = mp.Values.ToList();
        charCounts.Sort();
        charCounts.Reverse();

        int answer = 1;
        int tt = charCounts.Count;
        int lowestCharCount = charCounts[kValue - 1];
        int tll = 0, currentLowestCharCount = 0;

        for (int i = 0; i < tt; i++) {
            if (i < kValue) {
                answer = (int) (1L * answer * charCounts[i] % moduloValue);
                if (charCounts[i] == lowestCharCount) {
                    currentLowestCharCount++;
                }
            }

            if (charCounts[i] == lowestCharCount) {
                tll++;
            }
        }

        answer = (int) (1L * answer * f(tll, currentLowestCharCount, moduloValue) % moduloValue);
        return answer;
    }
}
```

```javascript []
// JS Code Updating Soon
```

| Language | Runtime | Memory |
|----------|---------|--------|
| C++      | 42 ms  | 13 MB |
| Java     | 27 ms  | 45 MB |
| Python   | 139 ms  | 18 MB |
| C#       | 83 ms  | 43 MB |
| JavaScript | 63 ms | 44 MB |

---


# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)

# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR. ROBOT SIGNING OFF*