# Dart Intuitive Solution: Arithmetic Subarrays Checker Algorithm

**Author:** rsienkiewicz88
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4320148/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4320148/)

---


# Problem
The problem is to check whether the subarrays of a given array have an arithmetic sequence. An arithmetic sequence is a sequence of numbers in which the difference between successive terms is constant. 
# Intuition
The intuition behind the solution is to extract a subarray with the given ranges (l[i], r[i]), sort it, and then iterate the subarray to check whether it forms an arithmetic sequence.
# Approach
- **Iterate over ranges**
Start by iterating over the given ranges using a for loop.

- **Subarray Extraction**
For each range (l[i], r[i]), extract the appropriate subarray from the original "nums" array using the getRange method
Remember!!! that the getRange "end" parameter must have a value one higher to correctly determine the range.

- **Sorting subarrays**
Just sort the extracted subarray using the sort method.

- **Checking an arithmetic sequence**
The difference between the first two elements of the sorted subarray is calculated as "difference".
The solution then iterates over the sorted subarray, checking whether the difference between successive elements is "diff".
If any difference is not equal to "diff", the loop breaks, indicating that the subarray does not form an arithmetic sequence.

- **Adding results to the answer list**
If the loop ends without a break, it means that the entire subarray forms an arithmetic sequence. In this case, "true" is added to the response list; otherwise "false" is added.

- **Returning result**
Finally, return a list of pointer boolean values.

# Complexity
- **Time complexity:**
The dominant time complexity is the sorting step, which is O(N * log(N)), where N is the length of the longest subarray.
The overall time complexity is O(M * N * log(N)), where M is the number of ranges and N is the average length of the subarrays.

- **Space complexity:**
Additional space is used to store the sorted subarray, resulting in O(N) space complexity

# Code
```
class Solution {
  List<bool> checkArithmeticSubarrays(List<int> nums, List<int> l, List<int> r) {
    List<bool> ans = [];
    for(int i = 0; i < l.length; i++){
      List<int> range = nums.getRange(l[i], r[i] + 1).toList()..sort();
      int diff = range[0] - range [1];
      int j = 1;
      for(j = 1; j < range.length - 1; j++){
        if(range[j] - range [j + 1] != diff) break;
      }
      if(j >= range.length - 1){
        ans.add(true);
      } else {
        ans.add(false);
      }
    }
    return ans;
  }
}
```