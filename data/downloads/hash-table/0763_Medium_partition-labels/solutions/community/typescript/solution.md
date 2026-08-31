# Simple Explanation + Hint without giving away answer + Expandable solutions O(n) and O(n log n)

**Author:** adriansky
**Votes:** 3
**Link:** [https://leetcode.com/problems/partition-labels/solutions/892864/](https://leetcode.com/problems/partition-labels/solutions/892864/)

---

**Problem**:

Divide a string in such a way that no two parts have common letters. Return an array with the lengths of each part.

**Example 1:**

*input*: "abcd"
*output*: [1,1,1,1]
*explanation*: each part has unique chars, so we have 4 parts of 1 length each: "a", "b", "c", "d"

**Example 2:**
*input*: "abacd"
*output*: [3,1,1]
*explanation*: first part contains all "a"'s and the other parts contains unique chars. The parts are 3: "aba", "c", and "d" and their lengths are 3, 1, and 1, respectively. 

**Hints**

<details>
<summary>Hint 1</summary>

How do you keep track of the instances of a letter? Storing their indices in a data structure.
</details>

<details>
<summary>Hint 2</summary>

How do you know where to make a partition? With 2 passes, one to store the last index where you saw a given letter, and another pass to keep track of the `max` index as you visit each letter. When the current index reaches the `max`, you know you can make a partition there.
</details>

**Solutions**


<details>
<summary>Time: O(n log n); Space: O(n) aux + O(n) for solution array</summary>

You need to keep track of the letters and their indices. My first intuition was to store ALL indices using a multimap data structure. Then I can check the last occurrence of that letter. When the current index reaches the last occurrence of a letter (`hi` index), I would create a partition and reset `lo` and `hi` pointers.

```cpp
class Solution {
public:
    vector<int> partitionLabels(string S) {
      vector<int> ans;
      multimap<char, int> mmap;
      
      for (int i = 0; i < S.size(); i++) mmap.insert({S[i], i});
      
      int lo = 0, hi = 0;
      for (int i = 0; i < S.size(); i++) {
        auto it = mmap.upper_bound(S[i]);
        it--;
        hi = max(hi, it->second);
        if (i == hi) {
          hi++;
          ans.push_back(hi - lo);
          lo = hi;
        }
      }
      
      return ans;
    }
};
```

**Improvements**:

As you can see, we are only using the last index, where we found a character. So, there's no need to store all other indices where we saw a letter. We only need the last one. Also, since we only have 26 letters, we can use an array instead of a map.
</details>


<details>
<summary>Time: O(n); Space: O(1) aux + O(n) for solution array </summary>

We can solve this problem in two passes:
1. Map letters to the last index where we saw them.
2. Visit each letter and check their last occurrence and update the partition pointers (`lo` and `hi`) accordantly. 

C++:

```cpp
class Solution {
public:
    vector<int> partitionLabels(string S) {
      vector<int> ans;
      int map[26];
      
      for (int i = 0; i < S.size(); i++) map[S[i] - 'a'] = i;
      
      int lo = 0, hi = 0;
      for (int i = 0; i < S.size(); i++) {
        hi = max(hi, map[S[i] - 'a']);
        if (i == hi) {
          hi++;
          ans.push_back(hi - lo);
          lo = hi;
        }
      }
      
      return ans;
    }
};
```

JavaScript/TypeScript:

```ts
function partitionLabels(S: string): number[] {
  const ans = [];
  const map = [];
  for (let i = 0; i < S.length; i++) map[S.charCodeAt(i) - 97] = i;
  
  let lo = 0, hi = 0;
  for (let i = 0; i < S.length; i++) {
    hi = Math.max(hi, map[S.charCodeAt(i) - 97]);
    if (i === hi) {
      hi++;
      ans.push(hi - lo);
      lo = hi;
    }
  }
  
  return ans;
};
```

This implementation is almost the same code as before, but instead of using a map, we use a fixed-size array to map letters to the last index.

</details>

The end.