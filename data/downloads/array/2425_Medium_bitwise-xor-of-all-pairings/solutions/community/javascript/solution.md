# Beats 91% Users in JS

**Author:** the_BlueMerlin
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5211730/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5211730/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main pain point of the problem is that we have to find XOR of all the possible pairings. The most obvious approach will be 2 Nested For Loops. But that would result in Time Limit Exceeded as per the constraints.


# Approach
<!-- Describe your approach to solving the problem. -->
Consider the below scenarios

1. Both the Arrays are of **EVEN** Length
2. One is of **EVEN** Length and the other one is of **ODD** Length.
3. Both of them are **ODD** Length

- **When both the arrays are of Even Length**

arr1 = [1,2]
arr2 = [3,4]

The possible pairings will be
1 ^ 3
1 ^ 4
2 ^ 3
2 ^ 4

**All the numbers are repeated Even number of times. So the final XOR value will be 0.**

- **When one is Even and the other one is Odd**

arr1 = [1,2]
arr2 = [3,4,5]

The possible pairings will be
1 ^ 3
1 ^ 4
1 ^ 5

2 ^ 3
2 ^ 4
2 ^ 5

If we notice carefully the elements in the arr2 are coming EVEN Number of times. (The reason behind this is that arr1 contains EVEN Number of elements)
Now since they are occuring Even Number of times, we can say their final contribution will be 0.
So the answer will be elements in arr1.

**So, in a nutshell, in this scenario if one of them is ODD and the other one is EVEN, answer will be XOR of all the elements from the EVEN length array.**

- **When both the arrays are of ODD Length**

arr1 = [1,2,3]
arr2 = [4,5,6]

The possible pairings are

1 ^ 4     2 ^ 4     3 ^ 4
1 ^ 5     2 ^ 5     3 ^ 5
1 ^ 6     2 ^ 6     3 ^ 6

**As we can see, all the elements have ODD Frequency.
So, answer will be XOR of all the elements of both the arrays.**

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
**O(N)**

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
**O(1)**

# Code
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    
    let n = nums1.length;
    let m = nums2.length;

    if ((n % 2 === 0) && (m % 2 === 0))
    {
        return 0;
    }
    else if (((n % 2 === 1) && (m % 2 === 0)) || ((n % 2 === 0) && (m % 2 === 1)))
    {
        let targetArr = undefined;

        if (n % 2 === 1)
        {
            let ans = 0;
            for (let i=0; i<m; i++)
            {
                ans ^= nums2[i];
            }
            return ans;
        }
        else if (m % 2 === 1)
        {
            let ans = 0;
            for (let i=0; i<n; i++)
            {
                ans ^= nums1[i];
            }
            return ans;
        }
    }
    else if ((n % 2 === 1) && (m % 2 === 1))
    {
        let ans1 = 0;
        for (let i=0; i<n; i++)
        {
            ans1 ^= nums1[i];
        }
        let ans2 = 0;
        for (let i=0; i<m; i++)
        {
            ans2 ^= nums2[i];
        }

        return (ans1 ^ ans2);
    }
};

```

**If you find this solution and intuition interesting, please upvote my post.**
**Thanks**