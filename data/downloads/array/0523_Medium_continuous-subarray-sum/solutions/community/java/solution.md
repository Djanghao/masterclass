# A Java implementation of prefix sum that may be easier to understand

**Author:** Ruichen1998
**Votes:** 165
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/1405425/](https://leetcode.com/problems/continuous-subarray-sum/solutions/1405425/)

---

To be honest, I was quite confused when I first saw the most voted answers and struggled a long time to understand why we should have the line `map.put(0, -1);` after initializing our hash map to store `sum % k` and the current index in the input array as key-value pairs.

But thanks to this great post (the solution for #437 Path Sum III: https://leetcode.com/problems/path-sum-iii/solution/), which explains thoroughly how prefix sum works, I came up with this version which corresponds with the "two cases" discussed in that very post. The only difference is that instead of storing the prefix sum at each index into hash map, we are storing the prefix sum **mod by k**, and we have one restriction that the subarray size should be greater than 1. 

So similarly, our code now looks like this:

* Things we need to do

```
initialize hash map
initialize prefixSum variable 
a for-loop to iterate over input array {
    add up the current element to prefixSum, mod by k
	discuss case 1 { found : return true }
	discuss case 2 { found : return true }
	store the current mod value into hash map if no answer is found, continue the for-loop
}
return false if we exhaust all possible cases
```

* Case 1: We find that prefix sum mod by k equals 0, which is what we want. If the size > 1 restriction is also satisfied, return true directly.

```
// somewhere in the for-loop
if (sum == 0 && i > 0) {
    return true;
}
```

* Case 2: We check whether prefix sum mod by k is already in our hash set. If it is, and the size > 1 restriction is also satisfied, return true.

```
// somewhere in the for-loop
if (map.containsKey(sum) && i - map.get(sum) > 1) { 
    return true;
}
```

* The whole code:

```
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {      
        // maintain a hash map to store <sum % k, index>
        Map<Integer, Integer> map = new HashMap<>();
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            sum %= k; 
            // case 1
            if (sum == 0 && i > 0) {
                return true;
            }
            // case 2
            if (map.containsKey(sum) && i - map.get(sum) > 1) { 
                return true;
            }
            if (!map.containsKey(sum)) {
                map.put(sum, i); 
            }
            
        }
        return false;
    }
}
```

* Time complexity = O(n) for traversing n elements in input array
* Space complexity = O(n) for hash map storage