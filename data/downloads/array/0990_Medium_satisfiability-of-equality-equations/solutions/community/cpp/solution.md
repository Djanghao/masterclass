# Easy C++ Solution with Explanation || Beginner Friendly || Union Find || 85% faster

**Author:** rahulmittall
**Votes:** 5
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2625683/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2625683/)

---

In first pass, do union for all the variables which are equal.
in second pass, check whether any contradiction occurs in the set made by us in union find.
If it is, then equations are not satisfiable i.e. we have to return false.
if not, then the equations are satisfiable.

```cpp
class Solution {
    unordered_map<char,char> par;
public:
	// Function for finding parent of variable
    char parent(char c){
        if(par[c]==c) return c;
        return par[c]=parent(par[c]);
    }
	
    // Function for doing union
    void unite(char a,char b){
        par[a]=b;
    }
    
    bool equationsPossible(vector<string>& equations) {
		// Making every variable parent of itself
        for(int i=0;i<26;i++) par['a'+i] = i+'a';
		
		// First pass
        for(auto &eqn : equations){
            char a = eqn[0];
            char b = eqn[3];
            
            if(eqn[1] == '='){
                char parA = parent(a);
                char parB = parent(b);
				
				// If parents of both variables are different, do union
                if(parA != parB)
					unite(parA,parB);
            }
        }
		
		// Second pass
        for(auto &eqn : equations){
            char a = eqn[0];
            char b = eqn[3];
            
            if(eqn[1] == '!'){
                char parA = parent(a);
                char parB = parent(b);
				
				// If parents of both variables are same, means contradiction
                if(parA == parB)
					return false;
            }
        }
		
		// If all equations are satisfied
        return true;
    }
};
```