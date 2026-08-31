# Simple Brute Force

**Author:** _sxrthakk
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5846122/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5846122/)

---

# Approach
1. **Initialization of Variables :**
- ans: This variable is initialized to zero and will hold the count of valid substrings that meet the criteria specified.
- The outer loop iterates through each character of the string s, setting up the starting point of a substring at index i.
2. **Outer Loop (i) :**
- This loop runs from 0 to s.size() - 1. Each iteration represents a new starting point for the substring.
- At the beginning of each iteration, we reset the vowel counters (a, e, m, o, u) and the consonant counter (c) to zero.
3. **Inner Loop (j) :**
- The inner loop starts at the current index i and extends to the end of the string, thus examining all possible substrings that begin with the character at index i.
- Each iteration of this inner loop examines the character at index j.

4. **Character Classification :**
- The inner loop contains a series of conditional statements that check the current character s[j]:
- If s[j] is a vowel ('a', 'e', 'i', 'o', or 'u'), the corresponding counter (a, e, m, o, or u) is incremented.
- If s[j] is not a vowel (i.e., it is a consonant), the consonant counter (c) is incremented.

5. **Condition Check :**
- After updating the counters for each character added to the current substring, the code checks whether all five vowel counters (a, e, m, o, u) are greater than 0 (indicating that each vowel has been encountered at least once).
- It also checks if the consonant counter (c) is equal to k.
- If both conditions are satisfied, it increments the ans counter by 1, indicating that a valid substring has been found.

6. **Completing the Process :**
- The outer loop continues, and for each starting point i, the inner loop explores all possible substrings starting from that point.
- By the time both loops finish executing, ans contains the total count of valid substrings.

7. **Return Statement :**
- Finally, the function returns the value of ans, which represents the number of substrings that meet the specified criteria.

# Code
```cpp []
int countOfSubstrings(string s, int k) {
    int ans = 0;

    for(int i=0;i<s.size();i++){
        int a=0, e=0, m=0, o=0,u=0,c=0; 
        for(int j=i;j<s.size();j++){
            if(s[j]=='a') a++;
            else if(s[j]=='e') e++;
            else if(s[j]=='i') m++;
            else if(s[j]=='o') o++;
            else if(s[j]=='u') u++;
            else c++;  

            if(a and e and m and o and u and c==k) ans++;
        }
    }
        
    return ans;
}
```

```Python []
def countOfSubstrings(self,s, k):
    ans = 0
    n = len(s)

    for i in range(n):
        a = e = i_count = o = u = c = 0
        
        for j in range(i, n):
            if s[j] == 'a':
                a += 1
            elif s[j] == 'e':
                e += 1
            elif s[j] == 'i':
                i_count += 1
            elif s[j] == 'o':
                o += 1
            elif s[j] == 'u':
                u += 1
            else:
                c += 1
                
                
            if a > 0 and e > 0 and i_count > 0 and o > 0 and u > 0 and c == k:
                ans += 1

    return ans    
```

```Java []
public static int countOfSubstrings(String s, int k) {
        int ans = 0;
        int n = s.length();

        for (int i = 0; i < n; i++) {
            int a = 0, e = 0, i_count = 0, o = 0, u = 0, c = 0;

            for (int j = i; j < n; j++) {
                if (s.charAt(j) == 'a') a++;
                else if (s.charAt(j) == 'e') e++;
                else if (s.charAt(j) == 'i') i_count++;
                else if (s.charAt(j) == 'o') o++;
                else if (s.charAt(j) == 'u') u++;
                else c++;

                if (a > 0 && e > 0 && i_count > 0 && o > 0 && u > 0 && c == k) {
                    ans++;
                }
            }
        }

        return ans;
    }
```

