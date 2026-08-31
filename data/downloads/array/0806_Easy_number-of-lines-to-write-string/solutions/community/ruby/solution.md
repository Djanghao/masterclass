# [Ruby][C++] Easy Solution w/ Ruby Comments

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5575714/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5575714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` ruby []
# @param {Integer[]} widths
# @param {String} s
# @return {Integer[]}
def number_of_lines(widths, s)
  # Create a hash that maps each letter ('a' to 'z') to its corresponding width
  costs = ('a'..'z').to_a.zip(widths).to_h
  lines = 1 # Start with one line
  width = 0 # Initialize the width of the current line to 0

  # Iterate through each character in the string
  s.each_char do |chr|
    current = width + costs[chr] # Calculate the current width if this character is added
    if current > 100
      # If adding this character exceeds the line width limit, start a new line
      lines += 1
      width = costs[chr] # Set the width of the new line to the width of the current character
    else
      # Otherwise, add the character's width to the current line width
      width = current
    end
  end
  
  # Return the number of lines and the width of the last line
  [lines, width]
end
```
```cpp []
class Solution {
public:
    vector<int> numberOfLines(vector<int>& widths, string s) {
        unordered_map<char, int> costs;
        for (int i = 0; i < 26; ++i) costs['a' + i] = widths[i];
        int lines = 1;
        int width = 0;

        for (char chr : s) {
            int current = width + costs[chr];

            if (current > 100) {
                ++lines;
                width = costs[chr];
            } else {
                width = current;
            }
        }

        return {lines, width};
    }
};
```

