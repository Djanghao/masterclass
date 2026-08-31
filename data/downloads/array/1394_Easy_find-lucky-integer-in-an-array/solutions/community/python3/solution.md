# JAVA|| BEATS 98.94% || 3 LINE CODE || HASHMAP

**Author:** sharforaz_rahman
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/2824850/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/2824850/)

---

**PLEASE UPVOTE THIS IF YOU LIKE IT**
# Approach
Finding out the frequency of each element using HashMap,then if the frequency matches the value then print that. but, since we have to return the largest so we will traverse from the last end;


# Code
```
class Solution {
    public int findLucky(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        Arrays.sort(arr);
        for (int i : arr) map.put(i, map.getOrDefault(i, 0) + 1);
        for (int j = arr.length - 1; j >= 0; j--) {
            if (map.containsKey(arr[j]) && map.get(arr[j]) == arr[j]) return arr[j];
        }
        return -1;
    }
}
```