# [Java:1ms]  O(m * log(n+m)) solution, Binary Indexed Tree with little explanation

**Author:** vot-developer
**Votes:** 7
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/1148357/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/1148357/)

---

Naive solution through LinkedList - O(n*m) : 
```
class Solution {
    public int[] processQueries(int[] queries, int m) {
        int[] ans = new int[queries.length];
        int k = 0;
        LinkedList<Integer> perm = new LinkedList<>();
        for (int i = 1; i <= m; i++)
            perm.addLast(i);

        for (int q : queries){
            Iterator<Integer> it = perm.iterator();
            int step = 0;
            while (it.hasNext()){
                Integer value = it.next();
                if (value == q){
                    ans[k++] = step;
                    it.remove();
                    perm.addFirst(value);
                    break;
                }                
                step++;
            }
        }
        return ans;
    }
} 
```

First of all for finding log n solution, you could think the good idea will be use a RedBlackBST and remove/add front element, like [here](https://github.com/vot-developer/sedgewick-algorithms-coursera/blob/main/src/main/java/org/sedgewick/algorithms/part_two/week_five/question_six/MoveToFrontCoding.java)
but we have a some problem with ready-made implementation RedBlackBST with rank() function in Java, especcially with O(log n). Main principle the same with RedBlackBST solution - reserve some place for moving number on the front.

BIT (Binary Indexed Tree/Fenwick tree) - is a terrific alternative for that issue with simple implementation. BIT gives you an opportunity to insert number in O(log n) and calculate prefix sum for element in O(log n). 
In this example, prefix sum will be just a position. Each element will insert in BIT with the value '1'. '1' is a contribution of inserted element in the prefix sum of position. For remove contribution of an element and remove element we will insert element again with value '-1'.
```
class Solution {
//time - O(n * log(m+n)), space - O(m+n)
    public int[] processQueries(int[] queries, int m) {
        int n = queries.length;
        int[] ans = new int[n];
        int[] indexes = new int[m + 1];
        BIT bit = new BIT(n + m + 1); //reserve place for n moves
        for (int i = 1; i <= m; i++) { //initial state
            indexes[i] = n + i; //save index for number. Index will change after moving number
            bit.insert(indexes[i], 1); //new number's adding prefix one (one position)
        }
        for (int i = 0; i < queries.length; i++){
            int index = indexes[queries[i]];
            indexes[queries[i]] = n - i; //save new index
            ans[i] = bit.getPrefix(index);
            bit.insert(index, -1); // remove number from BIT by prev index (position contribution of this number)
            bit.insert(indexes[queries[i]], 1); //add number on first place with new index
        }
        return ans;
    }
    
    class BIT {
        private final int arr[];
        public BIT(int capacity) {
            this.arr = new int[capacity];
        }

        public void insert(int i, int value) {
            for (; i < arr.length; i += i & -i)
                arr[i] += value;
        }

        public int getPrefix(int i) {
            int sum = 0;
            i--; //don't calculate current step contribution
            for (; i > 0; i -= i & -i)
                sum += arr[i];
            return sum; 
        }
    }
} 
```
