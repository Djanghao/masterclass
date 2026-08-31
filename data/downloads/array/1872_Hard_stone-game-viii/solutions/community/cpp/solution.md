# C++ | Memoization solution | With notes

**Author:** Diavolos
**Votes:** 4
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/2072402/](https://leetcode.com/problems/stone-game-viii/solutions/2072402/)

---

Subproblems: S(index,p)=Score difference when the game is at the ith stone have been consumed and its player p's turn(p==0=>Alice and p==1=>Bob)

Relation: The player has two options:-
1. Take the first i stones and add their sum to their score and put an equivalent stone back in the array, and the turn moves to the next player
2. Not take the stone and move on to the next index, the turn remains the same
Alice will choose the maximum out of these options as she is trying to maximise the score whereas Bob will choose the minimum out of these options as he is trying to minimise the score.
Therefore the recurrence relation can be described as follows:-
**if** p==0: S(index,p)=max{prefix[index]+S(index+1,!p),S(index+1,p)}
**if** p==1: S(index,p)=min{-prefix[index]+S(index+1,!p),S(index+1,p)}

Bob's scores have to be **subtracted** while Alice's scores have to be added, which is the reason why there is a negative sign in front Bob's score.

Base case: **if** index==prefix.size-1:
1. **if** p==0: return prefix[index]
2. **if** p==1: return -prefix[index]

Original problem: S(1,0) *Assuming that the prefix array is 0-indexed, which is not true in code and therefore we start at index 2*
The initial value of index is 1 becuase we can only choose x>1 elements

Time complexity: O(n)

Consider:-
0............i,i+1,........n
if Alice chooses the first i stones, she will replace the first i stones with an equivalent stone, the resulting series will be:-
prefix[i],i+1,.........n
which is the same as the orginal stone array, but if we replaced each stone with its prefix sum, **this** is why we are using a prefix array.
```
class Solution {
private:
    vector<vector<int>>mem;
    vector<int>prefix;
    int solve(vector<int>&prefix,int index,int p){
        if(index==prefix.size()-1){
            if(p==0){
                return prefix[index];
            } else {
                return -prefix[index];
            }
        } else if(mem[index][p]!=-1){
            return mem[index][p];
        } else {
            if(p==0){
                int ans1=prefix[index]+solve(prefix,index+1,!p);
                int ans2=solve(prefix,index+1,p);
                return mem[index][p]=max(ans1,ans2);
            } else {
                int ans1=-prefix[index]+solve(prefix,index+1,!p);
                int ans2=solve(prefix,index+1,p);
                return mem[index][p]=min(ans1,ans2);
            }
        }
    }
public:
    int stoneGameVIII(vector<int>& stones) {
        int n=stones.size();
        prefix=vector<int>(n+1,0);
        mem=vector<vector<int>>(n,vector<int>(2,-1));
        for(int i=1;i<prefix.size();i++){
            prefix[i]=prefix[i-1]+stones[i-1];
        }
        return solve(prefix,2,0);
    }
};