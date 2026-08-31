# Java Solution for Number of Ways to Reorder Array to Get Same BST Problem

**Author:** Aman_Raj_Sinha
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643613/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643613/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks for the number of different ways to reorder the given array nums such that the constructed Binary Search Tree (BST) is identical to the original BST formed from nums. We can solve this problem recursively by considering the root element of the BST and splitting the remaining elements into two groups: the left subtree elements (less than the root) and the right subtree elements (greater than the root). The total number of ways to reorder nums can be calculated by multiplying the number of ways to reorder the left subtree, the number of ways to reorder the right subtree, and the number of possible combinations of left and right subtrees.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a helper function countWays that takes a list of integers (nums) as input and returns the number of ways to reorder nums to form the same BST.
1. In the countWays function:
- If the size of nums is less than or equal to 2, return 1 since there is only one way to reorder 0 or 1 element.
- Create two empty lists: left and right.
- Set the first element of nums as the root value.
- Iterate through the remaining elements of nums (starting from the second element):
- If the current element is less than the root value, add it to the left list.
- Otherwise, add it to the right list.
- Calculate the number of ways to reorder the left list (recursively) and store it in leftCount.
- Calculate the number of ways to reorder the right list (recursively) and store it in rightCount.
- Calculate the number of possible combinations of left and right subtrees using the comb function.
- Return the product of comb, leftCount, and rightCount.
3. Create a numOfWays function that converts the input array into a list and calls the countWays function. Subtract 1 from the result and return it as the final output.
1. Test the program with provided test cases or additional test cases.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n^2), where n is the size of the nums array. This is because for each recursive call, we split the list into left and right subtrees, and in the worst case, the number of elements in the subtrees can be O(n). The comb function also has a time complexity of O(n^2) because it calculates combinations using dynamic programming.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) because we use additional space to store the left and right subtrees. The depth of the recursion can be at most n, so the space required for recursion is also O(n).

# Code
```
class Solution {
    private static final int MOD = 1000000007;
    public int numOfWays(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }
        return countWays(list) - 1;
    }
    private int countWays(List<Integer> nums) {
        if (nums.size() <= 2) {
            return 1;
        }
        
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();
        int root = nums.get(0);
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums.get(i) < root) {
                left.add(nums.get(i));
            } else {
                right.add(nums.get(i));
            }
        }
        
        long leftCount = countWays(left);
        long rightCount = countWays(right);
        
        return (int) ((comb(nums.size() - 1, left.size()) % MOD) * (leftCount % MOD) % MOD * (rightCount % MOD) % MOD);
    }
    
    private long comb(int n, int k) {
        long[][] dp = new long[n + 1][k + 1];
        for (int i = 0; i <= n; i++) {
            dp[i][0] = 1;
            for (int j = 1; j <= Math.min(i, k); j++) {
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
            }
        }
        return dp[n][k];
    }
}
```