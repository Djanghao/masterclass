# [C#] - O(n) 1 loop 8 lines - Intuition and Explanation - Bonus Solutions

**Author:** antonybstack
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/4023004/](https://leetcode.com/problems/sorting-three-groups/solutions/4023004/)

---

# Code
```
public int MinimumOperations(IList<int> groups) {
    int n = groups.Count;
    int[] counts = { 0, n, n, n };
    foreach (int group in groups) {
        counts[group]--;
        counts[2] = Math.Min(counts[2], counts[1]);
        counts[3] = Math.Min(counts[3], counts[2]);
    }
    return counts[3];
}
```

# Intuition
This solution takes advantage of the fact that there are only three groups. It keeps a running count of the remaining numbers in each group and updates the potential minimum at every step.

The counts array isn't just tracking the raw counts of the groups, it's tracking the "potential" counts as we progress through the array. This potential count reflects how many numbers are left to be placed into their correct groups.

Intuition:
counts[1]: Represents how many more numbers we can potentially place in group 1.
counts[2]: Represents how many more numbers we can potentially place in group 2
    - However it should never be larger than group 1
counts[3]: Represents how many more numbers we can potentially place in group 3.
    - Similarly, it should never be larger than group 2

When we see a number from a particular group, we decrement its corresponding group value. Its potential count decreases when we've seen one of its members

After processing a number, we ensure the array is beautiful by setting counts[i+1] to be the minimum of its current value and counts[i].

Let's examine when nums = [2, 3, 1, 2, 3].

Initial State:
We assume the worst-case scenario: all numbers belong to group 3. Hence, counts = [0, 5, 5, 5].
After processing nums[0] = 2:
    Decrease counts[2] since we've seen a group 2 member. Now, counts = [0, 5, 4, 5].
    Ensure counts[3] isn't larger than counts[2]. Now, counts = [0, 5, 4, 4].

This state tells us we can place:
    up to 5 more numbers in group 1.
    up to 4 more numbers in group 2.
    up to 4 more numbers in group 3.

Continue processing all numbers...

Final State:
    counts = [0, 4, 3, 2] which says we can place:
    up to 4 more numbers in group 1.
    up to 3 more numbers in group 2.
    up to 2 more numbers in group 3.

But what does that mean?

If you think of constructing a beautiful array from scratch, counts[3] = 2 tells us that there are 2 numbers that haven't been placed in their proper position. Essentially, two numbers are out of place.

So, the 2 in counts[3] means you need two operations to transform nums into a beautiful array. And by looking at nums, we see that's correct - you'd need to change the positions of two numbers to get the array [1, 2, 2, 3, 3].

This algorithm keeps track of the "potential" number of placements left for each group. The final count in counts[3] tells us how many numbers are out of their correct position, thus how many operations are needed to make the array beautiful.
___
# Additional Approaches

### Binary search - O(nlog\u2061n)
Binary search to keep track of the potential longest increasing subsequence in the list nums.
For every number in nums, it finds its position in the tails array and either appends it or replaces an existing value.
The outer loop runs n times (where n is the length of nums).
Within the loop, the binary search takes at most O(log n) time.

    public int MinimumOperations_BS(IList<int> nums) {
        var LIS = new List<int>();
        foreach (int num in nums) {
            // binary search to decide to replace or append to LIS
            int l = 0, r = LIS.Count;
            while (l != r) {
                int m = l + (r - l) / 2;
                if (LIS[m] <= num) l = m + 1;
                else r = m;
            }
            if (l == LIS.Count) LIS.Add(num); // append
            else LIS[l] = num; // replace
        }
        return nums.Count - LIS.Count; // number of elements to adjust
    }
___
### DP Longest Increasing Subsequence (LIS) - O(n^2)
The outer loop runs n times.
The inner loop also runs up to n times.
The overall time complexity is O(n^2) 
e.g.
nums = [1,3,1,2,1,2,3,3,3,1]
LIS is [1,_,1,_,1,2,3,3,3,_] with length 7.
The elements outside the LIS are [3,2,1] with length 3 must be adjusted.
The total count is 10, therefore min number of ops is 10 - 7 = 3.

    public int MinimumOperations_DP(IList<int> nums) {
        int[] dp = new int[nums.Count];
        dp[0] = 1;
        int max = 1;
        for (int i = 1; i < nums.Count; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[i] < nums[j]) continue; // skip; non-increasing
                dp[i] = Math.Max(dp[i], dp[j] + 1);
                max = Math.Max(max, dp[i]);
            }
        }
        return nums.Count - max;
    }
___
### Brute Force - Time Complexity: O(n^3)
The function iterates over all possible partitions of the list into three segments:
The first segment is from the beginning of the list to i
The second segment is from i to j
The third segment is from j to the end of the list.

Counts how many numbers are not 1 in the first segment.
Counts how many numbers are not 2 in the second segment.
Counts how many numbers are not 3 in the third segment.
        |--1--|----2----|---3--|
These counts represent the number of swaps required to make each segment pure
i.e., containing only the numbers 1, 2, and 3 respectively

    public int MinimumOperations_BF(IList<int> nums) {
        int ans = nums.Count;
        for (int i = 0; i <= nums.Count; i++) {
            for (int j = i; j <= nums.Count; j++) {
                int sum = 0;
                for (int k = 0; k < i; k++) if (nums[k] != 1) sum++;
                for (int k = i; k < j; k++) if (nums[k] != 2) sum++;
                for (int k = j; k < nums.Count; k++) if (nums[k] != 3) sum++;
                ans = Math.Min(ans, sum);
            }
        }
        return ans;
    }