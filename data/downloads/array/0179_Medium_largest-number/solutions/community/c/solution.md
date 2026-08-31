# [beats 98.60 % ][easy understanding][c++]

**Author:** rajat_gupta_
**Votes:** 99
**Link:** [https://leetcode.com/problems/largest-number/solutions/863453/](https://leetcode.com/problems/largest-number/solutions/863453/)

---

```

bool compare(string a,string b){
    return a+b > b+a;
}

class Solution {
public:
    string largestNumber(vector<int>& nums) {
	
        vector<string> container;
		
        for(int i : nums)  container.push_back(to_string(i));
        
        sort(container.begin(),container.end(),compare);
        
        string result;
        
        for(int i=0;i<container.size();i++)  result+=container[i];
        
        return result[0]=='0'? "0" : result;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
