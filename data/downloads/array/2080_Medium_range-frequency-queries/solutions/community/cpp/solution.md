# Commented Segment tree solution with map | C++

**Author:** lip1107
**Votes:** 5
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/2219145/](https://leetcode.com/problems/range-frequency-queries/solutions/2219145/)

---

**I know this might be the slowest solution out there, but I just wanted to try out a segment tree based approach.**
```
class RangeFreqQuery {
public:
    //define a vector which contains its elements as node and each node contains a map
    //that stores the frequency of each element taking as him the root
    
    
    vector<unordered_map<int, int>> segmentTree;
    int n;
    
    vector<int> nums; //create a vector to make the elements global
    
    RangeFreqQuery(vector<int>& arr) {
        n = arr.size();
        
        segmentTree.resize(4 * n); //segment tree requires at most 4 * n size(check proof: https://www.quora.com/Why-does-4-*-N-space-have-to-be-allocated-for-a-segment-tree-where-N-is-the-size-of-the-original-array)
        
        
        nums = arr;
        
        build(0, 0, n - 1); //it starts building the segment tree
        
    }
    
    int query(int left, int right, int value) {
        
        return queryUtil(0, 0, n - 1, left, right, value); //it calls the queryUtil function
        
    }
    void build(int ind, int left, int right){
        
        //Base case -> if it is the leaf node: put it in the map and increase the count
        
        if(left == right){
            segmentTree[ind][nums[left]]++;
            return;
        }
        int mid = left + (right - left)/2;
        
        build(2 * ind + 1, left, mid); //start building up left subtree
        
        build(2 * ind + 2, mid + 1, right); //start building up right subtree
        
        //Now while backtracking -> add all the element valles of left subtree with right subtree 
        // and store in the map of the current parent node
        
        for(auto &c : segmentTree[2 * ind + 1]){
            segmentTree[ind][c.first] += segmentTree[2 * ind + 1][c.first];

        }
        for(auto &c : segmentTree[2 * ind + 2]){
            segmentTree[ind][c.first] += segmentTree[2 * ind + 2][c.first];
        }
    }
    int queryUtil(int ind, int left, int right, int l, int r, int value){
        //If complete overlap
        
        if(l <= left && r >= right){
            return segmentTree[ind][value];
        }
        //If no overlap
        
        if(r < left || l > right) return 0;
        int mid = left + (right - left)/2;
        
        //If there is some partial overlap
        
        return queryUtil(2 * ind + 1, left, mid, l, r, value) + queryUtil(2 * ind + 2, mid + 1, right, l, r, value);
    }
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * RangeFreqQuery* obj = new RangeFreqQuery(arr);
 * int param_1 = obj->query(left,right,value);
 */
```