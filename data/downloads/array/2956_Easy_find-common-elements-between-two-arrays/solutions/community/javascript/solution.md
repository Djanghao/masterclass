# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4382829/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4382829/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**



1. It creates unordered sets `set1` and `set2` from `nums1` and `nums2` respectively. These sets contain unique elements from the vectors, allowing faster lookup.

1. Two counts, `count1` and `count2`, are initialized to track the intersections.

1. It iterates through `nums1` and checks if each element exists in `set2`. If found, it increments `count1`.

1. Similarly, it iterates through `nums2` and checks if each element exists in `set1`. If found, it increments `count2`.

1. Finally, it returns a vector containing the counts of intersection for both vectors.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(m+n)$$
    


# Code
```C++ []


class Solution {
public:
    // Function to find intersection values between two vectors
    std::vector<int> findIntersectionValues(std::vector<int>& nums1, std::vector<int>& nums2) {
        // Create unordered sets from nums1 and nums2
        std::unordered_set<int> set1(nums1.begin(), nums1.end());
        std::unordered_set<int> set2(nums2.begin(), nums2.end());

        int count1 = 0, count2 = 0;

        // Find the number of elements in nums1 that are present in nums2
        for (int num : nums1) {
            if (set2.find(num) != set2.end()) {
                count1++;
            }
        }

        // Find the number of elements in nums2 that are present in nums1
        for (int num : nums2) {
            if (set1.find(num) != set1.end()) {
                count2++;
            }
        }

        // Return the counts of intersection for both vectors
        return {count1, count2};
    }
};



```
```C []


struct Node {
    int data;
    struct Node* next;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

int* findIntersectionValues(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    struct Node* set1 = NULL;
    struct Node* set2 = NULL;

    // Create sets from nums1 and nums2
    for (int i = 0; i < nums1Size; i++) {
        struct Node* newNode = createNode(nums1[i]);
        newNode->next = set1;
        set1 = newNode;
    }

    for (int i = 0; i < nums2Size; i++) {
        struct Node* newNode = createNode(nums2[i]);
        newNode->next = set2;
        set2 = newNode;
    }

    int count1 = 0, count2 = 0;

    // Find the number of elements in nums1 that are present in nums2
    for (struct Node* curr = set1; curr != NULL; curr = curr->next) {
        struct Node* temp = set2;
        while (temp != NULL) {
            if (temp->data == curr->data) {
                count1++;
                break;
            }
            temp = temp->next;
        }
    }

    // Find the number of elements in nums2 that are present in nums1
    for (struct Node* curr = set2; curr != NULL; curr = curr->next) {
        struct Node* temp = set1;
        while (temp != NULL) {
            if (temp->data == curr->data) {
                count2++;
                break;
            }
            temp = temp->next;
        }
    }

    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = count1;
    result[1] = count2;
    *returnSize = 2;
    return result;
}





```
```Java []
import java.util.*;

class Solution {
    public int[] findIntersectionValues(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : nums1) {
            set1.add(num);
        }

        for (int num : nums2) {
            set2.add(num);
        }

        int count1 = 0, count2 = 0;

        for (int num : nums1) {
            if (set2.contains(num)) {
                count1++;
            }
        }

        for (int num : nums2) {
            if (set1.contains(num)) {
                count2++;
            }
        }

        return new int[]{count1, count2};
    }
}



```
```python3 []
class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        set1 = set(nums1)
        set2 = set(nums2)

        count1 = sum(1 for num in nums1 if num in set2)
        count2 = sum(1 for num in nums2 if num in set1)

        return [count1, count2]



```
```javascript []

function findIntersectionValues(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let count1 = 0, count2 = 0;

    // Find the number of elements in nums1 that are present in nums2
    for (let num of nums1) {
        if (set2.has(num)) {
            count1++;
        }
    }

    // Find the number of elements in nums2 that are present in nums1
    for (let num of nums2) {
        if (set1.has(num)) {
            count2++;
        }
    }

    return [count1, count2];
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---