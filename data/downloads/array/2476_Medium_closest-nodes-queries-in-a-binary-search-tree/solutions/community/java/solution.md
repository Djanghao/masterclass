# Treemap | Binary search

**Author:** HarshitMaurya
**Votes:** 16
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831661/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/2831661/)

---


```
class Solution {
    TreeMap<Integer, Integer> map = new TreeMap<>();

    public List<List<Integer>> closestNodes(TreeNode root, List<Integer> queries) {
        List<List<Integer>> ans = new ArrayList<>();
        helper(root);
        for (int num : queries) {
		//if num is present add num else add lower value than num
            Integer low = map.containsKey(num) ? Integer.valueOf(num) : map.lowerKey(num);
		//if num is present add num else add higher value than num
            Integer high = map.containsKey(num) ? Integer.valueOf(num) : map.higherKey(num);
		//if low or high value also not present add -1 else add low or high
            ans.add(Arrays.asList(low == null ? -1 : low, high == null ? -1 : high));
        }
        return ans;
    }

    void helper(TreeNode root) {
        if (root == null) return;
        map.put(root.val, 0);
        helper(root.left);
        helper(root.right);
    }
//The `higherKey()`method class is used to return the least key strictly greater than the given key, or null if there is no such key.
//AND
//The `lowerKey()` method is used to return the greatest key strictly less than to given key, 
}
```

**Using TreeSet :**

```
Integer low = map.floorKey(num); // returns key <= specified key
Integer high = map.ceilingKey(num); // returns key >= specified key
```

```
class Solution {
    TreeMap<Integer, Integer> map = new TreeMap<>();

    public List<List<Integer>> closestNodes(TreeNode root, List<Integer> queries) {
        List<List<Integer>> ans = new ArrayList<>();
        helper(root);
        for (int num : queries) {
            Integer low = map.floorKey(num);
            Integer high = map.ceilingKey(num);
            ans.add(List.of(low == null ? -1 : low, high == null ? -1 : high));
        }
        return ans;
    }

    void helper(TreeNode root) {
        if (root == null) return;

        map.put(root.val, 0);
        helper(root.left);
        helper(root.right);
    }
}
```

***Using TreeSet :***


```
public List<List<Integer>> closestNodes(TreeNode root, List<Integer> queries) {
       var set = new TreeSet<Integer>();
       dfs(root, set);
       var result = new ArrayList<List<Integer>>();
    
       for (var query : queries) {
           var min = set.lower(query + 1);
           var max = set.higher(query - 1);
           if (min == null) {
               min = -1;
           }
           if (max == null) {
               max = -1;
           }
           result.add(List.of(min, max));
       }
       return result;
   }

   private void dfs(TreeNode root, TreeSet<Integer> set) {
       if (root == null) return;
       dfs(root.left, set);
       set.add(root.val);
       dfs(root.right, set);
   }
```