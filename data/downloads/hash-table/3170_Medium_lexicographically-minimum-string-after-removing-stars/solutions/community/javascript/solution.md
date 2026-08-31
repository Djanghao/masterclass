# 📌Beats 100% users in python || Easy to Understand ✔|| C++📌 || Java 📌|| JavaScript📌

**Author:** aryankshl
**Votes:** 2
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243770/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Very clear intuition is do what it asks for. You will get accepted.

# Approach
<!-- Describe your approach to solving the problem. -->
Firstly you need to keep track of the smallest character with largest index till the current 'star'. This can be easily done using map data structure, create a map of char and vector in which put indexes of the current character at the back so the closest one is the last element of the vector of that char. Because we are using map data structure so it automatically sorts the characters in it. So just by accessing the first characters last index does the work. Now mark the indexes of 'star' and the characters index.
Now iterate through the string and create your answer by not taking the indexes you marked.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code in C++, Java, Python and JavaSript
```C++ []
class Solution {
public:
    string clearStars(string s) {
        map<char,vector<int>> mp;
        int n= s.size();
        vector<int> v(n,0);
        for(int i =0 ;i <s.size(); i++){
            if(s[i]!='*'){
                mp[s[i]].push_back(i);
            }
            else{
                v[i] = 1;
                for(auto &x : mp){
                    int m = x.second.size();
                    v[x.second[m-1]] = 1;
                    x.second.pop_back();
                    if(x.second.size()==0) mp.erase(x.first);
                    break;
                }
            }
        }
        string ans ="";
        for(int i = 0; i<n; i++){
            if(v[i]!=1) ans+=s[i];
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public String clearStars(String s) {
        TreeMap<Character, List<Integer>> mp = new TreeMap<>();
        int n = s.length();
        int[] v = new int[n];
        
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) != '*') {
                mp.computeIfAbsent(s.charAt(i), k -> new ArrayList<>()).add(i);
            } else {
                v[i] = 1;
                for (Map.Entry<Character, List<Integer>> entry : mp.entrySet()) {
                    List<Integer> indices = entry.getValue();
                    int m = indices.size();
                    v[indices.get(m - 1)] = 1;
                    indices.remove(m - 1);
                    if (indices.isEmpty()) {
                        mp.remove(entry.getKey());
                    }
                    break;
                }
            }
        }
        
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < n; i++) {
            if (v[i] != 1) {
                ans.append(s.charAt(i));
            }
        }
        return ans.toString();
    }
}
```
```python []
class Solution(object):
    def clearStars(self, s):
        # Using defaultdict to store the indices of each character
        mp = defaultdict(list)
        n = len(s)
        v = [0] * n

        for i in range(n):
            if s[i] != '*':
                mp[s[i]].append(i)
            else:
                v[i] = 1
                # Sort the dictionary by key
                sorted_mp = OrderedDict(sorted(mp.items()))
                for key in list(sorted_mp.keys()):
                    idx_list = sorted_mp[key]
                    v[idx_list[-1]] = 1
                    idx_list.pop()
                    if not idx_list:
                        del mp[key]
                    break

        ans = ""
        for i in range(n):
            if v[i] != 1:
                ans += s[i]

        return ans
        
```
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    const mp = new Map();
        const n = s.length;
        const v = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            if (s[i] !== '*') {
                if (!mp.has(s[i])) {
                    mp.set(s[i], []);
                }
                mp.get(s[i]).push(i);
            } else {
                v[i] = 1;
                const sortedEntries = Array.from(mp.entries()).sort((a, b) => a[0].localeCompare(b[0]));
                for (let [key, indices] of sortedEntries) {
                    const m = indices.length;
                    v[indices[m - 1]] = 1;
                    indices.pop();
                    if (indices.length === 0) {
                        mp.delete(key);
                    }
                    break;
                }
            }
        }

        let ans = "";
        for (let i = 0; i < n; i++) {
            if (v[i] !== 1) {
                ans += s[i];
            }
        }
        return ans;
};
```
![upvoting image.jpeg](./images/0.jpeg)
