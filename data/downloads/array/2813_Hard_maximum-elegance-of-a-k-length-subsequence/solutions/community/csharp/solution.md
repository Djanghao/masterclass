# c# sort + replace repeated category item one by one

**Author:** Julian_Meng_Chang
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3900997/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3900997/)

---

# Intuition and Approach
 To get the result , we need try to select item with larger profit. The best situation is items with first largest profile are with different profit.
Then sort the items according to profit.
We start from first k elements, and record all items with repeated category with a Stack. The element with smallest profit will be on the top of the stack, in the later steps, we will replace these items with repeated category one by one with new category in the scan.

for each step, we calculate the elegance, and record the max.
 

 
# Complexity
- Time complexity:
 Sort: O(NlogN)
 

- Space complexity:
 we use a stack and hashset , O(N)

# Code
```
public class Solution {
    public long FindMaximumElegance(int[][] items, int k) {
       var sortedItems = items.OrderBy(item=>-item[0]).ToArray();
        HashSet<int> C = new ();         
        Stack<int> S = new (); /*index of repeated category*/
        long P = 0; 
        for(int i=0; i<k; i++)
        {
            if(C.Contains(sortedItems[i][1]))
            {
               S.Push(i); 
            }
            else
            {
                C.Add(sortedItems[i][1]); 
            }
            P += sortedItems[i][0];
        }
        
        long E = P + (long)C.Count * C.Count;
        //Console.WriteLine($"{C.Count},{P},{E}");
        if(C.Count==k || k== items.Length)
            return E;
        
        int p = k;
        while(S.Count>0 && p<sortedItems.Length)
        {
            if(C.Contains(sortedItems[p][1]))
            {
                p++;
                continue;
            }
            else
            {              
                C.Add(sortedItems[p][1]); 
                int idx = S.Pop();
                P  = P - sortedItems[idx][0] + sortedItems[p][0];
                E = Math.Max(E,P + (long)C.Count * C.Count); 
                p++;
            }
        }
        return E;                              
    }
}
```