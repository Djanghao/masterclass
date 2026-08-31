# [C++/Java/Python] || Easy and Beginners Friendly || Sort

**Author:** Aditya00
**Votes:** 38
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/3801836/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/3801836/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
The approach is to first identify the vowels in the input string `s` and store them along with their positions in two separate vectors, `vow` and `pos`, respectively. Then, the code sorts the `vow` vector to arrange the vowels in ascending order. After that, a new string `answer` is created, initially set to the `same content as the input string s`. 

Finally, the code replaces the characters at the positions stored in the `pos` vector with the sorted vowels from the vow vector. The resulting modified string with the sorted vowels is returned as the output of the function.

# Complexity
- Time complexity: `O(n*logn)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++ Code
```
class Solution {
public:
    string sortVowels(string s) {
        int n = s.size();
        vector<char> vow;
        vector<int> pos;
        for(int i=0;i<n;i++){
            if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] =='o' || s[i] == 'u' || s[i] == 'A' || s[i] == 'E' || s[i] == 'O' || s[i] == 'I' || s[i] == 'U') { // condition to check for vowel
                vow.push_back(s[i]);
                pos.push_back(i); //storing positions of vowel 
            }
        }
        sort(vow.begin(),vow.end());
        string answer = s;
        for(int i=0;i<pos.size();i++){
            answer[pos[i]] = vow[i];
        }
        return answer;
    }
};
```
# java
```
class Solution {
    public String sortVowels(String s) {
        int n = s.length();
        ArrayList<Character> vow = new ArrayList<>();
        ArrayList<Integer> pos = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || 
ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') { // condition to check for vowel
                vow.add(ch);
                pos.add(i); // storing positions of vowel
            }
        }
        
        Collections.sort(vow);
        
        char[] answer = s.toCharArray();
        for (int i = 0; i < pos.size(); i++) {
            answer[pos.get(i)] = vow.get(i);
        }
        
        return new String(answer);
    }
}
```
# Python
```
class Solution:
    def sortVowels(self, s: str) -> str:
        vow = []
        pos = []
        
        for i, ch in enumerate(s):
            if ch.lower() in {'a', 'e', 'i', 'o', 'u'}:
                vow.append(ch)
                pos.append(i)
        
        vow.sort()
        answer = list(s)
        
        for i, v in zip(pos, vow):
            answer[i] = v
        
        return ''.join(answer)
```