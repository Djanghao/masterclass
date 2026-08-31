# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/5784599/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/5784599/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389450627
- ***C++ Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389444415
- ***Python3 Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389449221
- ***Java Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389445651
- ***C Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389499056
- ***Python Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389448506
- ***C# Code -->*** https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389450166
# Approach
<!-- Describe your approach to solving the problem. -->

---
# ***Approach - 1***
1. *This Approach includes Simple use of Hash-Maps inbuilt hashmaps.*
2. *This gives the Time-Complexity and Space-Complexity both O(n).*
3. *Push all elements in hashmap maintaining there frequencies increment.*
4. *Now Traverse on array and initialize a compliment (nums[i] + k). and check whether it exists in hashmap or not.*
5. *If it exists add the frequency of compliment in our answer.*
6. *Like the above example solutions*
---

# ***Approach - 2***
1. *We can use an array to keep track of frquencies instead of hashmaps this will reduce out TC - O(N) & SC - O(1).
2. *Example for this approach is given by this C++ Code*
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1389515286

---


# ***Approach - 3***
1. *We can simply implement two loops brute force and check for every possible pair.*
2. *This makes the TC - O(N * N) and SC - O(1)*
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(N)
# Code
```c []
#include <stdio.h>
#include <stdlib.h>
#define Rep(i, n) for (int i = 0; i < n; ++i)
#define Rep1(i, n) for (int i = 1; i <= n; i++)

typedef struct Map {
    int* arr;
} maps;

maps* intializeMap(int capacity) {
    maps* map = (maps*) malloc(sizeof(maps));
    map->arr = (int*) calloc(sizeof(int), capacity);
    
    return map;
}

bool containsKey(maps* map, int val) { 
    return map->arr[val];
}

int countKDifference(int* nums, int numsSize, int k) {
    maps* map = intializeMap(202);
    Rep (i, numsSize) 
        map->arr[nums[i]]++;

    int ans = 0;
    Rep (i, numsSize) {
        int comp = k + nums[i];
        if (containsKey(map, comp))
            ans += map->arr[comp];
    }
    free(map);
    return ans;
}
```
![th.jpeg](./images/1.jpeg)
