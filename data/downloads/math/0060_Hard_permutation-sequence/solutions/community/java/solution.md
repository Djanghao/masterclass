# An iterative solution for reference

**Author:** Adeath
**Votes:** 135
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/22508/](https://leetcode.com/problems/permutation-sequence/solutions/22508/)

---

Recursion will use more memory, while this problem can be solved by iteration. I solved this problem before, but I didn't realize that using k = k-1 would avoid dealing with case k%(n-1)!==0. Rewrote this code, should be pretty concise now. 

Only thing is that I have to use a list to store the remaining numbers, neither linkedlist nor arraylist are very efficient, anyone has a better idea?

The logic is as follows: for n numbers the permutations can be divided to (n-1)! groups, for n-1 numbers can be divided to (n-2)! groups, and so on. Thus k/(n-1)! indicates the index of current number, and k%(n-1)! denotes remaining index for the remaining n-1 numbers.
We keep doing this until n reaches 0, then we get n numbers permutations that is kth. 

    public String getPermutation(int n, int k) {
            List<Integer> num = new LinkedList<Integer>();
            for (int i = 1; i <= n; i++) num.add(i);
            int[] fact = new int[n];  // factorial
            fact[0] = 1;
            for (int i = 1; i < n; i++) fact[i] = i*fact[i-1];
            k = k-1;
            StringBuilder sb = new StringBuilder();
            for (int i = n; i > 0; i--){
                int ind = k/fact[i-1];
                k = k%fact[i-1];
                sb.append(num.get(ind));
                num.remove(ind);
            }
            return sb.toString();
        }