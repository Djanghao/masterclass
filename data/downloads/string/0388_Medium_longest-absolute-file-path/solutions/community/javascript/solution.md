# 🔥🔥🔥 Easy solution with detailed explanation 🔥 Python 🔥 C++ 🔥 Java 🔥 Javascript 🔥🔥🔥

**Author:** bhanu_bhakta
**Votes:** 14
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/5126334/](https://leetcode.com/problems/longest-absolute-file-path/solutions/5126334/)

---

# Intuition
- The function computes the length of the longest absolute path to a file within a simulated file system formatted as a string, where directories and files are demarcated by tabs and newlines.

# Approach
- **Initialize Variables:** Set up a dictionary pathMap to track cumulative path lengths at different depths, starting with the root.
- **Split and Process Each Line:** Split the input on newlines and iterate through each, calculating depth based on tabs and determining if the line represents a file or directory.
- **Update Path Lengths:** For files, update the maximum path length if the current file's path is longer. For directories, update pathMap with the cumulative path length for the next depth.
- **Return the Result:** After processing all lines, return the longest path length found to any file.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```python []
class Solution:
    def lengthLongestPath(self, input: str) -> int:
        depth = 0
        longest = 0
        pathMap = { 0: 0 }

        lines = input.split("\
")

        for line in lines:
            name = line.lstrip("\	")
            depth = len(line) - len(name)

            if "." in name:
                longest = max(longest, pathMap[depth] + len(name))
            else:
                pathMap[depth + 1] = pathMap[depth] + len(name) + 1
        
        return longest
```
```Java []
class Solution {
    public int lengthLongestPath(String input) {
        int longest = 0;
        Map<Integer, Integer> pathMap = new HashMap<>();
        pathMap.put(0, 0);

        String[] lines = input.split("\
");

        for (String line : lines) {
            String name = line.replaceAll("\	", "");
            int depth = line.length() - name.length();

            if (name.contains(".")) {
                // It's a file
                longest = Math.max(longest, pathMap.get(depth) + name.length());
            } else {
                // It's a directory
                pathMap.put(depth + 1, pathMap.get(depth) + name.length() + 1);
            }
        }

        return longest;
    }
}
```
```C++ []
class Solution {
public:
    int lengthLongestPath(string input) {
        int longest = 0;
        std::unordered_map<int, int> pathMap;
        pathMap[0] = 0;

        std::istringstream ss(input);
        std::string line;

        while (getline(ss, line)) {
            auto namePos = line.find_last_of('\	') + 1;
            int depth = namePos;
            std::string name = line.substr(namePos);

            if (name.find('.') != std::string::npos) {
                // It's a file
                longest = std::max(
                    longest, pathMap[depth] + static_cast<int>(name.length()));
            } else {
                // It's a directory
                pathMap[depth + 1] =
                    pathMap[depth] + static_cast<int>(name.length()) + 1;
            }
        }

        return longest;
    }
};
```
```Javascript []
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
    let longest = 0;
    let pathMap = { 0: 0 };
    let lines = input.split("\
");

    for (let line of lines) {
        let name = line.replace(/\	/g, "");
        let depth = line.length - name.length;

        if (name.includes('.')) {
            // It's a file
            longest = Math.max(longest, pathMap[depth] + name.length);
        } else {
            // It's a directory
            pathMap[depth + 1] = pathMap[depth] + name.length + 1;
        }
    }

    return longest;
};
```

**Please Upvote**