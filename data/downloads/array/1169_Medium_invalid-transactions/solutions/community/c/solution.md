# ✅C++ solution || Not a good problem to solve!

**Author:** dhruba-datta
**Votes:** 28
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/1540068/](https://leetcode.com/problems/invalid-transactions/solutions/1540068/)

---

> **If you\u2019re interested in coding you can join my Discord Server, link in the comment section. Also if you find any mistake please let me know. Thank you!\u2764\uFE0F**
> 

---

## Explanation:

- It\u2019s a Garbage question. Lots of ambiguity.
- Brute force always works. That doesn't mean it's the best way.
- This is definitely different from most LC questions in that it is more practical, and a bit frustrating, than the more typical ivory-tower problems. It's actually much closer to what I do daily at work than any other LC I have done.
- It\u2019s more cp type question than actual Leetcode problems.

---

## Code:

```cpp
class transaction {
public:
    int time;
    int amount;
    string city;
    string tran;
    bool marked;
    
    transaction (int t, int a, string c, string tr) {
        tran = tr;
        time = t;
        amount = a;
        city = c;
        marked = false;
    }
};
class Solution {
public:
    vector<string> invalidTransactions(vector<string>& transactions) {
        if(transactions.empty())
            return {};
        
        unordered_map<string, vector<transaction*>> trans;
        
        for(string &st : transactions) {
            istringstream ss(st);
            string token = "";
           
            getline(ss, token, ',');
            string name = token;
            getline(ss, token, ',');
            int time = stoi(token);
            getline(ss, token, ',');
            int amount = stoi(token);
            getline(ss, token, ',');
            string city = token;
            
            transaction *t = new transaction(time, amount, city, st);
            trans[name].push_back(t);
        }
        vector<string> result;
        
        for(auto &p : trans) {
           
            sort(p.second.begin(), p.second.end(), [](const transaction* a, const transaction* b) {
                return a->time < b->time;
            });
            for(int i=0; i<p.second.size(); i++) {
                
                if(p.second[i]->amount > 1000) {
                    result.push_back(p.second[i]->tran);
                    p.second[i]->marked = true;
                }
               
                if(i > 0 && p.second[i]->time <= p.second[i-1]->time + 60) {
                    int r = i-1;
                    while(r >= 0 && p.second[r]->time >= p.second[i]->time - 60) {
                        if(p.second[i]->city != p.second[r]->city) {
                            if(!p.second[r]->marked) {
                                result.push_back(p.second[r]->tran);
                                p.second[r]->marked = true;
                            }
                            if(!p.second[i]->marked) {
                                p.second[i]->marked = true;
                                result.push_back(p.second[i]->tran);
                            }
                        }
                        r--;
                    }
                }
            }
        }
        return result;
    }
};

```

---

> **Please upvote this solution**
>