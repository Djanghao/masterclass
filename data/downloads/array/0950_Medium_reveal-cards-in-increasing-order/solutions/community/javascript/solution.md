# Beats 94% 🔥|| Easy Approach ✅ Using Deque🚀with Explanation🔥

**Author:** 21eca01
**Votes:** 38
**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001220/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solutions/5001220/)

---

**Question:
So the question says i will do a certain operation while i am picking the elements from the array and when the operations are over the cards in my hand should be of sorted order.**

**the pattern:
1.Take the top card of the deck, reveal it, and take it out of the deck.**

**2.If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.**

**3.Repeat step 1.**

**so how can we approach this we can either go recursivey to find the soln. or can make the soln ourselves from base.**


## Approach 1: (Using Dequeue)
**let us take one example first to better understand the pattern.
Example 1:**

**Input: deck = [17,13,11,2,3,5,7]
Output: [2,13,3,11,5,17,7]
Explanation: 
We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
1.Take 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].2.Take 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
3.Take 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
4.Take 7, and move 13 to the bottom.  The deck is now [11,17,13].
5.Take 11, and move 17 to the bottom.  The deck is now [13,17].
6.Take 13, and move 17 to the bottom.  The deck is now [17].
7.Take 17. as there are no elements left break the loop.**

**Consider building the array and analyzing from below you can see the gist of the soln:**

**ex. on step 4. we can see that before 11 is added the last element 17 was move to the first and then 11 is added.
thus this pattern continues further**

**we can see that the whenever a element is added in the front the last element is popped and brought to the first of the queue and then the ordered element is added right.**


**so we can achieve this via deque. if a element is present we just have to pop the element and add it to the first and then add the element to the array.**

**Thats it you have your soln. Give it a go yourself guys!! before seeing soln..**

# Code
``` Java []
class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
        int n=deck.length;
        Arrays.sort(deck);
        Deque <Integer> st=new ArrayDeque<>();
        st.addFirst(deck[n-1]);
        for(int i=n-2;i>=0;i--){
            st.addFirst(st.removeLast());
            st.addFirst(deck[i]);
        }
        //we can either create a new array or change the existing since we dont need it right??but it is not recommended 

        for(int i=0;i<n;i++){
            deck[i]=(int)st.removeFirst();
        }
        return deck;
    }
}
```
``` Python3 []
from collections import deque

class Solution:
    def deckRevealedIncreasing(self, deck):
        n = len(deck)
        deck.sort()
        st = deque()
        st.append(deck[n - 1])
        for i in range(n - 2, -1, -1):
            st.appendleft(st.pop())
            st.appendleft(deck[i])
        revealed = []
        while st:
            revealed.append(st.popleft())
        return revealed

```

``` C++ []
class Solution {
public:
    vector<int> deckRevealedIncreasing(vector<int>& deck) {

        int n = deck.size();
        std::sort(deck.begin(), deck.end());
        std::deque<int> st;
        st.push_front(deck[n - 1]);
        for (int i = n - 2; i >= 0; i--) {
            st.push_front(st.back());
            st.pop_back();
            st.push_front(deck[i]);
        }
        std::vector<int> revealed;
        for (int i = 0; i < n; i++) {
            revealed.push_back(st.front());
            st.pop_front();
        }
        return revealed;
    }
};

```
``` JavaScript []
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    
    const n = deck.length;
    deck.sort((a, b) => a - b);
    const revealed = [];
    revealed.unshift(deck[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        revealed.unshift(revealed.pop());
        revealed.unshift(deck[i]);
    }
    return revealed;
};

```
# If this was helpful Please upvote!!