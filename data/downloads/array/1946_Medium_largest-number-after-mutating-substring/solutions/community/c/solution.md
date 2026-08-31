# c++ || o(n) || greedy || commented

**Author:** rajat_gupta_
**Votes:** 14
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1361060/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1361060/)

---

**TC: O(n) //n->length of string num
SC: O(1)**
```
//change first longest encountered substring from left which can make string greater in value
class Solution {
public:
    string maximumNumber(string num, vector<int>& change){
        int n=num.size();
        for(int i=0;i<n;i++){
            int x=num[i]-'0';
            if(x < change[x]){//checking whether mutating this char will increment the value or not
			//the mutation continues till mutating the char will increase the value
                while(i<n and num[i]-'0'<=change[num[i]-'0']){
                    num[i++]=change[num[i]-'0']+'0';
                }
				//break the loop when substring ends
                break;
            }
        }
        return num;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
