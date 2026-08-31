# Fastest execution || beats 98% users with java & c++ || python3 ||typescript || Backtracking

**Author:** SanketSawant18
**Votes:** 14
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/5191274/](https://leetcode.com/problems/palindrome-partitioning/solutions/5191274/)

---

# Approach
Backtracking.

# Complexity
- Time complexity: O(2^n.n)

- Space complexity: O(2^n.n)

# Explanation
1. **partition Method:**

- This initializes the result list and starts the backtracking process from index 0 with an empty path.
2. **backtrack Method:**

- It explores all possible partitions of the string s starting from a given index.
- If the current start index equals the length of the string, it means we have a valid partition and we add it to the result list.
- It iterates through possible end indices, forms substrings, and checks if they are palindromes.
- If a substring is a palindrome, it's added to the current path, and we recursively call backtrack for the next part of the string.
- After the recursive call, the last substring is removed to explore other partitions.
3. **isPalindrome Method:**

- It checks if a given substring is a palindrome by comparing characters from both ends towards the middle.

---

```java []
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        backtrack(s, 0, new ArrayList<>(), result);
        return result;
    }
    
    private void backtrack(String s, int start, List<String> path, List<List<String>> result) {
        if (start == s.length()) {
            result.add(new ArrayList<>(path));
            return;
        }
        
        for (int end = start + 1; end <= s.length(); end++) {
            String currentSub = s.substring(start, end);
            if (isPalindrome(currentSub)) {
                path.add(currentSub);
                backtrack(s, end, path, result);
                path.remove(path.size() - 1);
            }
        }
    }
    
    private boolean isPalindrome(String sub) {
        int left = 0, right = sub.length() - 1;
        while (left < right) {
            if (sub.charAt(left) != sub.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```
```C++ []
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string>> result;
        vector<string> path;
        backtrack(s, 0, path, result);
        return result;
    }

private:
    void backtrack(const string &s, int start, vector<string> &path, vector<vector<string>> &result) {
        if (start == s.length()) {
            result.push_back(path);
            return;
        }

        for (int end = start + 1; end <= s.length(); ++end) {
            string currentSub = s.substr(start, end - start);
            if (isPalindrome(currentSub)) {
                path.push_back(currentSub);
                backtrack(s, end, path, result);
                path.pop_back();
            }
        }
    }

    bool isPalindrome(const string &sub) {
        int left = 0, right = sub.length() - 1;
        while (left < right) {
            if (sub[left] != sub[right]) {
                return false;
            }
            ++left;
            --right;
        }
        return true;
    }
};
```
```python3 []
from typing import List

class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def is_palindrome(sub: str) -> bool:
            return sub == sub[::-1]
        
        def backtrack(start: int, path: List[str]):
            if start == len(s):
                result.append(path[:])
                return
            for end in range(start + 1, len(s) + 1):
                current_sub = s[start:end]
                if is_palindrome(current_sub):
                    path.append(current_sub)
                    backtrack(end, path)
                    path.pop()
        
        result = []
        backtrack(0, [])
        return result
```
```Typescript []
function partition(s: string): string[][] {
    const result: string[][] = [];
    
    function backtrack(start: number, path: string[]): void {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const currentSub = s.substring(start, end);
            if (isPalindrome(currentSub)) {
                path.push(currentSub);
                backtrack(end, path);
                path.pop();
            }
        }
    }

    function isPalindrome(sub: string): boolean {
        let left = 0, right = sub.length - 1;
        while (left < right) {
            if (sub[left] !== sub[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    backtrack(0, []);
    return result;
}
```