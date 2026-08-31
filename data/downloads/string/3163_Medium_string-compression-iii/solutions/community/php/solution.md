# ✅Most Easiest solution| ✅Working 04.11.2024 | Explained step by step | Interview Question🔥

**Author:** iambandirakesh
**Votes:** 4
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6004045/](https://leetcode.com/problems/string-compression-iii/solutions/6004045/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
### Problem Statement
The goal is to compress a given string by counting consecutive occurrences of each character and returning a new string that represents this compressed format. For example, the string "aaabb" would be compressed to "3a2b".

### Approach
1. *Initialization*: Start by initializing an empty string ans to build the compressed result. Set prev to the first character of the input word and initialize a count variable to 1 to track the occurrences of the current character.

2. *Iterate Through the String*: Use a for loop to iterate through the string starting from the second character (index 1):
   - If the current character (word[i]) is different from the previous character (prev):
     - Append the count and prev to the ans string.
     - Reset the count to 1 for the new character and update prev to the current character.
   - If the current character is the same as prev, check the count:
     - If count is 9 (the maximum allowed before needing to reset), append count and prev to ans, reset count to 1, and continue.
     - Otherwise, simply increment the count.

3. *Final Append*: After the loop, append the last counted character and its count to the ans string.

4. *Return Result*: Finally, return the compressed string ans.
- 
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let ans=""
    let prev=word[0]
    let count=1
    for(let i=1;i<word.length;i++){
        if(prev!==word[i]){
            ans+=String(count)
            ans+=prev
            count=1
            prev=word[i]
        }
        else{
            if(count===9){
                ans+=String(count)
                ans+=prev
                count=1
            }
            else{
                count+=1
            }
        }
    }
    ans+=String(count)
    ans+=prev
    return ans
    
};
```
``` c++ []
#include <string>
using namespace std;

class Solution {
public:
    string compressedString(string word) {
        string ans = "";
        char prev = word[0];
        int count = 1;

        for (int i = 1; i < word.size(); i++) {
            if (prev != word[i]) {
                ans += to_string(count);
                ans += prev;
                count = 1;
                prev = word[i];
            } else {
                if (count == 9) {
                    ans += to_string(count);
                    ans += prev;
                    count = 1;
                } else {
                    count += 1;
                }
            }
        }
        ans += to_string(count);
        ans += prev;

        return ans;
    }
};
```
``` java []
class Solution {
    public String compressedString(String word) {
        StringBuilder ans = new StringBuilder();
        char prev = word.charAt(0);
        int count = 1;

        for (int i = 1; i < word.length(); i++) {
            if (prev != word.charAt(i)) {
                ans.append(count);
                ans.append(prev);
                count = 1;
                prev = word.charAt(i);
            } else {
                if (count == 9) {
                    ans.append(count);
                    ans.append(prev);
                    count = 1;
                } else {
                    count++;
                }
            }
        }
        ans.append(count);
        ans.append(prev);

        return ans.toString();
    }
}
```
``` python []
class Solution:
    def compressedString(self, word: str) -> str:
        ans = ""
        prev = word[0]
        count = 1

        for i in range(1, len(word)):
            if prev != word[i]:
                ans += str(count) + prev
                count = 1
                prev = word[i]
            else:
                if count == 9:
                    ans += str(count) + prev
                    count = 1
                else:
                    count += 1

        ans += str(count) + prev
        return ans
```
``` c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* compressedString(char* word) {
    int n = strlen(word);
    char* ans = (char*)malloc((2 * n + 1) * sizeof(char)); // Allocate memory for the result
    int ansIndex = 0;
    char prev = word[0];
    int count = 1;

    for (int i = 1; i < n; i++) {
        if (word[i] != prev) {
            ansIndex += sprintf(&ans[ansIndex], "%d%c", count, prev); // Append count and character to result
            prev = word[i];
            count = 1;
        } else {
            if (count == 9) { // Max count to avoid continuous characters beyond 9
                ansIndex += sprintf(&ans[ansIndex], "%d%c", count, prev);
                count = 1;
            } else {
                count++;
            }
        }
    }

    // Append the last group
    ansIndex += sprintf(&ans[ansIndex], "%d%c", count, prev);
    ans[ansIndex] = '\\0'; // Null-terminate the string

    return ans;
}
```
``` c# []
public class Solution {
    public string CompressedString(string word) {
        string ans = "";
        char prev = word[0];
        int count = 1;

        for (int i = 1; i < word.Length; i++) {
            if (word[i] != prev) {
                ans += count.ToString() + prev;
                prev = word[i];
                count = 1;
            } else {
                if (count == 9) {
                    ans += count.ToString() + prev;
                    count = 1;
                } else {
                    count++;
                }
            }
        }

        // Append the last group
        ans += count.ToString() + prev;
        return ans;
    }
}
```
``` typescript []
function compressedString(word: string): string {
    let ans = "";
    let prev = word[0];
    let count = 1;

    for (let i = 1; i < word.length; i++) {
        if (word[i] !== prev) {
            ans += count.toString() + prev;
            prev = word[i];
            count = 1;
        } else {
            if (count === 9) {
                ans += count.toString() + prev;
                count = 1;
            } else {
                count++;
            }
        }
    }

    // Append the last group
    ans += count.toString() + prev;
    return ans;
}
```
``` php []
class Solution {

    /**
     * @param String $word
     * @return String
     */
    function compressedString($word) {
        $ans = "";
        $prev = $word[0];
        $count = 1;

        for ($i = 1; $i < strlen($word); $i++) {
            if ($word[$i] !== $prev) {
                $ans .= $count . $prev;
                $prev = $word[$i];
                $count = 1;
            } else {
                if ($count == 9) {
                    $ans .= $count . $prev;
                    $count = 1;
                } else {
                    $count++;
                }
            }
        }

        // Append the last group
        $ans .= $count . $prev;
        return $ans;
    }
}
```