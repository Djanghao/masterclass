# c++ two approaches best explained why simple brute force will give TLE

**Author:** Pragya_Anand
**Votes:** 56
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/1187536/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/1187536/)

---

```
1.simple brute force..this will give you tle because we may be recalculating same result over and over again.
class Solution {
public:
    int numMatchingSubseq(string s, vector<string>& words) {
        int count=0,k=s.size();
      //just loop over words.
      for(int i=0;i<words.size();i++)
      {
        int start1=0,start2=0;
        string p=words[i];//p will store the string at index i in vector word.
        int m=p.size();
        //start matching the very first character of string s with that of p.
        while(start1<k&&start2<m)
        {
          if(p[start2]==s[start1])// if it matches increment both start1 and start2 to check next match
            start1++,start2++;
          else// if it does not matches you need to increment index of string s only to check the next character of s with p.
            start1++;
        }if(start2==m)// if we reach the length of string p then this word in in our string s. so we increase our count by 1.
          count++;
      }return count;
    }
};
//this will give you TIME LIMIT EXCEEDED because our input vector words can be very large 
2.modified brute force using map
class Solution {
public:
    int numMatchingSubseq(string s, vector<string>& words) {
        int count=0,k=s.size();
      //we will be form map to count occurences of particular word to avoid re calculation and this will reduce time
      unordered_map<string,int>mymap;
      for(int i=0;i<words.size();i++)
        mymap[words[i]]++;
      for(auto x:mymap)
      {
        int start1=0,start2=0;
        string p=x.first;
        int m=p.size();
        while(start1<k&&start2<m)
        {
          if(p[start2]==s[start1])
            start1++,start2++;
          else
            start1++;
        }if(start2==m)
          count+=x.second;//if we reach the length of string p then this word in in our string s. so we increase our count by number of times it occured in words instead of increamenting by 1
      }return count;
    }
};
do upvote if you find it useful...
```