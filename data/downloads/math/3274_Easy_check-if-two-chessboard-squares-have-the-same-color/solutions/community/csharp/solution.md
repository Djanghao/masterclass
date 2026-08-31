# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5885208/](https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/5885208/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1415574562
- ***Python3 Code -->*** https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1415562106
- ***Java Code -->*** https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1415558782
- ***C Code -->*** https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1415564237
- ***Python Code -->*** https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1415561645
- ***C# Code -->*** https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/submissions/1415569119
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool checkTwoChessboards(string coordinate1, string coordinate2) {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        auto positionToNumber = [&](const string& pos) -> int {
            char col = pos[0];
            char row = pos[1];

            int colNumber = col - 'a' + 1;
            int rowNumber = row - '0';

            return colNumber + rowNumber;
        };
        int pos1 = positionToNumber(coordinate1);
        int pos2 = positionToNumber(coordinate2);

        return (pos1 & 1) == (pos2 & 1);
    }
};

