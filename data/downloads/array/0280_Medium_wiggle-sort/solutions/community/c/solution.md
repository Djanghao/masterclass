# wiggleSort with Pool Index by :owl:

**Author:** sowson
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/5733080/](https://leetcode.com/problems/wiggle-sort/solutions/5733080/)

---

# Intuition
Using Pool Index

# Approach
Using Pool Index

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```c []
void wiggleSort(int* nums, int numsSize) {
    int min = +100000;
    int max = -1;
    for (int i = 0; i < numsSize; ++i) {
        int num = nums[i];
        if (min > num) min = num;
        if (max < num) max = num;
    }
    int size = max - min + 1;
    int* pool = (int *)calloc(size, sizeof(int));
    for (int i = 0; i < numsSize; ++i) {
        ++pool[nums[i] - min];
    }
    int p = -2;
    int r = numsSize -1 -(numsSize % 2) +2;
    int count = 0;
    int chalf = numsSize /2 + (numsSize %2);
    for (int i = 0; i < size; ++i) {
        while (pool[i]-- > 0) {     
            int num = i + min;  
            if (count++ < chalf) {      
                nums[p += 2] = num;
            }
            else {
                nums[r -= 2] = num;
            }
        }
    }
    free(pool);
}
```