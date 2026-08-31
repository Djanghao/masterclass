# C# O(n) Time / O(1) Space || Simple Solution

**Author:** Cocamo1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/4569266/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/4569266/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The differences array holds all the information we need to solve this in 1-pass. 

Lets assume that the first number in the hidden sequence is 0: The information we're trying to get from differences is during the sequence how far below 0 does the minimum number in the sequence reach, and how far above 0 does the maximum number in the sequence reach.

Once we have those numbers, we can find the lowest possible starting number with the operation:
```
long lowPoint = lower + Math.Abs(minDip);
```

This code is basically accounting for the minimum dip below 0 that the sequence gets to, and sets the starting number so that the minimum dip will get down to "lower".

Then, knowing the starting number, we use our information about the maximum amount higher that the max number needs to be to set the high point as:
```
long higher = lowPoint + maxDip;
```

Between lowPoint and higher we now have the lowest possible lowPoint/higher that could possibly exist within a valid hidden sequence. Consider then if higher is set to 5, and upper is set to 6, how many valid hidden sequences might we be able to make? We can make upper - higher + 1, sequences AKA 2!

But what if higher is set to a value greater than upper? In that case it means that even the lowest possible starting range still resulted in a highest number that is out of bounds of the lower-upper range. We just return 0 for this scenario.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize three variables - I made them longs just to prevent the possability of an integer overflow. minDip will track the maximum amount that a number dips below the starting number, maxDip will track the maximum amount that a number dips above a starting number, and curr will track the current sum of differences.
2. Do an O(n) pass over differences where you add each number to curr, and set minDip to be the minimum between itself and curr. Set maxDip to be the maximum between itself and curr.
3. Calculate the lowest possible starting point by adding the absolute value of minDip onto lower.
4. Calculate the lowest possible high point (named higher in this code), relative to the lowest possible starting point.
5. Return the maximum between 0 and upper - higher + 1.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The algorithm requires us to do 1 full pass over differences, and therefore the order of growth is O(n). All other operations are O(1).

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
All variables used in this algorithm are constants, there is no memory usage dependant on input size. Therefore the space used is fully constant O(1).


# Code
```
public class Solution {
    public int NumberOfArrays(int[] differences, int lower, int upper) {
        long minDip = 0, maxDip = 0;

        long curr = 0;

        for (int i = 0; i < differences.Length; i++){
            curr += differences[i];
            minDip = Math.Min(minDip, curr);
            maxDip = Math.Max(maxDip, curr);
        }

        long lowPoint = lower + Math.Abs(minDip);
        long higher = lowPoint + maxDip;

        return Math.Max(0, (int)(upper - higher + 1));

        
    }
}
```