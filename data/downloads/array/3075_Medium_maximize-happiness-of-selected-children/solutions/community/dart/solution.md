# BEATS 100% SIMPLE DART solution with EXPLANATION

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5134697/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5134697/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to select k children from a queue such that the sum of their happiness values is maximized. Each time a child is selected, the happiness value of all the unselected children decreases by 1. To maximize the sum of happiness values, we should always select the child with the highest current happiness value.
# Approach
<!-- Describe your approach to solving the problem. -->
The approach is to first sort the happiness values in descending order. Then, iterate over the sorted happiness values. For each happiness value, check if it minus the number of already taken children is greater than 0. If it is, add it to the sum and increment the number of taken children. If it's not, return the sum. Continue this process until all k children have been taken or there are no more children left.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n log n), where n is the number of children. This is because we are sorting the happiness values, which takes O(n log n) time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1), as we are not using any additional space that scales with the input size. The variables `taken`, `ans`, and `i` use constant space.
# Code
```
class Solution {
  int maximumHappinessSum(List<int> happiness, int k) {
    // Initialize the number of taken children and the sum of happiness values
    int taken = 0;
    int ans=0;
    int i=0;

    // Sort the happiness values in descending order
    happiness.sort((a,b)=>b.compareTo(a));

    // Iterate over the sorted happiness values
    while(taken<k && i<happiness.length){
        // If the current happiness value minus the number of taken children is less than or equal to 0, return the sum
        if(happiness[i]-taken <= 0) return ans;

        // Add the current happiness value minus the number of taken children to the sum
        ans+=happiness[i]-taken;

        // Increment the number of taken children
        taken++;

        // Move to the next happiness value
        i++;
    }

    // Return the sum of happiness values
    return ans;
  }
}
```