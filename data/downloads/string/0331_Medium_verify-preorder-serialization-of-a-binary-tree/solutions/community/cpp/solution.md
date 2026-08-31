# Simple C++ solution using stack without extra splitting function

**Author:** xz2210
**Votes:** 19
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/78605/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/78605/)

---

 At first glance, a leaf node's pattern should look like `number,#,#`, start from the beginning of array, once you see this pattern, convert it to a single "#", meaning the node with value `number` has already been fully explored(left subtree, right subtree), so we replace it with a "#". While iterating the array, we just keep doing this kind of absorbing/merging backward until we reach the end of array. Then we check if the root has been fully explored, which should eventually be a single `#`. During absorbing, if this pattern appears `#,#,#`, return false. It's known that it's a pain in C++ that there is no split function as Java does, but it won't matter here since split string is not necessary, we just need to know before `,` it's a `number` or `#`.

"9,3,4,#,#,12,#,#,2,#,6,#,#"

stack status

    char   stack
    '9':   '9'  
    '3':   '3','9'
    '4':   '4','3','9'
    '#':   '#','4','3','9'
    '#':   '#','3','9'
    '12':  'n', '#', '3','9'
    '#':   '#','1', '#', '3','9'
    '#':   '#','3','9' -> '#','9'
    '2':   '2', '#','9'
    '#':   '#', '2', '#','9'
    '6':   '6', '#', '2','#','9'
    '#':   '#', '6', '#', '2','#','9'
    '#':   '#', '2','#','9' -> '#','9' -> '#'

Code:

    class Solution {
    public:
        bool isValidSerialization(string preorder) {
            stack<char> stk;
            bool isNum = false;
            preorder.push_back(','); // dummy tail
            
            for(auto c: preorder){
                if(c == '#'){
                    // absorb: search for pattern `#, number` backward
                    while(!stk.empty() && stk.top() == '#'){ 
                        stk.pop(); // pop `#`
                        if(stk.empty() || stk.top() == '#') return false; // pattern `#,#,#`
                        stk.pop(); // pop `number`
                    }
                    stk.push('#'); // replace `number` with `#` since it has been fully explored/validated
                }else if(c == ','){
                    if(isNum) stk.push('n'); // indicate this is a number instead of using the real number
                    isNum = false;
                }else{
                    isNum = true;
                }
            }
            
            return stk.size() == 1 && stk.top() == '#';
        }
    };