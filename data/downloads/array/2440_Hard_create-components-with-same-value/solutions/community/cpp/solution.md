# Factorization || Brute Force || C++

**Author:** Yowaimo
**Votes:** 47
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/2706326/](https://leetcode.com/problems/create-components-with-same-value/solutions/2706326/)

---

```
class Solution {
public:
    vector<vector<int>> graf;
    vector<int> nums;
    
    int comp, val;
    int dfs(int v, int par) {
        int tot = nums[v];
        for(auto x: graf[v]) {
            if(x == par) continue;
            tot += dfs(x, v);
        }
        
        if(tot == val) {
            //if a component of sum = val is found decrease number of component's by 1
            //and return 0 because the component is detatched from this node
            comp--;
            return 0;
        }
        //this node cannot form a component with sum = val so maybe the parent would be able to make it
        return tot;
    }
    int componentValue(vector<int>& nums, vector<vector<int>>& edges) {
        int n = nums.size();
        
        graf.resize(n);
        this->nums = nums;
        
        for(auto x: edges) {
            graf[x[0]].push_back(x[1]);
            graf[x[1]].push_back(x[0]);
        }
        
        //if all values are equal then n - 1 edges can be deleted
        if(count(nums.begin(), nums.end(), nums[0]) == n) return n - 1;
        
        int sum = accumulate(nums.begin(), nums.end(), 0);
        int res = 0;
        
        //now the sum of every component has to be same so we can factorize the total sum
        //and check for every possible values
        //For ex: sum = 18
        //18 = 3 * 6
        //check if the graph can be broken on some edges such that there are 3 components with sum 6
        //do the same operation in the flip order i.e check if the graph can be broken into 6 components with sum 3
        //now number of edges deleted = number of components - 1
		//Time Complexity: O(n * sqrt(sum))
        for(int i = 2; i * i <= sum; ++i) {
            if(sum % i == 0) {
                comp = i, val = sum / i;
                dfs(0, -1);
                if(comp == 0) res = max(res, i - 1);
                
                comp = sum / i, val = i;
                dfs(0, -1);
                if(comp == 0) res = max(res, (sum / i) - 1);
            }
        }
        
        return res;
    }
};
```