# [146. LRU Cache](https://leetcode.com/problems/lru-cache/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 22671 | 1204 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`linked-list`](https://leetcode.com/tag/linked-list), [`design`](https://leetcode.com/tag/design), [`doubly-linked-list`](https://leetcode.com/tag/doubly-linked-list)

**Companies:** `amazon`, `facebook`, `apple`, `microsoft`, `oracle`, `google`, `bloomberg`, `tiktok`, `goldman-sachs`, `linkedin`, `nvidia`, `uber`, `samsung`, `servicenow`, `shopify`, `coupang`, `paypal`, `intuit`, `rubrik`, `walmart-labs`, `visa`, `bytedance`, `razorpay`, `aurora`, `kla`, `ebay`, `cisco`, `adobe`, `citadel`, `salesforce`, `palo-alto-networks`, `confluent`, `snapchat`, `jpmorgan`, `nutanix`, `squarespace`, `rivian`, `sap`, `tesla`, `bitgo`, `snowflake`, `yandex`, `doordash`, `capital-one`, `shopee`, `bookingcom`, `wells-fargo`, `general-motors`, `okta`, `optiver`, `cloudflare`, `verkada`, `autodesk`, `reddit`, `netflix`, `yahoo`, `disney`, `netapp`, `smartnews`, `roku`, `nordstrom`, `freecharge`, `arista-networks`, `tripadvisor`, `splunk`, `docusign`, `ibm`, `zscaler`, `sofi`, `freshworks`, `myntra`, `couchbase`, `thousandeyes`, `whatfix`, `squarepoint-capital`, `palantir-technologies`, `twitter`, `zenefits`

## Description

Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:

	- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.

	- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.

	- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

 

**Example 1:**

```

Input
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

```

 

**Constraints:**

	- `1 <= capacity <= 3000`

	- `0 <= key <= 10^4`

	- `0 <= value <= 10^5`

	- At most `2 * 10^5` calls will be made to `get` and `put`.

---

**Links:** [Submissions](https://leetcode.com/problems/lru-cache/) | [Solutions](https://leetcode.com/problems/lru-cache/)
