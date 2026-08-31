# Java + 3 Solutions + Using HashMap & Trie

**Author:** learn4Fun
**Votes:** 4
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/1077334/](https://leetcode.com/problems/map-sum-pairs/solutions/1077334/)

---

#### Solution 1: Using HashMap (Optimized `insert()`)

In a HashMap we can store all strings and the corresponding value during `insert()` and for `sum()` we can iterate through each `String` in the Map to check if the prefix matches the current iterated key in the map and if it matches then add it to the final sum. The `insert()` is faster but the `sum()` takes more time as it needs to iterate through all the Strings inserted in the Map.

##### Time Complexity 
- O(1) Insert 
- O(N) sum (N = no. of keys in HashMap)

```
class MapSum {

    Map<String, Integer> map;

    /** Initialize your data structure here. */
    public MapSum() {
        map = new HashMap<>();
    }
    
    public void insert(String key, int val) {
        map.put(key, val);
    }
    
    public int sum(String prefix) {
        int result = 0;
        for(String key : map.keySet()){
            if(key.startsWith(prefix))
                result += map.get(key);
        }
        return result;
    }
}
```


#### Solution 2: Using 2 HashMaps (Optimized `sum()`)

We'll use 2 HashMaps heres - one HashMap to maintain the values of each String and their corresponding value, and the other one to maintain the sum of all the possible prefixes for the inserted String. The insert in this case takes more time as it needs to compute the prefixes and the corresponding sums. Hence, when a lookup is done we can use the corresponding sum from the prefix Map.

##### Time Complexity 
- O(K) Insert (K = length of key)
- O(1) sum 

```
class MapSum {

    Map<String, Integer> mapVal;
    Map<String, Integer> prefixSum;
    
    /** Initialize your data structure here. */
    public MapSum() {
        mapVal = new HashMap<>();
        prefixSum = new HashMap<>();
    }
    
    public void insert(String key, int val) {
        int diff = val - mapVal.getOrDefault(key, 0);
        mapVal.put(key, val);
        StringBuilder sb = new StringBuilder();
        for(char c: key.toCharArray()){
            sb.append(c);
            String prefix = sb.toString();
            prefixSum.put(prefix, prefixSum.getOrDefault(prefix, 0) + diff);
        }
    }
    
    public int sum(String prefix) {
        return prefixSum.getOrDefault(prefix, 0);
    }
}
```

#### Solution 3: Using HashMap & Trie

Extending the concept from Solution 2, instead of maintaining the prefix sum in a HashMap, we can do that in a TrieNode. We continue maintaining the value of each String in a HashMap of String and Integer.

##### Time Complexity 
- O(K) Insert (K = length of key)
- O(K) sum (K = length of prefix)

```
class MapSum {

    TrieNode root;
    class TrieNode {
        Map<Character, TrieNode> children = new HashMap<>();
        int sum = 0;
        TrieNode(int val){
            this.sum = val;
        }
    }
    Map<String, Integer> mapVal;
    
    /** Initialize your data structure here. */
    public MapSum() {
        root = new TrieNode(0);
        mapVal = new HashMap<>();
    }
    
    public void insert(String key, int val) {
        int diff = val - mapVal.getOrDefault(key, 0);
        mapVal.put(key, val);        
        TrieNode curr = root;
        for(char c: key.toCharArray()){            
            if(curr.children.containsKey(c)) 
				curr.children.get(c).sum += diff;
            else curr.children.put(c, new TrieNode(diff));            
            curr = curr.children.get(c);
        }
    }
    
    public int sum(String prefix) {
        TrieNode curr = root;    
        for (char c : prefix.toCharArray()){
            curr = curr.children.get(c);
            if(curr == null) return 0;  
        }
        return curr.sum;
    }
}
```