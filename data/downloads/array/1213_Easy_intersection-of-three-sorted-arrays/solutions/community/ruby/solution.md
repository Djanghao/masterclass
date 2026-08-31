# 3 pointers

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/4159097/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/4159097/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @param {Integer[]} arr3
# @return {Integer[]}
def arrays_intersection(arr1, arr2, arr3)
    ptr1 = 0 
    ptr2 = 0 
    ptr3 = 0 

    res = []

    while(ptr1 < arr1.length and ptr2 < arr2.length and ptr3 < arr3.length) do 

        if arr1[ptr1] == arr2[ptr2] and arr1[ptr1] == arr3[ptr3] 
            res << arr1[ptr1]
            ptr1 += 1
            ptr2 += 1
            ptr3 += 1
        elsif arr1[ptr1] < arr2[ptr2]
            ptr1 += 1
        elsif arr1[ptr1] < arr3[ptr3]
            ptr1 += 1
        elsif arr2[ptr2] < arr1[ptr1]
            ptr2 += 1
        elsif arr2[ptr2] < arr3[ptr3]
            ptr2 += 1
        elsif arr3[ptr3] < arr1[ptr1]
            ptr3 += 1
        elsif arr3[ptr3] < arr2[ptr2]
            ptr3 += 1
        end 

        
    end 

    return res 
end 
```