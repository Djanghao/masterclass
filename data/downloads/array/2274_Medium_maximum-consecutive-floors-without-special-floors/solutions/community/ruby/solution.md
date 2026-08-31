# Possibly the only ruby solution to this problem so far.

**Author:** oshean
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/3938178/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/3938178/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The special floors are in an unsorted array, sorting the array might make it more useful for finding the gaps between usable floors.

# Approach
<!-- Describe your approach to solving the problem. -->
base case: if there are no special floors, the base case is the total length of the run from top to bottom

Sort the special floors array. 
All of the existing gaps fit into 3 categories.
- Run of floors from the bottom to the first special floor, a run defined by inlcuding the bottom floor and not the first special floor. 
ie. special[0] - bottom
- Run of floors between two special floors not including either special floor.
ie. special[i] - special[i+1] - 1
- Run of floors from last special floor to the top
ie. top - special[special.length-1]

Iterate through these gaps and find the maximum length run and return it.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n log n)$$ I believe, since the time complexity of sorting the special array depends on the sorting algorithm used by the built in sort.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ I believe, taking up space proportional to the input array.

# Code
```
# @param {Integer} bottom
# @param {Integer} top
# @param {Integer[]} special
# @return {Integer}
def max_consecutive(bottom, top, special)
    if special.length == 0
        return top - bottom + 1
    end
    arr = special.sort
    
    maximum = arr[0] - bottom
    for i in 0..arr.length-2 do
        gap = arr[i+1] - arr[i] - 1
        comp = [maximum, gap]
        maximum = comp.max
    end
    gap = top - arr[arr.length-1]
    comp = [maximum, gap]
    maximum = comp.max
    return maximum
end
```