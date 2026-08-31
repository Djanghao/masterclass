# [Java] O(n) prefix sum

**Author:** vot-developer
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/1499316/](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array/solutions/1499316/)

---

Our task is trying to find at least two partitions with equals sums. Obvious :), we have only one sum to find for our partitions : `totalSum / 2`. We need to find two partitions with `sum = totalSum / 2` and other partitions with `sum = 0` between them.

Example : 
```
[8, -5, 3, 2, -2, 2, 3], k = 3
prefix sum [8, 3, 6, 8, 6, 8, 11]
total sum = 11
sum [-5, 3, 2] = 0
sum [-2, 2] = 0
```

if change `8 -> 3` : 

```
nums :     [3, -5, 3, 2, -2, 2, 3]
prefix sum [3, -2, 1, 3,  1, 3, 6]
total sum = 6
sum to find = 3
result = 3 

[3], [-5, 3, 2, 2, -2, 3]
[3, -5, 3, 2], [2, -2, 3]
[3, -5, 3, 2, 2, -2], [3]
```

```
class Solution {
    //time - O(n), space - O(n)
    public int waysToPartition(int[] nums, int k) {
        int n = nums.length;
        
        int[] pref = new int[n];
        pref[0] = nums[0];        
        Map<Integer, Integer> count = new HashMap<>(); //contribution of prefixes without changing
        count.put(pref[0], 1); 
        
        for (int i = 1; i < n - 1; i++){
            pref[i] += pref[i - 1] + nums[i];
            count.put(pref[i], count.getOrDefault(pref[i], 0) + 1);
        }
        pref[n - 1] += pref[n - 2] + nums[n - 1]; //last step doesn't add into 'count' map, because we're trying to find at least two parts.

        int sum = pref[n - 1];
        int max = 0;
        if (sum % 2 == 0)
            max = count.getOrDefault(sum / 2, 0); //max without changing

        Map<Integer, Integer> countPrev = new HashMap<>(); //contribution of prefixes before current step
        for (int i = 0; i < n; i++){
            int diff = k - nums[i];
            int changedSum = sum + diff;
            if (changedSum % 2 == 0) 
                max = Math.max(max, count.getOrDefault(changedSum / 2 - diff, 0) + countPrev.getOrDefault(changedSum / 2, 0));            
            count.put(pref[i], count.getOrDefault(pref[i], 0) - 1);
            countPrev.put(pref[i], countPrev.getOrDefault(pref[i], 0) + 1);
        }
        return max;
    }
}
```