# C++  || Simple Solution  || Tc=O(log(N)) || SC=O(1)

**Author:** Abhishek26149
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/3172058/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/3172058/)

---



# Complexity
- Time complexity:
O(log(N))

- Space complexity:
O(log(N))
# Code
```
class FindElements
{
public:
    TreeNode *root;
    FindElements(TreeNode *root2)
    {
        root = root2;
    }

    bool find(int tar)
    {
        stack<int> st;
        while (tar > 0)
        {
            int x = 0;
            if ((tar & 1) == 1)
            {
                x = 1;
            }
            tar--;
            tar >>= 1;
            st.push(x);
        }
        TreeNode *temp = root;
        while (!st.empty())
        {

            if (st.top() == 1)
            {
                if (temp->left)
                {
                    temp = temp->left;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                if (temp->right)
                {
                    temp = temp->right;
                }
                else
                {
                    return false;
                }
            }
            st.pop();
        }
        return true;
    }
};

```