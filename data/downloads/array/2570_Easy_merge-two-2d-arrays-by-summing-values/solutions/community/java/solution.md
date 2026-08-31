# Java || HashMap || Explained

**Author:** hashcoderz
**Votes:** 17
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3205271/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/3205271/)

---



# Approach
<!-- Describe your approach to solving the problem. -->
It creates a hashmap with the first array and then iterates through the second array. If there is a key in the map that matches, then it adds to its value. Otherwise, it adds a new entry to the map.

After then we are creating other array and stored all of the id and values in that array. Then sorted it in the ascending order.

# Complexity
- Time complexity: $$O(4n + n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int[][] mergeArrays(int[][] nums1, int[][] nums2) {
    Map<Integer,Integer> map = new HashMap<>();
        for(int[] a : nums1){
            map.put(a[0],a[1]);
        }
        for(int[] a : nums2){
            if(map.containsKey(a[0])){
                map.put(a[0], map.get(a[0])+a[1]);
            }
            else{
                map.put(a[0],a[1]);
            }
        }
        int ans[][] = new int[map.size()][2];
        int i=0;
        for(int key : map.keySet()){
            ans[i++] = new int[] {key,map.get(key)};
        }
        Arrays.sort(ans, (a,b) -> a[0]-b[0]);
        return ans;
    }
}
```
### If you like the solution and explanation then upvote me.
#### You can also give me suggestion that what can I do better.