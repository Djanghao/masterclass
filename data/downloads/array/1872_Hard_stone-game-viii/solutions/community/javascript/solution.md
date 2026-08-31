# [Javascript] Dynamic Programming + local Maxima + Minimax

**Author:** George_Chrysochoou
**Votes:** 2
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/1229790/](https://leetcode.com/problems/stone-game-viii/solutions/1229790/)

---

In order to solve this optimally, one needs to make a couple observations. 
Firstly, both Alice and Bob don't really have different goals. Their goal is the same, and that is to gather as much points as possible against one another. That essentially means, to make the best choice even if their opponent makes his best choice. But what are these choices I'm talking about?
Minimax theory describes just that. Maximizing returns even in the worst case scenario. To do that, every case has to be considered. In our problem, the choices boil down to the indices each player has to stop and take profit. One can observe, that said profit is essentially the prefix sum of the index one decides to stop at. 
**The naive way - O(n^2)**
For each position and for each player, check his available choices and choose the best one.
This will TLE.
```
	//0-Alice, 1- Bobby + memo
	bestChoice( startIndex, player ){
		if(startIndex===n-1)
			return 0 //invalid state
		if(startIndex===n-2)
			return TotalSum(S) //the last player takes everything
		let result=-Infinity
		for(let i=startIndex+1;i<n;i++)
			result=Max( result, prefix[i+1]-bestChoice(i , player^1) )
		return result
	}
	return bestChoice(0,0)
```

**Observations**
1) the states are symmetrical, since both players want to maximize their score, so keeping tab of the player inside the state is redundant.
2) Each state bestChoice(i), calculates the maximum of the value ( prefix[j+1]-bestChoice(j) ) for j>=i+1

So what if there was a way to calculate faster the maximum value of (prefix[j+1] -bestChoice(j)) after a specific Index? A segment tree here would do the trick just fine, as it would calculate the maximum value after  a specific index, but it is completely unnecessary. 
That is because we only need to keep 1 maximum, like, ever. Because any player would prefer to take the best course of action. So any subsequent states can be calculated based on that maximum. 

```
var stoneGameVIII = function(S) {  
    let n=S.length, prefix=[0],dp=[...Array(n)]
    for(let i=0;i<n;i++)
        prefix.push(prefix[prefix.length-1]+S[i])
    let bestRight=prefix[n],bestCurrent
    for(let i=n-2;i>=0;i--)
        bestCurrent=bestRight,
		//update what you re going to use in the future
        bestRight=Math.max(bestRight,prefix[i+1]-bestCurrent) 
    return bestCurrent
};
```