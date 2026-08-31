# Trie - add all then remove and check

**Author:** kreakEmp
**Votes:** 25
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851353/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851353/)

---

# Approach
- Iterate over each string, and then for each string insert all the substrings which are starting from 0th index to s.size() - 1. This way we will cosinder each and every possible substring inserted into our trie.
- Then Again start iterating over each string to check the minimum length uncommon substring. To do so :
    - First we need to remove the effect of the current string from the trie, so remove the current strings substring from the trie and then we have all other strings inserted in the trie except current one.
    - Then check for the each of the substring's shortest uncommon length possible by traversing over the trie - if each of the char is present in the trie or not. When we reach to a state where the trie do not have a char found then its the shortes uncommon string or when the char is present but its count is zero then we found the shortest uncommon substring. While traversing the trie, keep tracking the substring and return it as answer when found the uncommon substring. If not found, return double length of the string s, which is a flag for substring not found
    - Once we checked, we need to add back all substring of the current string back to the trie.

# Code
```
class Solution {
public:
    class Node {
        public:
            Node* child[26];
            int count = 0;
        
    };
    
    void add(Node* head, string s, int ind){
        Node* ptr = head;
        for(int i = ind; i < s.size(); ++i){
            int c = s[i] - 'a';
            if(ptr->child[c] == NULL) ptr->child[c] = new Node();
            ptr = ptr->child[c];
            ptr->count++;
        }
    }
    
    void remove(Node* head, string s, int ind){
        Node* ptr = head;
        for(int i = ind; i < s.size(); ++i){
            ptr = ptr->child[s[i] - 'a'];
            ptr->count--;
        }
    }
    
    string check(Node* head, string s, int ind){
        Node* ptr = head;
        string ans = "";
        for(int i = ind; i < s.size(); ++i){
            int c = s[i] - 'a';
            if(ptr->child[c] == NULL) return ans;
            ans += s[i];
            ptr = ptr->child[c];
            if(ptr->count < 1) return ans;
        }
        return s + s;
    }
    
    vector<string> shortestSubstrings(vector<string>& arr) {
        vector<string> ans;
        Node* head = new Node();
        for(auto s: arr){             // Add all the strings to the trie
            for(int i = 0; i < s.size(); ++i) add(head, s, i);   
        }
        for(auto s: arr){
            string res = s + s;
            for(int i = 0; i < s.size(); ++i) remove(head, s, i);  // remove the current string from trie
            for(int i = 0; i < s.size(); ++i){                     // iterate over each substring starting at i th and check for the uncommon string length
                string t = check(head, s, i);              
                if(t.size() < res.size() || (t.size() == res.size() && t < res) ) res = t;  // store it in result if length is less or lexicographically smaller if equal 
            }
            ans.push_back((res.size() <= s.size())?res: "");        // add res to final answer
            for(int i = 0; i < s.size(); ++i) add(head, s, i);      // add back the current string to the trie
        }
        return ans;
    }
};
```

---


<b>Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---