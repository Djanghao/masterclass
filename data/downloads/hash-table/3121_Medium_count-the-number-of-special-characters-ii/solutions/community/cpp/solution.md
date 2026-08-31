# Concise code with Explanation || C++

**Author:** fahad_Mubeen
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052629/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5052629/)

---

# Intuition
1. I have used two vectors of size 150 (size 26 can also be used, but just for better understanding).
2. Next, we seek the first occurrence of an uppercase letter and the last occurrence of a lowercase letter. This is because in the given scenario, each lowercase instance of any character 'c' must precede the first uppercase instance of 'c'. 
3. Subsequently, we traverse the uppercase vector and increment the count if the condition is met."

# Approach
After storing the occurrences, in the next loop check for three cases:
- If a[i] (the first occurrence index of the uppercase letter represented by i) is -1, it means that no such uppercase letter was encountered in the string. In this case, *or if there's no corresponding lowercase letter*, the loop moves to the next character using continue.
- If both the uppercase and lowercase versions of the current character exist **(a[i] != -1 and b[i + 32] != -1)**, the code checks if the last occurrence index of the lowercase version (b[i + 32]) is less than the first occurrence index of the uppercase version (a[i]).
**If this condition is true**, it means that the lowercase version of the letter appears before the uppercase version in the string. Therefore, the current letter is considered special, and the count variable is incremented.
 
# Complexity
- Time complexity: **O(n)** 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**... can be optimized further in the code by using a vector of just size 26 but just for better understanding 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int numberOfSpecialChars(string s) {
        int n = s.length();
        int count = 0;
        vector<int> a(150, -1); // upperCase
        vector<int> b(150, -1); // lowerCase
        for(int i = 0; i < n; i++){
            if(s[i] >= 65 && s[i] <= 90){ // count first occurrence of capital letters 
                if(a[s[i]] == -1) a[s[i]] = i; 
            }
            else{ // count last occurrence of small letters
                b[s[i]] = i;
            }
        }
        // iterate on either of vector and according to the condition increase count
        for(int i = 0; i < a.size(); i++){
            if(a[i] == -1 || b[i + 32] == -1) continue;
            if(b[i + 32] < a[i]) count++;
        }
        return count;
    }
};
```
# Note
If you wanna iterate over the lowercase vector instead, you may use this loop:

    for(int i = 0; i < b.size(); i++){
        if(b[i] == -1 || a[i - 32] == -1) continue;
        else if(a[i - 32] > b[i]) count++;
    }

But iterate on either and not both(since {a,A} and {A,a} are considered same) else the final answer will be doubled and hence won't be accepted.

