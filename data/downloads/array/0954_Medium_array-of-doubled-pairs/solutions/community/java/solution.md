# [Java] Fast solution; w/ comments

**Author:** SonicBoomer
**Votes:** 7
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/1397705/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/1397705/)

---

```java
class Solution {
    public boolean canReorderDoubled(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        //Build count map.
        for (int num: arr) {
            if (!map.containsKey(num))
                map.put(num, 0);
            map.put(num, map.get(num) + 1);
        }
        
        //Create a sorted list of all unique elements. Sort by absolute value.
        List<Integer> list = new ArrayList<>(map.keySet());
        Collections.sort(list, (a, b) -> Integer.compare(Math.abs(a), Math.abs(b)));
        
        for (int num: list) {
            int count = map.get(num);
            //This means the number was already matched in a previous iteration.
            if (count == 0)
                continue;
            
            int pairCount = map.getOrDefault(2*num, 0);
            //If the number's count is greater than that of its pair, then some copies of it will remain unmatched.
            if (count > pairCount)
                return false;
            
            //Update the count of the pair.
            map.put(2*num, pairCount - count);
        }
        
        return true;
    }
}
```

**Time Complexity**

`O(NlogN)`. Sorting is the dominant factor.

**Space Complexity**

`O(N)`.