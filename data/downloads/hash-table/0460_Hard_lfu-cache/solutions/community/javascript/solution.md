# ✅Short || C++ || Java || PYTHON || JS || Explained Solution✔️ || Beginner Friendly ||🔥

**Author:** amoddeshmukh844
**Votes:** 33
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3112340/](https://leetcode.com/problems/lfu-cache/solutions/3112340/)

---

https://bit.ly/3Ffj1ZU
https://bit.ly/3Ffj1ZU


Intuition:
To implement LFU cache, we can use a hashmap to store the key-value pairs, and a doubly linked list to maintain the frequency of each key.
Every time a key is accessed, we increment its frequency and move it to the appropriate position in the linked list.
When the cache reaches its capacity limit, we remove the least frequently used key from the head of the linked list.

Approach:

Create a hashmap to store the key-value pairs and a doubly linked list to maintain the frequency of each key.
When a key is accessed, check if it exists in the hashmap. If it does, update its value and increment its frequency.
If the key does not exist in the hashmap, check if the cache has reached its capacity limit. If it has, remove the least frequently used key from the head of the linked list.
Add the key-value pair to the hashmap and insert it into the appropriate position in the linked list based on its frequency.

Time Complexity:
The time complexity of getting and setting a key is O(1) on average.
The time complexity of removing the least frequently used key when the cache reaches its capacity limit is O(1) on average.

COde : Read Atricle for codes:
https://bit.ly/3Ffj1ZU
https://bit.ly/3Ffj1ZU
https://bit.ly/3Ffj1ZU
https://bit.ly/3Ffj1ZU



![0c02f9a6-2084-4ebb-b8f3-600c8b5f62a4_1674006448.3568876.jpeg](./images/0.jpeg)

