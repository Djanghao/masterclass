# Java | O(n) Time | Prefix Sum | Easy to Understand

**Author:** cryptus-neoxys
**Votes:** 19
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1730123/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1730123/)

---

Intuition: The idea used in both approaches is to keep track of the **total** number of **ones in the array** and the number of **ones (or zeros)** encountered **till** `i`**th index**.
Using this we calculate number zeros on the left division and number of ones on the right division.


**Approach 1: Prefix Array**

Using a prefix array we keep count of number of ones appeared till each index.
```
		int[] pref = new int[N + 1];
        pref[0] = 0; // at zeroth division we have no elements
        for(int i = 0; i < N; ++i) pref[i+1] = nums[i] + pref[i];
```

Then `zeroesToLeft` = `i - pref[i];` // (number of elements - number of ones) till `i`
and `onesToRight` = `pref[N] - pref[i]` // (total number of ones - ones till index `i` )

Score for each index `currScore` = `zeroesToLeft + onesToRight`
If the currScore is greater than maxScore, we clear the result list and set `maxScore` to `currScore`.
If the `currScore` is equal to the `maxscore`, we add the index to result list.

```
class Solution {
    public List<Integer> maxScoreIndices(int[] nums) {
        int N = nums.length;
        List<Integer> res = new ArrayList<>();
        
        int[] pref = new int[N + 1];
        pref[0] = 0; // at zeroth division we have no elements
        for(int i = 0; i < N; ++i) pref[i+1] = nums[i] + pref[i];
        
        int maxScore = -1;
        int onesToRight, zeroesToLeft, currScore;
		
        for(int i = 0; i < N + 1; ++i) {
            onesToRight = pref[N] - pref[i];
            zeroesToLeft = i - pref[i];
            currScore = zeroesToLeft + onesToRight;
	
            if(currScore > maxScore) {
                res.clear();
                maxScore = currScore;
            }
            if(currScore == maxScore) res.add(i);                        
        }
        return res;
    }
}
```

Time Complexity: **O(N)**
Space Complexity: **O(N)**

**Approach 2 Running Sum _(Space Optimised)_** (Credits: [jay3047's](https://leetcode.com/jay3047/) **[Solution](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/discuss/1730365/java-on-time-complexity-2-loops-minimum-space)**, do upvote it, if this approach helped you :D)

```
class Solution {
    public List<Integer> maxScoreIndices(int[] nums) {
        int oneCount=0;
        for (int i = 0; i < nums.length; i++) {
            if(nums[i]==1){
                oneCount++;
            }
        }

        int maxDivisor = oneCount;
        List<Integer> result = new ArrayList<>();
        result.add(0);
        int runningCount = oneCount;//1
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                runningCount++;
            } else if (nums[i] == 1) {
                runningCount--;
            }
            if (runningCount >= maxDivisor) {
                if(runningCount != maxDivisor) {
                    result.clear();
                    maxDivisor = runningCount;
                }
                result.add(i+1);
            }

        }

        return result;
    }
}
```

Time Complexity: **O(N)**
Space Complexity: **O(1)**