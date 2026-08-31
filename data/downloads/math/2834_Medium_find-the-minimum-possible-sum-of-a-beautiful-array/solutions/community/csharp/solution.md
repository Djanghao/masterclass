# Find the Minimum Possible Sum of a Beautiful Array (C#)

**Author:** framebymahmud
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3990755/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3990755/)

---

**Intuition:**
The code aims to find the minimum possible sum of `n` distinct positive integers such that none of the integers is equal to `target - i`, where `i` ranges from 1 to `n`. In other words, it wants to find a set of `n` distinct positive integers that sum up to the smallest possible value, given the constraint.

**Approach:**
1. The code initializes a variable `sum` to 0, a variable `counter` to 1, and a HashSet called `hashSet` to store the selected integers.
2. It enters a `while` loop that continues until `hashSet` contains `n` elements, indicating that `n` distinct integers have been selected.
3. Inside the loop, it checks if the complement of `counter` with respect to `target`, which is `target - counter`, is not present in the `hashSet`. If it's not in the `hashSet`, it means that `counter` can be added to the sum without violating the constraint.
4. If the condition is met, the code adds `counter` to the `sum` and adds `counter` to the `hashSet` to keep track of selected integers.
5. The `counter` is incremented in each iteration.
6. Once the loop exits, the code returns the calculated `sum`, which represents the minimum possible sum of `n` distinct positive integers satisfying the constraint.

**Complexity:**

Time Complexity:
- The code uses a `while` loop that runs until `hashSet` contains `n` elements.
- In each iteration, it performs constant time operations such as checking `HashSet` membership, addition, and incrementing `counter`.
- The time complexity is O(n) since the loop runs at most `n` times.

Space Complexity:
- The code uses a `HashSet` to store selected integers, and the space required for the `HashSet` depends on the number of distinct integers.
- In the worst case, when all possible integers from 1 to `n` are selected, the space complexity is O(n) for the `HashSet`.
- Additionally, the code uses a few long and int variables, which have constant space complexity.

Overall, the code provides a straightforward and efficient solution to find the minimum possible sum of `n` distinct positive integers under the given constraint, with a time complexity of O(n) and a space complexity of O(n).

# Code
```
public class Solution {
    public long MinimumPossibleSum(int n, int target) {
        long sum = 0;
        int counter=1; 
        HashSet<int> hashSet = new();
        
        while(hashSet.Count<n){
            if(!hashSet.Contains(target-counter)){
                sum += counter;
                hashSet.Add(counter);
            }
            
            counter++;
        }
        
        return sum;
    }
}
```