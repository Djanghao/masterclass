# C++ Top Down BitMask DP w/ explanation

**Author:** varkey98
**Votes:** 15
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/797423/](https://leetcode.com/problems/stickers-to-spell-word/solutions/797423/)

---

Time Complexity: **O(2^N * N * stickers.length)**
The basic idea is that, after selecting a particular sticker, you have a choice to select any sticker from the sticker array (including the previously selected one). So, by examining all those choices, we find the right answer. 
```
    int memo[32768];
    int dp(int mask,string& target,vector<vector<int>>& arr,int allmask)
    {
        if(mask==allmask)
            return 0;
        else if(memo[mask])
            return memo[mask];
        else
        {
            int q=51;
            for(vector<int> word:arr)
            {
                int newMask=mask;
                for(int i=0;i<target.length();++i)
                    if((mask&1<<i)==0&&word[target[i]-'a'])
                    {
                        newMask|=1<<i;
                        word[target[i]-'a']--;
                    }
                if(newMask!=mask)
                    q=min(q,1+dp(newMask,target,arr,allmask));
            }
            return memo[mask]=q;
        }
    }
    int minStickers(vector<string>& stickers, string target) 
    {
        vector<vector<int>> arr(stickers.size());
        memset(memo,0,sizeof(memo));
        for(int i=0;i<stickers.size();++i)
        {
            vector<int> c(26,0);
            for(char a:stickers[i])
                c[a-'a']++;
            arr[i]=c;
        }
        int allmask=(1<<target.length())-1;
        int val=dp(0,target,arr,allmask);
        return val<51?val:-1;
    }
	```
