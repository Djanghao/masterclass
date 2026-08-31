# C# - PriorityQueue, dynamic approach to fill the XOR table. Time Complexity - beats 100% ✅

**Author:** onskydeep
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/3907518/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/3907518/)

---

# Intuition
Doing that kind of problems always motivated me to use the PriorityQueue, instead of sorting the whole data, we just need topmost several(in this case k) elements, which is surely reducing time and memory.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Firstly we need to calculate the each value for every coordinate properly. I came up with the dynamic method and filled xor table. Then I have used min heap(PriorityQueue) to have k largest values of the xor table at every moment. After filling iterating over the whole table, we can return the first element of the queue, which will be the kth largest, indeed.    
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nmlogk)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(nm)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int KthLargestValue(int[][] matrix, int k) {
        int[][] xorValue= new int[matrix.Length][];
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>();

        for(int i = 0; i < matrix.Length; i++)
            xorValue[i] = new int[matrix[0].Length];
        
        int cnt = 0;

        for(int i = 0; i < matrix.Length; i++){
            int thisRowXor = 0;
            for(int j = 0; j < matrix[0].Length; j++){
                thisRowXor = thisRowXor ^ matrix[i][j];
                if(i == 0)
                    xorValue[i][j] = thisRowXor;
                else
                    xorValue[i][j] = thisRowXor ^ xorValue[i - 1][j];     
            
                if (cnt < k){
                    pq.Enqueue(xorValue[i][j], xorValue[i][j]);
                    cnt++;
                }

                else{
                    if(xorValue[i][j] > pq.Peek()){
                        pq.Dequeue();
                        pq.Enqueue(xorValue[i][j], xorValue[i][j]);
                    }
                }
            }    
        }

        return pq.Peek();
    }
}
```