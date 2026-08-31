# java 1ms simple solution which combines permutation and subset

**Author:** pangeneral
**Votes:** 40
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/308323/](https://leetcode.com/problems/letter-tile-possibilities/solutions/308323/)

---

This problem is the combination of [90. Subsets II](https://leetcode.com/problems/subsets-ii/) and [47. Permutations II](https://leetcode.com/problems/permutations-ii/). What we need to calculate is the number of distinct sub-permutation  of input array. The key is removing duplicate elements and counting the number of distinct sub-permutation:
* Duplicate removal is the same as [47. Permutations II](https://leetcode.com/problems/permutations-ii/discuss/278301/java-1ms-solution-which-beats-100-with-explanation-of-how-to-remove-duplicate) where we need to sort the array first and judge whether current element is equal to the previous one.
* Number counting is the same as [90. Subsets II](https://leetcode.com/problems/subsets-ii/discuss/308274/java-1ms-simple-solution) where we count the number at the beginning of each round of traversal.
```
int count = 0;

public void traverse(char theArray[], boolean used[]) {
    count++; // count the number of sub-permutation
    for(int i = 0; i < theArray.length; i++) {
        if( used[i] || (i > 0 && theArray[i] == theArray[i - 1] && !used[i - 1]) ) // duplicate removal
            continue;
        used[i] = true;
        traverse(theArray, used);
        used[i] = false;
    }
}

public int numTilePossibilities(String tiles) {
    char theArray[] = tiles.toCharArray(); 
    Arrays.sort(theArray); // sort the array for duplicate removal
    traverse(theArray, new boolean[theArray.length]);
    return count - 1;
}
```