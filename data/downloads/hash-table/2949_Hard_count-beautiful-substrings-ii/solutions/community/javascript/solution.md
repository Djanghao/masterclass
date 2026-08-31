# ✅☑[C++/Java/Python/JavaScript] || Hash Maps || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330427/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330427/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

- The function `beautifulSubstrings` counts the number of beautiful substrings in string `s` having a length of `k`.
- It maintains a map `mp` to store the cumulative counts of vowels (`a`, `e`, `i`, `o`, `u`) and their corresponding indices.
- It iterates through the characters in the string, updating the cumulative count based on vowels and consonants.
- For each count, it calculates the length of substrings between indices and checks if it's a multiple of `k`. If so, it increments the answer count.
- Finally, it returns the total count of beautiful substrings.


# Complexity
- *Time complexity:*
   $$O(n^2)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to count beautiful substrings in string 's' having length 'k'
    long long beautifulSubstrings(string s, int k) {
        long long ans = 0, cur = 0; // Initialize answer and current count of vowels
        unordered_map<int, vector<int>> mp; // Map to store cumulative counts and their corresponding indices
        mp[0].push_back(-1); // Initializing with a count of 0 at index -1
        
        // Loop through each character in the string
        for (int i = 0; i < s.length(); i++) {
            char ch = s[i]; // Get the current character
            
            // Update current count based on vowel or consonant
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                cur++;
            } else {
                cur--;
            }
            
            // Iterate through indices of same cumulative count 'cur'
            for (auto &x : mp[cur]) {
                int d = (i - x) / 2; // Calculate the length of substring between the indices
                
                // If the length of the substring is a multiple of 'k', increment 'ans'
                if ((d * d) % k == 0) {
                    ans++;
                }
            }
            
            mp[cur].push_back(i); // Push current index into the map with its cumulative count
        }
        
        return ans; // Return the count of beautiful substrings
    }
};

```

```C []



class Solution {
public:
    long long beautifulSubstrings(string s, int k) {
        long long ans = 0, cur = 0;
        unordered_map<int, vector<int>> mp;
        mp[0].push_back(-1);
        for(int i = 0; i < s.length(); i++) {
            char ch = s[i];
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
                cur++;
            } else{
                cur--;
            }
            for(auto &x:mp[cur]){
                int d = (i - x)/2;
                if((d * d)%k == 0){
                    ans++;
                }
            }
            mp[cur].push_back(i);
        }
        return ans;
    }
};



```
```Java []

class Solution {
    public long beautifulSubstrings(String s, int k) {
        long ans = 0, cur = 0;
        Map<Integer, List<Integer>> mp = new HashMap<>();
        mp.put(0, new ArrayList<>());
        mp.get(0).add(-1);

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                cur++;
            } else {
                cur--;
            }
            for (int x : mp.getOrDefault(cur, new ArrayList<>())) {
                int d = (i - x) / 2;
                if ((d * d) % k == 0) {
                    ans++;
                }
            }
            mp.putIfAbsent(cur, new ArrayList<>());
            mp.get(cur).add(i);
        }
        return ans;
    }
}

```
```python3 []
class Solution:
    def beautifulSubstrings(self, s: str, k: int) -> int:
        ans, cur = 0, 0
        mp = {0: [-1]}
        
        for i, ch in enumerate(s):
            if ch in 'aeiou':
                cur += 1
            else:
                cur -= 1
            
            for x in mp.get(cur, []):
                d = (i - x) // 2
                if (d * d) % k == 0:
                    ans += 1
            
            mp.setdefault(cur, []).append(i)
        
        return ans



```
```javascript []
var beautifulSubstrings = function(s, k) {
    let ans = 0, cur = 0;
    let mp = new Map();
    mp.set(0, [-1]);
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            cur++;
        } else {
            cur--;
        }
        for (let x of mp.get(cur)) {
            let d = (i - x) / 2;
            if (Math.pow(d, 2) % k === 0) {
                ans++;
            }
        }
        if (!mp.has(cur)) mp.set(cur, []);
        mp.get(cur).push(i);
    }
    return ans;
};


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---