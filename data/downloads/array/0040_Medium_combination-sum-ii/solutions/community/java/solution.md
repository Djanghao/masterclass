# Combination Sum I, II and III Java solution (see the similarities yourself)

**Author:** issac3
**Votes:** 318
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/16878/](https://leetcode.com/problems/combination-sum-ii/solutions/16878/)

---

Combination Sum I

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(list, new ArrayList<Integer>(), candidates, target, 0);
        return list;
    }

    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] cand, int remain, int start) {
        if (remain < 0) return; /** no solution */
        else if (remain == 0) list.add(new ArrayList<>(tempList));
        else{
            for (int i = start; i < cand.length; i++) { 
                tempList.add(cand[i]);
                backtrack(list, tempList, cand, remain-cand[i], i);
                tempList.remove(tempList.size()-1);
            } 
        }

    }

Combination Sum II

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
       List<List<Integer>> list = new LinkedList<List<Integer>>();
       Arrays.sort(candidates);
       backtrack(list, new ArrayList<Integer>(), candidates, target, 0);
       return list;
    }
    
    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] cand, int remain, int start) {
       
       if(remain < 0) return; /** no solution */
       else if(remain == 0) list.add(new ArrayList<>(tempList));
       else{
          for (int i = start; i < cand.length; i++) {
             if(i > start && cand[i] == cand[i-1]) continue; /** skip duplicates */
             tempList.add(cand[i]);
             backtrack(list, tempList, cand, remain - cand[i], i+1);
             tempList.remove(tempList.size() - 1);
          }
       }
    }

Combination Sum III

    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> list = new ArrayList<>();
        backtrack(list, new ArrayList<Integer>(), k, n, 1);
        return list;
    }
    
    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int k, int remain, int start) {
        if(tempList.size() > k) return; /** no solution */
        else if(tempList.size() == k && remain == 0) list.add(new ArrayList<>(tempList));
        else{
            for (int i = start; i <= 9; i++) {
                tempList.add(i);
                backtrack(list, tempList, k, remain-i, i+1);
                tempList.remove(tempList.size() - 1);
            }
        }
    }