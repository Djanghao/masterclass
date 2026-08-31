# Super Simple Approach | Efficient Code | 6 Langauges

**Author:** nagastu02
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5602197/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5602197/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To generate all valid strings of length n that contain alternating characters '0' and '1', we can use backtracking. This will allow us to explore all possible combinations and ensure that the generated strings follow the alternating pattern.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use a backtracking function to explore all possible strings of length n.
2. Start with an empty string and add either '0' or '1'.
3. For each added character, ensure the next character alternates.
4. Store the valid strings in a set to avoid duplicates.
5. Convert the set to a list and return it.

# Complexity
- Time complexity: O(2^n) because we explore all possible combinations of '0' and '1'.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) for the recursive call stack.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```Java []
import java.util.*;

class Solution {
    public List<String> validStrings(int n) {
        Set<String> ans = new HashSet<>();
        backtrack(n, new StringBuilder(), ans);
        return new ArrayList<>(ans);
    }

    private void backtrack(int n, StringBuilder s, Set<String> ans) {
        if (s.length() == n) {
            ans.add(s.toString());
            return;
        }

        if (s.length() == 0 || s.charAt(s.length() - 1) == '1') {
            s.append('0');
            backtrack(n, s, ans);
            s.deleteCharAt(s.length() - 1);
        }

        if (s.length() == 0 || s.charAt(s.length() - 1) == '0') {
            s.append('1');
            backtrack(n, s, ans);
            s.deleteCharAt(s.length() - 1);
        }
    }
}
```
```C++ []
#include <vector>
#include <string>
#include <unordered_set>

class Solution {
public:
    std::vector<std::string> validStrings(int n) {
        std::unordered_set<std::string> ans;
        backtrack(n, "", ans);
        return std::vector<std::string>(ans.begin(), ans.end());
    }

private:
    void backtrack(int n, std::string s, std::unordered_set<std::string>& ans) {
        if (s.length() == n) {
            ans.insert(s);
            return;
        }

        if (s.empty() || s.back() == '1') {
            backtrack(n, s + '0', ans);
        }

        if (s.empty() || s.back() == '0') {
            backtrack(n, s + '1', ans);
        }
    }
};
```
```Python []
class Solution:
    def validStrings(self, n: int):
        ans = set()
        self.backtrack(n, "", ans)
        return list(ans)
    
    def backtrack(self, n, s, ans):
        if len(s) == n:
            ans.add(s)
            return
        
        if len(s) == 0 or s[-1] == '1':
            self.backtrack(n, s + '0', ans)
        
        if len(s) == 0 or s[-1] == '0':
            self.backtrack(n, s + '1', ans)
```
```Javascript []
var validStrings = function(n) {
    let ans = new Set();
    backtrack(n, "", ans);
    return Array.from(ans);
};

function backtrack(n, s, ans) {
    if (s.length === n) {
        ans.add(s);
        return;
    }

    if (s.length === 0 || s[s.length - 1] === '1') {
        backtrack(n, s + '0', ans);
    }

    if (s.length === 0 || s[s.length - 1] === '0') {
        backtrack(n, s + '1', ans);
    }
}
```
```C []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void backtrack(int n, char *s, int len, char **result, int *count) {
    if (len == n) {
        result[*count] = (char *)malloc((n + 1) * sizeof(char));
        strcpy(result[*count], s);
        (*count)++;
        return;
    }

    if (len == 0 || s[len - 1] == '1') {
        s[len] = '0';
        backtrack(n, s, len + 1, result, count);
    }

    if (len == 0 || s[len - 1] == '0') {
        s[len] = '1';
        backtrack(n, s, len + 1, result, count);
    }
}

char **validStrings(int n, int *returnSize) {
    char **result = (char **)malloc((1 << n) * sizeof(char *));
    char *s = (char *)malloc((n + 1) * sizeof(char));
    *returnSize = 0;
    backtrack(n, s, 0, result, returnSize);
    free(s);
    return result;
}

int main() {
    int returnSize;
    char **result = validStrings(3, &returnSize);

    for (int i = 0; i < returnSize; i++) {
        printf("%s\
", result[i]);
        free(result[i]);
    }
    free(result);

    return 0;
}
```
```Ruby []
def valid_strings(n)
  ans = Set.new
  backtrack(n, "", ans)
  ans.to_a
end

def backtrack(n, s, ans)
  if s.length == n
    ans.add(s)
    return
  end

  if s.empty? || s[-1] == '1'
    backtrack(n, s + '0', ans)
  end

  if s.empty? || s[-1] == '0'
    backtrack(n, s + '1', ans)
  end
end
```
