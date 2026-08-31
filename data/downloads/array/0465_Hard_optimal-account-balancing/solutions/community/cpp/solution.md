# Concise 9ms DFS solution (detailed explanation)

**Author:** zzg_zzm
**Votes:** 353
**Link:** [https://leetcode.com/problems/optimal-account-balancing/solutions/95355/](https://leetcode.com/problems/optimal-account-balancing/solutions/95355/)

---

With all the given transactions, in the end, each person with ID = `id` will have an overall balance `bal[id]`. Note that the `id` value or any person coincidentally with `0` balance is irrelevant to debt settling count, so we can simply use an array `debt[]` to store all non-zero balances, where
* `debt[i] > 0` means a person needs to pay `$ debt[i]` to other person(s);
* `debt[i] < 0` means a person needs to collect `$ debt[i]` back from other person(s).

Starting from first debt `debt[0]`, we look for all other debts `debt[i]` (`i>0`) which have opposite sign to `debt[0]`. Then each such `debt[i]` can make one transaction `debt[i] += debt[0]` to clear the person with debt `debt[0]`. From now on, the person with debt `debt[0]` is dropped out of the problem and we recursively drop persons one by one until everyone's debt is cleared meanwhile  updating the minimum number of transactions during DFS.

Note: Thanks to @KircheisHe who found the following great paper about the debt settling problem:
* [Settling Multiple Debts Efficiently: An Invitation to Computing Science](http://www.mathmeth.com/tom/files/settling-debts.pdf) by T. Verhoeff, June 2003.

The question can be transferred to a [3-partition problem](https://en.wikipedia.org/wiki/3-partition_problem), which is NP-Complete.

```
public:
    int minTransfers(vector<vector<int>>& trans) 
	{
        unordered_map<int, long> bal; // each person's overall balance
        for(auto& t: trans) {
		  bal[t[0]] -= t[2];
		  bal[t[1]] += t[2];
		}
		
        for(auto& p: bal) // only deal with non-zero debts
		  if(p.second) debt.push_back(p.second);
		  
        return dfs(0);
    }
    
private:
    int dfs(int s) // min number of transactions to settle starting from debt[s]
	{ 
    	while (s < debt.size() && !debt[s]) ++s; // get next non-zero debt
		
    	int res = INT_MAX;
    	for (long i = s+1, prev = 0; i < debt.size(); ++i)
    	  if (debt[i] != prev && debt[i]*debt[s] < 0) // skip already tested or same sign debt
		  {
		    debt[i] += debt[s]; 
			res = min(res, 1+dfs(s+1)); 
			prev = (debt[i]-=debt[s]);
		  }
    	    
    	return res < INT_MAX? res : 0;
    }
    
    vector<long> debt; // all non-zero debts
```