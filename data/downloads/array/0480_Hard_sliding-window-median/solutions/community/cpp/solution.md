# Solution

**Author:** deleted_user
**Votes:** 212
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/3004596/](https://leetcode.com/problems/sliding-window-median/solutions/3004596/)

---

```C++ []
class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
            vector<double> medians;
            unordered_map<int, int> hashTable;
            priority_queue<int> lo;
            priority_queue<int, vector<int>, greater<int>> hi;

            int i = 0;

            while(i < k){
                lo.push(nums[i++]);
            }
            for(int j = 0; j < k / 2; ++j){
                hi.push(lo.top());
                lo.pop();
            }

            while(true){
                medians.push_back(k & 1 ? lo.top() : ((double)lo.top() + (double)hi.top()) * 0.5);

                if(i >= nums.size()) break;

                int outNum = nums[i - k];
                int inNum = nums[i++];
                int balance = 0;

                balance += outNum <= lo.top() ? -1 : 1;
                hashTable[outNum]++;

                if(!lo.empty() && inNum <= lo.top()){
                    balance++;
                    lo.push(inNum);
                }
                else{
                    balance--;
                    hi.push(inNum);
                }

                if(balance < 0){
                    lo.push(hi.top());
                    hi.pop();
                    balance++;
                }
                if(balance > 0){
                    hi.push(lo.top());
                    lo.pop();
                    balance--;
                }

                while(hashTable[lo.top()]){
                    hashTable[lo.top()]--;
                    lo.pop();
                }

                while(!hi.empty() && hashTable[hi.top()]){
                    hashTable[hi.top()]--;
                    hi.pop();
                }
            }
        return medians;
    }
};
```

```Python3 []
class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        if k == 1:
            return nums
        if k == 2:
            return [(p + q) / 2 for p,q in pairwise(nums)]
        kodd = k % 2
        ref = sorted(nums[:k])
        hl = [-x for x in ref[:k//2]]
        hl.reverse()
        hr = ref[k//2:]
        if kodd:
            out = [hr[0]]
        else:
            out = [(hr[0] - hl[0]) / 2]
        hrd = []
        hld = []
        def cleanr():
            while hrd and hrd[0] == hr[0]:
                heappop(hrd)
                heappop(hr)
        def cleanl():
            while hld and hld[0] == hl[0]:
                heappop(hld)
                heappop(hl)
        for idx,x in enumerate(nums[k:]):
            y = nums[idx]
            mid = hr[0]
            if y >= mid:
                if x < mid:
                    x = -heappushpop(hl, -x)
                    cleanl()
                heappush(hr, x)
                heappush(hrd, y)
                cleanr()
            else:
                if x >= mid:
                    x = heappushpop(hr, x)
                    cleanr()
                heappush(hl, -x)
                heappush(hld, -y)
                cleanl()
            if kodd:
                out.append(hr[0])
            else:
                out.append((hr[0] - hl[0]) / 2)
        return out
```

```Java []
class Solution {
    public double[] medianSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0)
            return new double[0];
        
        Node root = null;
        for (int i = 0; i < k; i++) {
            root = insert(root, nums[i]);
        }
        
        double[] r = new double[nums.length - k + 1];
        boolean even = k % 2 == 0;
        int j = 0;
        for (int i = k; i <= nums.length; i++) {
            double sum = 0.0;
            if (even)
                sum = (findSmallest(root, k/2).val + findSmallest(root, k/2 + 1).val) / 2.0;
            else
                sum = findSmallest(root, k/2 + 1).val;
            r[j++] = sum;
            if (i < nums.length) {
                root = insert(root, nums[i]);
                root = delete(root, nums[i - k]);
            }
        }
        
        return r;
    }
    
    private Node findSmallest(Node root, int k) {
        int s = countWith(root.left) + 1;
        if (s == k)
            return root;
        if (s > k) {
            return findSmallest(root.left, k);
        }
        return findSmallest(root.right, k - s);
    } 
  
    private Node delete(Node root, long val) {
        if (root == null)
            return null;
        else if (val > root.val) 
            root.right = delete(root.right, val);
        else if (val < root.val)
            root.left = delete(root.left, val);
        else {
            if (root.left == null)
                root = root.right;
            else if (root.right == null)
                root = root.left;
            else {
                Node t = findMin(root.right);
                root.val = t.val;
                root.right = delete(root.right, t.val);
            }
        }
        
        return updateNode(root);
    }
    
    private Node findMin(Node root) {
        if (root.left != null)
            return findMin(root.left);
        return root;
    }

    private Node insert(Node root, long val)
    {
        if (root == null)
        {
            return new Node(val);
        }
        if (val >= root.val)
        {
            root.right = insert(root.right, val);
        }
        else
        {
            root.left = insert(root.left, val);
        }
       
        return updateNode(root);
    }
    
    private Node updateNode(Node root) {
        int b = balance(root); 		
        if (b == 2 && balance(root.left) < 0)
        {
            root.left = leftRotate(root.left);
            root = rightRotate(root);
        }
        else if (b == -2 && balance(root.right) > 0)
        {
            root.right = rightRotate(root.right);
            root = leftRotate(root);
        }
        else if (b == 2)
        {
            root = rightRotate(root);
        }
        else if (b == -2)
        {
            root = leftRotate(root);
        }
        update(root);
        return root;
    }

    private Node leftRotate(Node n)
    {
        Node r = n.right;
        n.right = r.left;
        r.left = n;
        update(n);
        update(r);
        return r;
    }

    private Node rightRotate(Node n)
    {
        Node l = n.left;
        n.left = l.right;
        l.right = n;
        update(n);
        update(l);
        return l;
    }

    private int balance(Node n)
    {
        if (n==null)return 0;
        return height(n.left) - height(n.right);
    }

    private void update(Node n)
    {
        if (n==null)return;
        n.height = Math.max(height(n.left), height(n.right)) + 1;
        n.count = n.left != null ? n.left.count + 1 : 0;
        n.count += n.right != null ? n.right.count + 1 : 0;
    }

    private int height(Node n)
    {
        return n != null ? n.height : 0;
    }

    private int countWith(Node n)
    {
        return n != null ? n.count + 1 : 0;
    }

    static class Node
    {
        Node left;
        Node right;
        long val;
        int count;
        int height;

        Node(long val)
        {
            this.val = val;
        }
    }
}
```
