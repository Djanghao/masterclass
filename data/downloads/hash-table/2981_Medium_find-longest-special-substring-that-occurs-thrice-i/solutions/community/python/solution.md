# ✅☑[C++/Java/Python/JavaScript] || Easy Implementation || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 34
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/4481194/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/solutions/4481194/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
(Also explained in the code)

1. **Map Structure:** Uses a `map<pair<char, int>, int>` to store the count of character sequences along with their lengths.
1. **Iterating through String:** Iterates through the string to count the length of each character sequence.
1. **Storing Counts:** Stores the count of each character sequence along with its length in the map.
1. **Finding Maximum Length:** Traverses the map and finds the maximum length of sequences that appear at least three times.
1. **Return Value:** Returns the maximum length of the sequence that appears at least three times, else returns -1.


# Complexity
- Time complexity:
   $$O(n^2)$$
    

- Space complexity:
   $$O(n^2)$$
    


# Code
```C++ []
class Solution {
public:
    int maximumLength(string st) {
        // Map to store the count of character sequences along with their lengths
        map<pair<char, int>, int> mps;
        int count = 0;

        // Iterate through the string
        for (int i = 0; i < st.length(); i++) {
            count = 1;
            // Store the count of each character sequence along with its length
            mps[{st[i], count}]++;

            // Check for consecutive characters
            for (int j = i; j < st.length(); j++) {
                if (st[j] == st[j + 1]) {
                    count++;
                    // Store the count of each character sequence along with its length
                    mps[{st[i], count}]++;
                } else {
                    break;
                }
            }
        }

        int ans1 = 0;

        // Iterate through the stored character sequences and their lengths
        for (auto x : mps) {
            // If a sequence appears at least three times, update the maximum length
            if (x.second >= 3) {
                ans1 = max(x.first.second, ans1);
            }
        }

        // Return the maximum length of the sequence that appears at least three times
        return (ans1 == 0) ? -1 : ans1;
    }
};




```
```Java []


class Solution {
    public int maximumLength(String st) {
        Map<Map.Entry<Character, Integer>, Integer> mps = new HashMap<>();
        int count;

        for (int i = 0; i < st.length(); i++) {
            count = 1;
            mps.put(Map.entry(st.charAt(i), count), mps.getOrDefault(Map.entry(st.charAt(i), count), 0) + 1);

            for (int j = i; j < st.length(); j++) {
                if (j + 1 < st.length() && st.charAt(j) == st.charAt(j + 1)) {
                    count++;
                    mps.put(Map.entry(st.charAt(i), count), mps.getOrDefault(Map.entry(st.charAt(i), count), 0) + 1);
                } else {
                    break;
                }
            }
        }

        int ans1 = 0;
        for (Map.Entry<Map.Entry<Character, Integer>, Integer> x : mps.entrySet()) {
            if (x.getValue() >= 3) {
                ans1 = Math.max(x.getKey().getValue(), ans1);
            }
        }
        return (ans1 == 0) ? -1 : ans1;
    }
}



```
```python3 []

class Solution:
    def maximumLength(self, st: str) -> int:
        from collections import defaultdict
        mps = defaultdict(int)
        count = 0
        
        for i in range(len(st)):
            count = 1
            mps[(st[i], count)] += 1

            for j in range(i, len(st)):
                if j + 1 < len(st) and st[j] == st[j + 1]:
                    count += 1
                    mps[(st[i], count)] += 1
                else:
                    break
        
        ans1 = 0
        for key, value in mps.items():
            if value >= 3:
                ans1 = max(ans1, key[1])
        
        return ans1 if ans1 != 0 else -1


```
```javascript []
class Solution {
    maximumLength(st) {
        const mps = new Map();
        let count;

        for (let i = 0; i < st.length; i++) {
            count = 1;
            const key = [st[i], count];
            mps.set(JSON.stringify(key), (mps.get(JSON.stringify(key)) || 0) + 1);

            for (let j = i; j < st.length; j++) {
                if (j + 1 < st.length && st[j] === st[j + 1]) {
                    count++;
                    const innerKey = [st[i], count];
                    mps.set(JSON.stringify(innerKey), (mps.get(JSON.stringify(innerKey)) || 0) + 1);
                } else {
                    break;
                }
            }
        }

        let ans1 = 0;
        for (const [key, value] of mps.entries()) {
            if (value >= 3) {
                ans1 = Math.max(ans1, JSON.parse(key)[1]);
            }
        }
        return (ans1 === 0) ? -1 : ans1;
    }
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---