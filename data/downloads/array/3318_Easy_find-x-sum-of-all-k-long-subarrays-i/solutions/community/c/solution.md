# pure C

**Author:** ekko3add
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/6026995/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/6026995/)

---

# Approach
1. Sliding window
- Use two pointer, left and right to mark the boundaries of the sliding window.
- Move right to right until its size reaches ```k```
- Once the size reaches, calculate the sum of elements in the window and then move left.
2. Calculate the sum of top ```x``` elements.
- Traverse all elements in the window and use ```nodeEntry``` structure to store the count of each number.
- Use ```qsort()``` which sort by their frequency in descending order first, and sort by the value.
- Finally, calculate the sum of the ```x```

# Complexity
- Time complexity: 
$$O((n - k + 1) * (k + k log k))$$ 
= $$O(n * klog k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#define MAX_LEN 50

typedef struct {
    int val;
    int count;
} nodeEntry;

int cmp(const void *a, const void *b) {
    nodeEntry *node1 = (nodeEntry*)a;
    nodeEntry *node2 = (nodeEntry*)b;

    if (node1->count != node2->count) {
        return node2->count - node1->count;
    }

    return node2->val - node1->val;
}

int calcXSum(int *nums, int left, int right, int x) {
    int size = right - left + 1;
    int nodeCount = 0, sum = 0;
    nodeEntry nodes[size];

    if (size <= x) {
        for (int i = left; i <= right; ++i) {
            sum += nums[i];
        }

        return sum;
    }

    for (int i = left; i <= right; ++i) {
        bool found = false;
        for (int j = 0; j < nodeCount; ++j) {
            if (nodes[j].val == nums[i]) {
                nodes[j].count +=1;
                found = true;
                break;
            }
        }

        if (!found) {
            nodes[nodeCount].val = nums[i];
            nodes[nodeCount].count = 1;
            ++nodeCount;
        }
    }

    qsort(nodes, nodeCount, sizeof(nodeEntry), cmp);
    for (int i = 0; i < x && i < nodeCount; ++i) {
        sum += (nodes[i].val * nodes[i].count);
    }

    return sum;
}

int* findXSum(int* nums, int numsSize, int k, int x, int* returnSize) {
    *returnSize = numsSize - k + 1;
    int *ans = calloc(*returnSize, sizeof(int));
    int idx = 0;

    int left = 0, right = 0, sum = 0;
    while (right < numsSize) {
        if (right - left + 1 == k) {
            sum = calcXSum(nums, left, right, x);
            
            ans[idx++] = sum;
            sum = 0;

            if (idx == *returnSize) break;
            ++left;
        }

        ++right;
    }

    return ans;
}

```