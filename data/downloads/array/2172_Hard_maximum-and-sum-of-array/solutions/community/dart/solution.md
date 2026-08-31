# Dart, simple implementation with a brief explanation

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-and-sum-of-array/solutions/2919718/](https://leetcode.com/problems/maximum-and-sum-of-array/solutions/2919718/)

---

# Intuition
We put numbers into slots. Slots are a limited resource.
The problem we face is that by the task definition it does matter what number we put into what slot. This is the case where bitmask DP can help us.

In case of brute force approach we would need to permutate numbers, plus distribute them in a number of slots that can exceed out needs.
The result complexity would exceed N!.
There might be some ideas connected to greedy algorithms but the prove that the result solution is optimal might not exist or become too difficult.


# Approach

Simple approach - use brute force and bitmask DP to optimise complexity.
I implemented IMHO the simpliest (but non optimal) solution.

**First - Lets double the number of Slots**
Instead of dealing with N slots where we can store up to two numbers - we can think of N*2 slots where we can store 0 or 1 item.
We should realise that this brings additional computational complexity; instead of processing 3 states per slot (0, 1, 2 numbers in one slot) we will have four states in our two "virtual slots" (00, 01, 10, 11) where 01 and 10 have same effect on the end result, so we add 25% more complexity. There is a simple workarround but lets skip it for the sake of simplicity.
From now we can deal with a simple bitmask - where we can allocate numbers from our array on different bits in the mask.

**Second - allocate numbers on "0" bits in the mask and get the maximum**
Its very simple - take any one number (we can start from the beggining or end of the array, does not matter), and get the maximum by allocating it on all free virtual slots (one "0" bit in our bitmask), calculate $$realSlotIndex & ourNumber$$  and add it to the result of recursive call - where we pass remaining numbers and the bitMask with the selected bit occupied (i.e. set from "0" to 1).
Thats it. And use DP array to reduce time complexity to the size of our state array.

**Further optimisation**
Two things can be done to optimise our DP solution:
We can use additional array and backtracking to reduce out time complexity on the "25%" mentioned above.
And we can use bottom-up DP to reduce amount of memory required for our calculations - from 2D to 1D array.
Both a rather trivial.



# Complexity
- Time complexity:
O(n * 2^(slots * 2)  )

- Space complexity:
O(n * 2^(slots * 2)  )

# Code
```

class Solution {
  int topDown(List<int> nums, int idx, int slotsBitMask, int slotBitCount,
      List<List<int>> dp) {
    if (idx < 0) return 0; // no items to put in slots
    if (dp[idx][slotsBitMask] != -1) return dp[idx][slotsBitMask];
    int maxRes = 0;
    for (int i = 0; i < slotBitCount; i++) {
      if (((~slotsBitMask) & (1 << i)) != 0) // slot bit is empty ? put item there
        maxRes = max(
            maxRes,
            topDown(nums, 
                      idx - 1, // put remaining N-1 items into remaining slots 
                     (slotsBitMask | (1 << i)), // item is in the free slot - bit is set to 1
                    slotBitCount,
                    dp) +
                (((i >> 1) + 1) & nums[idx]));
    }
    return dp[idx][slotsBitMask] = maxRes;
  }

  int maximumANDSum(List<int> nums, int numSlots) {
    int slotBitCount = numSlots * 2;
    final dp = List<List<int>>.generate(
        nums.length, (index) => List<int>.filled(1 << (slotBitCount + 1), -1));
    return topDown(nums, nums.length - 1, 0, slotBitCount, dp);

  }
}
```