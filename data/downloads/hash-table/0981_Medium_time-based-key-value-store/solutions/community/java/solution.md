# ✅Three Simple Java Solutions

**Author:** ahmedna126
**Votes:** 45
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/4104608/](https://leetcode.com/problems/time-based-key-value-store/solutions/4104608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code1
<details>
  <summary>Explain</summary> 

1. `Pair` Class:
   - The `Pair` class is a simple data structure that holds two values: a `timestamp` (an integer) and a `val` (a string). This represents a key-value pair with a timestamp.

2. `TimeMap` Class:
   - The `TimeMap` class contains a private `HashMap` called `hashMap`, which maps keys (strings) to a list of `Pair` objects. Each list contains key-value pairs associated with the same key but different timestamps.

   - The `TimeMap` class provides two main methods:

     - `set(String key, String value, int timestamp)`: This method allows you to add a key-value pair with a specific timestamp to the `TimeMap`. If the key already exists in the `hashMap`, it appends the new pair to the existing list. If the key doesn't exist, it creates a new list and adds the pair to it.

     - `get(String key, int timestamp)`: This method retrieves the value associated with the given key at or just before the specified timestamp. It does this using binary search within the list of key-value pairs associated with the key.

       - It initializes a candidate value `cand` to an empty string.

       - If the `key` exists in the `hashMap`, it retrieves the list of pairs associated with that key and performs a binary search within that list.

       - The binary search looks for the closest pair whose timestamp is less than or equal to the target `timestamp`. If an exact match is found (timestamp matches), it returns the corresponding value. If not, it keeps track of the closest lower value (`cand`) and continues the search.

       - The binary search continues until `low` is less than or equal to `high`. Once it finishes, it returns the `cand` value.

</details>
 <br>

```Java
class Pair {
    int timestamp;
    String val;

    Pair(int timestamp, String val) {
        this.timestamp = timestamp;
        this.val = val;
    }
}

public class TimeMap {

    private HashMap<String, ArrayList<Pair>> hashMap;

    public TimeMap() {
        hashMap = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        if (hashMap.containsKey(key)) {
            hashMap.get(key).add(new Pair(timestamp, value));
        } else {
            ArrayList<Pair> arr = new ArrayList<>();
            arr.add(new Pair(timestamp, value));
            hashMap.put(key, arr);
        }
    }

    public String get(String key, int timestamp) {

        String cand = "";

        if (hashMap.containsKey(key)) {
            ArrayList<Pair> arr = hashMap.get(key);
            int low = 0, high = arr.size() - 1;

            while (low <= high) {
                int mid = (low + high) / 2;
                int timeVal = arr.get(mid).timestamp;
                if (timeVal == timestamp) {
                    return arr.get(mid).val;
                } else if (timeVal < timestamp) {
                    cand = arr.get(low).val;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return cand;
    }

}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */
```

# Code2
```Java
class TimeMap {

    private HashMap<String , String> hashMap;
    private LinkedList<Integer> list;

    public TimeMap() {
        hashMap = new HashMap<>();
        list = new LinkedList<>();
    }

    public void set(String key, String value, int timestamp) {
        hashMap.put(timestamp + key , value);
        list.add(timestamp);
    }

    public String get(String key, int timestamp) {
        if (hashMap.containsKey(timestamp+key)) {
            return hashMap.get(timestamp+key);
        }else {
            int length = list.size()-1;
            boolean cond = false;
            while (length >= 0 && !cond) {
                String str = list.get(length)+ key;
                cond = timestamp > list.get(length) && hashMap.containsKey(str);
                if (cond) {
                    return hashMap.get(str);
                }
                length--;
            }
        }
        return "";
    }
}

```



# Code3
```
class TimeMap {

    private HashMap<String, TreeMap<Integer, String>> hashMap;

    public TimeMap() {
        hashMap = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        hashMap.computeIfAbsent(key, k -> new TreeMap<>()).put(timestamp, value);
    }

    public String get(String key, int timestamp) {
        if (!hashMap.containsKey(key)) {
            return "";
        }

        TreeMap<Integer, String> timeValueMap = hashMap.get(key);

        Integer floorTimestamp = timeValueMap.floorKey(timestamp);

        return (floorTimestamp == null) ? "" : timeValueMap.get(floorTimestamp);
    }
}

```

## For additional problem-solving solutions, you can explore my repository on GitHub: [GitHub Repository](https://github.com/ahmedna126/java_leetcode_challenges)


![abcd1.jpeg](./images/0.jpeg)
