# C#| greedy and Min Priority Queue

**Author:** shwetaja
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/5212673/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/5212673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n*log(n))

- Space complexity:
O(n)

# Code
```
public class Solution 
    {
        public int EatenApples(int[] apples, int[] days) 
        {
            PriorityQueue<(int,int),int> pq=new PriorityQueue<(int,int),int>();
            int ans=0;
            int n=apples.Length;
            
            for(int i=0;i<n || pq.Count>0;i++)    
            {
                int expiry=0;

                //Store new batch of apples in P.Q. if current day<n
                if(i<n && apples[i]>0)
                {
                    expiry=i+days[i];
                    pq.Enqueue((apples[i],expiry),expiry);
                }

                //Access the earliest expiry date slot from PQ.
                //This is necessary because, we want to choose one apple among
                //apples in old batches +apples in new batch.
                //How to decide which apple to choose?
                
                //We will use greedy approach here because we want to eat
                //maximum apples.
                //We decide which apple to choose based on expiry date of batches.
                
                //Select the batch with earliest expiry.So that we can eat those
                //apples which are going to be rotten first.
                
                
                while(pq.Count>0 && pq.Peek().Item2<=i)
                {
                    //Remove already rotten batch of apples.
                    pq.Dequeue();
                }
                
                //Now, eat the apple for the day
                if(pq.Count>0)
                {
                    int qty=pq.Peek().Item1;
                    int exp=pq.Peek().Item2;

                    pq.Dequeue();
                    
                    //We have eaten the apple.
                    //So, decrement the quantity.
                    //Increment the ans
                    qty=qty-1;
                    ans++;

                    //Store the modified batch again in the PQ.
                    if(qty>0)
                    {
                        pq.Enqueue((qty,exp),exp);
                    }
                }
            }
            return ans;
    }
}
```