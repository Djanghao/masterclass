# Easiest JAVA solution for Beginners [ 75.08% ] [ 2ms ]

**Author:** RajarshiMitra
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5227307/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5227307/)

---

# Approach
1. **Initialize XOR Variable**:
   - Create a variable `xor` and set it to 0.

2. **Sort the Array**:
   - Sort the array `nums` using `Arrays.sort(nums)`.

3. **Iterate Through the Array**:
   - Use a loop to iterate through the sorted array from the beginning to the second last element (`for (int i = 0; i < nums.length - 1; i++)`).

4. **Check for Duplicates**:
   - Inside the loop, check if the current element is equal to the next element (`if (nums[i] == nums[i + 1])`).

5. **XOR Operation**:
   - If a duplicate is found, perform an XOR operation with the current element and update the `xor` variable (`xor = xor ^ nums[i]`).

6. **Skip the Next Element**:
   - Increment `i` by 1 to skip the next element, as it has already been accounted for (`i++`).

7. **Return Result**:
   - After the loop, return the `xor` value as the result.

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int duplicateNumbersXOR(int[] nums) {
        int xor=0;
        Arrays.sort(nums);
        for(int i=0; i<nums.length-1; i++){
            if(nums[i] == nums [i+1]){
                xor=xor^nums[i];
                i++;
            }
        }
        return xor;
    }
}
```

![193730892e8675ebafc11519f6174bee5c4a5ab0.jpeg](./images/0.jpeg)
