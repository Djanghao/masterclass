# [706. Design HashMap](https://leetcode.com/problems/design-hashmap/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 5370 | 495 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`linked-list`](https://leetcode.com/tag/linked-list), [`design`](https://leetcode.com/tag/design), [`hash-function`](https://leetcode.com/tag/hash-function)

**Companies:** `microsoft`, `tiktok`, `apple`, `amazon`, `facebook`, `google`, `goldman-sachs`, `oracle`, `linkedin`, `snowflake`, `servicenow`, `nvidia`, `palo-alto-networks`

## Description

Design a HashMap without using any built-in hash table libraries.

Implement the `MyHashMap` class:

	- `MyHashMap()` initializes the object with an empty map.

	- `void put(int key, int value)` inserts a `(key, value)` pair into the HashMap. If the `key` already exists in the map, update the corresponding `value`.

	- `int get(int key)` returns the `value` to which the specified `key` is mapped, or `-1` if this map contains no mapping for the `key`.

	- `void remove(key)` removes the `key` and its corresponding `value` if the map contains the mapping for the `key`.

 

**Example 1:**

```

Input
[&quot;MyHashMap&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;remove&quot;, &quot;get&quot;]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]

```

 

**Constraints:**

	- `0 <= key, value <= 10^6`

	- At most `10^4` calls will be made to `put`, `get`, and `remove`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-hashmap/) | [Solutions](https://leetcode.com/problems/design-hashmap/)
