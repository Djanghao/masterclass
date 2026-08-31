# 2 STEPS ||JAVA C++PYTHON || DEEP EXPLANATION

**Author:** Abhishekkant135
**Votes:** 18
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945061/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5945061/)

---

# BOISS JUST UPVOTE , I WORK SO HARD WRITNG THIS OUT AND YOU SHAMELESS PEOPLE DONT EVEN LIKE THE POST . PLS UPVOTE IT.

1. **Initialization:**
   - An `unordered_set` `seen` is created to store unique substrings encountered.

2. **`solve` Function:**
   - This recursive function explores different ways to split the string starting from index `start`.
   - **Base Case:** If `start` equals the length of the string, it means all characters have been split, and the function returns 0.
   - **Iteration:**
     - The function iterates through possible split points from `start + 1` to the end of the string.
     - For each split point `i`, a substring is extracted.
     - If the substring is not already seen, it's added to the `seen` set, and the function recursively calls itself with the new starting index `i`.
     - The maximum number of splits obtained from the recursive call is updated.
     - The substring is removed from the `seen` set (backtrack) to explore other possibilities.

3. **`maxUniqueSplit` Function:**
   - This function calls the `solve` function with the initial starting index (0) and returns the maximum number of splits obtained.



# Code
```java []
class Solution {
    public int maxUniqueSplit(String s) {
        return solve(0, s, new HashSet<>());
    }
    
    public int solve(int start, String s, Set<String> set) {
        if (start == s.length()) {
            return 0;
        }
        int maxSplits = 0;
        
        for (int i = start + 1; i <= s.length(); i++) {
            String substring = s.substring(start, i);
            
            if (!set.contains(substring)) {
                set.add(substring);
                
                int splits = 1 + solve(i, s, set);

                maxSplits = Math.max(maxSplits, splits);
                set.remove(substring);
            }
        }
        
        return maxSplits;
    }
}

```
```C++ []


class Solution {
public:
    int maxUniqueSplit(string s) {
        unordered_set<string> seen;
        return dfs(0, s, seen);
    }

private:
    int dfs(int start, const string& s, unordered_set<string>& seen) {
        if (start == s.size()) return 0;

        int maxSplits = 0;
        for (int i = start + 1; i <= s.size(); ++i) {
            string substring = s.substr(start, i - start);

            if (seen.find(substring) == seen.end()) {
                seen.insert(substring);
                maxSplits = max(maxSplits, 1 + dfs(i, s, seen));
                seen.erase(substring);  // Backtrack
            }
        }
        return maxSplits;
    }
};

```
```python []
class Solution(object):
    def maxUniqueSplit(self, s):
        """
        :type s: str
        :rtype: int
        """
        def dfs(start, seen):
            if start == len(s):
                return 0

            max_splits = 0
            for i in range(start + 1, len(s) + 1):
                substring = s[start:i]

                if substring not in seen:
                    seen.add(substring)
                    max_splits = max(max_splits, 1 + dfs(i, seen))
                    seen.remove(substring)  # Backtrack

            return max_splits

        return dfs(0, set())
```

