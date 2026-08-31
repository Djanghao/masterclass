# 🌟 Beats 100.00% 👏 || Explained with example

**Author:** phoenix_sr
**Votes:** 17
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5965710/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5965710/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal of this problem is to remove any subfolder paths in a list, leaving only the primary folder paths. A path is considered a subfolder if it begins with another folder path followed by a /. For example, /a/b is a subfolder of /a, but /c/d is not a subfolder of /a.

The challenge is to efficiently detect these relationships and filter out subfolders while preserving the main folder paths.
# Approach
<!-- Describe your approach to solving the problem. -->
Sort by Length: By sorting the folders in ascending order of length, we ensure that shorter paths (potential parent folders) are checked first. This ordering helps us quickly identify a subfolder by scanning previously added folder paths.

Check Each Folder for Subfolder Conditions:

For each folder, check if it starts with any of the previously added folders (primary folders).
We only consider it a match if the primary folder is immediately followed by a / in the current folder path (to confirm a hierarchical, not just prefix-based, relationship).
Add Only Non-Subfolders: If the current folder is not a subfolder of any previously stored folder, we add it to the result list. This keeps the result list free of any subfolder paths.

# Example
Consider the input:

folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]

Step-by-Step Execution
Sort by Length: Sorting by length yields:


folder = ["/a", "/c/d", "/c/f", "/a/b", "/c/d/e"]
Initialize Result Array: Initialize an empty list result to store only the primary folders.

Iterate Over Each Folder:

Folder /a:
result is empty, so we add /a to result.
result becomes ["/a"].
Folder /c/d:
/c/d does not start with any path in result (which is ["/a"]), so it\u2019s added to result.
result becomes ["/a", "/c/d"].
Folder /c/f:
/c/f does not start with any path in result (which is ["/a", "/c/d"]), so it\u2019s added to result.
result becomes ["/a", "/c/d", "/c/f"].
Folder /a/b:
/a/b starts with /a/ from result, so it\u2019s identified as a subfolder and not added to result.
result remains ["/a", "/c/d", "/c/f"].
Folder /c/d/e:
/c/d/e starts with /c/d/ from result, so it\u2019s identified as a subfolder and not added to result.
result remains ["/a", "/c/d", "/c/f"].
Final Result: The result array now holds only the primary folders:
["/a", "/c/d", "/c/f"]

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.jpeg](./images/0.jpeg)

# Code
```javascript []

var removeSubfolders = function (folder) {
    folder.sort((a, b) => a.length - b.length)
    let set = new Set()
    primary: for (let dir of folder) {
        let dirArr = dir.split('/')
        let parDir = ''
        for (let i = 1; i < dirArr.length; i++) {
            parDir += `/${dirArr[i]}`
            if (set.has(parDir)) continue primary
        }
        set.add(parDir)
    }
    return Array.from(set)
};
```
```python []
class Solution(object):
    def removeSubfolders(self, folder):
        folder.sort(key=len)
        result = set()
        for dir in folder:
            dir_parts = dir.split('/')
            parent_dir = ''
            for part in dir_parts[1:]:
                parent_dir += "/" + part
                if parent_dir in result:
                    break
            else:
                result.add(parent_dir)
        return list(result)

```
```java []
import java.util.*;

class Solution {
    public List<String> removeSubfolders(String[] folder) {
        Arrays.sort(folder, Comparator.comparingInt(String::length));
        Set<String> set = new HashSet<>();
        for (String dir : folder) {
            String[] dirParts = dir.split("/");
            String parentDir = "";
            boolean isSubfolder = false;
            for (int i = 1; i < dirParts.length; i++) {
                parentDir += "/" + dirParts[i];
                if (set.contains(parentDir)) {
                    isSubfolder = true;
                    break;
                }
            }
            if (!isSubfolder) {
                set.add(parentDir);
            }
        }
        return new ArrayList<>(set);
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void *a, const void *b) {
    return strlen(*(const char **)a) - strlen(*(const char **)b);
}

char **removeSubfolders(char **folder, int folderSize, int *returnSize) {
    qsort(folder, folderSize, sizeof(char *), compare);
    char **result = (char **)malloc(folderSize * sizeof(char *));
    int resultCount = 0;

    for (int i = 0; i < folderSize; i++) {
        char *dir = folder[i];
        int isSubfolder = 0;

        // Check if dir has any parent in the result list
        int dirLen = strlen(dir);
        for (int j = 0; j < resultCount; j++) {
            int resLen = strlen(result[j]);
            if (resLen < dirLen && strncmp(result[j], dir, resLen) == 0 && dir[resLen] == '/') {
                isSubfolder = 1;
                break;
            }
        }

        // If it's not a subfolder, add it to result
        if (!isSubfolder) {
            result[resultCount++] = dir;
        }
    }

    *returnSize = resultCount;
    return result;
}
```
```c++ []
#include <vector>
#include <string>
#include <unordered_set>
#include <algorithm>

class Solution {
public:
    std::vector<std::string> removeSubfolders(std::vector<std::string>& folder) {
        std::sort(folder.begin(), folder.end(), [](const std::string &a, const std::string &b) {
            return a.size() < b.size();
        });
        std::unordered_set<std::string> set;
        for (const auto &dir : folder) {
            std::string parentDir;
            bool isSubfolder = false;
            for (size_t i = 1; i < dir.size(); i++) {
                if (dir[i] == '/') {
                    parentDir = dir.substr(0, i);
                    if (set.count(parentDir)) {
                        isSubfolder = true;
                        break;
                    }
                }
            }
            if (!isSubfolder) {
                set.insert(dir);
            }
        }
        return std::vector<std::string>(set.begin(), set.end());
    }
};
```