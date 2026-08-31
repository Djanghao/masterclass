# Line Sweep with explanation.

**Author:** aman282571
**Votes:** 162
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2454167/](https://leetcode.com/problems/shifting-letters-ii/solutions/2454167/)

---

**Explanation:-**

1. ```Lets say we are given [1,10000] and [2,10000] intervals and we are supposed to increase the  count of values between  1 to 10000 and 2 to 10000 by 1.```
2. So how you will do?
3. ```Brute force is to iterate over each interval and increase each position count that is appearing in intervals.```
4. Can we do better?
5. ```Lets create a array from index 0 to 1e5.```
6. ```Now iterate over each interval.Eg.:-```
7.  ```[1,10000]:- increase the counter at pos 1 and decrease at 10001.Same for other intervals.```
8. ``` Now do prefix sum.```
9.  This will incerase each position value in linear time.
10. In question when we do forward shift then we have to increase the count from position left to right.
11.So i will do line[left]++ and line[right+1]--.
12. For backward shift we want to decrease the value so
13. So i will do line[left]-- and line[right+1]++.
I hope you can do question now.
```
class Solution {
public:
    string shiftingLetters(string s, vector<vector<int>>& sh) {
        long sz=s.size();
        vector<long>line(sz+1,0);
        for(auto & i:sh){
            // forward shift so do +1
            if(i[2]==1){
                line[i[0]]++;
                line[i[1]+1]--;
            }
            //backward shift so do -1
            else{
                line[i[0]]--;
                line[i[1]+1]++;                
            }
        }
        for(int i=1;i<=sz;i++)
            line[i]+=line[i-1];
        for(int i=0;i<sz;i++){
		// line[i] is how many times i have to increase or decrease the s[i] char.So i am adding it and taking modulo
			int increaseBy=(s[i]-'a'+line[i])%26;
		// this is to make -ve module +ve. 
			increaseBy=(increaseBy+26)%26;
			s[i]='a'+increaseBy;
        }
        return s;      
    }
};
```
Do **UPVOTE** if it helps :)