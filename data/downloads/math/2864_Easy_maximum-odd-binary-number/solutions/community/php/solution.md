# 🍉✅Simple Understandable😊|| Java, C++, Python, Javascript, PHP, C, C#, Typescript🔥

**Author:** dharmikgohil
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4806983/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4806983/)

---

# Intuition
The intuition behind this solution is to first convert the input string into a character array and then sort it in ascending order. After sorting, we reverse the array to get the characters in descending order. We then find the first occurrence of '0' in the array and swap it with the last character to make the binary number maximum odd. Finally, we return the modified array as a string.

# Approach
1. Convert the input string into a character array.
2. Sort the array in ascending order.
3. Reverse the sorted array to get the characters in descending order.
4. Find the first occurrence of '0' in the array.
5. Swap the first '0' encountered with the last character of the array.
6. Return the modified array as a string.

# Complexity
- Time complexity:  
  - Sorting the array takes `O(n log n)` time.
  - Reversing the array takes `O(n)` time.
  - Finding the first occurrence of '0' takes `O(n)` time in the worst case.
  - Swapping characters takes constant time.
  - Overall, the time complexity is dominated by the sorting step, so it is `O(n log n)`.
  
- Space complexity:  
  - The space complexity is `O(n)` due to the character array created from the input string. The sorting operation may use additional space depending on the sorting algorithm used, but it doesn't affect the overall space complexity. Thus, it is `O(n)`.

```Java []
import java.util.*;
class Solution {
    public String maximumOddBinaryNumber(String s) {
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        reverseArray(arr); 
        int j = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == '0') {
                j = i;
                break;
            }
        }
        if (j == -1) {
            return String.valueOf(arr);
        }
        char temp = arr[arr.length-1];
        arr[arr.length-1] = arr[j-1];
        arr[j-1] = temp;
        return String.valueOf(arr);
    }
    private void reverseArray(char[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            char temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

```
```C++ []
#include <algorithm>
#include <string>

class Solution {
public:
    std::string maximumOddBinaryNumber(std::string s) {
        std::sort(s.begin(), s.end());
        reverseArray(s);
        int j = -1;
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '0') {
                j = i;
                break;
            }
        }
        if (j == -1) {
            return s;
        }
        char temp = s[s.length() - 1];
        s[s.length() - 1] = s[j - 1];
        s[j - 1] = temp;
        return s;
    }

private:
    void reverseArray(std::string& s) {
        int start = 0;
        int end = s.length() - 1;
        while (start < end) {
            char temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    }
};

```
```Python []
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        arr = sorted(s)
        arr = arr[::-1]
        j = -1
        for i in range(len(arr)):
            if arr[i] == '0':
                j = i
                break
        if j == -1:
            return ''.join(arr)
        arr[-1], arr[j - 1] = arr[j - 1], arr[-1]
        return ''.join(arr)

```
```Javascript []
var maximumOddBinaryNumber = function(s) {
    let arr = s.split('');
    arr.sort();
    arr.reverse();
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            j = i;
            break;
        }
    }
    if (j === -1) {
        return arr.join('');
    }
    [arr[arr.length - 1], arr[j - 1]] = [arr[j - 1], arr[arr.length - 1]];
    return arr.join('');
};

```

```C# []
using System;
using System.Linq;

public class Solution {
    public string MaximumOddBinaryNumber(string s) {
        char[] arr = s.ToCharArray();
        Array.Sort(arr);
        Array.Reverse(arr);
        int j = -1;
        for (int i = 0; i < arr.Length; i++) {
            if (arr[i] == '0') {
                j = i;
                break;
            }
        }
        if (j == -1) {
            return new string(arr);
        }
        char temp = arr[arr.Length - 1];
        arr[arr.Length - 1] = arr[j - 1];
        arr[j - 1] = temp;
        return new string(arr);
    }
}
```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // Convert string to array
    let arr = s.split('');
    
    // Sort array in ascending order
    arr.sort();
    
    // Reverse array to get characters in descending order
    arr.reverse();
    
    // Find first occurrence of '0'
    let j = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            j = i;
            break;
        }
    }
    
    // If '0' not found, return array as string
    if (j === -1) {
        return arr.join('');
    }
    
    // Swap last character with character before first '0'
    [arr[arr.length - 1], arr[j - 1]] = [arr[j - 1], arr[arr.length - 1]];
    
    // Return modified array as string
    return arr.join('');
};

```
```PHP []
class Solution {
    function maximumOddBinaryNumber($s) {
        $arr = str_split($s);
        sort($arr);
        $arr = array_reverse($arr);
        $j = -1;
        foreach ($arr as $key => $value) {
            if ($value === '0') {
                $j = $key;
                break;
            }
        }
        if ($j === -1) {
            return implode('', $arr);
        }
        list($arr[count($arr) - 1], $arr[$j - 1]) = array($arr[$j - 1], $arr[count($arr) - 1]);
        return implode('', $arr);
    }
}

```
```Typescript []
function maximumOddBinaryNumber(s: string): string {
    let arr: string[] = s.split('');
    arr.sort();
    arr.reverse();
    let j: number = -1;
    for (let i: number = 0; i < arr.length; i++) {
        if (arr[i] === '0') {
            j = i;
            break;
        }
    }
    if (j === -1) {
        return arr.join('');
    }
    [arr[arr.length - 1], arr[j - 1]] = [arr[j - 1], arr[arr.length - 1]];
    return arr.join('');
}

```


# Code With Detail Explaination
```
import java.util.*;

class Solution {
    public String maximumOddBinaryNumber(String s) {
        // Convert the input string into a character array
        char[] arr = s.toCharArray();

        // Sort the array in ascending order
        Arrays.sort(arr);

        // Reverse the sorted array to get the characters in descending order
        reverseArray(arr); 

        // Initialize a variable to store the index of the first '0' encountered
        int j = -1;

        // Iterate through the array to find the first '0' for finding last '1'
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == '0') {
                // Store the index of the first '0' found
                j = i;
                break;
            }
        }

        // If no '0' is found in the array, return the sorted array as a string
        if (j == -1) {
            return String.valueOf(arr);
        }

        // Swap the last character of the array with the character before the first '0'
        char temp = arr[arr.length-1];
        arr[arr.length-1] = arr[j-1];
        arr[j-1] = temp;

        // Return the modified array as a string
        return String.valueOf(arr);
    }

    // Helper method to reverse the elements of an array
    private void reverseArray(char[] arr) {
        int start = 0;
        int end = arr.length - 1;

        // Swap elements from start to end until start < end
        while (start < end) {
            char temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}


```
![HOPE YOU GOT IT (1).png](./images/0.png)
