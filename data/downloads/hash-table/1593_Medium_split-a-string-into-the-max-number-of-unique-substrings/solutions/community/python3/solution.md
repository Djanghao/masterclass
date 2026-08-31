# Easy Backtracking Solution 🧠 Python | Java | C++

**Author:** violet_6
**Votes:** 144
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5944986/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/5944986/)

---

# Intuition
- `Backtracking` approach: We try to split the string at every possible position and maintain a set of substrings that we've already seen. If a new substring is not in the set, we add it to the set and continue exploring further splits.
- Maximizing the count: During the `backtracking`, we try to maximize the number of unique substrings, and once all possible splits are explored, we return the maximum count.

1. Start with an empty set to track substrings.
2. Recursively try every possible split and check if the current substring has been used before.
3. If it hasn't been used, add it to the set and recursively split the remaining part of the string.
4. Keep track of the maximum number of unique substrings.
5. Backtrack to explore other possibilities.
# Approach
- `backtrack(start, seen)`: This function starts at index start and explores all possible substrings starting from that position.

    - For each possible `substring` from `s[start:end]`, if it\u2019s not in the `seen` set, we add it to the set and recursively check the next part of the string.
    - We calculate the maximum number of unique substrings by maximizing the number of splits in each recursive call.
    -   After exploring a path, we `backtrack` by **removing** the substring from the set so that other possibilities can be explored.
- **Base case**: When `start == len(s)`, it means we've reached the end of the string and we can't split any further, so we return 0.

- Maximizing unique substrings: For each split, we try to maximize the number of splits and return the highest number of unique substrings.
> Thank you @uttam1098744 for correcting the time complexity.
# Complexity
- Time complexity: $$O(N*2^N)$$
    1. Recursive Splitting ($$2^N$$): 
        - For each char in the string, we can either start a new substring, or continue the current one. This gives us two choices for every char, leading to $$2^N$$ possible ways to split the string.
    2. Substring Creation ($$N$$): 
        - For each partitioning configuration, we are creating substrings from the input string. Substring creation takes $$O(N)$$ time in each recursive step, where n is the length of the string.
        - At each recursion level, we try different "end" positions starting from a given "start" position, leading to n substring operations over the course of the recursion.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
    - due to the recursive call stack and the space used by the seen set.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        def backtrack(start, seen):
            if start == len(s):
                return 0
            max_splits = 0
            for end in range(start + 1, len(s) + 1):
                substring = s[start:end]
                if substring not in seen:
                    seen.add(substring)
                    max_splits = max(max_splits, 1 + backtrack(end, seen))
                    seen.remove(substring)
            return max_splits
        return backtrack(0, set())
```

```Java []
class Solution {
    public int maxUniqueSplit(String s) {
        return backtrack(0, s, new HashSet<>());
    }
    private int backtrack(int start, String s, HashSet<String> seen) {
        if (start == s.length()) {
            return 0; 
        }
        int maxSplits = 0;
        for (int end = start + 1; end <= s.length(); end++) {
            String substring = s.substring(start, end);
            if (!seen.contains(substring)) {
                seen.add(substring); 
                maxSplits = Math.max(maxSplits, 1 + backtrack(end, s, seen));
                seen.remove(substring);
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
        return backtrack(0, s, seen);
    }
private:
    int backtrack(int start, const string& s, unordered_set<string>& seen) {
        if (start == s.size()) {
            return 0;
        }
        int maxSplits = 0;
        for (int end = start + 1; end <= s.size(); ++end) {
            string substring = s.substr(start, end - start);
            if (seen.find(substring) == seen.end()) {
                seen.insert(substring);
                maxSplits = max(maxSplits, 1 + backtrack(end, s, seen));
                seen.erase(substring);
            }
        }
        return maxSplits;
    }
};
```
![upvote.jpg](./images/0.jpeg)
