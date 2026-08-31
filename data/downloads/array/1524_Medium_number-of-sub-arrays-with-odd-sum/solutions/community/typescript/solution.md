# JavaScript | Prefix Sum | Even - Odd theory | Example explanation

**Author:** pragyagautam02
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/3181441/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/3181441/)

---

# Problem Statement
<!-- Describe your first thoughts on how to solve this problem. -->
Given an array of integers, we need to compute the number of subarrays that have an odd sum.

# Approach
<!-- Describe your approach to solving the problem. -->
We will use two variables to keep track of subarrays with even and odd sums: even_count and odd_count. When we encounter a subarray with an even sum, we will add odd_count to the result. This means that odd_count subarrays with an odd sum can be formed by removing even_count numbers from the subarray with an even sum.

When we encounter a subarray with an odd sum, we will increment odd_count.

# Example

```
[1] -> 1 (odd)
[2] -> 2 (even)
[3] -> 3 (odd)
[4] -> 4 (even)
[5] -> 5 (odd)
[1, 2] -> 3 (odd)
[2, 3] -> 5 (odd)
[3, 4] -> 7 (odd)
[4, 5] -> 9 (odd)
[1, 2, 3] -> 6 (even)
[2, 3, 4] -> 9 (odd)
[3, 4, 5] -> 12 (even)
[1, 2, 3, 4] -> 10 (even)
[2, 3, 4, 5] -> 14 (even)
[1, 2, 3, 4, 5] -> 15 (odd)

```

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

var numOfSubarrays = function(arr) {
    even = 1; 
    odd = 0; 
    ans = 0; 
    prefix = 0;
    mod = 10**9 +7;

    for(let num of arr){
        prefix += num;
        if (prefix & 1) {
            ans += even ;
            odd++;
        }
        else{
            ans += odd ;
            even++;
        }
    }
    return ans % mod;
};
```