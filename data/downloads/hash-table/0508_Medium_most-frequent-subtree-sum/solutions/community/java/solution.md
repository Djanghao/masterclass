# [Java] Easy to understand : Postorder & HashMap

**Author:** abhijeetmallick29
**Votes:** 5
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/1339198/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/1339198/)

---

**Runtime: 3 ms, faster than 96.41% of Java online submissions for Most Frequent Subtree Sum.
Memory Usage: 39 MB, less than 95.83% of Java online submissions for Most Frequent Subtree Sum.**
```
class Solution {
    Map<Integer,Integer> map = new HashMap();
    int mostFreq = 0;
    
    public int[] findFrequentTreeSum(TreeNode root) {
        postorder(root);
        
        ArrayList<Integer> temp = new ArrayList();
        for(int i : map.keySet()){
            if(map.get(i) == mostFreq)temp.add(i); 
        }
        
        int []res = new int[temp.size()];
        for(int i = 0;i< temp.size();i++){
            res[i] = temp.get(i);
        }
        return res;
    }
    
    public int postorder(TreeNode root){
        if(root == null)return 0;
        
        int left = postorder(root.left);
        int right = postorder(root.right);      
        int sum = left + right + root.val;
        
        map.put(sum,map.getOrDefault(sum,0) + 1);
        mostFreq = Math.max(mostFreq,map.get(sum));
        
        return sum;
    }
}
```