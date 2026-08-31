# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 219
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/4577893/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/4577893/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-17 053141.png](./images/0.png)

---
# Approaches
(Also explained in the code)


#### ***Approach 1 (Without Sets and Maps)***

1. Sort the input array `arr` to group identical elements together.
1. Traverse the sorted array, counting occurrences of each element.
1. Store the counts in a separate vector `v`.
1. Sort the vector `v` to make it easier to check for duplicates.
1. Iterate through `v` and check if adjacent elements are equal. If so, return `false`.
1. If the loop completes, it means all counts are unique, and the function returns `true`.



# Complexity
- Time complexity:
   $$O(nlogn)$$
    

- Space complexity:
   $$O(n)$$
    


# Code

```C++ []
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        vector<int> v;

        for (int i = 0; i < arr.size(); i++) {
            int cnt = 1;

            // Count occurrences of the current element
            while (i + 1 < arr.size() && arr[i] == arr[i + 1]) {
                cnt++;
                i++;
            }

            v.push_back(cnt);
        }

        sort(v.begin(), v.end());

        for (int i = 1; i < v.size(); i++) {
            if (v[i] == v[i - 1]) {
                return false;
            }
        }

        return true;
    }
}; 

```
```Java []

import java.util.Arrays;

class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Arrays.sort(arr);
        int[] v = new int[arr.length];
        int idx = 0;

        for (int i = 0; i < arr.length; i++) {
            int cnt = 1;

            // Count occurrences of the current element
            while (i + 1 < arr.length && arr[i] == arr[i + 1]) {
                cnt++;
                i++;
            }

            v[idx++] = cnt;
        }

        Arrays.sort(v);

        for (int i = 1; i < v.length; i++) {
            if (v[i] == v[i - 1]) {
                return false;
            }
        }

        return true;
    }
}


```
```python3 []
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        arr.sort()
        v = []

        i = 0
        while i < len(arr):
            cnt = 1

            # Count occurrences of the current element
            while i + 1 < len(arr) and arr[i] == arr[i + 1]:
                cnt += 1
                i += 1

            v.append(cnt)
            i += 1

        v.sort()

        for i in range(1, len(v)):
            if v[i] == v[i - 1]:
                return False

        return True



```
```javascript []

var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b);
    let v = [];

    for (let i = 0; i < arr.length; i++) {
        let cnt = 1;

        // Count occurrences of the current element
        while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            cnt++;
            i++;
        }

        v.push(cnt);
    }

    v.sort((a, b) => a - b);

    for (let i = 1; i < v.length; i++) {
        if (v[i] === v[i - 1]) {
            return false;
        }
    }

    return true;
};



```
---


#### ***Approach 2 (With Sets and Maps)***

1. Create an unordered map `freq` to store the frequency of each element in the array.
1. Iterate through each element of the input array (`arr`).
1. Update the frequency count in the freq map.
1. Create an unordered set `s` to store unique frequencies.
1. Iterate through the entries in the `freq` map and insert the frequencies into the set `s`.
1. Check if the size of the `freq` map is equal to the size of the set `s`. If they are equal, it means that the occurrences of frequencies are unique.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
      unordered_map<int,int>freq;
      for(auto x: arr){
          freq[x]++;
      }  
      unordered_set<int>s;
      for(auto x: freq){
          s.insert(x.second);
      }
      return freq.size()==s.size();
    }
};




```
```Java []
class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : arr) {
            freq.put(x, freq.getOrDefault(x, 0) + 1);
        }

        Set<Integer> s = new HashSet<>();
        for (int x : freq.values()) {
            s.add(x);
        }

        return freq.size() == s.size();
    }
}


```
```python3 []
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        freq = {}
        for x in arr:
            freq[x] = freq.get(x, 0) + 1

        return len(freq) == len(set(freq.values()))


```
```javascript []

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = new Map();
    for (const x of arr) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    const s = new Set(freq.values());
    return freq.size === s.size;
};


```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---