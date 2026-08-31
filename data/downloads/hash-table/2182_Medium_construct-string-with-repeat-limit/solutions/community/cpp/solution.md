# max heap || easy to understand || must see

**Author:** akshat0610
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/3279670/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/3279670/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
//for fast io
static int fast_io = []() 
{ 
    std::ios::sync_with_stdio(false); 
    cin.tie(nullptr); 
    cout.tie(nullptr); 
    return 0; 
}();

#ifdef LOCAL
    freopen("input.txt", "r" , stdin);
    freopen("output.txt", "w", stdout);
#endif

//actual code begins here
class Solution {
public:
    string repeatLimitedString(string s, int k) 
    {
         //final constructed string to be returned from this function
         string ans = "";

         //first of all we will take the mapping of the char from string
         unordered_map<char,int>mp;

         //taking the mapping of the every char to keep that in heap
         for(int i=0;i<s.length();i++)
         {
             char ch = s[i];
             mp[ch]++;
         }

         //priority queue for keeping the large char on the top
         priority_queue<pair<char,int>>pq;

         for(auto it = mp.begin() ; it!=mp.end() ; it++)
         {
              char ch = it->first;
              int freq = it->second;     
              pq.push(make_pair(ch,freq));
         }
         //building the string according to the given constraint
         while(!pq.empty())
         {
             pair<char,int>p1 = pq.top();
             pq.pop();
             char ele1 = p1.first;
             int freq1 = p1.second;

             if(freq1 < k)
             {
                 //appending ch1 freq1 times to the current answer
                 while(freq1 > 0)
                 {
                     ans.push_back(ele1);
                     freq1--;
                 }
             }
             else if(freq1 == k)
             {
                 //appending ch1 freq1 times to the current answer
                 while(freq1 > 0)
                 {
                     ans.push_back(ele1);
                     freq1--;
                 }
             }
             else if(freq1 > k)
             {
                  //appending ch1 freq1 times to the current answer
                  int temp = k;
                  while(temp > 0)
                  {
                     ans.push_back(ele1);
                     temp--;
                  }
                  freq1 = freq1 - k;
                  
                  //breaking the streak of the k characters
                  
                  //if we do not have any one to break the freq of the curr char then break
                  if(pq.size() == 0)
                  break;

                  //else we have someone that can break the freq of the curr char
                  pair<char,int>p2 = pq.top();
                  pq.pop();
                  char ele2 = p2.first;
                  int freq2 = p2.second;
                  
                  if(freq2 > 0)
                  {
                      ans.push_back(ele2);
                      freq2--;
                      
                      if(freq2 > 0)
                      pq.push(make_pair(ele2,freq2));
                  }
                  if(freq1 > 0)
                  pq.push(make_pair(ele1,freq1));
             }
         }
         return ans;
    }
};
```