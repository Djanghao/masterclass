# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011068/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011068/)

---

![0ehh83fsnh811.jpg](./images/0.jpeg)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443796780
- ***C++ Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443690506
- ***Python3 Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443698573
- ***Java Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443696448
- ***C Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443797787
- ***Python Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443697555
- ***C# Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443794996
- ***Go Code -->*** https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/submissions/1443813512
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```c []
int minChanges(char* s) {
    int cnt = 0;
    for (int i = 0; s[i]; i += 2) {
        cnt = (s[i] != s[i + 1]) ? ++cnt : cnt;
    }
    return cnt;
}
```
![th.jpeg](./images/1.jpeg)
