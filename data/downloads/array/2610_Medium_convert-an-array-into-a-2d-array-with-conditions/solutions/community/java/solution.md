# ✅☑Better than 100% || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 166
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4489526/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4489526/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2023-12-31 060903.png](./images/0.png)


---
# Approaches
(Also explained in the code)

#### ***Approach 1***
1. **Frequency Calculation:** The code starts by creating an unordered map `um` to count the frequency of each element in the input vector `v`. The frequency map stores the count of occurrences of each unique element.

1. **Creating the Resultant Matrix:** The code proceeds to create the resultant matrix `ans`. It loops until the frequency map um becomes empty.

1. **Constructing Rows of the Matrix:** Within each iteration of the loop, it initializes a `temp` vector to store elements for a row. Then, it iterates through the frequency map `um`, adding elements to `temp` and decreasing their count in the map. If an element's count becomes zero, it is added to the `toErase` vector.

1. **Adding Rows to the Matrix:** Once a row (`temp`) is constructed, it is appended to the `ans` matrix. After constructing a row, elements that have a count of zero are removed from the frequency map (`um`) using the `toErase` vector.

1. **Repeat Until Map is Empty:** This process continues until the frequency map `um` becomes empty, and at each step, it constructs a row based on the available counts of elements.

1. **Return the Result:** Finally, it returns the resultant matrix `ans`, which contains rows of integers based on their frequency counts from the input vector v.


# Complexity
- Time complexity:
   $$O(n^2)$$
    

- Space complexity:
   $$ O(n)$$
    


# Code
```C++ []

class Solution {
public:
    vector<vector<int>> findMatrix(vector<int>& v) {
        unordered_map<int, int> um;
        for (auto &i : v){
            um[i]++;
        }
        vector<vector<int>> ans;
        while (!um.empty()) {
            vector<int> temp, toErase;
            for (auto &[f, s] : um) {
                temp.emplace_back(f);
                s--;
                if (s == 0)toErase.emplace_back(f);
            }
            ans.emplace_back(temp);
            for (auto &i : toErase){
                um.erase(i);
            }
        }
        return ans;
    }
};


---------------------------(SIMPLIFIED)-------------------------------

Made a frequency map to store number of occurance of all elements.
The most appearing elements count will decide the number of row in answer vector.
If we have a element appearing twice then will run a loop to push it in 2 rows, similarly done for all.


class Solution {
public:
    vector<vector<int>> findMatrix(vector<int>& nums) {
        unordered_map<int,int>mp;
        int cnt =0;

        for(auto a:nums){
            mp[a]++;
            cnt = max(cnt,mp[a]);
        }
        vector<vector<int>>v(cnt);
        for(auto a: mp){
            int num = a.first;
            int freq = a.second;

            for(int i =0;i<freq;i++){
                v[i].push_back(num);
            }
        }
        return v;
        
    }
};


```
```Java []


class Solution {
    public List<List<Integer>> findMatrix(int[] v) {
        Map<Integer, Integer> um = new HashMap<>();
        for (int i : v) {
            um.put(i, um.getOrDefault(i, 0) + 1);
        }
        
        List<List<Integer>> ans = new ArrayList<>();
        while (!um.isEmpty()) {
            List<Integer> temp = new ArrayList<>();
            List<Integer> toErase = new ArrayList<>();
            for (Map.Entry<Integer, Integer> entry : um.entrySet()) {
                int f = entry.getKey();
                int s = entry.getValue();
                temp.add(f);
                s--;
                if (s == 0) {
                    toErase.add(f);
                }
                um.put(f, s);
            }
            ans.add(temp);
            for (int i : toErase) {
                um.remove(i);
            }
        }
        return ans;
    }
}



```
```python3 []
class Solution:
    def findMatrix(self, v: List[int]) -> List[List[int]]:
        um = {}
        for i in v:
            um[i] = um.get(i, 0) + 1
        
        ans = []
        while um:
            temp = []
            to_erase = []
            for f, s in um.items():
                temp.append(f)
                s -= 1
                if s == 0:
                    to_erase.append(f)
                um[f] = s
            ans.append(temp)
            for i in to_erase:
                del um[i]
        return ans

```
```javascript []
var findMatrix = function(v) {
    let um = new Map();
    for (let i of v) {
        um.set(i, (um.get(i) || 0) + 1);
    }

    let ans = [];
    while (um.size > 0) {
        let temp = [];
        let toErase = [];
        for (let [f, s] of um) {
            temp.push(f);
            s--;
            if (s === 0) {
                toErase.push(f);
            }
            um.set(f, s);
        }
        ans.push(temp);
        for (let i of toErase) {
            um.delete(i);
        }
    }
    return ans;
};



```
---


#### ***Approach 2***
1. `frequency` vector is initialized with a size of `nums.size() + 1` to accommodate indexing from 0 to `nums.size()`.
1. For each integer num in the nums vector:
    - If the frequency of integer `num` (`frequency[c]`) is equal to or greater than the size of ans, it means we need to add a new empty subarray to the result `result`.
    - The integer `num` is then added to the subarray in `ans` corresponding to its current frequency (`frequency[c]`).
    - Finally, the frequency of integer `num` is incremented.

# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    vector<vector<int>> findMatrix(vector<int>& nums) {
        vector<int> frequency(nums.size() + 1);
        
        vector<vector<int>> result;
        for (int num : nums) {
            if (frequency[num] >= result.size()) {
                result.push_back({});
            }
            
            
            result[frequency[num]].push_back(num);
            frequency[num]++;
        }
        
        return result;
    }
};




```
```Java []
import java.util.*;

class Solution {
    public List<List<Integer>> findMatrix(int[] nums) {
        int[] freq = new int[nums.length + 1];
        List<List<Integer>> ans = new ArrayList<>();

        for (int c : nums) {
            if (freq[c] >= ans.size()) {
                ans.add(new ArrayList<>());
            }

            ans.get(freq[c]).add(c);
            freq[c]++;
        }

        return ans;
    }
}



```
```python3 []
class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        freq = [0] * (len(nums) + 1)
        ans = []

        for c in nums:
            if freq[c] >= len(ans):
                ans.append([])
            
            ans[freq[c]].append(c)
            freq[c] += 1

        return ans



```
```javascript []
var findMatrix = function(nums) {
    const freq = new Array(nums.length + 1).fill(0);
    const ans = [];

    for (const c of nums) {
        if (freq[c] >= ans.length) {
            ans.push([]);
        }

        ans[freq[c]].push(c);
        freq[c]++;
    }

    return ans;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---