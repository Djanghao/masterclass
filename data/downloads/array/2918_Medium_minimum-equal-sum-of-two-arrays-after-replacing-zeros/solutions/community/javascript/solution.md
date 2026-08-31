# ✅☑[C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4221380/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4221380/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. The `minSum` function takes two vectors of integers, `nums1` and `nums2`, as input.

1. It initializes `sum1` and `count1` to keep track of the sum and count of zeros in `nums1`. Similarly, it initializes `sum2` and `count2` for `nums2`.

1. The function calculates `sum1` and `count1` by iterating through `nums1`. For each element in `nums1`:

    - If the element is non-zero, it adds it to `sum1`.
    - If the element is zero, it increments both `sum1` and `count1`.
1. It then calculates `sum2` and `count2` in the same way by iterating through `nums2`.

1. The function compares `sum1` and `sum2`:

    -   If they are equal, it means the sums are already equal, and it returns either sum as the result.
1. If `sum1` is greater than `sum2`, it checks if `count2` is zero:

    - If `count2` is zero, it's not possible to make `sum1` equal to `sum2`, so it returns -1.
    - Otherwise, it returns `sum1` as the result because it can be increased to match or exceed `sum2`.
1. If `sum2` is greater than `sum1`, it checks if `count1` is zero:

    - If `count1` is zero, it's not possible to make `sum2` equal to `sum1`, so it returns -1.
    - Otherwise, it returns `sum2` as the result because it can be increased to match or exceed `sum1`.


# Complexity
- *Time complexity:*
   $$O(n)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    long long minSum(vector<int>& nums1, vector<int>& nums2) {
        long long sum1 = 0, cnt1 = 0; // Initialize sum1 and count1.
        long long sum2 = 0, cnt2 = 0; // Initialize sum2 and count2.

        // Calculate sum1 and count1 from nums1.
        for (auto ele : nums1) {
            if (ele)
                sum1 = sum1 + ele; // Add non-zero elements to sum1.
            else {
                sum1++; // Increment sum1 by 1 for zero elements.
                cnt1++; // Increment count1 for zero elements.
            }
        }

        // Calculate sum2 and count2 from nums2.
        for (auto ele : nums2) {
            if (ele)
                sum2 = sum2 + ele; // Add non-zero elements to sum2.
            else {
                sum2++; // Increment sum2 by 1 for zero elements.
                cnt2++; // Increment count2 for zero elements.
            }
        }

        // Compare sum1 and sum2.
        if (sum1 == sum2)
            return sum1; // If the sums are equal, return either sum.

        // If sum1 is greater than sum2, check if count2 is zero.
        // If count2 is zero, return -1 as it's not possible to make sum1 equal to sum2.
        if (sum1 > sum2) {
            if (cnt2 == 0)
                return -1;
            return sum1; // Return sum1 if it's greater and count2 is not zero.
        }

        // If sum2 is greater than sum1, check if count1 is zero.
        // If count1 is zero, return -1 as it's not possible to make sum2 equal to sum1.
        if (cnt1 == 0)
            return -1;
        return sum2; // Return sum2 if it's greater and count1 is not zero.
    }
};


```
```C []

#include <stdio.h>
#include <stdlib.h>

long long minSum(int* nums1, int* nums2, int size1, int size2) {
    long long sum1 = 0, cnt1 = 0;
    long long sum2 = 0, cnt2 = 0;

    for (int i = 0; i < size1; i++) {
        if (nums1[i]) {
            sum1 += nums1[i];
        } else {
            sum1++;
            cnt1++;
        }
    }

    for (int i = 0; i < size2; i++) {
        if (nums2[i]) {
            sum2 += nums2[i];
        } else {
            sum2++;
            cnt2++;
        }
    }

    if (sum1 == sum2)
        return sum1;
    else if (sum1 > sum2) {
        if (cnt2 == 0)
            return -1;
        return sum1;
    }

    if (cnt1 == 0)
        return -1;
    return sum2;
}

int main() {
    int nums1[] = {1, 0, 2, 0};
    int size1 = sizeof(nums1) / sizeof(nums1[0]);
    int nums2[] = {3, 4, 0, 5};
    int size2 = sizeof(nums2) / sizeof(nums2[0);

    long long result = minSum(nums1, nums2, size1, size2);
    printf("Minimum Sum: %lld\
", result);

    return 0;
}



```
```Java []
import java.util.ArrayList;

public class Solution {
    public long minSum(ArrayList<Integer> nums1, ArrayList<Integer> nums2) {
        long sum1 = 0, cnt1 = 0;
        long sum2 = 0, cnt2 = 0;

        for (int ele : nums1) {
            if (ele != 0) {
                sum1 += ele;
            } else {
                sum1++;
                cnt1++;
            }
        }

        for (int ele : nums2) {
            if (ele != 0) {
                sum2 += ele;
            } else {
                sum2++;
                cnt2++;
            }
        }

        if (sum1 == sum2)
            return sum1;
        else if (sum1 > sum2) {
            if (cnt2 == 0)
                return -1;
            return sum1;
        }

        if (cnt1 == 0)
            return -1;
        return sum2;
    }
}


```

```python3 []
class Solution:
    def minSum(self, nums1, nums2):
        sum1, cnt1 = 0, 0
        sum2, cnt2 = 0, 0

        for ele in nums1:
            if ele != 0:
                sum1 += ele
            else:
                sum1 += 1
                cnt1 += 1

        for ele in nums2:
            if ele != 0:
                sum2 += ele
            else:
                sum2 += 1
                cnt2 += 1

        if sum1 == sum2:
            return sum1
        elif sum1 > sum2:
            if cnt2 == 0:
                return -1
            return sum1

        if cnt1 == 0:
            return -1
        return sum2



```
```javascript []
class Solution {
    minSum(nums1, nums2) {
        let sum1 = 0, cnt1 = 0;
        let sum2 = 0, cnt2 = 0;

        for (let ele of nums1) {
            if (ele !== 0) {
                sum1 += ele;
            } else {
                sum1++;
                cnt1++;
            }
        }

        for (let ele of nums2) {
            if (ele !== 0) {
                sum2 += ele;
            } else {
                sum2++;
                cnt2++;
            }
        }

        if (sum1 === sum2)
            return sum1;
        else if (sum1 > sum2) {
            if (cnt2 === 0)
                return -1;
            return sum1;
        }

        if (cnt1 === 0)
            return -1;
        return sum2;
    }
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---