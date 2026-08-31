# [JAVA][TOP-DOWN] Intuitive DP Solution

**Author:** watson_vj
**Votes:** 23
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/1234381/](https://leetcode.com/problems/split-array-with-same-average/solutions/1234381/)

---

**Explanation**  The basic idea is to divide the array in two parts such that the average of both the parts should be same. (Let us consider an array `nums` with sum as `total` and length `n`)  
In other words we can say that we need to saisfy the following condition -

`(sum1 / len1) = (sum2 / len2)`   ----------------- (1)

where, `sum1` is the sum of first part & `sum2` is the sum of second part.

Now, `sum2 = total - sum1` and `len2 = n - len1` ----------------- (2)

Replacing these in equation 1 we get 

`sum1 / len1 = (total - sum1) / (n - len1)`

Solving this we get **`sum1 = (len1 * total) / n`**

So finally our problem is reduced to check each possible length and finding a subsequence of the given array of this length such that the sum of the elements in this is equal to `sum1` (which has a logic of 0/1 knapsack).

**Code**

```
public boolean splitArraySameAverage(int[] nums) {
        int sum = 0;
        for(int val : nums)
            sum += val;
        
       map = new HashMap<>();
        
        for(int count = 1; count <= nums.length - 1; count++){
            if((sum * count) % nums.length == 0){
                if(isPossible(nums, 0, count, (sum * count) / nums.length)){
                    return true;
                }
            }
        }
        
        return false;
    }
    
    private Map<String, Boolean> map;
    
    private boolean isPossible(int[] nums, int i, int count, int sum){
        if(sum == 0 && count == 0)
            return true;
        
        if(i == nums.length || count == 0)
            return false;
        
        String key = i + "*" + count + "*" + sum;
        
        if(map.containsKey(key))
            return map.get(key);
        
        if(sum - nums[i] >= 0){         
            boolean case1 = isPossible(nums, i + 1, count - 1, sum - nums[i]);
            boolean case2 = isPossible(nums, i + 1, count, sum);
            map.put(key, case1 || case2);
            return case1 || case2;
        }
        
        boolean case2 = isPossible(nums, i + 1, count, sum);
        map.put(key, case2);
        return case2;
    }
```

I hope it helps!





