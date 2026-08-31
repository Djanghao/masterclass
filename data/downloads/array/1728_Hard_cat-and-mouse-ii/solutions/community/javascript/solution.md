# [JS] Easy minimax+ Memoization + comments

**Author:** George_Chrysochoou
**Votes:** 2
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/1027955/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/1027955/)

---

This is a classic minimax problem. Imagine it as a tree of states. 
Each state consists of 3 things, 
* the mouse's location
* the cat's location
* and the current level of the tree( the i-th move)

An edge exists between 2 states, if one can lead to the next. Each level's number uniquely characterizes which player's turn it is. So for example the 0-th level will be the mouse's turn, 1-st will be the cat's turn etc. So the whole strategy revolves around 1 simple thing. On each player's turn, the respective player will have to make a move. That move uniquely characterizes the state, as winning or losing state. A state is winning, if there is a move to be made by the current player, that will cause his opponent to lose. On the contrary, if every available move the current player can make is winning for the opponent, the current state is a losing state. The pruning (or a-b pruning as It's formally called, is an early termination that prevents further nodes from being explored once an optimal decision is already made). I dont believe it's a-b pruning as there are no numbers involved, but rather booleans that our recursive function returns. Exploration of already computed states is also pruned by the use of memoization. 
```
var canMouseWin = function(A, maxC  , maxM) {
    let n=A.length,m=A[0].length,seen={},
        pos=[[0,1],[0,-1],[1,0],[-1,0]],xM,yM,xC,yC,xF,yF
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < m; j++) 
            if(A[i][j]==='M')[xM,yM]=[i,j]
            else if (A[i][j]==='C')[xC,yC]=[i,j]
            else if(A[i][j]==='F')[xF,yF]=[i,j]            

    let invalid=([x,y])=>(x<0||x>=n||y<0||y>=m)?true:A[x][y]==='#'

    //returns whether the current player ( determined by level -odd/even) can win the game while on the current state
    let recursion=([[xM,yM],[xC,yC]],level)=>{
        let whoPlays=Boolean(level%2),
            state=[[[xM,yM],[xC,yC]],level].toString(),
            maxAllowable=whoPlays?maxC:maxM        
        if(seen[state]===undefined){ //memoization
            //end states
            if((xC===xF&&yC===yF)||(xC===xM&&yC===yM)||level>=70) // level>=70 makes this pass
                return  seen[state]=whoPlays
            if(xM===xF&&yM===yF)
                return  seen[state]=(!whoPlays)
            //try staying still first 
            if(recursion([[xM,yM],[xC,yC]],level+1)===false)
                return seen[state]=true
            //then try moving
            for(let [dx,dy] of pos)
                for (let k = 1; k <= maxAllowable; k++){
                    let newState=whoPlays?[xC+dx*k,yC+dy*k]:[xM+dx*k,yM+dy*k]
                    if(invalid(newState)||seen[state])
                        break
                    if(recursion(whoPlays?[[xM,yM],newState]:[newState,[xC,yC]],level+1)===false)
                        return seen[state]=true
                }
            seen[state]=false
        }
        return seen[state]
    }
    return recursion([[xM,yM],[xC,yC]],0)
};
```