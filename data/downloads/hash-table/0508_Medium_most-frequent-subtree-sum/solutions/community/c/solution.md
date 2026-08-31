# C++ | DFS Simple Solution | Hash-Maps | Recursive O(N)

**Author:** dhairyabahl
**Votes:** 12
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/1323692/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/1323692/)

---

**Approach :** In this approach, I used Hash-Map ( unordered ) . Logic of this solution is we will be finding subtree sum at all nodes of the tree and at the same time we will also do two other tasks :



1 )  First is to simultaneously put these values in hash-map with frequency as the value and sum of a node as the key.

2 ) Second we will also keep track of maximum frequency in the hash-map just by putting an if-else check in recursion.



Then, in the main function, we simply have to return array of those sum values which are having max frequency.

PS : Even after implementing hash-maps, this code is not showing 0ms in cpp maybe due to some glitch in leetcode or due to some network glitch from my side but I think that this is the best possible solution. Feel free to give suggestions in comments if you have better approach. 

Thanks for Reading 

```
class Solution {
public:
    
    int findSubtreeSum(TreeNode* root, unordered_map<int,int> &map,int &maxFrequency){
        
       if(root == NULL)
           return 0;
        
        int left = findSubtreeSum(root->left,map,maxFrequency);
        int right = findSubtreeSum(root->right,map,maxFrequency);
        
        int currSubTreeSum = left + right + root->val;
        
        map[currSubTreeSum] += 1 ;
        
        if(map[currSubTreeSum]>maxFrequency)
            maxFrequency = map[currSubTreeSum];
        
        return currSubTreeSum;
        
    }
    
    vector<int> findFrequentTreeSum(TreeNode* root) {
        
        unordered_map<int,int>map;
        
        int maxFrequency = 0 ;
        
        findSubtreeSum(root,map,maxFrequency);
        
        vector<int>result;
        
        for(auto element : map)
            if(element.second == maxFrequency)
                result.push_back(element.first);
        
        return result;
    }
};
```