# Clean Codes🔥🔥|| Full Explanation✅|| HashTable✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 60
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3153809/](https://leetcode.com/problems/fruit-into-baskets/solutions/3153809/)

---

# Intuition :
- Given an array tree of integers representing types of fruit in a basket, the goal is to find the length of the longest contiguous subarray where at most two types of fruit are present.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach :
- Here we are using two pointers, l and r, to keep track of the subarray and a Map called count to keep track of the frequency of each type of fruit.
-  The r pointer is moved to the right until the count map contains more than two types of fruit. 
- Then the l pointer is moved to the right until the count map contains only two types of fruit again. 
- This is done by updating the frequency of the type of fruit represented by tree[l] in the count map and removing the entry from the map if its frequency becomes zero. 
- The length of the subarray is calculated as r - l + 1 and the maximum length over all subarrays is kept track of in the variable ans. 
- The final value of ans is returned as the result.
<!-- Describe your approach to solving the problem. -->

# Simple Explanation to Approach :
- Here we have to find the length of the longest continuous subarray in an array of fruit types where there are no more than two types of fruit. 
- It does this by using two pointers, one that moves from left to right and one that moves from right to left. 
- It also uses a map to keep track of how many of each type of fruit there are. 
- If there are more than two types of fruit, the pointer that moves from left to right will keep moving until there are only two types of fruit again. 
- The length of the subarray is calculated and the longest length found is returned as the result.

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```

# Codes [C++ |Java |Python3] : 
```C++ []
class Solution {
 public:
  int totalFruit(vector<int>& tree) {
    int ans = 0;
    unordered_map<int, int> count;

    for (int l = 0, r = 0; r < tree.size(); ++r) {
      ++count[tree[r]];
      while (count.size() > 2) {
        if (--count[tree[l]] == 0)
          count.erase(tree[l]);
        ++l;
      }
      ans = max(ans, r - l + 1);
    }

    return ans;
  }
};
```
```Java []
class Solution {
  public int totalFruit(int[] tree) {
    int ans = 0;
    Map<Integer, Integer> count = new HashMap<>();

    for (int l = 0, r = 0; r < tree.length; ++r) {
      count.put(tree[r], count.getOrDefault(tree[r], 0) + 1);
      while (count.size() > 2) {
        count.put(tree[l], count.get(tree[l]) - 1);
        count.remove(tree[l], 0);
        ++l;
      }
      ans = Math.max(ans, r - l + 1);
    }

    return ans;
  }
}
```
```Python3 []
class Solution:
  def totalFruit(self, tree: List[int]) -> int:
    ans = 0
    count = collections.defaultdict(int)

    l = 0
    for r, t in enumerate(tree):
      count[t] += 1
      while len(count) > 2:
        count[tree[l]] -= 1
        if count[tree[l]] == 0:
          del count[tree[l]]
        l += 1
      ans = max(ans, r - l + 1)

    return ans
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

