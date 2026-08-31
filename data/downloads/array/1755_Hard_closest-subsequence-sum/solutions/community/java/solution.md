# [Java] Detailed  Explanation + comments | Meet In the Middle | O (n * 2^(n/2) |

**Author:** Satyr
**Votes:** 51
**Link:** [https://leetcode.com/problems/closest-subsequence-sum/solutions/1053751/](https://leetcode.com/problems/closest-subsequence-sum/solutions/1053751/)

---

Approach:

* Generate all possible subsequence sums from one half of the array, and store it in a list/set. Let us call this `first`
* Sort this list/set in non decreasing order.
* Generate all possible subsequence sums from the other half of the array, store this in a list/set as well. Let us call this `second`.
* For each possible subsequence sum, say `currSum` from the second half of the array, calculate how far off this sum is from the desired goal. Let us call this value `left`
* Try to find an exact match for `left` in `first` via binary search. If an exact match is found in `first`, -> We will be able to reach `goal` using the `currSum`  (from second half) + `left` (from first half) Stop early and return 0.
* If no exact match is found, we find the largest subsequence sum `< left` from `first` and the smallest subsequence sum `> left` from `first`. We consider these as candidates for our answer. We update our answer, `ans = Math.min(ans, Math.abs(candidate + currSum - goal))`
* Having iterated over all subsequence sums from `second`, we would have by now found the most suitable candidate. Return this candidate as answer.


```
class Solution {
    int[] arr;
    public int minAbsDifference(int[] nums, int goal) {
        arr = nums;
        int n = nums.length;
        
        
        List<Integer> first = new ArrayList<>();
        List<Integer> second = new ArrayList<>();
        
        generate(0,n/2,0, first); //generate all possible subset sums from half the array
        generate(n/2, n , 0, second);//generate all possible subset sums from the second half of the array
        
        
        Collections.sort(first);
        int ans = Integer.MAX_VALUE;
        
        
        for(int secondSetSum : second ) {
            int left = goal - secondSetSum; // How far off are we from the desired goal?
            
            if(first.get(0) > left) { // all subset sums from first half are too big => Choose the smallest
                ans = (int)(Math.min(ans, Math.abs((first.get(0) + secondSetSum) - goal)));
                continue;
            }
            if(first.get(first.size() - 1) < left) { // all subset sums from first half are too small => Choose the largest
                ans = (int)(Math.min(ans, Math.abs((first.get(first.size() - 1) + secondSetSum) - goal)));
                continue;
            }
            int pos = Collections.binarySearch(first, left);
            if(pos >= 0) // Exact match found! => first.get(pos) + secondSetSum == goal
                return 0;
            else        // If exact match not found, binarySearch in java returns (-(insertionPosition) - 1)
                pos = -1 * (pos + 1);
            int low = pos - 1;
            ans = (int)Math.min(ans, Math.abs(secondSetSum + first.get(low) - goal)); // Checking for the floor value (largest sum < goal)
            ans = (int)Math.min(ans, Math.abs(secondSetSum + first.get(pos) - goal)); //Checking for the ceiling value (smallest sum > goal)
        }
        return ans;
    }

    /**
    * Generating all possible subset sums. 2 choices at each index,i -> pick vs do not pick 
    */
    void generate(int i, int end, int sum, List<Integer> listOfSubsetSums) {
        if (i == end) {
            listOfSubsetSums.add(sum); //add
            return;
        }
        generate(i + 1, end, sum + arr[i], set);
        generate(i + 1, end, sum, set);
        
    }
    
    
    
}
```