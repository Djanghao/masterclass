# Java O(N) Modulo Solution (Beats 99%) Clear Explanation

**Author:** rock_lee
**Votes:** 1
**Link:** [https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1658119/](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/solutions/1658119/)

---

**Explanation:**

When we first look at how the array changes from:
[0, 1, 2] -> [1, 2] -> [2] -> [] -> [0] -> [0, 1] -> [0, 1, 2]

We notice the cyclical nature of the pattern. Where N is the number of elements in the array, It seems to take a full 2N steps to go back to the original state. Hence, I choose to use modulo arithmetic to categorize each time since there are only 2N - 1 distinct states of the array. So we can simply take the time % 2N in order to get the distinct state identiifer.

Now within the cycle, there are 2 phases - one where elements are being removed and one where they are being added.

1st Phase: moddedTime from t=1 to t=N-1
Here we can get the element we are looking for by thinking about how the index at this time maps to the index in the original elements array. It's easier to see using an example here. Let us use the original array.

t=0: [0, 1, 2]
t=1: [1, 2]
t=2: [2]

Lets take a look at where the element 2 is in each case. At t=0, it is in its original position 2. At t=1, it is at idx 1. At t=2, it is at idx 0. Hence, when we query for idx 0 at t=2, we are actually querying for the idx 2 (at t=0). Using our intuition, we can figure out that *within this phase*, at t=x, the index maps to (index + x) for when t=0. The remaining logic is just a range check to see if the element is still in the array at time t.

2nd Phase: moddedTime from N to 2N-1

This case is much simpler, all we need to remember is that the elements are being added back to the array during this phase. The index of elements maps to the original elements array. We simply need to check that the lenght of the array at time t contains the idx we are querying. To find the number of elements, we can just use (time % 2N) - N. To see why this is, consider that at time N, the array is empty. Then, for each timestep past N, we add back 1 element. See the example below:

t=N: []
t=N+1: [0]
t=N+2: [1]

Special Case: moddedTime = 0
This is straightforward, this is just when the array is full, so just return the element at index idx.

**Code:**

```
class Solution {
    public int[] elementInNums(int[] nums, int[][] queries) {
        // MOD 2N
        // 
        // At minute 1 to N - 1
        // At minute N to 2N, index is same as before with x elements where minute is N+x
        
        int[] ret = new int[queries.length];
        int N = nums.length;
        final int MOD = N * 2;
        for(int i = 0; i < queries.length; i++) {
            int[] query = queries[i];
            int time = query[0];
            int idx = query[1];
            
            int moddedTime = time % MOD;
            int val = 0;
            
            if(1 <= moddedTime && moddedTime < N) {
                int newIdx = idx + moddedTime;
                if(newIdx >= N) val = -1;
                else val = nums[newIdx];
            }
            else if(moddedTime == 0) {
                val = nums[idx];   
            }
            else {
                int numElements = moddedTime - N;
                if(idx >= numElements) val = -1;
                else val = nums[idx];
            }
            ret[i] = val;
        }
        return ret;
    }
}
```