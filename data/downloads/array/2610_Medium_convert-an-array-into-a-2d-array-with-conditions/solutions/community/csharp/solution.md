# Simple C# logic using List and array at O(n) time complexity

**Author:** iamgokulnathanmcs
**Votes:** 5
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4493574/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4493574/)

---

# Intuition
As soon as we see the problem we can be sure we have to keep track of freq and based on that we need to split the items into n arrays/list

# Approach
- Declare a variable to hold result of type IList<IList<int>>
- Declare a variable to keep track for maxFreq (indicates total no of rows).
- for each number check in the freq list, if the freq < maxFreq then add in existing array
- else add to new array.

# Code
```
public class Solution {
    public IList<IList<int>> FindMatrix(int[] nums) {
        
        //we will maintain the frequency of each number in below list
        //capacity is Length+1 because as per problem statement we can expect all the numbers to be under nums length.
        //meaning we cannot have number like 100 or 104 where list count is under 10.
        int[] freq = new int[nums.Length+1];
        IList<IList<int>> result = new List<IList<int>>();

        //maxFreq will keep track of global max,(this also relates to no of rows which needs to be created.)
        int maxFreq =0;
        foreach(int num in nums){

            //for num index we are fetching current value and doing post increment.
           int currentFreq = freq[num]++;
           //if currentFreq is greater than maxFreq it means a new array is required .
           //else we can add it to existing arrays.
           if(currentFreq >= maxFreq)
           {
               maxFreq = currentFreq+1;
               result.Add(new List<int>{num});
           }else{
               result[currentFreq].Add(num);
           }        
        }
        return result;
    }
}
```
tried my best to add comments in code for ease, hope it helps \uD83D\uDE0A\uD83D\uDE0A\uD83D\uDE0A