# Simple C++ if/else

**Author:** sachin17115285
**Votes:** 4
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/1500302/](https://leetcode.com/problems/stone-game-ix/solutions/1500302/)

---

I simply consider all the possible cases and logically handle them using if and else statement
If you have any doubt ask in comment section.	
	
		bool stoneGameIX(vector<int>& stones) {
        int n=stones.size();
        int arr[3]={0};
        for(int i=0;i<n;i++)
            arr[stones[i]%3]++;
        if(arr[0]%2==1)
            if(abs(arr[1]-arr[2])>=3)return true;
            else return false;
        else
            if(arr[1]==0 || arr[2]==0)return false;
            else return true;
        }