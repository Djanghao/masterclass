# C++ Solution with Intuition and Explanation

**Author:** sajals5031
**Votes:** 105
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/1283088/](https://leetcode.com/problems/shuffle-an-array/solutions/1283088/)

---

## Motive
Our motive in this question is to find a random permutation of an array on demand. Now this random permutation should be trully random with a uniform probability distribution.
In other words, for any call to shuffle(), all permutations of the array should have equal probability of being returned.

Let's try doing it by hand. We take the elements of the array in a bag and shuffle them, then for each position in the shuffled array, we draw one element from the bag, and put that element in that position, and so on, until the bag is empty.
We can simulate this exact process in our code by maintaining a copy of the original array and generating a random index of the array to put at each index.

But the problem arises in the exclusion of the selected elements from the bag. We could do a normal array delete (or shift) and that would cost us O(n) in the worst case, making our time complexity O(n<sup>2</sup>), but we can do better.
<br />

## Approach
The bottleneck that's causing us all this trouble is, ironically the bag itself. So why not, merge it with something else we are storing, such that it can be updated easily?
We maintain two parts of the array, the already-shuffled part, and the unshuffled part. The unshuffled part is at the beginning of the array, and the shuffled part is built from the last element onwards. At every iteration, we draw an element from the unshuffled part and swap it with the current element, effectively removing the drawn element and adding the replaced element to the bag. Then we reduce the size of the bag to account for the reduction in size of the unshuffled part. 
Continuing in this way, we generate the whole shuffled array and then return it.
<br/>

## Proof of Randomness
Now, how do we prove that this is indeed a random draw from all the possible permutations of the array, and not from a subset?

Let's see it this way,
The probability for a particular element to be selected as the ith element is 1/i (as we randomly draw a number from i elements). Thus, for a particular element, the probability of it being at the nth position in the array is 1/n. (where n is the size of the array). i.e ```P(n) = 1/n```

What about the probability of it being at the (n-1)th position? 
For it to be in the (n-1)th position, it needs to be rejected at the nth position and then accepted at the (n-1)th position.
Thus P(n-1) = ((n-1)/n) * (1/n-1) , or ```P(n-1) = 1/n```

In this way, we can prove that ```P(i) = 1/n``` for all 1 <= i <= n (1-indexed position), which in turn, means that every permutation of the array is equally likely.
<br/>


## Code 
```
class Solution {
	vector<int> original;
	int n;
public:

	Solution(vector<int>& nums) {
		original = nums;
		n = original.size();
	}
	
	vector<int> reset() {
		return original;
	}
	
	vector<int> shuffle() {
			//make a copy of the original
			vector<int> shuffled = original;
			
			int leftSize = n;
			for(int i = n-1; i>=0; i--) {
				//draw from the bag
				int j = rand()%leftSize;
				
				//put this element at current position
				//and put the original element in the bag
				swap(shuffled[i], shuffled[j]);
				leftSize--;
			}
			return shuffled;
	}
	
};
```
<br/>

## Fancy Words
Both the methods described above are called Fisher Yates Algorithm for random shuffling, with the second one being optimised for O(n) performance.

**Time: O(n)** as we traverse the array only once
**Space: O(1)** if we don't consider the return array as extra space. Otherwise O(n).

<br/>

**Upvote** if you liked this post and learned something from it, and feel free to ask any doubts or suggest any corrections/improvements in the comments.