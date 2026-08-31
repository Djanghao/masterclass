# BEATS 100% SIMPLE and EASY [DART] Solution

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4505592/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4505592/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we need to count the occurrences of each element in the given array and then determine the minimum number of operations required to make the array empty based on the given rules.
# Approach
<!-- Describe your approach to solving the problem. -->
I have used a Map to count the occurrences of each element in the array. Then, I iterate through the entries of the map and calculate the number of operations based on the count of each element. The key insight is to handle the cases where the count is not divisible by 3 separately. If the count is 1, it's not possible to form a pair or a triplet, so I return -1. Otherwise:Count is divisible by 3: In this case, you can form triplets and perform operations to make the count of each element zero. You add entry.value~/3 to the total operations, as each triplet operation removes three elements.

Count leaves a remainder of 1 or 2 when divided by 3: In these cases, you need to perform operations to make the count of each element a multiple of 3. For a remainder of 1, you need to perform an additional operation to make it a multiple of 3. For a remainder of 2, you also need one additional operation. You add (entry.value~/3) + 1 to the total operations in both cases.

Let's illustrate this with an example:

Example:
```
Input: nums = [2, 3, 3, 2, 2, 4, 2, 3, 4]
```
Count of elements:
```
2 -> 4 times
3 -> 3 times
4 -> 2 times
```
For the element '2', the count is 4 which is divisible by 3. So, you add 4 ~/ 3 to the total operations, so the result will be 4 ~/ 3 + 1 = 2, and it's the same result of 4 = 2 + 2, only here we care about the number of iterations.

For the element '3', the count is 3 which leaves a remainder of 0 when divided by 3. You add 3 ~/ 3 to the total operations, resulting in ans += 1.

For the element '4', the count is 2 which leaves a remainder of 2 when divided by 3. You add 2 ~/ 3 + 1 = 0 + 1 = 1 and it's exactly one iteration added to the total operations,  resulting in ans += 1.

Therefore, the total operations for this example would be 4.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n), where n is the length of the input array. The loop to count occurrences takes linear time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 O(n), as we use a Map to store the count of each element in the array.
# Code
```
class Solution {
  int minOperations(List<int> nums) {
      int ans=0;
      Map<int,int> map={};
      nums.forEach((n){
          map[n]=(map[n]??0)+1;
      });
      for(var entry in map.entries){
          if(entry.value==1) return -1;
          switch(entry.value%3){
              case 0:ans+=entry.value~/3;break;
              case 1:
              case 2:ans+=entry.value~/3 + 1;break;
          }
      }
      return ans;
  }
}
```