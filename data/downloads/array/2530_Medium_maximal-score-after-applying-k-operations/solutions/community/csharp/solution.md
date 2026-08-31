# pop biggest, do ops, put back ceil value into PriorityQueue , with added youtube video

**Author:** vinod_aka_veenu
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909611/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5909611/)

---

# Youtube Solution https://youtu.be/hQELnfgki-o
# Intuition and approach
as we need highest score ==> we need to pick biggest element.

**step1:**- to pick biggest element store numbers in MaxHeap.
lets say we stored in PriorityQueue pq ==> {20, 10, 5} , k =3

WHILE(k>0)
int x = pq.pop();
**score += x ==> 0 + 20 = 20**
**add divided value back to pq ==> ceil(x/3.0)** => ceil(20/3.0) = > 7.0 
k--; ==> k = 3-1 = 2
pq ==> **{10, 7, 5}**   

repeat it similarly till k>0 

score = 20 + 10 = 30 , pq = {7, 5, 4}, k = 1
score = 20 + 10 + 7 , pq = {5, 4, 2} k = 0
finally score = 37 

Time complexity :- O(n Log n)


# Code
```java []
class Solution {
    public long maxKelements(int[] nums, int k) {
    PriorityQueue<Integer>pq = new PriorityQueue<>((a, b)->b-a);
    for(int x : nums)
    pq.offer(x);
    long score = 0; 
    while(!pq.isEmpty() && k>0)
    {
      score +=pq.peek();
      int x = (int)Math.ceil(pq.poll()/3.0);
      pq.add(x);
      k--;
    }
     return score;
    }
}
```
```C# []
public class Solution {
    public long MaxKelements(int[] nums, int k) {
    
        // Create a max heap using a priority queue
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>(Comparer<int>.Create((a, b) => b - a));
        
        // Add elements to the priority queue
        foreach (int x in nums)
        {
            pq.Enqueue(x, x);
        }
        
        long score = 0;
        
        // Process the queue while there are elements and k is greater than 0
        while (pq.Count > 0 && k > 0)
        {
            int x = pq.Dequeue();
            score += x;
            
            // Add the next element as the ceiling of x/3
            int newElement = (int)Math.Ceiling(x / 3.0);
            pq.Enqueue(newElement, newElement);
            
            k--;
        }
        
        return score;

    
    }
}
```
```C++ []
class Solution {
public:
    long long maxKelements(std::vector<int>& nums, int k) {
        // Create a max heap using priority_queue
        std::priority_queue<int> pq;
        
        // Add elements to the priority queue
        for (int x : nums) {
            pq.push(x);
        }
        
        long long score = 0;
        
        // Process the queue while there are elements and k is greater than 0
        while (!pq.empty() && k > 0) {
            int x = pq.top();
            pq.pop();
            score += x;
            
            // Add the next element as the ceiling of x/3
            int newElement = static_cast<int>(std::ceil(x / 3.0));
            pq.push(newElement);
            
            k--;
        }
        
        return score;
    }
};

```
``` []
puts 'Hello world!'
```
