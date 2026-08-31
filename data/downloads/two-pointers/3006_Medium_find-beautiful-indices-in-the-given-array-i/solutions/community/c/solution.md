# C solution

**Author:** TharunkumarSenthilkumar
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5468496/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5468496/)

---

# Intuition
Idea is to implement loopimg an malloc funtion for the memory allocation

# Approach
Using three arrays for finding start indices of substring a and b in input string
Find all beautiful indices
Sort the beautiful indices
Free the allocated memory

# Complexity
- Time complexity: 20%

- Space complexity: 40%

# Code
```
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// Function to find all beautiful indices
int* beautifulIndices(char* s, char* a, char* b, int k, int* ret_Size) {
    int s_len = strlen(s);
    int a_len = strlen(a);
    int b_len = strlen(b);

    int* a_indices = (int*)malloc(s_len * sizeof(int));
    int* b_indices = (int*)malloc(s_len * sizeof(int));
    int a_count = 0, b_count = 0;
    
    // Find all start indices of substring a in s
    for (int i = 0; i <= s_len - a_len; i++) {
        if (strncmp(&s[i], a, a_len) == 0) {
            a_indices[a_count++] = i;
        }
    }
    
    // Find all start indices of substring b in s
    for (int i = 0; i <= s_len - b_len; i++) {
        if (strncmp(&s[i], b, b_len) == 0) {
            b_indices[b_count++] = i;
        }
    }
    
    // Find all beautiful indices
    int* beautiful_indices = (int*)malloc(s_len * sizeof(int));
    int beautiful_count = 0;
    
    for (int i = 0; i < a_count; i++) {
        for (int j = 0; j < b_count; j++) {
            if (abs(a_indices[i] - b_indices[j]) <= k) {
                beautiful_indices[beautiful_count++] = a_indices[i];
                break;  // No need to check further for this a_indices[i]
            }
        }
    }
    
    // Sort the beautiful indices
    qsort(beautiful_indices, beautiful_count, sizeof(int), compare);

    // Clean up and return results
    free(a_indices);
    free(b_indices);

    *ret_Size = beautiful_count;
    return beautiful_indices;
}
```