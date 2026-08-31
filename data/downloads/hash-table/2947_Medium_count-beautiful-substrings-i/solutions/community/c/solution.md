# ✅☑[C++/Java/Python/JavaScript] || Easy Approach || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4330505/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4330505/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The function counts the number of beautiful substrings in the given string `s`.
1. It iterates through each character in the string and, for each character, iterates through subsequent characters to form substrings.
1. For each substring, it counts the number of vowels and consonants and checks if their counts are equal and if their product is divisible by `k`.
1. If these conditions are met, it increments the count of beautiful substrings.



# Complexity
- *Time complexity:*
   $$O(n^3)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    // Function to count beautiful substrings in 's' having a length divisible by 'k'
    int beautifulSubstrings(string s, int k) {
        int len = s.length();
        int count = 0;

        // Loop through each character in the string
        for (int i = 0; i < len; i++) {
            int vow = 0; // Count of vowels
            int con = 0; // Count of consonants

            // Iterate through the string starting from index 'i'
            for (int j = i; j < len; j++) {
                char c = s[j];

                // Check if the character is a vowel, if so, increment the vowel count
                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                    vow++;
                }

                int df = j - i + 1; // Calculate the length of the current substring
                con = df - vow; // Calculate the count of consonants

                // Check if the count of vowels and consonants is equal and their product is divisible by 'k'
                if (vow == con && (vow * con) % k == 0) {
                    count++; // Increment the count if conditions are met
                }
            }
        }

        return count; // Return the count of beautiful substrings
    }
};



```
```C []
int beautifulSubstrings(char *s, int k) {
    int len = strlen(s);
    int counte = 0;

    for (int i = 0; i < len; i++) {
        int vow = 0;
        int con = 0;

        for (int j = i; j < len; j++) {
            char c = s[j];

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vow++;
            }

            int df = j - i + 1;
            con = df - vow;

            if (vow == con && (vow * con) % k == 0) {
                counte++;
            }
        }
    }

    return counte;
}




```
```Java []
class Solution {
    public int beautifulSubstrings(String s, int k) {
        int counte = 0;
        int len = s.length();
        
        for (int i = 0; i < len; i++) {
            int vow = 0;
            int con = 0;
            
            for (int j = i; j < len; j++) {
                char c = s.charAt(j);
                
                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                    vow++;
                }
                
                int df = j - i + 1;
                con = df - vow;
                
                if (vow == con && (vow * con) % k == 0) {
                    counte++;
                }
            }
        }
        
        return counte;
    }
}



```
```python3 []
class Solution:
    def beautifulSubstrings(self, s: str, k: int) -> int:
        counte = 0
        len_s = len(s)
        
        for i in range(len_s):
            vow = 0
            con = 0
            
            for j in range(i, len_s):
                c = s[j]
                
                if c in ['a', 'e', 'i', 'o', 'u']:
                    vow += 1
                    
                df = j - i + 1
                con = df - vow
                
                if vow == con and (vow * con) % k == 0:
                    counte += 1
                    
        return counte



```
```javascript []
function beautifulSubstrings(s, k) {
    let len = s.length;
    let counte = 0;

    for (let i = 0; i < len; i++) {
        let vow = 0;
        let con = 0;

        for (let j = i; j < len; j++) {
            let c = s.charAt(j);

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                vow++;
            }

            let df = j - i + 1;
            con = df - vow;

            if (vow == con && (vow * con) % k == 0) {
                counte++;
            }
        }
    }

    return counte;
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---