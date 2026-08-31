# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 6
**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solutions/5762045/](https://leetcode.com/problems/spiral-matrix-iv/solutions/5762045/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384541832
- ***C++ Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384119160
- ***Python3 Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384507521
- ***Java Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384502343
- ***C Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384544631
- ***Python Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384504308
- ***C# Code -->*** https://leetcode.com/problems/spiral-matrix-iv/submissions/1384535695
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(m * n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(m * n)
# Code
```cpp []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> spiralMatrix(int rows, int columns, ListNode* head) {
        vector<vector<int>> matrix(rows, vector<int>(columns, -1));

        int topRow = 0, bottomRow = rows - 1;
        int leftColumn = 0, rightColumn = columns - 1;

        while (head) {
            for (int col = leftColumn; col <= rightColumn && head; col++) {
                matrix[topRow][col] = head->val;
                head = head->next;
            }
            topRow++;

            for (int row = topRow; row <= bottomRow && head; row++) {
                matrix[row][rightColumn] = head->val;
                head = head->next;
            }
            rightColumn--;

            for (int col = rightColumn; col >= leftColumn && head; col--) {
                matrix[bottomRow][col] = head->val;
                head = head->next;
            }
            bottomRow--;

            for (int row = bottomRow; row >= topRow && head; row--) {
                matrix[row][leftColumn] = head->val;
                head = head->next;
            }
            leftColumn++;
        }

        return matrix;
    }
};
static const int kds = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 0;
}();

```
