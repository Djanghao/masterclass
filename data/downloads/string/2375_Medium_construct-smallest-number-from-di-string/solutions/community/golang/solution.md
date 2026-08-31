# [beats 100%] best approach with Intuition 0 ms

**Author:** ryujji
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5533265/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5533265/)

---


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the smallest number from a given pattern of 'I' (increasing) and 'D' (decreasing), we can iterate through the pattern and build the smallest possible number step-by-step, ensuring the pattern constraints are met.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**:
   - Create an array to hold the digits of the resulting smallest number.
   - Use a pointer and a counter to assign the smallest possible digits sequentially.
2. **Iteration**:
   - Traverse the pattern, and for each 'I', assign the next smallest digit and handle any preceding 'D' characters to maintain the decreasing sequence.
3. **Final Assignment**:
   - If the last character in the pattern is 'D', handle the remaining digits to complete the sequence.
4. **Result Construction**:
   - Convert the array of digits to a string to get the final result.

# Complexity
- Time complexity: $$O(n)$$ where \\( n \\) is the length of the pattern.
- Space complexity: $$O(n)$$ due to the array used to store the digits.

# Code


```java []
class Solution {
    public String smallestNumber(String pattern) {
        int len = pattern.length();
        int[] a = new int[len + 1];
        char[] pat = pattern.toCharArray();
        int curr = 0, smallest = 1;

        while (curr < len) {
            if (pat[curr] == 'I') {
                a[curr] = smallest++;
                int back = curr - 1;
                while (back >= 0 && pat[back] == 'D') {
                    a[back] = smallest++;
                    back--;
                }
            }
            curr++;
        }
        if (curr == len && smallest == 1) {
            for (int i = len; i >= 0; i--) {
                a[i] = smallest++;
            }
        } else {
            a[len] = smallest++;
            int back = curr - 1;
            while (back >= 0 && pat[back] == 'D') {
                a[back] = smallest++;
                back--;
            }
        }
        StringBuilder sb = new StringBuilder();
        for (int i : a) {
            sb.append(i);
        }
        return sb.toString();
    }
}
```


```python []
class Solution:
    def smallestNumber(self, pattern: str) -> str:
        len_pat = len(pattern)
        a = [0] * (len_pat + 1)
        curr = 0
        smallest = 1
        
        while curr < len_pat:
            if pattern[curr] == 'I':
                a[curr] = smallest
                smallest += 1
                back = curr - 1
                while back >= 0 and pattern[back] == 'D':
                    a[back] = smallest
                    smallest += 1
                    back -= 1
            curr += 1
        
        if curr == len_pat and smallest == 1:
            for i in range(len_pat, -1, -1):
                a[i] = smallest
                smallest += 1
        else:
            a[len_pat] = smallest
            smallest += 1
            back = curr - 1
            while back >= 0 and pattern[back] == 'D':
                a[back] = smallest
                smallest += 1
                back -= 1
        
        return ''.join(map(str, a))
```

```cpp []
class Solution {
public:
    string smallestNumber(string pattern) {
        int len = pattern.length();
        vector<int> a(len + 1);
        int curr = 0, smallest = 1;
        
        while (curr < len) {
            if (pattern[curr] == 'I') {
                a[curr] = smallest++;
                int back = curr - 1;
                while (back >= 0 && pattern[back] == 'D') {
                    a[back] = smallest++;
                    back--;
                }
            }
            curr++;
        }
        
        if (curr == len && smallest == 1) {
            for (int i = len; i >= 0; i--) {
                a[i] = smallest++;
            }
        } else {
            a[len] = smallest++;
            int back = curr - 1;
            while (back >= 0 && pattern[back] == 'D') {
                a[back] = smallest++;
                back--;
            }
        }
        
        string result;
        for (int i : a) {
            result += to_string(i);
        }
        return result;
    }
};
```
```javascript []
var smallestNumber = function(pattern) {
    let len = pattern.length;
    let a = new Array(len + 1).fill(0);
    let curr = 0, smallest = 1;

    while (curr < len) {
        if (pattern[curr] === 'I') {
            a[curr] = smallest++;
            let back = curr - 1;
            while (back >= 0 && pattern[back] === 'D') {
                a[back] = smallest++;
                back--;
            }
        }
        curr++;
    }

    if (curr === len && smallest === 1) {
        for (let i = len; i >= 0; i--) {
            a[i] = smallest++;
        }
    } else {
        a[len] = smallest++;
        let back = curr - 1;
        while (back >= 0 && pattern[back] === 'D') {
            a[back] = smallest++;
            back--;
        }
    }

    return a.join('');
};
```


```go []
func smallestNumber(pattern string) string {
    lenPat := len(pattern)
    a := make([]int, lenPat+1)
    curr, smallest := 0, 1

    for curr < lenPat {
        if pattern[curr] == 'I' {
            a[curr] = smallest
            smallest++
            back := curr - 1
            for back >= 0 && pattern[back] == 'D' {
                a[back] = smallest
                smallest++
                back--
            }
        }
        curr++
    }

    if curr == lenPat && smallest == 1 {
        for i := lenPat; i >= 0; i-- {
            a[i] = smallest
            smallest++
        }
    } else {
        a[lenPat] = smallest
        smallest++
        back := curr - 1
        for back >= 0 && pattern[back] == 'D' {
            a[back] = smallest
            smallest++
            back--
        }
    }

    var result string
    for _, num := range a {
        result += strconv.Itoa(num)
    }
    return result
}
```
