# 2 Easy Interview Approaches ✅ || using Dequeue👍 || Without Dequeue 🔥|| C++ || Java || Python

**Author:** naman_malik
**Votes:** 2
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5002682/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5002682/)

---

![Runtime complexity.png](./images/0.png)

# Approach 1
<!-- Describe your approach to solving the problem. -->
using dequeue 

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n) 
for taking dequeue -> O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
      sort(deck.begin(),deck.end());   // Sort the deck in increasing order

      int n=deck.size();

      deque<int>dq;
      vector<int>result(n);

      for(int i=0; i<n; i++)
      {
        dq.push_back(i);  // Initialize deque with indices 0, 1, 2, ..., n-1
      }

      for(int i=0; i<n; i++)
      {
        //perfromed the following steps give in question
        int idx = dq.front();  // Get the next available index
        dq.pop_front();        // Remove the index from the front

        result[idx]=deck[i];    // Place the card in the result array at give index i.e idx
        dq.push_back(dq.front());  //put the next front index in the back of the dequeue
        dq.pop_front();          //and pop it in the front
      }
      
      return result;
        
    }
};
```
```Java []
public class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Arrays.sort(deck); // Sort the deck in increasing order

        int n = deck.length;

        Deque<Integer> dq = new LinkedList<>();
        int[] result = new int[n];

        for (int i = 0; i < n; i++) {
            dq.offer(i); // Initialize deque with indices 0, 1, 2, ..., n-1
        }

        for (int i = 0; i < n; i++) {
            int idx = dq.poll(); // Get the next available index
            result[idx] = deck[i]; // Place the card in the result array at the given index (idx)
            dq.offer(dq.poll()); // Put the next front index in the back of the dequeue
        }

        return result;
    }
}
```
```Python []
class Solution(object):
    def deckRevealedIncreasing(self, deck):
        deck.sort()  # Sort the deck in increasing order

        n = len(deck)

        dq = deque()
        result = [0] * n

        for i in range(n):
            dq.append(i)  # Initialize deque with indices 0, 1, 2, ..., n-1

        for i in range(n):
            idx = dq.popleft() if dq else None  # Get the next available index if the deque is not empty
            if idx is not None:
                result[idx] = deck[i]  # Place the card in the result array at the given index (idx)
                if dq:  # Check if the deque is not empty
                    dq.append(dq.popleft())  # Put the next front index in the back of the dequeue

        return result

```


# Approach 2
<!-- Describe your approach to solving the problem. -->
Better Approach (without dequeue) 

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
      sort(deck.begin(),deck.end());

        int i = 0; // Index for deck array
        int j = 0; // Index for result array
        int n = deck.size(); // Size of the deck array
        bool flip = true; // A flag to indicate whether to flip or not

      vector<int>result(n,0);

      while(i<n) // Iterate through the deck and assign values to the result vector
      {
        if(result[j]==0) // If the current position in the result vector is empty
        {
            if(flip==true)  // If flip is true, assign the value from the sorted deck to the result
            {
                result[j]=deck[i];
                i++;       // Move to the next value in the sorted deck
            }
            flip = !flip; // Flip the flag for the next iteration
        }
        j=(j+1)%n;  // Move to next position in the result vector (circular manner)
      }
      
      return result; // Return resultant vector
        
    }
};
```
```Java []
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        Arrays.sort(deck);

        int i = 0; // Index for deck array
        int j = 0; // Index for result array
        int n = deck.length; // Size of the deck array
        boolean flip = true; // A flag to indicate whether to flip or not

        int[] result = new int[n];

       while(i<n) // Iterate through the deck and assign values to the result vector
      {
        if(result[j]==0) // If the current position in the result vector is empty
        {
            if(flip==true)  // If flip is true, assign the value from the sorted deck to the result
            {
                result[j]=deck[i];
                i++;       // Move to the next value in the sorted deck
            }
            flip = !flip; // Flip the flag for the next iteration
        }
        j=(j+1)%n;  // Move to next position in the result vector (circular manner)
      }
      
      return result; // Return resultant vector
    }
}
```
```Python []
class Solution(object):
    def deckRevealedIncreasing(self, deck):
        deck.sort()

        i = 0  # Index for deck array
        j = 0  # Index for result array
        n = len(deck)  # Size of the deck array
        flip = True  # A flag to indicate whether to flip or not

        result = [0] * n

        while i < n:
            if result[j] == 0:
                if flip:
                    result[j] = deck[i]
                    i += 1
                flip = not flip
            j = (j + 1) % n

        return result
```
![upvote cat2.png](./images/1.png)


