# ✅Beats 100%- C++, JAVA, Python, JavaScript || Easiest Solutions with explanation || 2-Approach

**Author:** Vivekkrsk
**Votes:** 51
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4448978/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4448978/)

---

---

# **Please Upvote If It Is Helpfull**

---

# Approach
<!-- Describe your approach to solving the problem. -->

1. **Initialize Counters:**
   - Create two counters: `countForAlternate0` and `countForAlternate1` to track the number of changes needed for two possible alternating patterns:
     - `countForAlternate0`: Counts changes for making the string start with 0 and alternate with 1s.
     - `countForAlternate1`: Counts changes for making the string start with 1 and alternate with 0s.

2. **Iterate Through String:**
   - Iterate through each character in the string:
     - If the index is even:
       - If the character is '0', increment `countForAlternate1` (need to change to 1).
       - If the character is '1', increment `countForAlternate0` (need to change to 0).
     - If the index is odd:
       - If the character is '0', increment `countForAlternate0` (already a 0, no need to change).
       - If the character is '1', increment `countForAlternate1` (already a 1, no need to change).

3. **Find Minimum Operations:**
   - After the loop, return the minimum value between `countForAlternate0` and `countForAlternate1`, representing the minimum operations required to make the string alternating.

4. **Key Idea:**
   - The code exploits the fact that there are only two possible alternating patterns.
   - It efficiently tracks the changes needed for both patterns simultaneously and chooses the one with the least operations.

5. **Time and Space Complexity:**
   - Time complexity: O(n), where n is the length of the string, as it iterates through the string once.
   - Space complexity: O(1), as it uses a constant amount of extra space for the counters.


# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```C++ []
class Solution {
public:
    int minOperations(string s) {
        int countForAlternate0 = 0;
        int countForAlternate1 = 0;
        
        for (int i = 0; i < s.size(); i++) {
            if (i % 2 == 0) {
                if (s[i] == '0') {
                    countForAlternate1++;
                } else {
                    countForAlternate0++;
                }
            } else {
                if (s[i] == '1') {
                    countForAlternate1++;
                } else {
                    countForAlternate0++;
                }
            }
        }
        
        return min(countForAlternate0, countForAlternate1);
    }
};

```
```JAVA []
public class Solution {
    public int minOperations(String s) {
        int countForAlternate0 = 0;
        int countForAlternate1 = 0;

        for (int i = 0; i < s.length(); i++) {
            if (i % 2 == 0) {
                if (s.charAt(i) == '0') {
                    countForAlternate1++;
                } else {
                    countForAlternate0++;
                }
            } else {
                if (s.charAt(i) == '1') {
                    countForAlternate1++;
                } else {
                    countForAlternate0++;
                }
            }
        }

        return Math.min(countForAlternate0, countForAlternate1);
    }
}

```
```python []
def minOperations(s: str) -> int:
    countForAlternate0 = 0
    countForAlternate1 = 0

    for i, char in enumerate(s):
        if i % 2 == 0:
            if char == '0':
                countForAlternate1 += 1
            else:
                countForAlternate0 += 1
        else:
            if char == '1':
                countForAlternate1 += 1
            else:
                countForAlternate0 += 1

    return min(countForAlternate0, countForAlternate1)


```
```javascript []
function minOperations(s) {
    let countForAlternate0 = 0;
    let countForAlternate1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '0') {
                countForAlternate1++;
            } else {
                countForAlternate0++;
            }
        } else {
            if (s[i] === '1') {
                countForAlternate1++;
            } else {
                countForAlternate0++;
            }
        }
    }

    return Math.min(countForAlternate0, countForAlternate1);
}


```
```ruby []
def min_operations(s)
    count_for_alternate0 = 0
    count_for_alternate1 = 0

    s.chars.each_with_index do |char, i|
        if i.even?
            count_for_alternate1 += 1 if char == '0'
            count_for_alternate0 += 1 if char == '1'
        else
            count_for_alternate1 += 1 if char == '1'
            count_for_alternate0 += 1 if char == '0'
        end
    end

    [count_for_alternate0, count_for_alternate1].min
end


```
```C# []
public class Solution {
    public int MinOperations(string s) {
        int countForAlternate0 = 0;
        int countForAlternate1 = 0;

        for (int i = 0; i < s.Length; i++) {
            if (i % 2 == 0) {
                if (s[i] == '0') {
                    countForAlternate1++;
                } else {
                    countForAlternate0++;
                }
            } else {
                if (s[i] == '1') {
                    countForAlternate1++;
                } else {
                    countForAlternate0++;
                }
            }
        }

        return Math.Min(countForAlternate0, countForAlternate1);
    }
}


```
```Go []
package main

import (
    "math"
)

func minOperations(s string) int {
    countForAlternate0 := 0
    countForAlternate1 := 0

    for i, char := range s {
        if i%2 == 0 {
            if char == '0' {
                countForAlternate1++
            } else {
                countForAlternate0++
            }
        } else {
            if char == '1' {
                countForAlternate1++
            } else {
                countForAlternate0++
            }
        }
    }

    return int(math.Min(float64(countForAlternate0), float64(countForAlternate1)))
}


```

# Approach
<!-- Describe your approach to solving the problem. -->

1. **Initialize Variables:**
   - Store the string length in `n`.
   - Initialize a counter `operationsCount` to 0 to track the number of changes needed.

2. **Iterate Through String:**
   - Iterate through each character in the string:
      - Check if the current character is different from the expected one based on the index (even indices should be '0', odd indices should be '1').
      - If they differ, increment `operationsCount`.

3. **Calculate Minimum Operations:**
   - After the loop, consider two possibilities:
     - Changing characters to match the pattern starting with '0' (represented by `operationsCount`).
     - Changing characters to match the pattern starting with '1' (represented by `n - operationsCount`, as the remaining characters would need to change).
   - Return the minimum of these two values, representing the least number of operations required.

4. **Key Idea:**
   - The code exploits the fact that there are only two possible alternating patterns, and the difference between them is exactly half the string length.
   - It efficiently tracks the changes needed for one pattern and infers the changes for the other.

5. **Time and Space Complexity:**
   - Time complexity: O(n), where n is the length of the string, as it iterates through the string once.
   - Space complexity: O(1), as it uses a constant amount of extra space for the variables.

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```C++ []
class Solution {
public:
    int minOperations(string s) {
        int n = s.size();
        int operationsCount = 0;

        for (int i = 0; i < n; i++) {
            // Check if the current character is different from the expected one based on the index
            if (s[i] - '0' != i % 2) {
                operationsCount++;
            }
        }

        // Return the minimum of operationsCount and (n - operationsCount)
        return min(operationsCount, n - operationsCount);
    }
};


```
```JAVA []
public class Solution {
    public int minOperations(String s) {
        int n = s.length();
        int operationsCount = 0;

        for (int i = 0; i < n; i++) {
            if (s.charAt(i) - '0' != i % 2) {
                operationsCount++;
            }
        }

        return Math.min(operationsCount, n - operationsCount);
    }
}


```
```python []
def minOperations(s: str) -> int:
    n = len(s)
    operationsCount = 0

    for i, char in enumerate(s):
        if int(char) != i % 2:
            operationsCount += 1

    return min(operationsCount, n - operationsCount)


```
```javascript []
function minOperations(s) {
    const n = s.length;
    let operationsCount = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] !== (i % 2).toString()) {
            operationsCount++;
        }
    }

    return Math.min(operationsCount, n - operationsCount);
}



```
```ruby []
def min_operations(s)
    n = s.length
    operations_count = 0

    s.chars.each_with_index do |char, i|
        operations_count += 1 if char != (i.even? ? '0' : '1')
    end

    [operations_count, n - operations_count].min
end



```
```C# []
public class Solution {
    public int MinOperations(string s) {
        int n = s.Length;
        int operationsCount = 0;

        for (int i = 0; i < n; i++) {
            if (s[i] - '0' != i % 2) {
                operationsCount++;
            }
        }

        return Math.Min(operationsCount, n - operationsCount);
    }
}



```
```Go []
func minOperations(s string) int {
    n := len(s)
    operationsCount := 0

    for i, char := range s {
        if char != byte((i%2)+'0') {
            operationsCount++
        }
    }

    return int(math.Min(float64(operationsCount), float64(n-operationsCount)))
}

```

---




![imgleetcode.png](./images/0.png)

---

