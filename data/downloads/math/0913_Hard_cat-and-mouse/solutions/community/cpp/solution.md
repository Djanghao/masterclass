# C++ working intuitive DFS solution with detailed explanation

**Author:** ding--
**Votes:** 3
**Link:** [https://leetcode.com/problems/cat-and-mouse/solutions/3148098/](https://leetcode.com/problems/cat-and-mouse/solutions/3148098/)

---

The typical DFS solution would determine each node's result according to its children's result - meaning your opppnent's best choice. If the game falls into an infinite loop (cycle), it means a draw.
However, if we determine the draw position by detecting a cycle, the result would be wrong in the situation when a winning route is discovered after the draw route, causing previous return value / detected cycle to be incorrect. (full explanation & visualization in the link in the comment)
As a quick fix, we can rerun a DFS for all the draw positions after each DFS, so that the draw position will be re-evaluated based on the new optimal route we discovered. If the amount of draw positions couldn't be reduced further after a re-run, we determine it as a real draw position. As we will revisit many of the nodes, this solution is not as efficient as the official answer, but it's a working DFS solution :)
Please upvote if this walkaround helps. 

# Code
```
class Solution {
public:
    vector<vector<vector<int>>> state; //mouse position, cat position, whose turn
        /*  0 means mouse's turn, 1 means cat turn.  result   
        mouse 0 <cat 0 <res_m,res_c>>
                <cat 1 <res_m,res_c>>
        mouse 1
        mouse 2
        */
        //cat win position - mouse == cat
        //mouse win position - mouse == 0
    int dfs(vector<vector<int>>& graph, int mouse, int cat, int turn){
        //cout << " pos " << mouse << "," << cat << " next turn: " << turn << endl; 
        if (state[mouse][cat][turn] !=-1){
            return state[mouse][cat][turn];
        }  
        if (mouse ==0){
            state[mouse][cat][turn] =1;
            return 1;
        }
        if (mouse == cat){
            state[mouse][cat][turn] =2;
            return 2;
        }
        state[mouse][cat][turn] = 0;
        /*
        if (step == drawlimit){
            state[mouse][cat][turn] =0;
            return 0;
        }*/

        if (!turn){//mouse's turn
            bool isDraw=false;
            for (int i=0; i< graph[mouse].size();i++){
                int nextturn = dfs(graph,graph[mouse][i],cat,turn+1);
                if(nextturn==1){
                    isDraw = false;
                    return state[mouse][cat][turn] = 1;
                }
                if(nextturn==0){
                    isDraw=true;
                }
            }
            //because draw is better than loss
            if(isDraw){
                return state[mouse][cat][turn] = 0;
            }
            return state[mouse][cat][turn] = 2;
        } else{
            bool isDraw=false;
            for (int i=0; i< graph[cat].size();i++){
                if (graph[cat][i] !=0){
                    int nextturn = dfs(graph,mouse,graph[cat][i],turn-1);
                    if(nextturn==2){
                        isDraw = false;
                        return state[mouse][cat][turn] = 2;
                    }
                    if(nextturn==0){
                        isDraw=true;
                    }
                }
            }
            if(isDraw){
                return state[mouse][cat][turn] = 0;
            }
            return state[mouse][cat][turn] = 1;
        }


        return state[mouse][cat][turn];
    }
    int catMouseGame(vector<vector<int>>& graph) {
        
        int n = graph.size();
        for (int i=0; i< n;i++){     
            vector<vector<int>> cat_p;      
            for (int j=0; j< n;j++){               
                vector<int> v;
                v.push_back(-1);
                v.push_back(-1);
                cat_p.push_back(v);                               
            }
            state.push_back(cat_p);           
        }
        
        dfs(graph,1,2,0);
        //revisit 0
        vector<vector<int>> revisit;
        int lastround = -1;
        for (int i=0; i< n;i++){
            for (int j=0; j< n;j++){
                for (int k=0; k<2;k++){
                    if (state[i][j][k] ==0){
                        vector<int> v= {i,j,k};
                        revisit.push_back(v);                        
                    }
                    //cout << "mouse " << i << " cat " << j 
                    //<< " turn res" <<state[i][j][k] <<endl;
                }               
            }
        }
        while (lastround != revisit.size() && revisit.size()!=0){
            //cout << lastround << ','<< revisit.size() << endl;
            lastround = revisit.size();
            for (int i=0; i< revisit.size();i++){
                state[revisit[i][0]][revisit[i][1]][revisit[i][2]] = -1;
                dfs(graph,revisit[i][0],revisit[i][1],revisit[i][2]);
            }
            revisit.clear();
            for (int i=0; i< n;i++){
                for (int j=0; j< n;j++){
                    for (int k=0; k<2;k++){
                        if (state[i][j][k] ==0){
                            vector<int> v= {i,j,k};
                            revisit.push_back(v);                        
                        }
                    }               
                }
            }

        }

        if (state[1][2][0] == -1){
            return 0;
        } else{
            return state[1][2][0];
        }
        
    }
};
```