# C# | Binary Search | Using the pattern from Koko Eating banana problem

**Author:** anaken
**Votes:** 1
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/5003477/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/5003477/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int ShipWithinDays(int[] weights, int days) 
    {
        int left = 1;
        int right = 0;
        int leftMostCapacity = 1;
        for(int i = 0 ; i < weights.Length ; i++)
        {
            right += weights[i];
        }

        while(left <= right)
        {
            int midWeight = (left+right)/2;

            int totalDays = 1;

            int currentCapacity = midWeight;

            /* To handle the case when the even renewing the total capacity also does not cover the current load
            eg. test case
            weights = [1,2,3,1,1];
            days = 4;
            */
            bool breakage = false;

            for(int i = 0 ; i < weights.Length ; i++)
            {
                if(currentCapacity < weights[i])
                {
                   totalDays++;
                   currentCapacity = midWeight;
                   if(totalDays > days || midWeight < weights[i])
                   {
                     breakage = true;
                     break;
                   } 
                }
                currentCapacity -= weights[i];             
            }

            if(totalDays <= days && !breakage)
            {
                leftMostCapacity = midWeight;
                right = midWeight - 1;
            }
            else 
            {
                left = midWeight + 1;
            }
        }
        return leftMostCapacity;
    }
}
```