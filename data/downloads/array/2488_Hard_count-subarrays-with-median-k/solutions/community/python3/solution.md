# [Java/Python 3/C++] 1 pass O(n) codes: Count the prefix sum of the  balance of (greater  - samller).

**Author:** rock
**Votes:** 53
**Link:** [https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2851944/](https://leetcode.com/problems/count-subarrays-with-median-k/solutions/2851944/)

---

**Key observation:** Within any subarray, the # of elements greater than median - the # of those less than median `= 0` or `1`.

In order to guarantee the median `k` to present in subarrays, we ONLY save into HashMap/dict the frequencies of the running balances BEFORE finding the median `k`. e.g., 

`nums = [7, 1, 3, 4, 2, 5, 6], k = 4`
running balance:
`bals =  [1, 0,-1,-1,-2,-1, 0]`
At index:
-1: running balance = 0 Note: -1 is a vertual index for dummy value 0. 
0: running balance = 1
1: running balance = 0
2: running balance = -1
3: running balance = -1, median k found! stop saving the frequencies into HashMap/dict.
4: running balance = -2, begin to count the # of subarrays but no subarray meet the requirement yet. 
5: running balance = -1, there are `2` `-1`s at index `2` & `3`, respectively. The corresponding subarrays are from index `3` to `5` and `4` to `5`: `[4,2,5]` & `[4,5]`. Note: though `(-1 -1) == -2` at index `4`, it is not what we need, because the subarray from index `5` to index `5`, `[5]`, does not include median at index `3`.
6: running balance = 0, there are a `0` at index `1` and dummy value of `0` at index `-1`: `[3,4,2,5,6]` & `[7,1,3,4,2,5,6]`, and two `0 - 1 == -1`s at index `2` & `3`: `[3,4,2,5,6]` & `[4,2,5,6]`.


We have to use the running balance after median to minus the running balance before the median. Otherwise, we could NOT make sure the median is in the subarray.

----

Based on the above, we implement the algorithm as follows: 
1. Use a HashMap/dict to count the frequencies of the prefix sum of the running balance (bigger ones - smaller ones);
2. If `k` is the median of a subarray, it must present in the subarray. Therefore, before finding the median, no subarray ending at current element meets the problem requirement; 
3. After finding `k`during traversal, no need to count the frequencies any more in the HashMap/dict. If `number of bigger ones == number of the smaller (or + 1)`, that is, `the difference between prefix sum of balances (bigger - smaller) is 0 or 1`, then `k`is the median of the subarray ending at current element;
4. Use the difference of prefix sums to get the count of the required number of subarrays.

----

```java
    public int countSubarrays(int[] nums, int k) {
        Map<Integer, Integer> prefixSumOfBalance = new HashMap<>();
        prefixSumOfBalance.put(0, 1); // Dummy value of 0's frequency is 1.
        int ans = 0, runningBalance = 0;
        boolean found = false;
        for (int num : nums) {
            if (num < k) {
                --runningBalance;
            }else if (num > k) {
                ++runningBalance;
            }else {
                found = true;
            }
            if (found) {
                ans += prefixSumOfBalance.getOrDefault(runningBalance, 0) + prefixSumOfBalance.getOrDefault(runningBalance - 1, 0);
            }else {
             // prefixSumOfBalance.merge(runningBalance, 1, Integer::sum); // Similar to the following statement, but it is shorter.
                prefixSumOfBalance.put(runningBalance, prefixSumOfBalance.getOrDefault(runningBalance, 0) + 1);
            }
        }
        return ans;
    }
```
```python
    def countSubarrays(self, nums: List[int], k: int) -> int:
        prefix_sum_of_balance = Counter([0]) # Dummy value of 0's frequency is 1.
        running_balance = ans = 0
        found = False
        for num in nums:
            if num < k:
                running_balance -= 1
            elif num > k:
                running_balance += 1
            else:
                found = True
            if found:
                ans += prefix_sum_of_balance[running_balance] + prefix_sum_of_balance[running_balance - 1]    
            else:
                prefix_sum_of_balance[running_balance] += 1
        return ans
```
Credit to **@Sung-Lin** for his code and explanation.
```cpp
/*
        [ 7,  1,  3,  4,  2,  5,  6], 4
    bal   1,  0, -1, -1, -2, -1,  0
         |<- cnt ->| 
    ans               1.  0.  1.  2+1                
                     -1 [4]
                             -1 [4,2,5]
                                  0 [3,4,2,5,6]
                                  0 [7,1,3,4,2,5,6]
                                 -1 [4,2,5,6]
                               
    cnt (prefix)
      1: 1 (idx 0)
      0: 2 (idx -1, 1)
     -1: 1 (idx 2)

      e.g. 4(idx 3) -> -1
  => find  3(idx 2) -> -1 => idx 2+1(=3) ~ idx 3 => balance == -1 - -1 == 0
        
     curBalance - x == 0 or 1
  => x == curBalance or x == curBalance - 1
*/
class Solution {
public:
    int countSubarrays(vector<int>& nums, int k) {
        int n = (int) nums.size();
        
        unordered_map<int, int> cnt; // prefix
        cnt[0] = 1; // can be think as the prefix on index -1
        
        bool includeK = false;
        int balance = 0; 
        
        int ans = 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] < k)
                balance--;
            else if (nums[i] > k)
                balance++;
            else // num[i] == k
                includeK = true;
            
            if (includeK) {
                // find x in prefix hashmap 
                // greater - smaller == 0 or 1
                // => prefix[i] - prefix[x] == 0 or 1
                // => curBalance - prefix[x] == 0 or curBalance - prefix[x] == 1
                // => prefix[x] == curBalance or prefix[x] == curBalance - 1
                ans += cnt[balance] + cnt[balance - 1]; 
            }
            else
                cnt[balance]++;
        }
        return ans;         
    }
};
```

**Analysis:**

Time & space: `O(n)`, where `n = nums.length`.