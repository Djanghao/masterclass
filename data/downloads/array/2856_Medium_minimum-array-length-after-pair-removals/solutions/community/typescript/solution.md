# 0(n), 0(1)

**Author:** mtjosue13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4542995/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4542995/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Understanding the different possible patterns you can take ie:
concecutive, slow and fast, biggest and smallest, and lastly the correct approach which is furthest possible without breaking the pattern.
# Approach
<!-- Describe your approach to solving the problem. -->
I asked myself what is the furthest possible position from 0 which will entail us to have a complete pattern which means every position will have a pair, since they are in ascending order. We can begin to account for the amount of pairs which fulfill the condition. If the length of the given arr is odd we can unaccount for the middle element and every-other element should respectively have a pair. take a random arr 
[1, 1, 1, 2, 3, 3, 3, 4]
furthest position without breaking the pairs are position 0 and 4;
this will entail 1 to pair with 5
2 with 6
3 with 7
thus completing the pattern.
similarly if in odd length arr
[1, 1, 1, 2, 3, 3, 4]
posiiton 0 pairs with 4
1 with 5
2 with 6 
Ultimately finding the most amount of pairs in the arr.
Once we have this we substract the amount of pairs found for the total length and we have our answer.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minLengthAfterRemovals(nums: number[]): number {
  const length = nums.length;
  let mid = length % 2 === 0 ? Math.floor(length / 2) : Math.floor(length / 2) + 1; 
  let i = 0;
  let j = mid
  let toRemove = 0;
  while (i < mid) {
      if (nums[i] < nums[j]) {
          toRemove += 2;
      }
      i++;
      j++;
  }
  return length - toRemove;
};

// [1, 3, 3, 3, 4]

// and

// [2,3,4,4,4]
```