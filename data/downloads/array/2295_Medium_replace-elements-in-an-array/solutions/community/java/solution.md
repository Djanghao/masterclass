# ✅Linear 2 Pass || Intution

**Author:** Rowque
**Votes:** 42
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/2111979/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/2111979/)

---

**Intuition**
    We need record the `index w.r.t to every original value` , for `updating the new values values later in operations at its index stored`.
	**Why??** We can only change the array if we have access to its index. For getting the access so that we can change its place with new value, we need to store index.
    **How??** We will use a data structure which stores key-value pair i.e **MAP**.
    
**Algorithm**:
 + We will simply create a array where we will store the index corresponding to its index.
 + While doing operations , we will just have to access the index of original we stored and replace the new value to its index and update that index correspoding to that new value.

# C++
     vector<int> arrayChange(vector<int>& A, vector<vector<int>>& op) {
        unordered_map<int,int> store;
        for(int i=0;i<A.size();i++) store[A[i]]=i;
        for(auto i:op){
            A[store[i[0]]]= i[1];           //replace value to its index
            store[i[1]]= store[i[0]];       //update new value with its index
        }
        return A;
    } 
	
# Java
    public int[] arrayChange(int[] A, int[][] op) {
        HashMap<Integer,Integer> store= new HashMap<>();
        for(int i=0;i<A.length;i++) store.put(A[i],i);
        for(var i:op){
            A[store.get(i[0])]= i[1];              //replace value to its index
            store.put(i[1],store.get(i[0]));       //update new value with its index
        }
        return A;
    }
Time - O(N)
Space- O(count of unqiue values)