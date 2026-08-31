# Circular Alternating Groups 🔄: Beginner-Friendly with Visualization

**Author:** sambhav22435
**Votes:** 4
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5495019/](https://leetcode.com/problems/alternating-groups-ii/solutions/5495019/)

---

> Possible - 18/07/2024
---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves identifying alternating groups in a circular array of colors. 

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Handling Circularity**: Repeat the first `k-1` elements at the end of the vector to handle circularity.
2. **Marking Alternating Groups**: Iterate through the colors vector to identify positions where alternating groups start.
3. **Counting Alternating Groups**: Count the number of valid alternating groups of size `k-2` or more based on the marked positions.

---

# Complexity
- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->
  **O(n)** where **n** is the size of the original colors vector.
- Space complexity:
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  **O(n)** due to the extra space used for the `alternatingMarks` vector.

---
# Step-by-Step Visualization
**Initial Input:**

```
colors = [0, 1, 0, 1, 0]
k = 3
```

**Handling Circularity:**

We repeat the first **k-1** elements at the end of the vector:

```
colors = [0, 1, 0, 1, 0, 0, 1]
```

**Marking Alternating Groups:**

We create a vector ***alternatingMarks*** to mark positions of alternating groups.

**Colors Vector and Alternating Groups:**

| Index         | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---------------|---|---|---|---|---|---|---|
| Colors        | 0 | 1 | 0 | 1 | 0 | 0 | 1 |
| Alternating   | 0 | 1 | 1 | 1 | 0 | 0 | 0 |

**Explanation:**
- **colors[1]** (1) and **colors[2]**(0) form an alternating group with **colors[0]** (0).
- **colors[2]** (0) and **colors[3]** (1) form an alternating group with **colors[1]** (1).
- **colors[3]** (1) and **colors[4]** (0) form an alternating group with **colors[2]**(0).

Therefore, ***alternatingMarks*** becomes:

```
alternatingMarks = [0, 1, 1, 1, 0, 0, 0]
```

**Counting Alternating Groups:**

We initialize **result** and **currentGroupCount** to 0, then iterate through *alternatingMarks* to count valid alternating groups.

**Iterating through Alternating Marks:**

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---------------|---|---|---|---|---|---|---|
| Alternating | 0 | 1 | 1 | 1 | 0 | 0 | 0 |
| Group Count | - | 1 | 2 | 3 | 0 | 0 | 0 |
| Result | 0 | 1 | 2 | 3 | 3 | 3 | 3 |

**Explanation:**
- **alternatingMarks[1]** = 1: increase **currentGroupCount** to 1, increment **result** to 1 (as **currentGroupCount >= k-2**), reset **currentGroupCount** to 0.
- **alternatingMarks[2]** = 1: increase **currentGroupCount** to 1, increment **result** to 2 (as **currentGroupCount >= k-2**), reset **currentGroupCount** to 0.
- **alternatingMarks[3]** = 1: increase **currentGroupCount** to 1, increment **result** to 3 (as **currentGroupCount >= k-2**), reset **currentGroupCount** to 0.
- **alternatingMarks[4]** = 0: reset **currentGroupCount** to 0.
- **alternatingMarks[5]** = 0: no change.
- **alternatingMarks[6]** = 0: no change.
Therefore, the total number of alternating groups is **3**.


---
# Code
``` cpp []
#include <vector>
using namespace std;

class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors, int k) {
        // Repeat the first k-1 elements of the vector at the end to handle circularity
        for(int i = 0; i < k - 1; i++) {
            colors.push_back(colors[i]);
        }
        
        // Vector to mark positions of alternating groups
        vector<int> alternatingMarks;
        alternatingMarks.push_back(0); // Start with a non-alternating mark
        
        // Iterate through the colors vector to find alternating groups
        for(int i = 1; i < colors.size() - 1; i++) {
            if(colors[i] != colors[i + 1] && colors[i + 1] == colors[i - 1]) {
                // Found an alternating group
                alternatingMarks.push_back(1);
            } else {
                // No alternating group
                alternatingMarks.push_back(0);
            }
        }
        alternatingMarks.push_back(0); // End with a non-alternating mark
        
        int result = 0; // Count of alternating groups
        int currentGroupCount = 0; // Counter for current alternating group
        
        // Count the number of valid alternating groups of size k-2 or more
        for(int i = 0; i < alternatingMarks.size(); i++) {
            if(alternatingMarks[i] == 1) {
                currentGroupCount++;
                if(currentGroupCount >= (k - 2)) {
                    result++;
                    currentGroupCount--;
                }
            } else {
                currentGroupCount = 0; // Reset counter if no alternating group
            }
        }

        return result;
    }
};
```
---

