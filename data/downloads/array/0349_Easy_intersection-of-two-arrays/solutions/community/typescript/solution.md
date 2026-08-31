# 2 very easy javascript approaches - using both array and set

**Author:** aasthas2022
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays/solutions/4855277/](https://leetcode.com/problems/intersection-of-two-arrays/solutions/4855277/)

---

## Solution 1:

# Intuition
For the first solution, the initial idea was to be iterating through one of the arrays and checking if each element exists in the other array. If it does, and it hasn't already been added to the list of common elements, it gets added.

# Approach
- **First Solution**: Iterate through one array (`nums1`) and for each element, check if it exists in the other array (`nums2`). If it does and hasn't been added to the list of common elements, add it.

# Complexity
- **First Solution**:
  - Time complexity: \\(O(n \\cdot m)\\), where \\(n\\) is the length of `nums1` and \\(m\\) is the length of `nums2`.
  - Space complexity: \\(O(k)\\), where \\(k\\) is the number of common elements between `nums1` and `nums2`.

# Code
```javascript
var intersection = function(nums1, nums2) {
    let common_elem = []
    nums1.forEach(element => {
        if(nums2.includes(element) && !common_elem.includes(element)){
            common_elem.push(element)
        }  
    });

    return common_elem
    
};

console.log(intersection([1,2,2,1], [2,2]))
```

## Solution 2:

# Intuition
The second solution intuition was to utilize sets, which can efficiently store unique elements and provide faster lookup times compared to arrays. It appears to iterate through one set and check for the existence of each element in the other set.

# Approach
- **Second Solution**: Convert both arrays into sets (`set1` and `set2`) to remove duplicates and improve lookup performance. Iterate through one set (`set1`) and check if each element exists in the other set (`set2`). If it does, add it to the list of common elements.

# Complexity
- **Second Solution**:
  - Time complexity: \\(O(n + m)\\), where \\(n\\) is the size of `nums1` and \\(m\\) is the size of `nums2`. Converting arrays to sets takes \\(O(n + m)\\) time, and iterating through the sets takes \\(O(n)\\) or \\(O(m)\\) time.
  - Space complexity: \\(O(n + m)\\), as two sets are created to store the unique elements of `nums1` and `nums2`.

# Code
```javascript
var intersection1 = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let common_elem = []
    set1.forEach(element => {
        if(set2.has(element)){
            common_elem.push(element)
        }  
    });

    return common_elem
    
};
```