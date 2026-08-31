# ✅✅Accepted Brute-Force Solution with some optimizations✅✅

**Author:** otabek_kholmirzaev
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278230/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278230/)

---

# Intuition
My initial approach is to identify strong pairs by iterating through all possible pairs of integers in the array. A strong pair is defined by the condition |x - y| <= min(x, y). To maximize the XOR value, I'll calculate the XOR for each pair and keep track of the maximum XOR encountered during the iteration.

# Approach
- **Eliminate Duplicates and Sort:** To simplify the search for strong pairs, I use a HashSet to remove duplicate values from the array. After that, I convert the HashSet back to an array and sort it in ascending order.

- **Iterate Through Pairs:** With the sorted array, I use two nested loops to iterate through all pairs of integers. The outer loop selects the first integer (x), and the inner loop selects the second integer (y). I make sure to break out of the inner loop if the condition nums[j] - nums[i] > nums[i] is satisfied to avoid unnecessary calculations.
 
- **Calculate XOR and Update Maximum:** For each pair (x, y), I calculate the XOR value (x ^ y) and update the maximum XOR encountered so far (max_xor) if the current XOR is greater than the previous maximum.

- **Return Maximum XOR:** Finally, I return the maximum XOR value found among all strong pairs.

# Complexity
- **Time complexity: O(n^2)**
The time complexity is O(n^2) due to the nested loops, where n is the length of the array. This is because I consider all possible pairs in the array.

- **Space complexity: O(n)**
Space complexity: The space complexity is O(n) as the HashSet is used to eliminate duplicates, and the array is sorted. The additional space required is proportional to the size of the input array.

# Code
```
public class Solution {
    public int MaximumStrongPairXor(int[] nums) {
        HashSet<int> set = new HashSet<int>(nums);
        nums = set.ToArray();
        Array.Sort(nums);
        int max_xor = -1;
        for (int i = 0; i < nums.Length; i++) {
            for (int j = i; j < nums.Length; j++) {
                if (nums[j] - nums[i] > nums[i]) {
                    break;
                }
                
                int xor = nums[i] ^ nums[j];
                max_xor = Math.Max(max_xor, xor);
            }
        }
        
        return max_xor;
    }
}
```

![please upvote.png](./images/0.png)
