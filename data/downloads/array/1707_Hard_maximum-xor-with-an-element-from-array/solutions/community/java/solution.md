# Java Trie Solution

**Author:** p_unit
**Votes:** 10
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/988230/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/988230/)

---

The Idea is similar to problem https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/

```

class Solution {

    class Trie {
        Trie[] children;
        public Trie() {
            children = new Trie[2];
        }
    }

    Trie root;

    public int[] maximizeXor(int[] nums, int[][] q) {

        int n = nums.length;
        int idx=0;
        root = new Trie();
        int[][] queries = new int[q.length][3];

        for(int i=0;i<q.length;++i){
            queries[i][0] = q[i][0];
            queries[i][1] = q[i][1];
            queries[i][2] = i;
        }

        int[] ans = new int[queries.length];
        Arrays.sort(nums);
        Arrays.sort(queries, (o1, o2) -> o1[1]-o2[1]);


        for(int i=0;i<queries.length;++i){

            while(idx<n && nums[idx]<=queries[i][1]){
                add(nums[idx]);
                idx++;
            }
            if(nums[0]>queries[i][1])
                ans[queries[i][2]] = -1;
            else 
                ans[queries[i][2]] = max_ans(queries[i][0]);
        }

        return ans;

    }

    public void add(int num){
        Trie curNode = root;
        for(int i = 31; i >= 0; i --) {
            int curBit = (num >>> i) & 1;
            if(curNode.children[curBit] == null) {
                curNode.children[curBit] = new Trie();
            }
            curNode = curNode.children[curBit];
        }
    }


    public int max_ans(int num){
        Trie curNode = root;
        int curSum = 0;
        for(int i = 31; i >= 0; i --) {
            int curBit = (num >>> i) & 1;
            if(curNode ==null || curNode.children==null)
                break;
            if(curNode.children[curBit ^ 1] != null) {
                curSum += (1 << i);
                curNode = curNode.children[curBit ^ 1];
            }else {
                curNode = curNode.children[curBit];
            }
        }

        return curSum;
    }
}
```