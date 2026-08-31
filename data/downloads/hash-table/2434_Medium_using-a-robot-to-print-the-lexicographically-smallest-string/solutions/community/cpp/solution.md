# Stack it Up !!      Easy to understand  c++

**Author:** megamind_
**Votes:** 104
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2678848/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2678848/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Just keep count of the frequency of every char to go in lexicographic order. Now add char one by one to the stack , if the lowest lexicgraphic char is greater than equal to element on top of stack , add the top of stack to ans.
At last if the stack isn't empty after traversing all elements, add all elemrnts to the ans.

<!-- Describe your approach to solving the problem. -->

# Complexity
- **Time complexity: O(n)**  (every char goes in stack atmost once)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity: O(n)**  (stack size can go upto n if smallest char is at last index)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    
    char low(vector<int> & freq){    // this function return the smallest char present
        
        for(int i=0;i<26;i++){
            if(freq[i]!=0)return 'a'+i;
        } 
        return 'a';   
    }
    
    string robotWithString(string s) {
        
        stack<char> t;
        string ans="";  
        vector<int> freq(26,0);
        for(char c:s){
            freq[c-'a']++;
        }
        
        //  *********** main logic 
        for(char c:s){
            t.push(c);
             freq[c-'a']--; 
            while(t.size()>0 && t.top()<=low(freq)){
                char x = t.top(); 
                ans+= x;
                t.pop();  
            }    
        }
        
         while(t.size()>0){
             ans+= t.top();
             t.pop();   
        }
      //**********************
        return ans;
      
    }
};
```
* Also checkout the first comment.