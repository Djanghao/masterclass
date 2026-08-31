# [Greedy, Java] Easy to understand, well commented, Java code

**Author:** krgrv
**Votes:** 55
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194763/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194763/)

---

# Intuition
We have to divide numbers into groups where each element has the same size. Solution is built on three intuitios:
1. The minimum size of a group can be 1. The maximum possible size of a group can be `min`: the count of the least frequent element.
2. In order to get the least number of groups will need biggest group sizes (greedy). So just iterate down `size`: `{min, min-1, ... 1` and see which `size` works.

# Approach
For each `size`, let's find the number of groups. 
1. First divide each group into sub-groups of size `size+1`. Last one can have size in `{1, 2, ..., size, size + 1}`
2. If the division is perfect, then it means that all subgroups will have size `size+1` including the last one. So just add the quotient to the number of groups.
3. If the division is not perfect, then the last group has `{1, 2, ..., size}` elements. So some of the full groups (groups of `size+1`) will have to donate one element each to the last group so that the last group has `size` elements. 
4. So the number of full groups should at least be more than `size - remaining` elements.
5. If so, then add the quotient + 1 to the number of groups.
6. If not, then just return 0 implying that no such grouping is possible.

# Complexity
- Time complexity: $$O(km)$$ where k is the frequency of the least frequent element and m is the number of distinct elements. This is upper bounded by $$O(n)$$.

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public int minGroupsForValidAssignment(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int n : nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }
        
        int min = nums.length;
        for(int v : map.values()) {
            min = Math.min(min, v);
        }

        for(int size = min; size >= 1; --size) {
            int numGroups = groupify(map, size); 
            if(numGroups > 0) return numGroups;
        }
        
        return nums.length;
    }
    
    private int groupify(Map<Integer, Integer> map, int size) {
        int groups = 0;
        int next = size + 1;
        
        for(int value : map.values()) {
            int numGroups = value / next;
            int remaining = value % next;

            if(remaining == 0) {
                groups += numGroups;
            }
            // So far we have divided things into numGroups + 1 groups
            // where the first numGroups have size + 1 elements
            // and the last group has has remaining = {1 ... size} elements.
            //
            // In order to make this grouping valid, each group out of numGroups
            // can potentially give 1 element to the last group.
            //
            // The idea is that a subset of those groups should be able to give 1 element 
            // each to the last group so that the last group also has size elements. 
            //
            // In other words, in order for the last group to have size elements, 
            // size - remaining groups have to contribute 1 element each.
            // 
            // So there must be at least size - remaining groups of size + 1 elements.
            else if(numGroups >= size - remaining) {
                groups += numGroups + 1;
            } 
            else {
                return 0;
            }
        }
        return groups;
    }
}
```