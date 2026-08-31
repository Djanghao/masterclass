# Easy understanding C++ code with comments

**Author:** venkatasaitanish
**Votes:** 96
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/1784775/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/1784775/)

---

We want to form a lexicographically largest string using the characters in a given string.
But we have to make sure that a letter is not repeated more than the given limit in a row (i.e consecutively).

So we use a ***priority_queue*** to pop the element which has the highest priority. *If it's count is less than the repeatLimit,* we directly add to the ans.

*But if it's count is greater than the repeatLimit*, we just add the repeatLimit amount of the present character and we pop out the next priority character and add a single letter to the ans.
This makes that a letter is not repeated more than limit in a row and lexicographically largest is maintained. After adding to the ans, if we have extra characters left out, we just push back into priority_queue for the next use.

Here *if we are not able to pop*, the next priority character, we just return the ans so as we cannot add more than repeatedLimit charecters in a row.
```
class Solution {
public:
    string repeatLimitedString(string s, int k) { // k is the repeatLimit
        int n = s.length();
        unordered_map<char,int> m;
        for(int i=0;i<n;i++) m[s[i]]++;
        priority_queue<pair<char,int>> pq;
        for(auto i: m){
            pq.push({i.first,i.second}); // pushing the characters with their frequencies.
        }
        
        string ans = "";
        while(!pq.empty()){
            char c1 = pq.top().first;
            int n1 = pq.top().second;
            pq.pop();
                
            int len = min(k,n1); // Adding characters upto minimum of repeatLimit and present character count.
            for(int i=0;i<len;i++){ // adding the highest priority element to the ans.
                ans += c1;
            }
            
            char c2;
            int n2=0;
            if(n1-len>0){ // If the cnt of present character is more than the limit.
                if(!pq.empty()){ //Getting the next priority character.
                    c2 = pq.top().first;
                    n2 = pq.top().second;
                    pq.pop();
                }
                else{
                    return ans; // if there is no another letter to add, we just return ans.
                }
                ans += c2; // Adding next priority character to ans.
                
                // If the elements are left out, pushing them back into priority queue for next use.
                pq.push({c1,n1-len});
                if(n2-1>0) pq.push({c2,n2-1}); 
            }
        }
        return ans;
    }
};
```
**Upvote if it helps!**