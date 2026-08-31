# ✅☑[C++/C/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 4
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/4168356/](https://leetcode.com/problems/last-visited-integers/solutions/4168356/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The `lastVisitedIntegers` function takes a vector of strings as input, where each string represents either an integer or the word "prev."

1. It initializes two vectors: `ov` to store visited integers and `ans` to store the answers.

1. `ci` is the current index variable, initialized to -1.

1. It iterates through each string in the input `words`.

1. If the current word is "prev," it checks whether there is a previous integer in `ov`:

    - If there is no previous integer (ci == -1), it pushes -1 to `ans` to indicate that there is no previous integer.
    - If there is a previous integer, it pushes the previous integer from `ov` to `ans` and decrements the current index `ci`.
1. If the current word is not `prev`, it converts the string to an integer value:

    - It initializes `vv` to 0 to store the integer value.
    - It iterates through the characters of the string, converting them to digits and accumulating the integer value.
1. After processing each string, it updates the current index `ci` to the last index in the `ov` vector, indicating that the most recently added integer is the current one.

1. The integer value is added to the `ov` vector.

1. Finally, the function returns the `ans` vector containing the answers, which indicate the previous integers corresponding to "prev" words in the input.


# Complexity
- *Time complexity:*
   $$O(N * M)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    vector<int> lastVisitedIntegers(vector<string>& words) {
        vector<int> ov; // Create a vector to store the visited integers.
        vector<int> ans; // Create a vector to store the answers.
        int ci = -1; // Initialize a current index variable to -1.

        for (string s : words) {
            if (s == "prev") { // If the word is "prev," we need to handle the previous integer.
                if (ci == -1) {
                    ans.push_back(-1); // If there is no previous integer, push -1 to the answers.
                }
                else {
                    ans.push_back(ov[ci--]); // Otherwise, push the previous integer and decrement the current index.
                }
            }
            else {
                int vv = 0; // Initialize a variable to store the current integer value.
                for (char c : s) {
                    vv *= 10; // Shift digits one position left.
                    vv += (c - '0'); // Add the current digit value to vv.
                }
                ci = ov.size(); // Update the current index to the last index in ov.
                ov.push_back(vv); // Add the integer to the visited integers vector.
            }
        }
        return ans; // Return the vector containing the answers.
    }
};


```


```C []

#include <stdio.h>
#include <stdlib.h>

int* lastVisitedIntegers(char** words, int n) {
    int* ov = (int*)malloc(n * sizeof(int)); // Create an array to store the visited integers.
    int* ans = (int*)malloc(n * sizeof(int)); // Create an array to store the answers.
    int ci = -1; // Initialize a current index variable to -1.

    for (int i = 0; i < n; i++) {
        char* s = words[i];
        if (strcmp(s, "prev") == 0) { // If the word is "prev," we need to handle the previous integer.
            if (ci == -1) {
                ans[i] = -1; // If there is no previous integer, store -1 in the answers.
            } else {
                ans[i] = ov[ci--]; // Otherwise, store the previous integer and decrement the current index.
            }
        } else {
            int vv = 0; // Initialize a variable to store the current integer value.
            for (int j = 0; s[j] != '\\0'; j++) {
                vv *= 10; // Shift digits one position left.
                vv += (s[j] - '0'); // Add the current digit value to vv.
            }
            ci = i; // Update the current index to the current position in ov.
            ov[i] = vv; // Store the integer in the visited integers array.
        }
    }
    return ans; // Return the array containing the answers.
}


```



```Java []

import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> lastVisitedIntegers(List<String> words) {
        List<Integer> ov = new ArrayList<>();
        List<Integer> ans = new ArrayList<>();
        int ci = -1;

        for (String s : words) {
            if (s.equals("prev")) {
                if (ci == -1) {
                    ans.add(-1);
                } else {
                    ans.add(ov.get(ci--));
                }
            } else {
                int vv = 0;
                for (char c : s.toCharArray()) {
                    vv *= 10;
                    vv += (c - '0');
                }
                ci = ov.size();
                ov.add(vv);
            }
        }
        return ans;
    }
}


```


```python3 []
class Solution:
    def lastVisitedIntegers(self, words):
        ov = []
        ans = []
        ci = -1

        for s in words:
            if s == "prev":
                if ci == -1:
                    ans.append(-1)
                else:
                    ans.append(ov[ci])
                    ci -= 1
            else:
                vv = 0
                for c in s:
                    vv *= 10
                    vv += int(c)
                ci = len(ov)
                ov.append(vv)

        return ans


```

```javascript []

class Solution {
    lastVisitedIntegers(words) {
        const ov = [];
        const ans = [];
        let ci = -1;

        for (const s of words) {
            if (s === "prev") {
                if (ci === -1) {
                    ans.push(-1);
                } else {
                    ans.push(ov[ci]);
                    ci--;
                }
            } else {
                let vv = 0;
                for (const c of s) {
                    vv *= 10;
                    vv += parseInt(c);
                }
                ci = ov.length;
                ov.push(vv);
            }
        }
        return ans;
    }
}


```



---



# PLEASE UPVOTE IF IT HELPED

---
---


---