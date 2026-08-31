# c#

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/5374105/](https://leetcode.com/problems/range-sum-query-mutable/solutions/5374105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class NumArray {
    int[] Tree;
    int[] nums;
    public NumArray(int[] ns) {
        nums = ns;
        int n = nums.Length;
        Tree = new int[4*n+1];
        BuildTree(1, 0, n-1); 
    }
    
    public void Update(int index, int val) {
        Update(index, val, 0,nums.Length-1 , 1);
    }
    
    public int SumRange(int left, int right) {
        return Query(left, right, 0, nums.Length-1, 1);
    }

    private int BuildTree(int node, int left, int right)
    {
        if(left==right)
        {
            Tree[node] = nums[left];
        }
        else if(left>right)
            Tree[node] = 0;
        else
        {
        int m = left + (right-left)/2;
        Tree[node] = BuildTree(2*node,left,m) + BuildTree(2*node+1, m+1,right);
        }
        return Tree[node];
    }

    private int Update( int index, int val, int left, int right, int node)
    {
        if(left==right) 
        {
            Tree[node] = val;
        }
        else if(left>right)
        {
             Tree[node] = 0;
        }
        else
        {
            int m = left + (right-left) /2;
            if(m<index)
                Tree[node] = Tree[2*node] + Update(index, val, m+1,right,2*node+1);
            else
                Tree[node] = Tree[2*node + 1] + Update(index, val, left,m,2*node); 
        }
        return Tree[node];
    }
    private int Query(int ql, int qr, int l, int r, int node) 
    {
        if(ql<=l && qr>=r) return Tree[node];
        int m = l + (r-l)/2;
        if(qr<=m)
            return Query(ql,qr,l,m,node*2);
        else if(ql>m)
            return Query(ql,qr,m+1,r,node*2+1);
        else
        {
            return Query(ql, qr, l, m, 2*node) + Query(ql, qr,m+1, r, 2*node + 1) ;
        } 
    } 
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.Update(index,val);
 * int param_2 = obj.SumRange(left,right);
 */
```