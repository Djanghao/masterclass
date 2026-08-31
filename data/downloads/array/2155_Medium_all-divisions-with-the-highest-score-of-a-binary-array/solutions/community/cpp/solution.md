# ✔  C++ Easiest solution || 65% Fast Solution || Prefix Sum

**Author:** aryan2621
**Votes:** 6
**Link:** [https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1730631/](https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/solutions/1730631/)

---

**PREFIX SUM**

* As the question demands we have to find the score based on some conditions;
* The conditon is
	* Count of zeroes on left and ones on right for every index i.e score[i] =c{.....0...0...} before i  + {...1....1...} after i and upto N;
	* But the ans vector should consist of only those indexes for which this score is maximum;
* The simple logic is to calculate the right ones by pos_ones_right[i] = pos_ones_right[i+1]+(a[i]==1);
* And  pre_zeroes_left[i] =  pre_zeroes_left[i-1]+(a[i]==0);
* While traversing we take the max_score 0 and if while traversal pre_zeroes_left[i]+ pos_ones_right[i] >max_score we will just clear the ans vector and push i;
* else if same score found we will push that index too;

```
		int N=a.size();
        vector<int> r(N+1),l(N+1);
        for(int i=1;i<N+1;i++) l[i]=l[i-1]+(a[i-1]==0);
        for(int i=N-1;i>=0;i--) r[i]=r[i+1]+(a[i]==1);
        
         int maxs=0;
        vector<int> ans;
        for(int i=0;i<N+1;i++){
            int val=r[i]+l[i];
            if(val>maxs){
                maxs=val;
                ans={i};
            }
            else if(val==maxs) ans.push_back(i);
        }
        return ans;
```