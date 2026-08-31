# C# solution Beats 100%

**Author:** tigran338
**Votes:** 6
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3353602/](https://leetcode.com/problems/reducing-dishes/solutions/3353602/)

---

# Approach
To maximize the total like-time coefficient, we need to prioritize dishes with positive satisfaction values. Therefore, we first sort the array in ascending order, allowing us to assign larger coefficients to dishes with higher satisfaction values. Next, we add negative satisfaction values from largest to smallest, stopping when the total like-time coefficient begins to decrease.

To calculate the total like-time coefficient, we need two variables:

total_satisfaction: used to store the answer
sum: the sum of the array elements added to total_satisfaction
To calculate the total like-time coefficient, we can simply add the sum in each loop iteration.
```
    sum += satisfaction[i];
    total_satisfaction += sum;
``` 
As we increase the coefficient, we need to add each previously used element in the total like-time coefficient one more time. Essentially, we are adding the sum of the elements already used in the total like-time coefficient, so we use a variable to track this sum and avoid recalculating it each time.

Let's look at an example with a sorted array:
[-9,-8,-1,0,5] already sorted

We going from largest element to smallest:
1) total_satisfaction = 1 * 5 = 5     
sum of all elements is 5 = 1 * 5
2) total_satisfaction = total_satisfaction + 1*0 + 5 = 10
sum of all elements is 5 = 1 * 0 + 5
3) total_satisfaction = total_satisfaction + 1 * (-1) + 0 + 5 = 14
sum of all elements is 4 = 1 * (-1) + 0 + 5
4) total_satisfaction = total_satisfaction + 1 * (-8) + (-1) + 0 + 5 = 10
sum of all elements is -4 = 1 * (-8) + (-1) + 0 + 5

So because 4 step less than 3 step we stop and answer is 14.
```
if (total_satisfaction > total_satisfaction + sum + satisfaction[i])
    break;
```
# Complexity
- Time complexity: O(nLogn)



# Code
```
public class Solution {
    public int MaxSatisfaction(int[] satisfaction) {
        Array.Sort(satisfaction);
        int total_satisfaction = 0;
        int sum = 0;
        for (int i = satisfaction.Length - 1; i >= 0; i--)
        {
            if (total_satisfaction > total_satisfaction + sum + satisfaction[i])
                break;
            sum += satisfaction[i];
            total_satisfaction += sum;
        }

        return total_satisfaction;
    }
}
```