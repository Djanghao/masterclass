# C# Binary Search

**Author:** blueDaruma
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3254611/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3254611/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
After we sort the input, we can greedly check if an answer is possible in linear time, so we can use binary search in the solution space for this quesstion. 
# Approach
<!-- Describe your approach to solving the problem. -->
We sort the array so we can check if the potencial answer "max" is possible in linear time. We check greedyly, smallest number that's in lower group match with smallest number that's in upper group.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Sorting cost O(nLog(n))
Binary Search cost O(Log(n))
The final algorithem cost O(nLog(n))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
In my code, I clone the input to a new array then sorted it, but you can just sort the input array.
# Code
```
public class Solution {

    int[] ascendArray;
    int n;

    public int MaxNumOfMarkedIndices(int[] nums) {
        
        n = nums.Length;
        ascendArray = (int[])nums.Clone();

        Array.Sort(ascendArray);


        int left = 0;
        int right = n/2;

        while(left <= right)
        {
            int mid = left + (right - left) / 2;
            if(Check(mid))
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return right * 2;

    }

    bool Check(int max)
    {
        if(max > n) {
            return false;
        }

        for(int i = 0; i < max; i++)
        {
            int small = ascendArray[i];
            int large = ascendArray[n - (max - i)];
            if(small * 2 > large)
            {
                return false;
            }
        }

        return true;
    }
}
```