# C++ one pass solution with explanation and comments

**Author:** yangluphil
**Votes:** 5
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/92600/](https://leetcode.com/problems/sequence-reconstruction/solutions/92600/)

---

The idea is to build the graph and keep track of in-degrees of all the graph nodes. If the original sequence can be uniquely reconstructed, then we should be able to traverse each node in the graph in a deterministic fashion (instead of having to do a graph search):

* There should be exactly one node with 0 in-degree, org[0], and this is the starting point to visit.
* When visiting node i, for each directed edge (i, j), we reduce j's in-degree by 1. This effectively removes node i from the graph. If j's in-degree becomes 0, then j is the next node to visit. 
    * However, if there are more than one nodes with 0 in-degree, we should return false, because there is not an order dependency between these 0-in-degree nodes and therefore the original sequence cannot be uniquely reconstructed. 
    * Similarly, if there is no such j, then either we reach the end or we are stuck. We will look at how many nodes we have visited to determine which is the case.

* Nodes are integers from 1 to n. So to avoid MLE, we can use vectors instead of hashmaps to keep track of the states without sacrificing lookup time.
* This algorithm can also determine if ```seqs``` uniquely identifies an original sequence, even if ```org``` is not given.

```
    bool sequenceReconstruction(vector<int>& org, vector<vector<int>>& seqs) {
    	if (seqs.empty())
    	    return false;
        int n = org.size();
        vector<int> inDegreeOf(n+1, 0);
        vector<set<int>> childrenOf(n+1);

        for (auto seq : seqs) {
            for (int i = 0; i < seq.size(); i++) {
                /// check if a node is out of range
        	if (seq[i] < 1 || seq[i] > n)
           	    return false;
                // each pair of consecutive numbers give us an order dependency, represented by a directed edge in the graph
        	if (i > 0 && childrenOf[seq[i-1]].find(seq[i]) == childrenOf[seq[i-1]].end()) {
	    	    childrenOf[seq[i-1]].insert(seq[i]);
		    inDegreeOf[seq[i]]++;
		}
            }
        }

        // cur should have 0 in-degree, and we want to make sure we always have exactly one child to visit
        int cur = org[0], countToVisit = 1;
	if (inDegreeOf[cur] != 0)
	    return false;

        while (countToVisit == 1) {
            countToVisit = 0;
            set<int> children = childrenOf[cur];
            for (auto child : children) {
                // removing cur from the graph, and determine the next node to visit
        	inDegreeOf[child]--;
        	if (inDegreeOf[child] == 0) {
           	    countToVisit++;
        	    cur = child;
        	}
            }
            n--;
        }
        // if we break out of the loop early, n > 0; if there is an edge from end node to another node, then n < 0
        // return true only if n==0
        return n == 0;
    }
```