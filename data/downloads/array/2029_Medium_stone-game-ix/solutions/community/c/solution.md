# very intuitive || with explanation

**Author:** sippu
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/2402060/](https://leetcode.com/problems/stone-game-ix/solutions/2402060/)

---

see first divide the whole array in three parts first remainder 1 , second remainder 2 and third remainder 0 ...... now see what remainder 0 work is its work is to switch the positions between alice and bob like if bob is working on remainder 1 it will start to work on remainder 2 now if alice choosed remainder 0 element in her chance ...... and this is a big hint which after which you all can build up the inituition ........
// code 

class Solution {
public:
    bool stoneGameIX(vector<int>& stones) {
     int count1=0;
        int count2=0;
        int count0=0;
        for(int i=0;i<stones.size();i++){
            if(stones[i]%3==1){
                count1++;
            }
            else if(stones[i]%3==2){
                count2++;
            }
            else{
                count0++;
            }
        }
        if(count1==0 && count2==0){
            return false;
        }
        if(count1==0 || count2==0){
            if(count1==1|| count2==1 || count1==2 || count2==2){
                return false;
            }
            if(count0%2){
                return true;
            }
            else{
                return false;
            }
        }
        if(count1==count2){
            if(count0%2){
                return false;
            }
            else{
                return true;
            }
        }
        else{
            if(count0%2){
                int min_val=min(count1,count2);
                int max_val=max(count1,count2);
                if(max_val-2<=min_val){
                    return false;
                }
                else{
                    return true;
                }
            }
            else{
                return true;
            }
        }
    }
};