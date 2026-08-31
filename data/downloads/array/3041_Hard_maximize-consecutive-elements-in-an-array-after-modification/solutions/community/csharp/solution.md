# O(n + m) solution that is probably too complex

**Author:** Cocamo1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4918311/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4918311/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I tried to do clever stuff but it just kept adding complexity, so I had to add other clever stuff to deal with that complexity.

Surprisingly, it actually passed on the second submission!

---



Basically the algorithm attempts to look at all numbers in the range 1 to nums.Max() and determine what the largest result is between two numbers:

The prefix of numbers in a row before a given number that can be shifted to the right by 1, plus the suffix of non-shifted numbers in a row at the given number + 1.

The prefix of numbers directly in a row prior to the given number, plus the suffix of non-shifted numbers in a row starting at the given number.

We perform these two calculations for every index i where:
1 <= i <= nums.Max()
and we save the largest result in a variable "maxInRow".

These two calculations represent forming contiguous sequences of numbers.

# Approach
<!-- Describe your approach to solving the problem. -->

The maximum value of nums[i] (m) is less than 10^6, which means we can use a counting-sort style array to "sort" the array in O(n) time. By sort, I really just mean creating and populating the counting sort array.

After creating and populating the counting sort array, I had this thought:
"What if to start, I take any element that has 2 or more instances and shift 1 of them to the next spot?"

This seemed reasonable, but I figured out that it would interfere with the ability to determine what the longest prefix that can be shifted to the right is later on. So I needed to create an additional boolean array that would keep track of if a number has the ability to shift to the right or not.

This boolean array:
```
bool[] canShift = new bool[maxNum + 1];
```

is what I used for that.

**So when can't an element shift?**

An element cannot be shifted to the right if either:
A. There is no element in that current spot (count of numCount[i] is 0)
OR
B. There is only 1 element in the spot and it was donated by i - 1 (meaning it already performed it's +1 shift).



After spreading out the numbers and marking which spots cannot be shifted further to the right, I initialize and fill the suffixNonShift array.
The suffixNonShift array is meant to be an array that at suffixNonShift[i] will store the longest contiguous sequence of characters that can be formed from the numbers in nums, with no more shifts, and with the first number being i. This is calculated via a simple suffix-sum operation:

```c#
for (int i = maxNum; i > 0; i--){
    if (numCount[i] > 0){
        currInRow++;
    }
    else currInRow = 0;

    suffixNonShift[i] = currInRow;
}
```

***

# Core-Algorithm

The core algorithm maintains two crucial variables:
```c#
int prefYesShift = 0;
int prevInRow = 0;
```

prefYesShift - the number of elements in a row prior to i that can be shifted 1 to the right.
prevInRow - the number of elements in a row prior to i.

prefYesShift will be used to simulate shifting a group of numbers from the left, such that the last number in that group now sits at i. We will merge that section with the suffixNonShift sequence which starts at i + 1.

prevInRow will be used to simulate merging a sequence of characters that ends just before i, with the suffixNonShift value located at i.


For each index i, from 1 to maxNum, we perform these imaginary mergers and store the maximum length of a sequence formed in this manner.
The final challenge is:

**How do we maintain prevInRow and prefYesShift during the loop?**

Here's what I came up with:
```c#
if (numCount[i] == 0){
    prevInRow = prefYesShift;
}
else prevInRow++;
if (numCount[i] > 0 && canShift[i]){
    prefYesShift++;
}
else prefYesShift = 0;
```

The logic is that IF we cannot naturally continue our prevInRow chain with no shifts, then prevInRow must become the result of shifting the numbers accounted for by prefYesShift to the right by 1.

Then for each index i, if there exists at least 1 number with the value i, and that number hasn't been shifted yet (canShift[i] == true), then we can increment our prefYesShit variable by 1. Otherwise, the chain of contiguous shiftable numbers has been broken and we must reset prefYesShift to 0.

# Complexity
- Time complexity:$$O(n + m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

Where n is the length of nums, and m is the maximum number in nums. We perform an O(n) operation to fill numCount, an O(m) operation to fill suffixNonShift, and an O(m) operation to calculate the maximum length of a contiguous sequence.

O(n + m + m) == O(n + 2m) == O(n + m)

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We require three data structures of size m + 1 for numCount, canShift, and suffixNonShift. O(3m + 3) == O(m).

# Code
```
public class Solution {
    public int MaxSelectedElements(int[] nums) {
        int maxNum = nums.Max() + 1;
        int[] numCount = new int[maxNum + 1];
        bool[] canShift = new bool[maxNum + 1];
        Array.Fill(canShift, true);
        foreach (var num in nums){
            numCount[num]++;
        }
        for (int i = 1; i < maxNum; i++){
            if (numCount[i] > 1){
                numCount[i + 1]++;
                numCount[i]--;

                if (numCount[i + 1] == 1) canShift[i + 1] = false;
            }
            else if (numCount[i] == 0) canShift[i] = false;
        }
        canShift[0] = false;
        int[] suffixNonShift = new int[maxNum + 1];

        int currInRow = 0;
        int maxInRow = 1;
        for (int i = maxNum; i > 0; i--){
            if (numCount[i] > 0){
                currInRow++;
            }
            else currInRow = 0;

            suffixNonShift[i] = currInRow;
        }
        int prefYesShift = 0;
        int prevInRow = 0;

        for (int i = 1; i <= maxNum; i++){
            maxInRow = Math.Max(maxInRow, prevInRow + suffixNonShift[i]);
            if (i != maxNum){
                maxInRow = Math.Max(maxInRow, prefYesShift + suffixNonShift[i + 1]);
            }
            
            if (numCount[i] == 0){
                prevInRow = prefYesShift;
            }
            else prevInRow++;
            if (numCount[i] > 0 && canShift[i]){
                prefYesShift++;
            }
            else prefYesShift = 0;
        }

        return maxInRow;
        
    }
}
```