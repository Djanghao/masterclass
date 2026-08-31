# Prefix Sum

**Author:** yashprakashsharma2000
**Votes:** 8
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2454260/](https://leetcode.com/problems/shifting-letters-ii/solutions/2454260/)

---

**Please Upvote If you got it : )**
We will use prefix sum concept in this problem:

We will perform total three passes:
1) In first pass we traverse shifts vector: we will put value in vector,
      if(shifts[i][2]==1), then do +=1 at shifts[i][0] index & -=1 at shifts[i][0]+1 index of vector(prefixsum)
      else ,do -=1 at shifts[i][0] index & +=1 at shifts[i][0]+1 index of vector(prefixsum)

2) In second pass we traverse vector and do prefixsum to find displacement of character at index i

3) In third pass we traverse string and shift the character ((s[i]-'a')+vec[i])%26 places from 'a'
   

**Time Complexity: 3xO(n)
SpaceComplexity: O(n)**

**Code:**
```
string shiftingLetters(string s, vector<vector<int>>& shifts) {
        int n=s.size();
        vector<int> vec(n+1,0);
        // to fill vec
        for(auto &v: shifts){
            if(v[2]==1){
                vec[v[0]]+=1;
                vec[v[1]+1]-=1;
            } else{
                vec[v[0]]-=1;
                vec[v[1]+1]+=1;
            }
        }
        // prefix sum
        for(int i=1;i<=n;++i){
            vec[i]+=vec[i-1];
        }
        // shift character
        for(int i=0;i<n;++i){
            int val=((s[i]-'a')+vec[i])%26;
            if(val<0) val+=26;
            s[i]='a'+val;
        }
        return s;
    }
```