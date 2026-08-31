# Simple BFS C++ with Explanation

**Author:** the_struggle_is_real
**Votes:** 8
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/423197/](https://leetcode.com/problems/k-similar-strings/solutions/423197/)

---

Consider two anagrams `A` and `B`. 
The first thing to note is that the minimum number of swaps required in `A` to make it equal to `B`
is the same as the minimum number of swaps in `B` to make it equal to `A`.  

We need to find the smallest possible swaps in `B` to ma eit equal to `A'`. Imagine a graph where each node of the graph is a string and the neighbours of each node are strings which can be obtained with a single swap. If we perform a BFS starting from the original string `B`, we can find the minimum number of swaps required to 'reach' string `A`. Once this idea is clear, the only thing left to do is to implement this BFS algorithm!

```
class Solution {
private:
    int bfs(string &a, string &b)
    {
        if(a == b) return 0;
		// some setup
        int n = b.size(); // number of chars in string
        int ret = 0; // min swaps to be returned
        unordered_set<string> vis; // visted set to prevent searching strings which have already been searched
        queue<pair<string,pair<int,int>>> q; // the frontier for considering new strings in FIFO order
																	 // stores (string, index, swaps)
		
        q.push(make_pair(b,make_pair(0,0))); // push original string  
        vis.insert(b); // mark as visited
        while(!q.empty())
        {
            auto t = q.front();
            q.pop();
			// get node from front of the queue
            string ss = t.first; // string for current node
            int idx = t.second.first, swaps = t.second.second; // idx: all chars before idx are sorted in ss
																						  // swaps: min number of swaps required to
																						  //             get to reach ss
            
			// increment index till we get to the first char that has to be swapped in current node
            while(a[idx] == ss[idx])
            {
                ++idx;
            }
			// find the appropriate character to swap in ss
            for(int i = idx+1; i < n; ++i)
            {
                if(ss[i] == a[idx])
                {
                    ss[i] = ss[idx];
                    ss[idx] = a[idx];
                    // if the node is equal to target string, return number of swaps required to get to this node
                    if(ss == a) return swaps+1;
					// if not already visited push onto the queue, mark visited
                    if(!vis.count(ss))
                    {
                        vis.insert(ss);
                        q.push(make_pair(ss,make_pair(idx+1,swaps+1)));
                    }
                    ss[idx] = ss[i];
                    ss[i] = a[idx];
                }
            }
        }
        return ret;
    }
public:
    int kSimilarity(string a, string b) 
    {
        return bfs(a, b);;
    }
};```