# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5967652/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5967652/)

---

![image.png](./images/0.png)

---

# Intuition
To remove subfolders efficiently, sorting the list of folders alphabetically allows us to identify subfolders based on their prefix. By comparing each folder with the last folder in the result list, we can detect and skip subfolders.

# Approach
1. Sort the folder list alphabetically. Sorting groups subfolders immediately after their parent folder.
2. Use a result list to keep track of non-subfolders. Add the first folder to the list.
3. For each subsequent folder:
   - Check if it begins with the last folder in the result list plus a `/`.
   - If not, add it to the result list; otherwise, it is a subfolder and can be skipped.
4. Return the result list as it contains only non-subfolders.

# Complexity
- Time complexity:  
  $$O(n \\log n)$$ for sorting and $$O(n \	imes m)$$ for checking prefixes, where \\( n \\) is the number of folders and \\( m \\) is the maximum folder length.
  
- Space complexity:  
  $$O(n)$$ for storing the result list.

# Code

```dart []
class Solution {
  List<String> removeSubfolders(List<String> folder) {
    folder.sort();
    List<String> ans = [folder.first];

    for (int i = 1; i < folder.length; i++) {
      if (!folder[i].startsWith('${ans.last}/')) {
        ans.add(folder[i]);
      }
    }
    return ans;
  }
}
```

```python []
class Solution:
    def removeSubfolders(self, folder):
        folder.sort()
        ans = [folder[0]]
        
        for f in folder[1:]:
            if not f.startswith(ans[-1] + "/"):
                ans.append(f)
                
        return ans
```

```cpp []
#include <vector>
#include <string>
#include <algorithm>

class Solution {
public:
    std::vector<std::string> removeSubfolders(std::vector<std::string>& folder) {
        std::sort(folder.begin(), folder.end());
        std::vector<std::string> ans = {folder[0]};

        for (int i = 1; i < folder.size(); ++i) {
            if (folder[i].substr(0, ans.back().size() + 1) != ans.back() + "/") {
                ans.push_back(folder[i]);
            }
        }
        return ans;
    }
};
```

```javascript []
var removeSubfolders = function(folder) {
    folder.sort();
    let ans = [folder[0]];
    
    for (let i = 1; i < folder.length; i++) {
        if (!folder[i].startsWith(ans[ans.length - 1] + "/")) {
            ans.push(folder[i]);
        }
    }
    return ans;
};
```

```go []
import "sort"

func removeSubfolders(folder []string) []string {
    sort.Strings(folder)
    ans := []string{folder[0]}

    for i := 1; i < len(folder); i++ {
        if !startsWith(folder[i], ans[len(ans)-1]+"/") {
            ans = append(ans, folder[i])
        }
    }
    return ans
}

// Helper function to check if a string starts with a prefix
func startsWith(s, prefix string) bool {
    if len(prefix) > len(s) {
        return false
    }
    return s[:len(prefix)] == prefix
}
```

```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmp(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

char **removeSubfolders(char **folder, int folderSize, int *returnSize) {
    qsort(folder, folderSize, sizeof(char *), cmp);

    char **ans = malloc(folderSize * sizeof(char *));
    int idx = 0;
    ans[idx++] = folder[0];

    for (int i = 1; i < folderSize; i++) {
        int len = strlen(ans[idx - 1]);
        if (!(strncmp(folder[i], ans[idx - 1], len) == 0 && folder[i][len] == '/')) {
            ans[idx++] = folder[i];
        }
    }

    *returnSize = idx;
    return ans;
}
```

![image.png](./images/1.png) {:style='width:250px'}