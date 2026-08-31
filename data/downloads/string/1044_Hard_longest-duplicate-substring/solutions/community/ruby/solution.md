# 💯Faster  ✅✅ BINARY SEARCH + RABIN KARP (ROLLING HASH) ❤️BEST SOLUTION

**Author:** AggarwalShivam
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/5044194/](https://leetcode.com/problems/longest-duplicate-substring/solutions/5044194/)

---

# PROBLEM STATEMENT 
This problem asks you to find the longest duplicated substring within a given string. You're required to return any duplicated substring that has the longest possible length. If there's no duplicated substring, you should return an empty string.

The approach taken in the provided code is to use a rolling hash technique combined with binary search to find the longest duplicated substring efficiently.

# Here's a breakdown of the approach:

## Rolling Hash Function:
A rolling hash function is used to efficiently compute the hash value of substrings.
The function rolling_hash calculates the hash value of substrings of length window.
It iterates through the string, updating the hash value by removing the contribution of the first character and adding the contribution of the next character using modular arithmetic to avoid integer overflow.
## Binary Search:
The main function longestDupSubstring performs a binary search to find the length of the longest duplicated substring.
It starts with a range of possible lengths from 1 to str.length() - 1.
In each iteration of the binary search:
It calculates the hash value of substrings of the current length using the rolling_hash function.
If a duplicated substring of the current length is found, it updates the answer and narrows down the search range by setting the start index of the binary search to mid + 1.
If no duplicated substring of the current length is found, it sets the end index of the binary search to mid - 1.
## Returning the Result:
After the binary search completes, the function returns the longest duplicated substring found.

# Intuition
The intuition behind using a rolling hash function is to efficiently compute the hash values of substrings, which allows for quick comparison of substrings for potential duplication. The binary search is employed to find the longest duplicated substring by narrowing down the search space efficiently.

# TIME COMPLEXITY 
O(LOG N x N x LOG N)



```CPP []
class Solution {
public:
    // Function to calculate rolling hash for substrings of given window length
    string rolling_hash(string& str, int& window){
        const long long multiplier=31; // Constant multiplier for hashing
        const long long mod=1000000007; // Modulus for hashing

        // Initialize the hash value for the first window
        long long hashedvalue=0;
        for(int i=0;i<window;i++){
            hashedvalue=(hashedvalue*multiplier+(str[i]-'a'+1))%mod;
        }

        // Precompute the power value to efficiently remove the contribution of the first character
        long long power=1;
        for(int i=1;i<window;i++){
            power=(power*multiplier)%mod;
        }

        // Map to store hash values and their corresponding indices
        unordered_map<long long,vector<int>> mp;
        hashedvalue%=mod;
        mp[hashedvalue].push_back(0);

        // Iterate through the string to calculate hash values for each window
        for(int i=1;i+window<=str.length();i++){
            // Remove the contribution of the first character and update the hash value
            hashedvalue-=((str[i-1]-'a'+1)*power);

            // Ensure hashed value is non-negative
            while(hashedvalue<0)    hashedvalue+=mod;
            hashedvalue%=mod;

            // Multiply by multiplier and add the contribution of the next character
            hashedvalue*=31;
            hashedvalue%=mod;
            hashedvalue+=(str[i+window-1]-'a'+1);
            hashedvalue%=mod;

            // If the hash value already exists in the map, check for potential duplicates
            if(mp.find(hashedvalue)!=mp.end())    {
                for(auto st: mp[hashedvalue]){
                    string old=str.substr(st,window);
                    string newstr=str.substr(i,window);
                    if(old==newstr) return newstr; // Return duplicated substring
                }
            }
            // Update the map with the current hash value and index
            mp[hashedvalue].push_back(i);
        }
        // Return empty string if no duplicated substring found
        return "";
    }

    // Main function to find the longest duplicated substring using binary search
    string longestDupSubstring(string str) {
        // Initialize the search range for binary search
        int s=1;
        int e=str.length()-1;
        string ans=""; // Initialize result

        // Perform binary search on the possible lengths of duplicated substrings
        while(s<=e){
            int mid=s+(e-s)/2; // Calculate mid length
            string temp=rolling_hash(str,mid); // Calculate duplicated substring of current length
            if(temp.length()>0){
                ans=temp; // Update result if duplicated substring found
                s=mid+1; // Narrow down the search range
            }
            else{
                e=mid-1; // Narrow down the search range
            }
        }
        // Return the longest duplicated substring found
        return ans;
    }
};

```
```python []
class Solution(object):
    def rolling_hash(self, s, window):
        multiplier = 31
        mod = 1000000007

        hashed_value = 0
        for i in range(window):
            hashed_value = (hashed_value * multiplier + (ord(s[i]) - ord('a') + 1)) % mod

        power = 1
        for i in range(1, window):
            power = (power * multiplier) % mod

        mp = {}
        hashed_value %= mod
        mp[hashed_value] = [0]

        for i in range(1, len(s) - window + 1):
            hashed_value -= ((ord(s[i - 1]) - ord('a') + 1) * power)
            while hashed_value < 0:
                hashed_value += mod
            hashed_value %= mod

            hashed_value *= 31
            hashed_value %= mod
            hashed_value += (ord(s[i + window - 1]) - ord('a') + 1)
            hashed_value %= mod

            if hashed_value in mp:
                for st in mp[hashed_value]:
                    old = s[st: st + window]
                    new_str = s[i: i + window]
                    if old == new_str:
                        return new_str
            mp[hashed_value] = mp.get(hashed_value, []) + [i]

        return ""

    def longestDupSubstring(self, s):
        s_len = len(s)
        start = 1
        end = s_len - 1
        ans = ""

        while start <= end:
            mid = start + (end - start) // 2
            temp = self.rolling_hash(s, mid)
            if temp:
                ans = temp
                start = mid + 1
            else:
                end = mid - 1

        return ans

```
```Java []
import java.util.HashMap;

class Solution {
    public String longestDupSubstring(String s) {
        return binarySearch(s);
    }
    
    private String rollingHash(String str, int window) {
        long multiplier = 31;
        long mod = 1000000007;
        
        long hashedValue = 0;
        for (int i = 0; i < window; i++) {
            hashedValue = (hashedValue * multiplier + (str.charAt(i) - 'a' + 1)) % mod;
        }
        
        long power = 1;
        for (int i = 1; i < window; i++) {
            power = (power * multiplier) % mod;
        }
        
        HashMap<Long, Integer> map = new HashMap<>();
        hashedValue %= mod;
        map.put(hashedValue, 0);
        
        for (int i = 1; i + window <= str.length(); i++) {
            hashedValue -= ((str.charAt(i - 1) - 'a' + 1) * power);
            while (hashedValue < 0) {
                hashedValue += mod;
            }
            hashedValue %= mod;
            
            hashedValue *= 31;
            hashedValue %= mod;
            hashedValue += (str.charAt(i + window - 1) - 'a' + 1);
            hashedValue %= mod;
            
            if (map.containsKey(hashedValue)) {
                int start = map.get(hashedValue);
                String oldStr = str.substring(start, start + window);
                String newStr = str.substring(i, i + window);
                if (oldStr.equals(newStr)) {
                    return newStr;
                }
            }
            map.put(hashedValue, i);
        }
        return "";
    }
    
    private String binarySearch(String str) {
        int start = 1;
        int end = str.length() - 1;
        String result = "";
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            String temp = rollingHash(str, mid);
            if (!temp.isEmpty()) {
                result = temp;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return result;
    }
}

```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    return binarySearch(s);
};

function rollingHash(str, window) {
    const multiplier = 31;
    const mod = 1000000007;
    
    let hashedValue = 0;
    for (let i = 0; i < window; i++) {
        hashedValue = (hashedValue * multiplier + (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1)) % mod;
    }
    
    let power = 1;
    for (let i = 1; i < window; i++) {
        power = (power * multiplier) % mod;
    }
    
    const map = new Map();
    hashedValue %= mod;
    map.set(hashedValue, 0);
    
    for (let i = 1; i + window <= str.length; i++) {
        hashedValue -= ((str.charCodeAt(i - 1) - 'a'.charCodeAt(0) + 1) * power);
        while (hashedValue < 0) {
            hashedValue += mod;
        }
        hashedValue %= mod;
        
        hashedValue *= 31;
        hashedValue %= mod;
        hashedValue += (str.charCodeAt(i + window - 1) - 'a'.charCodeAt(0) + 1);
        hashedValue %= mod;
        
        if (map.has(hashedValue)) {
            const start = map.get(hashedValue);
            const oldStr = str.substring(start, start + window);
            const newStr = str.substring(i, i + window);
            if (oldStr === newStr) {
                return newStr;
            }
        }
        map.set(hashedValue, i);
    }
    return "";
}

function binarySearch(s) {
    let start = 1;
    let end = s.length - 1;
    let result = "";
    
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        const temp = rollingHash(s, mid);
        if (temp !== "") {
            result = temp;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

```
```ruby []
# @param {String} s
# @return {String}
def longest_dup_substring(s)
    binary_search(s)
end

def rolling_hash(s, window)
    multiplier = 31
    mod = 1000000007
    
    hashed_value = 0
    (0...window).each do |i|
        hashed_value = (hashed_value * multiplier + (s[i].ord - 'a'.ord + 1)) % mod
    end
    
    power = 1
    (1...window).each do
        power = (power * multiplier) % mod
    end
    
    map = {}
    hashed_value %= mod
    map[hashed_value] = 0
    
    (1..s.length - window).each do |i|
        hashed_value -= ((s[i - 1].ord - 'a'.ord + 1) * power)
        hashed_value += mod while hashed_value < 0
        hashed_value %= mod
        
        hashed_value *= 31
        hashed_value %= mod
        hashed_value += (s[i + window - 1].ord - 'a'.ord + 1)
        hashed_value %= mod
        
        if map.key?(hashed_value)
            start_index = map[hashed_value]
            old_str = s[start_index, window]
            new_str = s[i, window]
            return new_str if old_str == new_str
        end
        map[hashed_value] = i
    end
    
    ""
end

def binary_search(s)
    start = 1
    finish = s.length - 1
    ans = ""
    
    while start <= finish
        mid = start + (finish - start) / 2
        temp = rolling_hash(s, mid)
        if !temp.empty?
            ans = temp
            start = mid + 1
        else
            finish = mid - 1
        end
    end
    
    ans
end

```

