# [c++ /javascript ] solution

**Author:** dilipsuthar60
**Votes:** 7
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1693887/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/1693887/)

---

```
class Solution {
public:
    vector<string> divideString(string s, int k, char fill) 
    {
        int n=s.size();
        vector<string>v;
        for(int i=0;i<n;i+=k)
        {
            v.push_back(s.substr(i,k));
        }
        if(v.back().size()==k)
        {
            return v;
        }
        for(int i=v.back().size();i<k;i++)
        {
            v.back()+=fill;
        }
        return v;
    }
};
```

```
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) 
{
  var ans=[];
  for(let i=0;i<s.length;i+=k)
    {
      ans.push(s.substring(i,i+k));
    }
  let str=ans[ans.length-1];
  if(str.length==k)
    {
      return ans;
    }
  for(let i=str.length;i<k;i++)
    {
      ans[ans.length-1]+=fill;
    }
  return ans;
};
```