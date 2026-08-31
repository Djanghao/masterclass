# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5828849/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5828849/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400914076
- ***C++ Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400467428
- ***Python3 Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400659076
- ***Java Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400512400
- ***C Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400941122
- ***Python Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400657755
- ***C# Code -->*** https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/submissions/1400664303
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
#include <string.h>
//This C - Code is Written By Edwards310 aka Bhatiji's Template
//C - Codes are Always amazing working with Structures and many C - functions
#define MAX_DIGITS 10
#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)

typedef struct Trie {
    struct Trie* nums[MAX_DIGITS];
} Trie;

Trie* createTrieNode() {
    Trie* newNode = (Trie*)malloc(sizeof(Trie));
    Rep (i, MAX_DIGITS)
        newNode->nums[i] = NULL;
    return newNode;
}

void insert(Trie* root, int val) {
    Trie* curr = root;
    char str[12];
    snprintf(str, sizeof(str), "%d", val);
    for (int i = 0; str[i]; i++) {
        int idx = str[i] - '0';
        if (!curr->nums[idx])
            curr->nums[idx] = createTrieNode();

        curr = curr->nums[idx];
    }
}

int check(Trie* root, int val) {
    Trie* curr = root;
    int res = 0;
    char str[12]; 
    snprintf(str, sizeof(str), "%d", val); 
    for (int i = 0; str[i]; i++) {
        int idx = str[i] - '0';
        if (curr->nums[idx])
            ++res;
        else
            break;
        curr = curr->nums[idx];
    }
    return res;
}

void freeTrie(Trie* root) {
    if (root) {
        Rep (i, MAX_DIGITS) 
            freeTrie(root->nums[i]); 
        free(root); 
    }
}

int longestCommonPrefix(int* arr1, int arr1Size, int* arr2, int arr2Size) {
    Trie* root = createTrieNode();
    int res = 0;


    Rep (i, arr1Size)
        insert(root, arr1[i]);

    Rep (j, arr2Size) {
        int commonPrefixLength = check(root, arr2[j]);
        if (commonPrefixLength > res)
            res = commonPrefixLength;
    }

    freeTrie(root);
    return res;
}
```
![th.jpeg](./images/1.jpeg)
