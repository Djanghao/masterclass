# Shortest & Easiest C++ code you will find

**Author:** DeepanshuNirvan
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/3315961/](https://leetcode.com/problems/design-an-atm-machine/solutions/3315961/)

---


# Code
```
class ATM {
public:
    unordered_map<int,long long >m;
    vector<int>note;
    ATM() {
        note={20,50,100,200,500};
        for(auto i:note)m[i]=0;
    }
    void deposit(vector<int> banknotesCount) {
        for(int i=0;i<5;i++) m[note[i]]+=banknotesCount[i];
    }
    vector<int> withdraw(int amount) {
        vector<int>ans(5);
        unordered_map<int,long long >tempmap=m;
        int temp;
        for(int j=4;j>=0;j--){
            int i=note[j];
            temp=amount/i;
            if(temp>0 && m[i]>0){
                if(m[i]>=temp){
                    m[i]-=temp;
                    amount=amount%i;
                }
                else{
                    amount=amount-(i*m[i]);
                    m[i]=0;
                }
            }
            ans[j]=tempmap[i]-m[i];
        }
        if(amount==0) return ans;
        m=tempmap;
        return {-1};
    }
};
