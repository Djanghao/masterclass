# Easiest Solution with Example Walkthrough

**Author:** _sxrthakk
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5939790/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5939790/)

---

# Intuition
### We want to find the minimum key presses required to generate the string t. To achieve this:
- Key 1 is always needed to add new characters (which initially start as 'a').
- Key 2 is used to incrementally change the last character until it matches the target character at that position.

### Thus, for every character in the target string:
- First, append an 'a'.
- Then, if necessary, press Key 2 enough times to turn the last 'a' into the desired character.

# Approach
1. **Initialization :**
- We start with an empty string s and an empty list v to store the sequence of strings that will appear on the screen.

2. **Loop through each character in t :**
- For each character c in the target string t, we first append an 'a' (this is the initial character using Key 1) to the string s.

3. **Adjust the last character :**
- Once an 'a' is added, we check if the last character matches the target character at that position (c). If not, we repeatedly press Key 2 to increment the last character until it matches c.

4. **Save each step :**
- Every time a change is made (whether by adding an 'a' or by changing it using Key 2), the current string is saved in the list v.

5. **Return the result :** 
- Finally, after processing all characters in t, we return the list v, which contains the sequence of strings Alice types.

# Example Walkthrough
### Let\u2019s walk through the example target = "abc".

## 1. **Initialization :**
- s = ""
- v = [  ]

## 2. **First character 'a' :**

- Append 'a' using Key 1: s = "a".
- Save "a": v = ["a"].
 
## 3. Second character 'b':

- Append 'a' using Key 1: s = "aa".
- Save "aa": v = ["a", "aa"].
- Now, change the last 'a' to 'b' using Key 2: s = "ab".
- Save "ab": v = ["a", "aa", "ab"].

## 4. Third character 'c':

- Append 'a' using Key 1: s = "aba".
- Save "aba": v = ["a", "aa", "ab", "aba"].
- Change the last 'a' to 'b' using Key 2: s = "abb".
- Save "abb": v = ["a", "aa", "ab", "aba", "abb"].
- Change the last 'b' to 'c' using Key 2: s = "abc".
- Save "abc": v = ["a", "aa", "ab", "aba", "abb", "abc"].

# Code
```cpp []
vector<string> stringSequence(string t){
    vector<string> v;
    string s="";  
            
    for(char c : t){
        s+='a';
        v.push_back(s);  

        while(s.back()!=c){
            s.back()=(s.back()=='z') ? 'a' : s.back() +1;
            v.push_back(s); 
        }
    }
            
    return v;
}
```

``` Java []
public static List<String> stringSequence(String t) {
    List<String> result = new ArrayList<>();
    StringBuilder s = new StringBuilder();
        
    for (char c : t.toCharArray()) {
        s.append('a');
        result.add(s.toString());
            
        while (s.charAt(s.length() - 1) != c) {
            char lastChar = s.charAt(s.length() - 1);
            lastChar = (lastChar == 'z') ? 'a' : (char)(lastChar + 1);
            s.setCharAt(s.length() - 1, lastChar);
            result.add(s.toString());
        }
    }
        
    return result;
}
```

``` Python []
def string_sequence(t: str):
    result = []
    s = ""

    for c in t:
        s += 'a'
        result.append(s)

        while s[-1] != c:
            last_char = s[-1]
            last_char = chr(ord(last_char) + 1) if last_char != 'z' else 'a'
            s = s[:-1] + last_char
            result.append(s)

    return result
```

