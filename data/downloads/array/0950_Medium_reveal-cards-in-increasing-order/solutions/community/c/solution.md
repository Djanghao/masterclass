# C++ 80% with Actual Explanation and Workout...

**Author:** Zachaccino
**Votes:** 52
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/341835/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/341835/)

---

Time Complexity is O(nLogn). Not the fastest but it's at least simple (Relatively)..

Intuition:
What if.... I just build the deck from the back to the front.... so we can reverse the steps that were involved to reveal the card in increasing order. 

Algorithm Description:
1. Sort the deck in increasing order. 
	[17,13,11,2,3,5,7] then become [2,3,5,7,11,13,17]

2. Create a DEQUE data structure so we can efficiently push to the front and pop at the back.

3. To setup the while loop. We need to pop the largest number from deck and insert it to the beginning of the deque before looping. So your memory should looks like below.
	DECK: [2,3,5,7,11,13]
	DEQUE: [17]

4. In each iteration
	(3.1)Store the last element in DEQUE
	(3.2)Pop the last element in DEQUE
	(3.3)Push the stored element to the FRONT of DEQUE
	(3.4)Push the last element from DECK to the FRONT of DEQUE
	(3.5)Pop the last element from DECK.
	
	Initially:
		DECK: [2,3,5,7,11,13]
		DEQUE: [17]
		
	After 3.1 and 3.2:
		DECK: [2,3,5,7,11,13]
		DEQUE: []
		STORED: 17
		
	After 3.3, 3.4 and 3.5:
		DECK: [2,3,5,7,11]
		DEQUE: [13, 17]
		STORED: 
		
5. Repeat Step 4 until no more numbers in the deck.

	After First Iteration...
		DECK: [2,3,5,7,11]
		DEQUE: [13, 17]
	
	After Second Iteration...
		DECK: [2,3,5,7]
		DEQUE: [11,17,13]
	
	After Third Iteration...
		DECK: [2,3,5]
		DEQUE: [7,13,11,17]
	
	After Forth Iteration...
		DECK: [2,3]
		DEQUE: [5,17,7,13,11]
	
	After Fifth Iteration...
		DECK: [2]
		DEQUE: [3,11,5,17,7,13]
	
	After Sixth Iteration...
		DECK: []
		DEQUE: [2,13,3,11,5,17,7]
		
	The End... No more numbers in the deck.
	
		



```
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {
        // Sort by increasing order.
        sort(deck.begin(), deck.end());
        
        // Return the ans if there are max 2 elements since it's already sorted.
        if (deck.size() <= 2)
        {
            return deck;
        }
        
        // For more than 2 elements.
        deque<int> ans;
        ans.push_front(deck.back());
        deck.pop_back();
        
        while (!deck.empty())
        {
            int temp = ans.back();
            ans.pop_back();
            ans.push_front(temp);
            ans.push_front(deck.back());
            deck.pop_back();
        }

        return vector<int>(ans.begin(), ans.end());
    }
};
```