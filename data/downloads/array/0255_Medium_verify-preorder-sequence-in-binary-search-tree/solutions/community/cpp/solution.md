# C++ easy to understand solution with thought process and detailed explanation

**Author:** xz2210
**Votes:** 134
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/68185/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/68185/)

---

**THOUGHT**: We first look at the property of preorder traversal: we print left child\u2019s value of current node all the way until we reached a leaf node (you will see numbers decreasing), then we start printing the value of a node (let it be rc) which is the right child of one of the nodes (let it be node p) we already traversed. When do you know it's a right child node's value? It's when you see a value greater than the last one. Also,till here we know, all the nodes in p\u2019s left subtree have been read in the serialized array, and this property is maintained: 

    left subtree \u2018s value < p \u2019s value < rc\u2019s value

Since all the nodes whose value is smaller than p are already read, all the nodes\u2019 value to be read after should have greater value than p\u2019s value, so p\u2019s value becomes the **lower bound** for any upcoming node.

    p \u2019s value < upcoming value in array

Otherwise, it\u2019s not valid. **So the key here is to find the lower bound for upcoming nodes, which equals to find p.** 

To translate this into code: looking for the trend of numbers, if it\u2019s decreasing, it\u2019s still traversing the left child node all the way down, we push the value into stack. When we read a value greater than the last one, we know the current value belongs to a right node (let it be rc: right child) of one of the previous nodes (let it be p) we pushed to stack, in other words, p is a parent node of the current node rc. Due to the property of preorder traversal, p\u2019s value is pushed to stack before its left subtree nodes, so to find the parent node, we pop all the nodes in its left subtree, and the last popped node whose value is smaller than rc is rc\u2019s parent p, whose value becomes the lower bound. Then we keep reading the serialized array, in any case we see any value not greater than the lower bound, we return false. Lower bound is updated whenever we read a right child node\u2019s value.

    class Solution {
    public:
        bool verifyPreorder(vector<int>& preorder) {
            stack<int> stk;
            int lower_bound = INT_MIN;
            for(int i = 0; i < preorder.size(); i++){
                if(stk.empty() || preorder[i] < preorder[i - 1]){
                    if(preorder[i] <= lower_bound) return false;
                    stk.push(preorder[i]);
                }else{
                    while(!stk.empty() && stk.top() < preorder[i]){
                        lower_bound = stk.top();
                        stk.pop();
                    }
                    stk.push(preorder[i]);
                }
            }
            
            return true;
        }
    };


Using this [image][1] as an example:

    Push 50
    Push 17 
    Push 9
    (read 14, 14 > 9)
    Pop 9 (lower bound = 9)
    Push 14
    Push 12
    (read 23, 23 > 12)
    Pop 12
    Pop 14
    Pop 17 (lower bound = 17)
    Push 23
    (read 76, 76 > 23)
    Pop 23
    Pop 50 (lowerbound = 50)
    Push 76
    Push 54
    (read 72, 72 > 54)
    Pop 54 (lower bound = 54)
    Push 72
    Push 67


  [1]: https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree#/media/File:Unbalanced_binary_tree.svg