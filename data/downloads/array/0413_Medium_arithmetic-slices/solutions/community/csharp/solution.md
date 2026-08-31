# simple explained solution from brute force to O(n)

**Author:** vipulDessai
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/4524080/](https://leetcode.com/problems/arithmetic-slices/solutions/4524080/)

---

# Intuition - Brute force
<!-- Describe your first thoughts on how to solve this problem. -->
Since we need to find the subarray, we can loop over the entire array for getting a subarray of size n to `nums.length`
Then for every value range from [3 ... nums.length] we can create the subarray and check if the difference of every element for this subarray is same, if NOT then we do NOT increment the resulting count

# Approach
<!-- Describe your approach to solving the problem. -->
1. loop over from n = 3 to n <= nums.length
```
while (n <= nums.Length)
{}
```
2. create a subarray of size equal to current `n` variable and check if the previous difference is equal to the current difference
```
int d = nums[i] - nums[i + 1];
for (int i = 0; i < nums.Length; i++)
{
    for (int j = i; j < i + n - 1; ++j)
    {
        if (nums[j] - nums[j + 1] != d)
        {
            // break the loop
        }
    }
}
```
3. use a flag to see the loop broke or its completed and increment the resulting count accordingly

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public int NumberOfArithmeticSlices(int[] nums) {
        if (nums.Length < 3)
            return 0;

        int n = 3;
        int c = 0;
        while (n <= nums.Length)
        {
            for (int i = 0; i < nums.Length; i++)
            {
                if (i + n - 1 < nums.Length)
                {
                    int d = nums[i] - nums[i + 1];
                    bool isSubArr = true;
                    for (int j = i; j < i + n - 1; ++j)
                    {
                        if (nums[j] - nums[j + 1] != d)
                        {
                            isSubArr = false;
                            break;
                        }
                    }

                    if (isSubArr)
                    {
                        c++;
                    }
                }
            }

            n++;
        }

        return c;
    }
}
```

# Intuition - Improving the iterations to make it O(n)
<!-- Describe your first thoughts on how to solve this problem. -->
consider the array `[1, 2, 3, 4]` here there are 3 arithmatic subarray, so say suppose we increment a counter just if current differnce and previous difference matches,
so in this case it will be
items | count
-|-
1, 2 | 1
2, 3 | 2
3, 4 | 3

Now consider a case of array `[1, 2, 3, 4, 11, 13, 15]`, forget about the subarray `1, 2, 3` and just for the `11, 13, 15`
items | count
-|-
11, 13 | 1
13, 15 | 2

Now say suppose we had a global counter, and to this if we keep adding the child counter as soon as it increments
child counter | global counter
-|-
1 | 1
2 | 3
3 | 6

and if the `current difference` and `previous difference` mismatches, reset the child counter to zero 
child counter | global counter
-|-
0 | 6
1 | 7
2 | 9

So 9 is the total number of subarrays
This works because every child increment is like we find an arithmatic subarray, so whatever is the child count, add it to the global counter and boom you have the answer \uD83D\uDE00

# Approach
<!-- Describe your approach to solving the problem. -->
1. loop over from entire array to n <= nums.length, and maintain child counter and global counter
2. compare the `previous difference` to `current difference`, if same increment the child counter, else reset the child counter
3. add child counter value everytime to the global counter


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public int NumberOfArithmeticSlices(int[] nums) {
        if (nums.Length < 3)
            return 0;

        int c = 0,
            ind = 0;
        int prevDiff = nums[1] - nums[0];
        for (int i = 1; i < nums.Length - 1; i++)
        {
            int curDiff = nums[i + 1] - nums[i];
            if (curDiff == prevDiff)
            {
                ind++;
            }
            else
            {
                ind = 0;
            }

            c += ind;
            prevDiff = curDiff;
        }

        return c;
    }
}
```