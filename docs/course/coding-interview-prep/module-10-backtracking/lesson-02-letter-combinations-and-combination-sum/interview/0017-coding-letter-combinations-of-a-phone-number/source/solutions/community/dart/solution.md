# 🔥 🎯 ✨ SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5908110/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5908110/)

---


---

### **Intuition**
The problem involves generating all possible letter combinations for a given string of digits, where each digit maps to a set of characters, similar to a phone's keypad. This can be solved using a recursive backtracking approach, where we explore all the possible combinations by progressively appending characters corresponding to the digits.

---

### **Approach**
1. **Recursive Backtracking**: 
    - We start with an empty string and progressively append characters mapped to the first digit, then the second, and so on.
    - Once we reach the end of the input digits, we add the formed string to our result list.
  
2. **Edge Case**: If the input string is empty, the output is an empty list.

3. **Mapping Digits to Letters**: Each digit from 2 to 9 is mapped to specific characters. We use a dictionary or map to store these mappings.

---

### **Complexity**
- **Time Complexity**: \\(O(4^n \\cdot n)\\), where \\(n\\) is the length of the input digits string. The 4 comes from the fact that some digits (like 7 and 9) map to 4 letters. Each combination can take linear time to form.
- **Space Complexity**: \\(O(n)\\), the maximum depth of the recursion stack.

---

### **Code Implementations**


```dart []
class Solution {
  List<String> letterCombinations(String digits) {
    if (digits.isEmpty) return [];
    return _combine("", digits);
  }

  List<String> _combine(String prefix, String digits) {
    if (digits.isEmpty) return [prefix];

    String digit = digits[0];
    List<String> combinations = [];

    for (var letter in keyboard[digit]!.split('')) {
      combinations.addAll(_combine(prefix + letter, digits.substring(1)));
    }

    return combinations;
  }

  static const Map<String, String> keyboard = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
}
```


```python []
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        def backtrack(combination, next_digits):
            if not next_digits:
                output.append(combination)
            else:
                for letter in phone[next_digits[0]]:
                    backtrack(combination + letter, next_digits[1:])
        
        phone = {
            "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
            "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
        }
        output = []
        backtrack("", digits)
        return output
```


```java []
import java.util.*;

class Solution {
    public List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) return new ArrayList<>();
        List<String> result = new ArrayList<>();
        backtrack(result, "", digits);
        return result;
    }

    private void backtrack(List<String> result, String combination, String nextDigits) {
        if (nextDigits.isEmpty()) {
            result.add(combination);
        } else {
            String digit = nextDigits.substring(0, 1);
            String letters = keyboard.get(digit);
            for (int i = 0; i < letters.length(); i++) {
                backtrack(result, combination + letters.charAt(i), nextDigits.substring(1));
            }
        }
    }

    private static final Map<String, String> keyboard = new HashMap<>();
    static {
        keyboard.put("2", "abc");
        keyboard.put("3", "def");
        keyboard.put("4", "ghi");
        keyboard.put("5", "jkl");
        keyboard.put("6", "mno");
        keyboard.put("7", "pqrs");
        keyboard.put("8", "tuv");
        keyboard.put("9", "wxyz");
    }
}
```


```cpp []
class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        vector<string> result;
        backtrack(result, "", digits);
        return result;
    }
    
private:
    unordered_map<char, string> keyboard = {
        {'2', "abc"}, {'3', "def"}, {'4', "ghi"},
        {'5', "jkl"}, {'6', "mno"}, {'7', "pqrs"},
        {'8', "tuv"}, {'9', "wxyz"}
    };
    
    void backtrack(vector<string>& result, string combination, string nextDigits) {
        if (nextDigits.empty()) {
            result.push_back(combination);
        } else {
            string letters = keyboard[nextDigits[0]];
            for (char letter : letters) {
                backtrack(result, combination + letter, nextDigits.substr(1));
            }
        }
    }
};
```


```javascript []
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    
    const phone = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    };
    
    const result = [];
    
    const backtrack = (combination, next_digits) => {
        if (!next_digits.length) {
            result.push(combination);
        } else {
            const digit = next_digits[0];
            for (const letter of phone[digit]) {
                backtrack(combination + letter, next_digits.slice(1));
            }
        }
    };
    
    backtrack("", digits);
    return result;
};
```


```go []
func letterCombinations(digits string) []string {
    if len(digits) == 0 {
        return []string{}
    }

    phone := map[byte]string{
        '2': "abc", '3': "def", '4': "ghi", '5': "jkl",
        '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz",
    }
    
    var result []string
    var backtrack func(string, string)
    
    backtrack = func(combination string, next_digits string) {
        if len(next_digits) == 0 {
            result = append(result, combination)
        } else {
            letters := phone[next_digits[0]]
            for i := range letters {
                backtrack(combination + string(letters[i]), next_digits[1:])
            }
        }
    }
    
    backtrack("", digits)
    return result
}
```


```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const char* keypad[] = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

void backtrack(char** result, int* resultSize, char* combination, char* digits, int index) {
    if (digits[index] == '\\0') {
        result[*resultSize] = strdup(combination);
        (*resultSize)++;
        return;
    }
    
    const char* letters = keypad[digits[index] - '2'];
    for (int i = 0; letters[i] != '\\0'; i++) {
        int len = strlen(combination);
        combination[len] = letters[i];
        combination[len + 1] = '\\0';
        backtrack(result, resultSize, combination, digits, index + 1);
        combination[len] = '\\0';
    }
}

char** letterCombinations(char* digits, int* returnSize) {
    if (*digits == '\\0') {
        *returnSize = 0;
        return NULL;
    }

    char** result = malloc(1000 * sizeof(char*));
    *returnSize = 0;
    char combination[100] = "";
    backtrack(result, returnSize, combination, digits, 0);
    return result;
}
```

