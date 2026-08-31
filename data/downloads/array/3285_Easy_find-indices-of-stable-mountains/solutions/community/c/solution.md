# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5786676/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5786676/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390019402
- ***C++ Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390096545
- ***Python3 Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390009177
- ***Java Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390000070
- ***C Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390028342
- ***Python Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390005758
- ***C# Code -->*** https://leetcode.com/problems/find-indices-of-stable-mountains/submissions/1390017465
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N) -> C Solution
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1) -> C Solution
# Code
```c []
#include<stdio.h>
#include<stdlib.h>
#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* stableMountains(int* height, int heightSize, int threshold, int* returnSize) {
    *returnSize = 0;
    int* arr = (int*)calloc(sizeof(int), 101);
    FOR (i, 1, heightSize)
        if (height[i - 1] > threshold)
            arr[(*returnSize)++] = i;
    return arr;
}
```
![th.jpeg](./images/1.jpeg)
