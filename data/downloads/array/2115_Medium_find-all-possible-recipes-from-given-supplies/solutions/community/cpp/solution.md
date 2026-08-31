# C++ | Brute force | Topological sort | Explanation

**Author:** shaashaa
**Votes:** 37
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1646854/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1646854/)

---

**Brute force solution**

(1) Insert all the suplies into a hash map.
(2) We use th existing supplies and create the possible recipes. These recipes are also entered into the has map of available items. 
(3) We will keep iterating over all the recipes, and check if that recipe can be created now with new set of ingrdients we have, if yes, we will add it also to the map , else we move to the next recipe. 
(4) We will keep this process running, until we encounter a stage , when we can no longer create new recipes. This is where we break the while loop
(5) We insert all the created recipes into a vector and return the result. 

```
vector<string> findAllRecipes(vector<string>& recipes, vector<vector<string>>& ingredients, vector<string>& supplies) {

	unordered_map<string,bool> available;
	vector<string> res;
	for(auto str:supplies)
		available[str]=true;
	bool keepCooking=true;
	int n=recipes.size();
	vector<int> created(n,0);
	while(keepCooking)
	{
		keepCooking=false;
		for(int i=0;i<n;i++)
		{
			if(created[i])
				continue;
			int count=ingredients[i].size();
			for(auto &s:ingredients[i])
			{
				if(available.find(s)!=available.end())
					count--;
			}
			if(!count)
			{
				keepCooking=true;
				created[i]=1;
				available[recipes[i]]=true;
				res.push_back(recipes[i]);
			}
		}
	}
  return res;
} 
```



**Using Topological sort**

 The dishes which can be cooked with the available supplies will be cooked first.It means recipes have a dependency on ingredients. 
 
 We can contrsuct a directed graph from ingredients to the recipes. 
 The items present in supplies will have zero indegree (zero incoming edges) as those are already cooked and available for use. 
 
 We insert these items in a queue and then one by one pop those elements out, reducing the indegree of the recipe depedent on that item by 1. 
 
 If we encounter a recipe for which indegree has become zero, it means all supplies required for cooking it has been received it has been cooked and can further be used for preparing other recipes. It is also added in the ans vector. 
 

```
 vector<string> findAllRecipes(vector<string> &recipes, vector<vector<string>> &ingredients, vector<string> &supplies)
    {
        // create Directed graph from ingredients to the recipe and store indegree
       map<string, int> indegree;
       map<string, vector<string>> adj;
        for (int i = 0; i < ingredients.size(); i++)
        {
            for (string ing : ingredients[i])
            {
                adj[ing].push_back(recipes[i]);
                indegree[recipes[i]]++;
            }
        }

        queue<string> q;
        vector<string> ans;
    
        for(string item : supplies)
            if(indegree[item] == 0)
                q.push(item);

        while(!q.empty())
        {
            string item = q.front();
            q.pop();
            for(string recipe : adj[item])
            {
                if(--indegree[recipe] == 0)
                {
                    q.push(recipe);
                     ans.push_back(recipe);
                }
            }
        }
        return ans;
    }

```
